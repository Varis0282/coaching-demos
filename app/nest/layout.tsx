import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disha Classes — Indore | Nest Demo",
  description: "NEET, JEE, Foundation & MPPSC coaching in Bhawarkua, Indore. Book a free demo class on WhatsApp.",
};

export default function NestLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${nunito.className} bg-[#FFF9EC] text-[#43392E]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
