import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to LunaLEC about LEC technology, collaboration, licensing, OEM supply, or research partnerships.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact LunaLEC",
    description:
      "Let's talk about how printable LEC light can transform your product.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
