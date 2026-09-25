import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer, GradientBg } from "./_ui";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disha Classes — Indore | Orbit Demo",
  description: "NEET, JEE, Foundation & MPPSC coaching in Bhawarkua, Indore. Book a free demo class on WhatsApp.",
};

export default function OrbitLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${outfit.className} relative min-h-screen bg-[#05070F] text-slate-200`}>
        <GradientBg />
        <div className="relative z-10">
          <Nav />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </div>
    </LangProvider>
  );
}
