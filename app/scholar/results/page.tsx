"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { toppers, stats } from "@/lib/content";
import { BASE, PageHero, StatsBand, TopperCard, CTABand } from "../_ui";

export default function Results() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.resultsTitle} sub={t.sections.resultsSub} />
      <StatsBand />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {toppers.map((_, i) => (
              <TopperCard key={i} i={i} />
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-xl text-center text-slate-500">
            {lang === "en"
              ? "And hundreds more in boards, NTSE, SSC and banking — ask for the full selection list at reception."
              : "और बोर्ड, NTSE, SSC व बैंकिंग में सैकड़ों और — पूरी चयन सूची रिसेप्शन पर उपलब्ध है।"}
          </p>
          <div className="mt-8 text-center">
            <Link href={`${BASE}/contact#book`} className="rounded-lg bg-[#F4900C] px-8 py-3.5 font-bold text-white shadow-lg shadow-orange-500/30 transition-transform hover:scale-105">
              {t.hero.cta1}
            </Link>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
