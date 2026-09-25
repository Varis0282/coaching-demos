import { Space_Grotesk } from "next/font/google";
import Link from "next/link";

const grotesk = Space_Grotesk({ subsets: ["latin"] });

const themes = [
  {
    href: "/scholar",
    name: "Scholar",
    style: "Classic Trust",
    desc: "Navy, saffron and a layout parents instantly trust — the classic Indian institute done right.",
    swatches: ["#12355B", "#F4900C", "#F8FAFC", "#0F172A"],
    nav: "#ffffff",
    hero: "linear-gradient(135deg,#EAF1F8,#F8FAFC)",
    accent: "#F4900C",
    text: "#12355B",
  },
  {
    href: "/orbit",
    name: "Orbit",
    style: "Modern Animated",
    desc: "Neon gradients, glass cards and scroll animations — the ed-tech energy students love.",
    swatches: ["#22d3ee", "#a3e635", "#312e81", "#05070F"],
    nav: "rgba(255,255,255,0.08)",
    hero: "linear-gradient(135deg,#0e7490,#312e81,#05070F)",
    accent: "#22d3ee",
    text: "#ffffff",
  },
  {
    href: "/nest",
    name: "Nest",
    style: "Warm Foundation",
    desc: "Soft cream, sky blue and coral — friendly and safe, made for parents of younger students.",
    swatches: ["#F26B5E", "#2E9BD6", "#FFF9EC", "#FBE3A2"],
    nav: "#FFF9EC",
    hero: "linear-gradient(135deg,#FDEFD2,#FFF9EC)",
    accent: "#F26B5E",
    text: "#43392E",
  },
  {
    href: "/apex",
    name: "Apex",
    style: "Elite Dark",
    desc: "Charcoal, electric blue and big rank numbers — the serious face of an elite JEE academy.",
    swatches: ["#2F6BFF", "#0D1117", "#1F2733", "#C9D1D9"],
    nav: "#0D1117",
    hero: "linear-gradient(135deg,#141B26,#0D1117)",
    accent: "#2F6BFF",
    text: "#C9D1D9",
  },
  {
    href: "/chalk",
    name: "Chalk",
    style: "Chalkboard Editorial",
    desc: "White space, editorial type and a real chalkboard green — calm, premium, unforgettable.",
    swatches: ["#14684B", "#111111", "#ffffff", "#F5F1E6"],
    nav: "#ffffff",
    hero: "#ffffff",
    accent: "#14684B",
    text: "#111111",
  },
];

const features = [
  "Free demo-class booking on WhatsApp",
  "Hindi / English toggle",
  "Toppers & results showcase",
  "Weekly parent reports highlighted",
  "Course & faculty pages",
  "Google Maps",
  "FAQ for parents",
  "Mobile-first & fast",
];

function MiniPreview({ t }: { t: (typeof themes)[number] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 bg-[#1a1d26] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 h-4 flex-1 rounded bg-white/10" />
      </div>
      {/* fake page */}
      <div style={{ background: t.hero }} className="p-4">
        <div
          style={{ background: t.nav }}
          className="mb-4 flex items-center justify-between rounded-md px-3 py-2 backdrop-blur"
        >
          <span style={{ background: t.accent }} className="h-2.5 w-12 rounded-full" />
          <span className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ background: t.text, opacity: 0.35 }} className="h-1.5 w-6 rounded-full" />
            ))}
          </span>
        </div>
        <div className="flex items-center gap-4 pb-2">
          <div className="flex-1">
            <div style={{ background: t.text }} className="mb-2 h-3 w-4/5 rounded-full opacity-90" />
            <div style={{ background: t.text }} className="mb-3 h-3 w-3/5 rounded-full opacity-50" />
            <div style={{ background: t.accent }} className="h-5 w-24 rounded-full" />
          </div>
          <div style={{ background: t.accent, opacity: 0.25 }} className="h-16 w-20 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <div className={`${grotesk.className} min-h-screen bg-[#0a0c12] text-white`}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-lime-400">
          Live Demo Showcase
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          One institute.{" "}
          <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Five completely different websites.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          Every demo below is a complete, working website for the same coaching institute — same
          content, same features. You simply pick the design you love, we put your name on it.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {features.map((f) => (
            <span
              key={f}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {themes.map((t, i) => (
            <Link
              key={t.href}
              href={t.href}
              className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] ${
                i === 4 ? "md:col-span-2 md:max-w-[calc(50%-12px)]" : ""
              }`}
            >
              <MiniPreview t={t} />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold">{t.name}</h2>
                    <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs text-slate-300">
                      {t.style}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.desc}</p>
                </div>
                <div className="flex shrink-0 gap-1.5 pt-2">
                  {t.swatches.map((c) => (
                    <span
                      key={c}
                      style={{ background: c }}
                      className="h-4 w-4 rounded-full ring-1 ring-white/20"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-lime-400 transition-transform duration-300 group-hover:translate-x-1">
                View demo →
              </p>
            </Link>
          ))}
        </div>

        <footer className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          Built with Next.js · Hindi + English · WhatsApp demo-class booking · Ready in 7 days for your institute
        </footer>
      </div>
    </div>
  );
}
