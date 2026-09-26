"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { courses } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, Num, PageHero, CTABand } from "../_ui";

export default function Courses() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero kicker={t.nav.courses} title={t.sections.coursesTitle} sub={t.sections.coursesSub} />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
          {courses.map((c, i) => {
            const d = pick(c, lang);
            return (
              <div key={c.icon}>
                <div className="flex items-baseline justify-between border-b-2 border-[#111111] pb-3">
                  <span className="flex items-center gap-3">
                    <Icon name={c.icon} className="h-6 w-6 text-[#14684B]" />
                    <h3 className="font-display text-2xl font-black">{d.title}</h3>
                  </span>
                  <Num n={i + 1} />
                </div>
                <p className="mt-4 text-neutral-600">{d.desc}</p>
                <Link href={`${BASE}/contact#book`} className="mt-4 inline-block border-b-2 border-[#14684B] pb-0.5 text-sm font-bold text-[#14684B] hover:border-[#111111] hover:text-[#111111]">
                  {t.nav.book} →
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <CTABand />
    </>
  );
}
