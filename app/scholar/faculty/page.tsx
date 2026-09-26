"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { faculty } from "@/lib/content";
import { inst, img } from "@/lib/config";
import { BASE, PageHero, CTABand } from "../_ui";
import { Clock } from "lucide-react";

export default function Faculty() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.facultyTitle} sub={t.sections.facultySub} />
      <section className="py-20">
        <div className="mx-auto max-w-5xl space-y-10 px-4">
          {faculty.map((f, i) => {
            const d = pick(f, lang);
            return (
              <div key={f.id} className={`grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-3 ${i % 2 ? "md:[&>img]:order-last" : ""}`}>
                <img src={img.faculty[f.photo]} alt={d.name} className="h-64 w-full rounded-xl object-cover" />
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-extrabold text-[#12355B]">{d.name}</h2>
                  <p className="font-bold text-[#F4900C]">{d.spec}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{d.qual} · {d.exp}</p>
                  <p className="mt-4 leading-relaxed text-slate-600">{d.bio}</p>
                  <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-500">
                    <Clock className="h-4 w-4 text-[#F4900C]" /> {f.slots}
                  </p>
                  <Link href={`${BASE}/contact#book`} className="mt-5 inline-block rounded-lg bg-[#12355B] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0B2340]">
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
