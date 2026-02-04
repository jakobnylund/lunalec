import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - LunaLEC",
  description:
    "Get in touch with LunaLEC to discuss partnership opportunities, technology licensing, or learn more about our printable light technology.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
