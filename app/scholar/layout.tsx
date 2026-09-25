import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disha Classes — Indore | Scholar Demo",
  description: "NEET, JEE, Foundation & MPPSC coaching in Bhawarkua, Indore. Book a free demo class on WhatsApp.",
};

export default function ScholarLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${inter.className} bg-white text-slate-700`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
