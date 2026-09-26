"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { faculty } from "@/lib/content";
import { img } from "@/lib/config";
import { BASE, PageHero, CTABand } from "../_ui";
import { Clock } from "lucide-react";

export default function Faculty() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.facultyTitle} sub={t.sections.facultySub} />
      <section className="pb-16">
        <div className="mx-auto max-w-5xl space-y-8 px-4">
          {faculty.map((f, i) => {
            const d = pick(f, lang);
            return (
              <div key={f.id} className="grid items-center gap-8 rounded-[2rem] border-2 border-[#F3E5C7] bg-white p-7 md:grid-cols-3">
                <div className={`relative ${i % 2 ? "md:order-last" : ""}`}>
                  <div className={`absolute -inset-2 rounded-[1.7rem] bg-[#FBE3A2] ${i % 2 ? "-rotate-2" : "rotate-2"}`} aria-hidden />
                  <img src={img.faculty[f.photo]} alt={d.name} className="relative h-60 w-full rounded-[1.7rem] object-cover" />
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-extrabold">{d.name}</h2>
                  <p className="font-extrabold text-[#F26B5E]">{d.spec}</p>
                  <p className="mt-1 text-sm font-bold text-[#8A7A66]">{d.qual} · {d.exp}</p>
                  <p className="mt-4 leading-relaxed text-[#6B5D4D]">{d.bio}</p>
                  <p className="mt-3 flex items-center gap-2 text-sm font-bold text-[#8A7A66]">
                    <Clock className="h-4 w-4 text-[#2E9BD6]" /> {f.slots}
                  </p>
                  <Link href={`${BASE}/contact#book`} className="mt-5 inline-block rounded-full bg-[#2E9BD6] px-6 py-2.5 text-sm font-extrabold text-white shadow-md shadow-[#2E9BD6]/30 hover:bg-[#2384BC]">
                    {t.nav.book}
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
