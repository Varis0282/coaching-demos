import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const inter = Inter({ subsets: ["latin"] });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Disha Classes — Indore | Apex Demo",
  description: "NEET, JEE, Foundation & MPPSC coaching in Bhawarkua, Indore. Book a free demo class on WhatsApp.",
};

export default function ApexLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${inter.className} ${grotesk.variable} bg-[#0D1117] text-[#C9D1D9]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
