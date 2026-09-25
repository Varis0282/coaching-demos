"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { toppers } from "@/lib/content";
import { img } from "@/lib/config";
import { BASE, PageHero, FadeIn, Glass, StatsBand, CTABand } from "../_ui";

export default function Results() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.resultsTitle} sub={t.sections.resultsSub} />
      <StatsBand />
      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {toppers.map((tp, i) => {
            const d = tp[lang];
            return (
              <FadeIn key={tp.name} delay={(i % 3) * 0.08}>
                <Glass className="group h-full p-6 text-center transition-all hover:border-lime-300/40">
                  <img src={img.toppers[tp.photo]} alt={tp.name} className="mx-auto h-24 w-24 rounded-3xl object-cover shadow-xl" />
                  <p className="mt-4 inline-block rounded-full bg-gradient-to-r from-cyan-400/20 to-lime-400/20 px-4 py-1 text-sm font-extrabold text-lime-300">
                    {d.result}
                  </p>
                  <h3 className="mt-3 font-bold text-white">{tp.name}</h3>
                  <p className="text-sm text-cyan-300">{d.exam}</p>
                  <p className="mt-1 text-xs text-slate-500">{d.detail}</p>
                </Glass>
              </FadeIn>
            );
          })}
        </div>
        <FadeIn className="mx-auto mt-12 max-w-xl text-center text-slate-500">
          {lang === "en"
            ? "And hundreds more in boards, NTSE, SSC and banking — ask for the full selection list at reception."
            : "और बोर्ड, NTSE, SSC व बैंकिंग में सैकड़ों और — पूरी चयन सूची रिसेप्शन पर उपलब्ध है।"}
        </FadeIn>
      </section>
      <CTABand />
    </>
  );
}
