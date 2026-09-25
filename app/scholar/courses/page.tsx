"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { courses } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, PageHero, CTABand } from "../_ui";

export default function Courses() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.coursesTitle} sub={t.sections.coursesSub} />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
          {courses.map((c) => {
            const d = pick(c, lang);
            return (
              <div key={c.icon} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#12355B] text-[#F4900C]">
                  <Icon name={c.icon} className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-lg font-extrabold text-[#12355B]">{d.title}</h3>
                  <p className="mt-2 text-slate-500">{d.desc}</p>
                  <Link href={`${BASE}/contact`} className="mt-3 inline-block text-sm font-bold text-[#F4900C] hover:underline">
                    {t.nav.book} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CTABand />
    </>
  );
}
