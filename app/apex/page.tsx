"use client";

import Link from "next/link";
import { Phone, ArrowUpRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { courses, faculty, whyUs, reviews, toppers } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, Eyebrow, SectionHead, StatsBand, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[#1F2733]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <Eyebrow>{t.hero.badge}</Eyebrow>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-white md:text-6xl">
              {t.hero.title}
              <br />
              <span className="text-[#2F6BFF]">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[#8B949E]">{t.hero.sub}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact#book`} className="bg-[#2F6BFF] px-8 py-4 font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#1E54E0]">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 border border-[#30363D] px-8 py-4 font-bold uppercase tracking-wider text-[#C9D1D9] transition-colors hover:border-[#2F6BFF] hover:text-[#2F6BFF]">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
          </div>
          <div className="relative">
            <img src={img.hero} alt="Lecture at Disha Classes" className="w-full object-cover grayscale-[0.4] contrast-[1.05]" />
            <div className="absolute -bottom-6 -left-2 border border-[#1F2733] bg-[#0D1117] px-6 py-4 md:-left-8">
              <p className="font-display text-3xl font-bold text-[#2F6BFF]">850+</p>
              <p className="text-xs uppercase tracking-[0.15em] text-[#8B949E]">{lang === "en" ? "Selections since 2013" : "2013 से चयन"}</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* COURSES */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.courses} title={t.sections.coursesTitle} sub={t.sections.coursesSub} />
          <div className="grid border-l border-t border-[#1F2733] sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((c) => {
              const d = pick(c, lang);
              return (
                <div key={c.icon} className="group border-b border-r border-[#1F2733] p-6 transition-colors hover:bg-[#11161F]">
                  <Icon name={c.icon} className="mb-4 h-7 w-7 text-[#2F6BFF]" />
                  <h3 className="font-display font-bold text-white">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#8B949E]">{d.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <Link href={`${BASE}/courses`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#2F6BFF] hover:text-white">
              {t.misc.viewAll} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-t border-[#1F2733] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-px bg-[#1F2733] sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const d = pick(w, lang);
              return (
                <div key={w.icon} className="bg-[#0D1117] p-7">
                  <p className="font-display text-sm font-bold text-[#2F6BFF]">{String(i + 1).padStart(2, "0")}</p>
                  <Icon name={w.icon} className="mt-4 h-7 w-7 text-[#C9D1D9]" />
                  <h3 className="mt-4 font-display font-bold text-white">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#8B949E]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOPPERS */}
      <section className="border-t border-[#1F2733] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.results} title={t.sections.resultsTitle} sub={t.sections.resultsSub} />
          <div className="grid gap-px bg-[#1F2733] md:grid-cols-3">
            {toppers.slice(0, 3).map((tp) => {
              const d = tp[lang];
              return (
                <div key={tp.name} className="group bg-[#0D1117] p-7 transition-colors hover:bg-[#11161F]">
                  <div className="flex items-center justify-between">
                    <img src={img.toppers[tp.photo]} alt={tp.name} className="h-16 w-16 object-cover grayscale transition-all group-hover:grayscale-0" />
                    <p className="font-display text-2xl font-bold text-[#2F6BFF]">{d.result}</p>
                  </div>
                  <h3 className="mt-5 font-display font-bold text-white">{tp.name}</h3>
                  <p className="text-sm text-[#8B949E]">{d.exam} · {d.detail}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <Link href={`${BASE}/results`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#2F6BFF] hover:text-white">
              {lang === "en" ? "See All Results" : "सभी रिज़ल्ट देखें"} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="border-t border-[#1F2733] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.faculty} title={t.sections.facultyTitle} sub={t.sections.facultySub} />
          <div className="grid gap-px bg-[#1F2733] sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((f) => {
              const d = pick(f, lang);
              return (
                <Link key={f.id} href={`${BASE}/faculty`} className="group bg-[#0D1117] transition-colors hover:bg-[#11161F]">
                  <img src={img.faculty[f.photo]} alt={d.name} className="h-56 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                  <div className="p-5">
                    <h3 className="font-display font-bold text-white">{d.name}</h3>
                    <p className="text-sm text-[#2F6BFF]">{d.spec}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-[#8B949E]">{d.exp}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-t border-[#1F2733] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="4.8 / 5" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-px bg-[#1F2733] md:grid-cols-3">
            {reviews.slice(0, 3).map((r) => (
              <figure key={r.name} className="bg-[#0D1117] p-7">
                <p className="font-display text-4xl leading-none text-[#2F6BFF]">&ldquo;</p>
                <blockquote className="mt-2 text-sm leading-relaxed text-[#C9D1D9]">{r[lang]}</blockquote>
                <figcaption className="mt-5">
                  <p className="font-bold text-white">{r.name}</p>
                  <p className="text-xs uppercase tracking-wider text-[#8B949E]">{r.area}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-t border-[#1F2733] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-px bg-[#1F2733] md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img key={g} src={g} alt={`Campus photo ${i + 1}`} className="h-44 w-full object-cover grayscale-[0.5] transition-all duration-300 hover:grayscale-0 md:h-60" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#1F2733] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="?" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* MAP */}
      <section className="border-t border-[#1F2733] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
