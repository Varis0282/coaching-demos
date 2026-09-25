"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { PageHero, StatsBand, CTABand, Eyebrow } from "../_ui";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero eyebrow={t.nav.about} title={a.title} sub={a.sub} />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <img src={img.about} alt="Classroom teaching at Disha Classes" className="w-full object-cover grayscale-[0.4]" />
          <div className="space-y-5 leading-relaxed text-[#8B949E]">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className="border-l-2 border-[#2F6BFF] pl-5 font-medium text-[#C9D1D9]">{a.story3}</p>
          </div>
        </div>
      </section>
      <section className="border-t border-[#1F2733] py-16">
        <div className="mx-auto max-w-4xl px-4">
          <Eyebrow>{a.missionTitle}</Eyebrow>
          <p className="font-display text-2xl font-bold leading-relaxed text-white md:text-3xl">&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="border-t border-[#1F2733] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-px bg-[#1F2733] sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <div key={v.title} className="bg-[#0D1117] p-7">
                <p className="font-display text-sm font-bold text-[#2F6BFF]">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-[#8B949E]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <StatsBand />
      <CTABand />
    </>
  );
}
