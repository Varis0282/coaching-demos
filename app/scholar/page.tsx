"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { courses, faculty, whyUs, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, SectionHead, Stars, StatsBand, TopperCard, FAQList, MapBlock, CTABand, TrustPoint } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#EAF1F8] to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#12355B] shadow-sm">
              <span className="h-2 w-2 animate-pulseSoft rounded-full bg-[#F4900C]" /> {t.hero.badge}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#12355B] md:text-5xl">
              {t.hero.title} <span className="text-[#F4900C]">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-slate-600">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact`} className="rounded-lg bg-[#F4900C] px-7 py-3.5 font-bold text-white shadow-lg shadow-orange-500/30 transition-transform hover:scale-105">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 rounded-lg border-2 border-[#12355B] px-7 py-3.5 font-bold text-[#12355B] transition-colors hover:bg-[#12355B] hover:text-white">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {whyUs.slice(0, 3).map((w) => (
                <TrustPoint key={w.icon} text={pick(w, lang).title} />
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={img.hero} alt="Students in classroom at Disha Classes" className="w-full rounded-2xl border-8 border-white object-cover shadow-2xl" />
            <div className="absolute -bottom-5 left-6 rounded-xl bg-white px-5 py-3 shadow-xl">
              <p className="text-2xl font-extrabold text-[#F4900C]">850+</p>
              <p className="text-xs font-semibold text-slate-500">{lang === "en" ? "Selections since 2013" : "2013 से चयन"}</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* COURSES */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.courses} title={t.sections.coursesTitle} sub={t.sections.coursesSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((c) => {
              const d = pick(c, lang);
              return (
                <div key={c.icon} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#12355B] text-[#F4900C] transition-colors group-hover:bg-[#F4900C] group-hover:text-white">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-bold text-[#12355B]">{d.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{d.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/courses`} className="font-bold text-[#12355B] underline decoration-[#F4900C] decoration-2 underline-offset-4 hover:text-[#F4900C]">
              {t.misc.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => {
              const d = pick(w, lang);
              return (
                <div key={w.icon} className="rounded-2xl bg-orange-50/60 p-6 text-center">
                  <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F4900C] text-white shadow-md shadow-orange-500/30">
                    <Icon name={w.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="font-bold text-[#12355B]">{d.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOPPERS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.results} title={t.sections.resultsTitle} sub={t.sections.resultsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 3].map((i) => (
              <TopperCard key={i} i={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/results`} className="rounded-lg bg-[#12355B] px-7 py-3 font-bold text-white transition-colors hover:bg-[#0B2340]">
              {lang === "en" ? "See All Results" : "सभी रिज़ल्ट देखें"} →
            </Link>
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.faculty} title={t.sections.facultyTitle} sub={t.sections.facultySub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((f) => {
              const d = pick(f, lang);
              return (
                <Link key={f.id} href={`${BASE}/faculty`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <img src={img.faculty[f.photo]} alt={d.name} className="h-56 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="font-extrabold text-[#12355B]">{d.name}</h3>
                    <p className="text-sm font-semibold text-[#F4900C]">{d.spec}</p>
                    <p className="mt-1 text-xs text-slate-500">{d.qual} · {d.exp}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-[#12355B] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead light eyebrow="4.8" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 3).map((r) => (
              <div key={r.name} className="rounded-2xl bg-white p-6 shadow-lg">
                <Stars n={r.stars} />
                <p className="mt-3 text-sm leading-relaxed text-slate-600">&ldquo;{r[lang]}&rdquo;</p>
                <p className="mt-4 font-bold text-[#12355B]">{r.name}</p>
                <p className="text-xs text-slate-400">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img key={g} src={g} alt={`Campus photo ${i + 1}`} className="h-44 w-full rounded-xl object-cover transition-transform hover:scale-[1.03] md:h-56" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="?" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* MAP */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
