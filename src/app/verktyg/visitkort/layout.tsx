import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visitkort - LunaLEC",
  description: "Internt verktyg för att skapa tryckfärdiga visitkort.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function VisitkortLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
