"use client";

import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, MapBlock, bookingStyles } from "../_ui";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero eyebrow={t.nav.contact} title={b.title} sub={b.sub} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-px bg-[#1F2733] px-4 lg:grid-cols-5 lg:bg-transparent lg:gap-8">
          <div className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="space-y-px bg-[#1F2733] lg:col-span-2 lg:space-y-5 lg:bg-transparent">
            {[
              { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? inst.address : inst.addressHi },
              { icon: Phone, title: t.hero.cta2, body: inst.phone, href: `tel:${inst.phoneRaw}` },
              { icon: Mail, title: "Email", body: inst.email },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 border border-[#1F2733] bg-[#11161F] p-5">
                <c.icon className="h-5 w-5 shrink-0 text-[#2F6BFF]" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block text-sm text-[#8B949E] hover:text-[#2F6BFF]">{c.body}</a>
                  ) : (
                    <p className="mt-1 text-sm text-[#8B949E]">{c.body}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="border border-[#1F2733] bg-[#11161F] p-5">
              <h3 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white">
                <Clock className="h-4 w-4 text-[#2F6BFF]" /> {t.footer.hours}
              </h3>
              {inst.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-[#8B949E]">
                  <span className="font-semibold text-[#C9D1D9]">{tm.days}:</span> {tm.hours}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <MapBlock />
        </div>
      </section>
    </>
  );
}
