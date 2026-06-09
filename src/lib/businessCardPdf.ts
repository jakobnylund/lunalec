import { jsPDF } from "jspdf";
import { svg2pdf } from "svg2pdf.js";

export interface CardData {
  name: string;
  title: string;
  company: string;
  address: string;
  phone: string;
  email: string;
  web: string;
}

// ── Geometry (millimetres) ──────────────────────────────────────────────
const TRIM_W = 85;
const TRIM_H = 55;
const BLEED = 3;
const PAGE_W = TRIM_W + BLEED * 2; // 91
const PAGE_H = TRIM_H + BLEED * 2; // 61
const SAFE = 4; // safe margin inside the trim edge
const MARK_LEN = BLEED; // crop-mark length

// ── Brand colours (fixed for print, independent of the live accent) ──────
const DARK: [number, number, number] = [5, 5, 5];
const WHITE: [number, number, number] = [255, 255, 255];
const TITLE_GRAY: [number, number, number] = [168, 168, 168]; // title under the name
const LABEL: [number, number, number] = [138, 138, 138]; // muted uppercase labels

// jsPDF font family registered below
const SANS = "Geist";

// ── Helpers ──────────────────────────────────────────────────────────────

/** trim-space → page-space (account for bleed offset) */
const px = (x: number) => x + BLEED;
const py = (y: number) => y + BLEED;

function bufferToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

// VFS is per-document, so fonts must be re-registered on each doc — but the
// base64 payloads are fetched once and cached here.
const FONT_SPECS: [string, string, string, string][] = [
  ["/fonts/Geist-Regular.ttf", "Geist-Regular.ttf", SANS, "normal"],
  ["/fonts/Geist-Medium.ttf", "Geist-Medium.ttf", SANS, "bold"],
];
const fontCache = new Map<string, string>();

async function registerFonts(doc: jsPDF): Promise<boolean> {
  try {
    for (const [url, vfs, family, style] of FONT_SPECS) {
      let b64 = fontCache.get(url);
      if (!b64) {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`font ${url} → ${res.status}`);
        b64 = bufferToBase64(await res.arrayBuffer());
        fontCache.set(url, b64);
      }
      doc.addFileToVFS(vfs, b64);
      doc.addFont(vfs, family, style);
    }
    return true;
  } catch (err) {
    console.warn("Geist fonts unavailable, falling back to Helvetica", err);
    return false;
  }
}

async function loadLogo(): Promise<SVGElement | null> {
  try {
    const res = await fetch("/lunalec-white.svg");
    if (!res.ok) return null;
    const text = await res.text();
    const el = new DOMParser().parseFromString(text, "image/svg+xml")
      .documentElement as unknown as SVGElement;
    // svg2pdf has limited CSS support; the source colours the mark via a
    // `<style>` class. Force white fills directly so the logo can't render
    // black (invisible) on the dark card.
    el.querySelectorAll("style").forEach((s) => s.remove());
    el.querySelectorAll("path, polygon, circle, rect, ellipse").forEach((node) => {
      node.removeAttribute("class");
      node.setAttribute("fill", "#ffffff");
    });
    return el;
  } catch {
    return null;
  }
}

function fillPage(doc: jsPDF) {
  doc.setFillColor(...DARK);
  doc.rect(0, 0, PAGE_W, PAGE_H, "F");
}

/** L-shaped crop marks in the bleed area at each trim corner */
function cropMarks(doc: jsPDF) {
  doc.setDrawColor(...WHITE);
  doc.setLineWidth(0.12);
  const L = MARK_LEN;
  const corners: [number, number, number, number][] = [
    // [trimX, trimY, dirX, dirY] — dir points outward into the bleed
    [BLEED, BLEED, -1, -1], // top-left
    [BLEED + TRIM_W, BLEED, 1, -1], // top-right
    [BLEED, BLEED + TRIM_H, -1, 1], // bottom-left
    [BLEED + TRIM_W, BLEED + TRIM_H, 1, 1], // bottom-right
  ];
  for (const [cx, cy, dx, dy] of corners) {
    // vertical tick (marks the horizontal trim line)
    doc.line(cx, cy, cx, cy + dy * L);
    // horizontal tick (marks the vertical trim line)
    doc.line(cx, cy, cx + dx * L, cy);
  }
}

