"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, TrendingUp, Menu, X, Plus, Minus, MapPin } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst } from "@/lib/config";
import { faqs, stats } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/apex";
export const BLUE = "#2F6BFF";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#2F6BFF]">
      <span className="h-px w-8 bg-[#2F6BFF]" /> {children}
    </p>
  );
}

export function Nav() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { href: BASE, label: t.nav.home },
    { href: `${BASE}/about`, label: t.nav.about },
    { href: `${BASE}/courses`, label: t.nav.courses },
    { href: `${BASE}/faculty`, label: t.nav.faculty },
    { href: `${BASE}/results`, label: t.nav.results },
    { href: `${BASE}/contact`, label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-[#1F2733] bg-[#0D1117]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={BASE} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center border border-[#2F6BFF] text-[#2F6BFF]">
            <TrendingUp className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            {lang === "en" ? inst.name : inst.nameHi}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#8B949E] lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="uppercase tracking-wider transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs text-[#8B949E] hover:text-white">← All demos</Link>
          <LangToggle className="border border-[#30363D] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#C9D1D9] hover:border-[#2F6BFF] hover:text-[#2F6BFF]" />
          <Link
            href={`${BASE}/contact#book`}
            className="bg-[#2F6BFF] px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#1E54E0]"
          >
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="text-white lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#1F2733] bg-[#0D1117] px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-[#1F2733] py-3 font-medium uppercase tracking-wider text-[#C9D1D9]">
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-3">
            <LangToggle className="border border-[#30363D] px-4 py-2 text-sm font-bold uppercase text-[#C9D1D9]" />
            <Link href={`${BASE}/contact#book`} onClick={() => setOpen(false)} className="flex-1 bg-[#2F6BFF] px-5 py-2.5 text-center font-bold uppercase tracking-wider text-white">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-14 max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-3xl font-bold text-white md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-[#8B949E]">{sub}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="border-b border-[#1F2733] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display text-4xl font-bold text-white md:text-6xl">{title}</h1>
        {sub && <p className="mt-5 max-w-2xl text-lg text-[#8B949E]">{sub}</p>}
      </div>
    </section>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="border-y border-[#1F2733]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.value} className={`px-6 py-10 ${i !== 0 ? "border-l border-[#1F2733]" : ""} ${i >= 2 ? "border-t border-[#1F2733] md:border-t-0" : ""}`}>
            <p className="font-display text-4xl font-bold text-[#2F6BFF] md:text-5xl">{s.value}</p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-[#8B949E]">{s[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl border-t border-[#1F2733]">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-[#1F2733]">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-white"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-display text-sm text-[#2F6BFF]">{String(i + 1).padStart(2, "0")}</span>
                {item.q}
              </span>
              {isOpen ? <Minus className="h-5 w-5 shrink-0 text-[#2F6BFF]" /> : <Plus className="h-5 w-5 shrink-0 text-[#8B949E]" />}
            </button>
            {isOpen && <p className="pb-5 pl-10 text-[#8B949E]">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid border border-[#1F2733] lg:grid-cols-5">
      <div className="p-8 lg:col-span-2">
        <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-white">
          <MapPin className="h-5 w-5 text-[#2F6BFF]" /> {lang === "en" ? inst.name : inst.nameHi}
        </h3>
        <p className="mb-5 text-sm text-[#8B949E]">{lang === "en" ? inst.address : inst.addressHi}</p>
        <div className="mb-6 space-y-1.5 text-sm text-[#8B949E]">
          {inst.timings[lang].map((tm) => (
            <p key={tm.days}><span className="font-semibold text-[#C9D1D9]">{tm.days}:</span> {tm.hours}</p>
          ))}
        </div>
        <a href={inst.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block border border-[#2F6BFF] px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[#2F6BFF] transition-colors hover:bg-[#2F6BFF] hover:text-white">
          {t.misc.getDirections} →
        </a>
      </div>
      <div className="border-t border-[#1F2733] lg:col-span-3 lg:border-l lg:border-t-0">
        <iframe src={inst.mapEmbed} className="h-72 w-full grayscale invert-[0.9] lg:h-full" loading="lazy" title="Institute location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="bg-[#2F6BFF]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-16 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.sections.ctaTitle}</h2>
          <p className="mt-2 text-blue-100">{t.sections.ctaSub}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-4">
          <Link href={`${BASE}/contact#book`} className="bg-white px-8 py-4 font-bold uppercase tracking-wider text-[#0D1117] transition-colors hover:bg-[#0D1117] hover:text-white">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 border border-white/60 px-8 py-4 font-bold uppercase tracking-wider text-white hover:bg-white/10">
            <Phone className="h-4 w-4" /> {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  const links = [
    { href: `${BASE}/about`, label: t.nav.about },
    { href: `${BASE}/courses`, label: t.nav.courses },
    { href: `${BASE}/faculty`, label: t.nav.faculty },
    { href: `${BASE}/results`, label: t.nav.results },
    { href: `${BASE}/contact`, label: t.nav.contact },
  ];
  return (
    <footer className="border-t border-[#1F2733] pt-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center border border-[#2F6BFF] text-[#2F6BFF]"><TrendingUp className="h-5 w-5" /></span>
            <span className="font-display font-bold text-white">{lang === "en" ? inst.name : inst.nameHi}</span>
          </div>
          <p className="text-sm text-[#8B949E]">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white">{t.footer.quick}</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm text-[#8B949E]">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#2F6BFF]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-[#8B949E]">
            <li>{lang === "en" ? inst.address : inst.addressHi}</li>
            <li><a href={`tel:${inst.phoneRaw}`} className="hover:text-[#2F6BFF]">{inst.phone}</a></li>
            <li>{inst.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#1F2733] py-5 text-center text-xs text-[#484F58]">
        © {new Date().getFullYear()} {inst.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 border border-[#1F2733] bg-[#11161F] p-6 sm:p-8",
  label: "mb-1.5 block text-xs font-bold uppercase tracking-[0.15em] text-[#C9D1D9]",
  input: "w-full border border-[#30363D] bg-[#0D1117] px-4 py-2.5 text-white outline-none transition-colors placeholder:text-[#484F58] focus:border-[#2F6BFF]",
  select: "w-full border border-[#30363D] bg-[#0D1117] px-4 py-2.5 text-white outline-none focus:border-[#2F6BFF]",
  dayBtn: "border border-[#30363D] bg-[#0D1117] py-2 text-center text-[#8B949E] transition-colors hover:border-[#2F6BFF]",
  dayBtnActive: "border border-[#2F6BFF] bg-[#2F6BFF]/10 py-2 text-center text-[#2F6BFF]",
  slotBtn: "border border-[#30363D] bg-[#0D1117] px-4 py-2 text-sm font-semibold text-[#8B949E] transition-colors hover:border-[#2F6BFF]",
  slotBtnActive: "border border-[#2F6BFF] bg-[#2F6BFF] px-4 py-2 text-sm font-semibold text-white",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-[0.15em] text-[#484F58]",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-3.5 font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#1FB458]",
  success: "border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-semibold text-green-400",
  error: "border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400",
};
