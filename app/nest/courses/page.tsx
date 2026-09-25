"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { courses } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, PageHero, CTABand } from "../_ui";

const tileColors = ["#FDE7CE", "#D9EFDC", "#FBF0C8", "#FADFDC", "#CDE8F8", "#EADFF5", "#FDE7CE", "#D9EFDC"];
const iconColors = ["#C4552D", "#2E7D4F", "#B08A1E", "#C0392B", "#2E9BD6", "#7E57C2", "#C4552D", "#2E7D4F"];

export default function Courses() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.coursesTitle} sub={t.sections.coursesSub} />
      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          {courses.map((c, i) => {
            const d = pick(c, lang);
            return (
              <div key={c.icon} className="flex gap-5 rounded-3xl border-2 border-[#F3E5C7] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#F26B5E]">
                <span style={{ background: tileColors[i], color: iconColors[i] }} className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl">
                  <Icon name={c.icon} className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="text-lg font-extrabold">{d.title}</h3>
                  <p className="mt-2 text-[#8A7A66]">{d.desc}</p>
                  <Link href={`${BASE}/contact`} className="mt-3 inline-block text-sm font-extrabold text-[#F26B5E] hover:underline">
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
