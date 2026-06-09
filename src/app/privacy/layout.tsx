import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How LunaLEC handles personal data on lunalec.com — what we collect, why, where it goes, and your rights under GDPR.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
