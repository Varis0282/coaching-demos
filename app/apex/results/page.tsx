"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { toppers } from "@/lib/content";
import { img } from "@/lib/config";
import { BASE, PageHero, StatsBand, CTABand } from "../_ui";

export default function Results() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero eyebrow={t.nav.results} title={t.sections.resultsTitle} sub={t.sections.resultsSub} />
      <StatsBand />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-px bg-[#1F2733] sm:grid-cols-2 lg:grid-cols-3">
            {toppers.map((tp) => {
              const d = tp[lang];
              return (
                <div key={tp.name} className="group bg-[#0D1117] p-7 transition-colors hover:bg-[#11161F]">
                  <div className="flex items-start justify-between gap-4">
                    <img src={img.toppers[tp.photo]} alt={tp.name} className="h-20 w-20 object-cover grayscale transition-all group-hover:grayscale-0" />
                    <div className="text-right">
                      <p className="font-display text-3xl font-bold text-[#2F6BFF]">{d.result}</p>
                      <p className="text-xs uppercase tracking-wider text-[#8B949E]">{d.exam}</p>
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{tp.name}</h3>
                  <p className="text-sm text-[#8B949E]">{d.detail}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-12 max-w-xl text-sm text-[#8B949E]">
            {lang === "en"
              ? "And hundreds more in boards, NTSE, SSC and banking — ask for the full selection list at reception."
              : "और बोर्ड, NTSE, SSC व बैंकिंग में सैकड़ों और — पूरी चयन सूची रिसेप्शन पर उपलब्ध है।"}
          </p>
          <Link href={`${BASE}/contact`} className="mt-6 inline-block bg-[#2F6BFF] px-8 py-4 font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#1E54E0]">
            {t.hero.cta1}
          </Link>
        </div>
      </section>
      <CTABand />
    </>
  );
}
