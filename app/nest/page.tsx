"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { courses, faculty, whyUs, reviews, toppers } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, SectionHead, Squiggle, Blob, Stars, StatsBand, FAQList, MapBlock, CTABand } from "./_ui";

const tileColors = ["#FDE7CE", "#D9EFDC", "#FBF0C8", "#FADFDC", "#CDE8F8", "#EADFF5", "#FDE7CE", "#D9EFDC"];
const iconColors = ["#C4552D", "#2E7D4F", "#B08A1E", "#C0392B", "#2E9BD6", "#7E57C2", "#C4552D", "#2E7D4F"];

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <Blob className="-left-24 -top-28 h-96 w-96" />
        <Blob className="-right-28 top-24 h-80 w-80" color="#CDE8F8" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-[#D9EFDC] px-4 py-1.5 text-sm font-extrabold text-[#2E7D4F]">
              {t.hero.badge}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-[3.4rem] md:leading-[1.15]">
              {t.hero.title}
              <br />
              <span className="text-[#F26B5E]">{t.hero.titleAccent}</span>
            </h1>
            <Squiggle className="mt-4" />
            <p className="mt-5 max-w-lg text-lg text-[#8A7A66]">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact`} className="rounded-full bg-[#F26B5E] px-8 py-3.5 font-extrabold text-white shadow-xl shadow-[#F26B5E]/30 transition-transform hover:scale-105">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 rounded-full border-2 border-[#2E9BD6] px-8 py-3.5 font-extrabold text-[#2E9BD6] transition-colors hover:bg-[#2E9BD6] hover:text-white">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-[#FBE3A2]" aria-hidden />
            <img src={img.heroAlt} alt="Happy students at Disha Classes" className="relative w-full -rotate-1 rounded-[2rem] object-cover shadow-xl transition-transform duration-300 hover:rotate-0" />
            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-3 shadow-xl md:-left-8">
              <p className="text-2xl font-extrabold text-[#F26B5E]">30</p>
              <p className="text-xs font-bold text-[#8A7A66]">{lang === "en" ? "Max students per batch" : "प्रति बैच अधिकतम छात्र"}</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* COURSES */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.coursesTitle} sub={t.sections.coursesSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((c, i) => {
              const d = pick(c, lang);
              return (
                <div key={c.icon} className="group rounded-3xl border-2 border-[#F3E5C7] bg-white p-6 transition-all hover:-translate-y-1.5 hover:border-[#F26B5E]">
                  <span style={{ background: tileColors[i], color: iconColors[i] }} className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110">
                    <Icon name={c.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="text-lg font-extrabold">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#8A7A66]">{d.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/courses`} className="font-extrabold text-[#2E9BD6] underline decoration-wavy underline-offset-4 hover:text-[#F26B5E]">
              {t.misc.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative overflow-hidden bg-white py-16">
        <Blob className="-right-24 -top-24 h-72 w-72" color="#FDE7CE" />
        <div className="relative mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const d = pick(w, lang);
              return (
                <div key={w.icon} className="rounded-3xl bg-[#FFF9EC] p-6 text-center">
                  <span style={{ background: iconColors[i] }} className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg">
                    <Icon name={w.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="font-extrabold">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#8A7A66]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOPPERS */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.resultsTitle} sub={t.sections.resultsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {toppers.slice(0, 3).map((tp, i) => {
              const d = tp[lang];
              return (
                <div key={tp.name} className={`rounded-3xl border-2 border-[#F3E5C7] bg-white p-6 text-center transition-transform hover:-translate-y-1 ${i === 1 ? "md:-rotate-1" : "md:rotate-1"}`}>
                  <img src={img.toppers[tp.photo]} alt={tp.name} className="mx-auto h-24 w-24 rounded-full border-4 border-[#FBE3A2] object-cover" />
                  <p className="mt-4 inline-block rounded-full bg-[#F26B5E] px-4 py-1 text-sm font-extrabold text-white">{d.result}</p>
                  <h3 className="mt-3 text-lg font-extrabold">{tp.name}</h3>
                  <p className="text-sm font-bold text-[#2E9BD6]">{d.exam}</p>
                  <p className="mt-1 text-xs text-[#8A7A66]">{d.detail}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/results`} className="rounded-full bg-[#2E9BD6] px-8 py-3 font-extrabold text-white shadow-lg shadow-[#2E9BD6]/30 transition-transform hover:scale-105">
              {lang === "en" ? "See All Results" : "सभी रिज़ल्ट देखें"} →
            </Link>
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.facultyTitle} sub={t.sections.facultySub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((f) => {
              const d = pick(f, lang);
              return (
                <Link key={f.id} href={`${BASE}/faculty`} className="group text-center">
                  <div className="overflow-hidden rounded-[2rem] border-4 border-[#FBE3A2]">
                    <img src={img.faculty[f.photo]} alt={d.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-4 font-extrabold">{d.name}</h3>
                  <p className="text-sm font-bold text-[#F26B5E]">{d.spec}</p>
                  <p className="text-xs text-[#8A7A66]">{d.exp}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 3).map((r, i) => (
              <div key={r.name} style={{ background: tileColors[i] }} className="rounded-3xl p-6">
                <Stars n={r.stars} />
                <p className="mt-3 leading-relaxed text-[#5C4F40]">&ldquo;{r[lang]}&rdquo;</p>
                <p className="mt-4 font-extrabold">{r.name}</p>
                <p className="text-xs font-bold text-[#8A7A66]">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img key={g} src={g} alt={`Campus photo ${i + 1}`} className={`h-44 w-full rounded-[1.7rem] border-4 border-[#FFF9EC] object-cover shadow-md transition-transform hover:scale-[1.03] md:h-56 ${i % 2 ? "md:rotate-1" : "md:-rotate-1"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* MAP */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
