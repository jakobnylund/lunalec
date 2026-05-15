import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "How LEC (Light-emitting Electrochemical Cell) technology works — printable in ambient air on flexible substrates, with customizable emission patterns and a fraction of the manufacturing complexity of LEDs and OLEDs.",
  alternates: { canonical: "/technology" },
  openGraph: {
    title: "LEC Technology — LunaLEC",
    description:
      "The next revolution in lighting technology. Printable, flexible, customizable.",
    url: "/technology",
  },
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