// ── Front side ─────────────────────────────────────────────────────────
async function drawFront(doc: jsPDF, data: CardData, logo: SVGElement | null, hasFonts: boolean) {
  fillPage(doc);

  const sans = hasFonts ? SANS : "helvetica";

  // Logo mark, top-left
  const logoSize = 9;
  if (logo) {
    const clone = logo.cloneNode(true) as SVGElement;
    await svg2pdf(clone, doc, {
      x: px(SAFE),
      y: py(SAFE),
      width: logoSize,
      height: logoSize,
    });
  }

  // Contact — small uppercase label / value pairs, upper-right
  const pairs: [string, string][] = (
    [
      ["Phone", data.phone],
      ["Email", data.email],
      ["Website", data.web],
    ] as [string, string][]
  ).filter(([, v]) => v);

  const COL_X = 47;
  const COL_W = 34; // wrap width for multi-line values
  let cy = 9;

  const eyebrow = (label: string, y: number) => {
    doc.setFont(sans, "normal");
    doc.setFontSize(4.2);
    doc.setCharSpace(0.18);
    doc.setTextColor(...LABEL);
    doc.text(label.toUpperCase(), px(COL_X), py(y));
    doc.setCharSpace(0);
  };

  for (const [label, value] of pairs) {
    eyebrow(label, cy);
    doc.setFontSize(6.5);
    doc.setTextColor(...WHITE);
    doc.text(value, px(COL_X), py(cy + 2.4));
    cy += 6.4;
  }

  // Address block — company name heads the postal address, value wraps
  const addrLines: string[] = [];
  if (data.company) addrLines.push(data.company);
  if (data.address) {
    doc.setFont(sans, "normal");
    doc.setFontSize(6.5);
    addrLines.push(...(doc.splitTextToSize(data.address, COL_W) as string[]));
  }
  if (addrLines.length) {
    eyebrow("Address", cy);
    doc.setFont(sans, "normal");
    doc.setFontSize(6.5);
    doc.setTextColor(...WHITE);
    let ay = cy + 2.4;
    for (const line of addrLines) {
      doc.text(line, px(COL_X), py(ay));
      ay += 2.7;
    }
  }

  // Name, lower-left
  doc.setTextColor(...WHITE);
  doc.setFont(sans, "bold");
  doc.setFontSize(12);
  doc.text(data.name || "", px(SAFE), py(46.5));

  // Title — uppercase, tracked, gray
  doc.setFont(sans, "normal");
  doc.setFontSize(5.5);
  doc.setCharSpace(0.3);
  doc.setTextColor(...TITLE_GRAY);
  doc.text((data.title || "").toUpperCase(), px(SAFE), py(50));
  doc.setCharSpace(0);
}

// ── Back side ──────────────────────────────────────────────────────────
async function drawBack(doc: jsPDF, logo: SVGElement | null) {
  fillPage(doc);
  const cx = TRIM_W / 2;
  const cy = TRIM_H / 2;

  // Centred logo only
  const logoSize = 30;
  if (logo) {
    const clone = logo.cloneNode(true) as SVGElement;
    await svg2pdf(clone, doc, {
      x: px(cx - logoSize / 2),
      y: py(cy - logoSize / 2),
      width: logoSize,
      height: logoSize,
    });
  }
}

// ── Public entry point ───────────────────────────────────────────────────
export async function generateBusinessCardPdf(data: CardData): Promise<void> {
  const doc = new jsPDF({
    unit: "mm",
    format: [PAGE_W, PAGE_H],
    orientation: "landscape",
    compress: true,
  });

  const [hasFonts, logo] = await Promise.all([registerFonts(doc), loadLogo()]);

  await drawFront(doc, data, logo, hasFonts);
  cropMarks(doc);

  doc.addPage([PAGE_W, PAGE_H], "landscape");
  await drawBack(doc, logo);
  cropMarks(doc);

  const slug = (data.name || "visitkort").trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  doc.save(`lunalec-visitkort-${slug || "visitkort"}.pdf`);
}
