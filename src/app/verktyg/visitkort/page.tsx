"use client";

import { useState } from "react";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import InViewSection from "@/components/InViewSection";
import { CardFront, CardBack } from "@/components/BusinessCardPreview";
import { generateBusinessCardPdf, type CardData } from "@/lib/businessCardPdf";

const FIELDS: { name: keyof CardData; label: string; placeholder: string; type?: string }[] = [
  { name: "name", label: "Namn", placeholder: "Förnamn Efternamn" },
  { name: "title", label: "Titel", placeholder: "Chief Operating Officer" },
  { name: "company", label: "Företag", placeholder: "LunaLEC AB" },
  { name: "address", label: "Adress", placeholder: "Linnaeus väg 24, 901 87 Umeå, Sweden" },
  { name: "phone", label: "Telefon", placeholder: "+46 72 966 66 21", type: "tel" },
  { name: "email", label: "E-post", placeholder: "namn@lunalec.com", type: "email" },
  { name: "web", label: "Webb", placeholder: "lunalec.com" },
];

const inputClass =
  "w-full px-4 py-3 bg-transparent border border-[#1a1a1a] text-white placeholder-[#555] focus:outline-none focus:border-[#253ff6] focus:shadow-[0_0_25px_rgba(255,255,255,0.15),0_0_40px_rgba(37,63,246,0.2)] transition-all duration-300";

export default function BusinessCardToolPage() {
  const [data, setData] = useState<CardData>({
    name: "Erik Zäll",
    title: "Chief Operating Officer",
    company: "",
    address: "Linnaeus väg 24, 901 87 Umeå, Sweden",
    phone: "+46 72 966 66 21",
    email: "erik@lunalec.com",
    web: "lunalec.com",
  });
  const [generating, setGenerating] = useState(false);

  const update = (e: React.ChangeEvent<HTMLInputElement>) =>
    setData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const handleDownload = async () => {
    setGenerating(true);
    try {
      await generateBusinessCardPdf(data);
    } catch (err) {
      console.error(err);
      alert("Kunde inte generera PDF. Försök igen.");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="bg-[#050505]">
      <InViewSection className="border-b-section">
        <div className="px-6 lg:px-16 pt-16 lg:pt-24 pb-10">
          <FadeIn>
            <p className="tech-label mb-2">Internt verktyg</p>
            <h1 className="section-title">Visitkort</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[#b0b0b0] text-base leading-relaxed mt-6 max-w-xl">
              Fyll i uppgifterna, förhandsgranska fram- och baksida, och ladda ner
              en tryckfärdig PDF (85×55 mm, 3 mm utfall och skärmärken).
            </p>
          </FadeIn>
        </div>
      </InViewSection>

      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Form */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Uppgifter</p>
              <p className="section-title mb-10">Fyll i kortet</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-6 max-w-md">
                {FIELDS.map((f) => (
                  <div key={f.name}>
                    <label
                      htmlFor={f.name}
                      className="block text-base text-[#b0b0b0] mb-2"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type ?? "text"}
                      value={data[f.name]}
                      onChange={update}
                      placeholder={f.placeholder}
                      className={inputClass}
                    />
                  </div>
                ))}

                <div className="pt-2">
                  <Button onClick={handleDownload}>
                    {generating ? "Genererar…" : "Ladda ner PDF"}
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Preview */}
          <div className="bg-[#0a0a0a] px-6 lg:px-16 py-16 lg:py-24">
            <FadeIn>
              <p className="tech-label mb-2">Förhandsvisning</p>
              <p className="section-title mb-10">Fram &amp; baksida</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-8 items-start">
                <div>
                  <p className="tech-label mb-3">Framsida</p>
                  <div className="inline-block p-6" style={{ background: "#dfe3ea" }}>
                    <CardFront data={data} />
                  </div>
                </div>
                <div>
                  <p className="tech-label mb-3">Baksida</p>
                  <div className="inline-block p-6" style={{ background: "#dfe3ea" }}>
                    <CardBack />
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm text-[#808080] mt-8 max-w-sm leading-relaxed">
                Förhandsvisningen visar trim-ytan (85×55 mm). PDF:en innehåller
                dessutom 3 mm utfall och skärmärken för tryckeriet.
              </p>
            </FadeIn>
          </div>
        </div>
      </InViewSection>
    </div>
  );
}
