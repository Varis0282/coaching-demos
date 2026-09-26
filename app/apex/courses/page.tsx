"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { courses } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, PageHero, CTABand } from "../_ui";
import { ArrowUpRight } from "lucide-react";

export default function Courses() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero eyebrow={t.nav.courses} title={t.sections.coursesTitle} sub={t.sections.coursesSub} />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="border-t border-[#1F2733]">
            {courses.map((c, i) => {
              const d = pick(c, lang);
              return (
                <div key={c.icon} className="group grid items-center gap-4 border-b border-[#1F2733] py-7 transition-colors hover:bg-[#11161F] md:grid-cols-12 md:gap-8">
                  <p className="font-display text-sm font-bold text-[#2F6BFF] md:col-span-1 md:pl-4">{String(i + 1).padStart(2, "0")}</p>
                  <div className="flex items-center gap-4 md:col-span-4">
                    <Icon name={c.icon} className="h-6 w-6 shrink-0 text-[#2F6BFF]" />
                    <h3 className="font-display text-xl font-bold text-white">{d.title}</h3>
                  </div>
                  <p className="text-sm text-[#8B949E] md:col-span-5">{d.desc}</p>
                  <div className="md:col-span-2 md:pr-4 md:text-right">
                    <Link href={`${BASE}/contact#book`} className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2F6BFF] hover:text-white">
                      {t.nav.book} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
