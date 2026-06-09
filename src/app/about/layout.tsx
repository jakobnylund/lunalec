import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "LunaLEC is a Swedish deep tech company built on two decades of LEC research at Umeå University, translating science into commercial products.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About LunaLEC",
    description:
      "Swedish deep tech, born from Umeå University's pioneering LEC research.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
