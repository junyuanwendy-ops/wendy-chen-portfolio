import { ArrowDown, Mail } from "lucide-react";
import { EvidenceTabs } from "@/components/evidence-tabs";
import { SiteHeader } from "@/components/site-header";
import { Typewriter } from "@/components/typewriter";
import { Button } from "@/components/ui/button";
import {
  education,
  experience,
  favoriteAlbums,
  hobbies,
  leadership,
  profile,
  roles,
  skills,
  socials,
} from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <HobbiesSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-2xl text-foreground md:text-3xl">
            Hi There!{" "}
            <span className="inline-block origin-[70%_70%] animate-pulse">👋</span>
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
            I&apos;m <span className="text-primary">{profile.name}</span>
          </h1>
          <p className="font-mono text-xl text-accent md:text-2xl">
            <Typewriter words={roles} />
          </p>
        </div>

        <p className="max-w-xl text-base leading-8 text-muted-foreground">{profile.summary}</p>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="shadow-[0_0_24px_oklch(0.645_0.17_256_/_0.35)]">
            <a href="#evidence">
              View projects
              <ArrowDown data-icon="inline-end" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`mailto:${profile.email}`}>
              Email Wendy
              <Mail data-icon="inline-end" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>

      <HeroVisual />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
      <div className="absolute -inset-6 rounded-[2rem] bg-primary/20 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/70 p-5 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-1.5 pb-4">
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-chart-3/70" />
          <span className="size-2.5 rounded-full bg-primary/70" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">valuation_model.xlsx</span>
        </div>

        <svg viewBox="0 0 320 150" className="w-full" role="img" aria-label="Valuation chart">
          <defs>
            <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.645 0.17 256)" />
              <stop offset="100%" stopColor="oklch(0.645 0.17 256 / 0.25)" />
            </linearGradient>
          </defs>
          <line x1="8" y1="130" x2="312" y2="130" stroke="currentColor" strokeOpacity="0.18" />
          {[
            { x: 30, h: 40 },
            { x: 80, h: 64 },
            { x: 130, h: 54 },
            { x: 180, h: 86 },
            { x: 230, h: 104 },
            { x: 280, h: 122 },
          ].map((b) => (
            <rect
              key={b.x}
              x={b.x - 14}
              y={130 - b.h}
              width="28"
              height={b.h}
              rx="3"
              fill="url(#barGrad)"
            />
          ))}
          <polyline
            points="30,86 80,70 130,78 180,52 230,36 280,18"
            fill="none"
            stroke="oklch(0.72 0.13 233)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {[
            [30, 86],
            [80, 70],
            [130, 78],
            [180, 52],
            [230, 36],
            [280, 18],
          ].map(([cx, cy]) => (
            <circle key={cx} cx={cx} cy={cy} r="3.2" fill="oklch(0.72 0.13 233)" />
          ))}
        </svg>

        <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border/70 pt-4">
          {[
            { k: "DCF EV", v: "$8.4B" },
            { k: "IRR", v: "24%" },
            { k: "MOIC", v: "2.8x" },
          ].map((m) => (
            <div key={m.k} className="flex flex-col gap-1">
              <span className="font-mono text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                {m.k}
              </span>
              <span className="font-display text-xl font-semibold text-foreground">{m.v}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {["DCF", "LBO", "Comps", "WACC", "Python"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionHeading pre="Let Me" accent="Introduce" post="Myself" />
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="flex flex-col gap-5 font-mono text-base leading-8 text-muted-foreground">
          <p>
            I&apos;m a <span className="font-medium text-primary">fourth-year student at UC San Diego</span>,
            majoring in <span className="font-medium text-primary">Economics</span> with minors in{" "}
            <span className="font-medium text-primary">Accounting and Finance</span>.
          </p>
          <p>
            I build models and analyses end to end &mdash; <span className="font-medium text-primary">DCF</span>,{" "}
            <span className="font-medium text-primary">LBO</span>, comparable companies, and{" "}
            <span className="font-medium text-primary">audit and tax workpapers</span> &mdash; and connect the
            numbers back to a clear business story.
          </p>
          <p>
            I work across <span className="font-medium text-primary">Excel, Python, R, Stata, Tableau, and SQL</span>{" "}
            to clean, automate, and communicate data, and I&apos;m heading into a{" "}
            <span className="font-medium text-primary">core tax internship at BDO USA</span>.
          </p>
          <p>
            Off the clock, you&apos;ll catch me on the pickleball or tennis court, at the piano, or
            with music on repeat.
          </p>
        </div>

        <HobbyShowcase />
      </div>
    </section>
  );
}

function HobbyShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-4 rounded-3xl bg-primary/15 blur-2xl" aria-hidden="true" />
      <div className="relative rounded-2xl border bg-card p-5 shadow-xl">
        <p className="font-mono text-xs uppercase tracking-wide text-primary">A few of my favorite things</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.label}
              className="flex flex-col items-center gap-2 rounded-xl border bg-secondary/40 py-5 transition-colors hover:border-primary/45"
            >
              <span
                className="animate-floaty text-4xl"
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                {hobby.emoji}
              </span>
              <span className="font-mono text-xs text-foreground">{hobby.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-accent/35 bg-accent/10 p-3">
          <span className="text-2xl">🎧</span>
          <div className="flex flex-col">
            <span className="font-mono text-[0.65rem] uppercase tracking-wide text-accent">On repeat</span>
            <span className="text-sm font-medium text-foreground">
              {favoriteAlbums[0].title} &mdash; {favoriteAlbums[0].artist}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionHeading pre="My" accent="Experience" />
      <div className="mx-auto mt-14 flex max-w-4xl flex-col gap-5">
        {experience.map((item) => (
          <article
            key={`${item.organization}-${item.role}`}
            className="grid gap-5 rounded-xl border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/45 md:grid-cols-[14rem_1fr]"
          >
            <div className="flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-3">
              <BrandLogo src={item.logo} name={item.organization} />
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-primary">{item.date}</span>
                <span className="text-sm text-muted-foreground">{item.place}</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-display text-2xl font-semibold leading-tight">{item.role}</h3>
                <p className="mt-1 font-medium text-primary">{item.organization}</p>
              </div>
              <ul className="flex flex-col gap-2 text-sm leading-6 text-muted-foreground">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="grid grid-cols-[1rem_1fr] gap-3">
                    <span className="mt-2 size-1.5 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="evidence" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionHeading pre="My" accent="Projects" />
      <p className="mx-auto mt-5 max-w-2xl text-center font-mono text-sm leading-7 text-muted-foreground">
        Class and personal projects from my undergrad, grouped by the kind of work each one shows.
      </p>
      <div className="mt-12">
        <EvidenceTabs />
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionHeading pre="Professional" accent="Skillset" />
      <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
        <SkillGroup title="Technical" items={skills.technical} />
        <SkillGroup title="Languages" items={skills.languages} />
      </div>
    </section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border bg-card/50 p-6 backdrop-blur-sm">
      <p className="font-mono text-xs uppercase tracking-wide text-primary">{title}</p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 font-mono text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function HobbiesSection() {
  const items = [
    ...hobbies.map((h) => ({ key: h.label, emoji: h.emoji, primary: h.label, secondary: "Hobby" })),
    ...favoriteAlbums.map((a) => ({
      key: a.title,
      emoji: a.emoji,
      primary: a.title,
      secondary: a.artist,
    })),
  ];
  const loop = [...items, ...items];

  return (
    <section id="hobbies" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionHeading pre="Beyond the" accent="Numbers" />
      <p className="mx-auto mt-5 max-w-2xl text-center font-mono text-sm leading-7 text-muted-foreground">
        The hobbies and music that keep me balanced &mdash; from the court to the keys.
      </p>
      <div className="marquee-mask mt-12 overflow-hidden py-2">
        <div className="flex w-max animate-marquee gap-5">
          {loop.map((item, index) => (
            <div
              key={`${item.key}-${index}`}
              className="flex min-w-[13rem] items-center gap-3 rounded-2xl border bg-card px-5 py-4 shadow-sm"
            >
              <span className="text-3xl">{item.emoji}</span>
              <div className="flex flex-col">
                <span className="font-display text-base font-semibold leading-tight text-foreground">
                  {item.primary}
                </span>
                <span className="font-mono text-xs text-muted-foreground">{item.secondary}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionHeading pre="My" accent="Education" />
      <div className="mx-auto mt-14 flex max-w-4xl flex-col gap-5">
        {education.map((item) => (
          <article
            key={item.school}
            className="grid grid-cols-[auto_1fr] items-center gap-5 rounded-xl border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/45"
          >
            <BrandLogo src={item.logo} name={item.school} />
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-xl font-semibold leading-tight">{item.school}</h3>
              <p className="text-sm text-foreground">{item.degree}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {item.meta} · {item.place}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-wide text-primary">Leadership</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {leadership.map((item) => (
            <div key={item.organization} className="rounded-xl border bg-card/50 p-5 backdrop-blur-sm">
              <p className="font-display text-lg font-semibold">{item.role}</p>
              <p className="text-sm font-medium text-primary">{item.organization}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8">
      <SectionHeading pre="Find Me" accent="On" />
      <p className="mt-5 font-mono text-sm text-muted-foreground">
        Feel free to <span className="text-accent">connect</span> with me
      </p>
      <div className="mt-9 flex justify-center gap-4">
        {socials.map((item) => {
          const Icon = item.icon;
          const external = item.href.startsWith("http") || item.href.startsWith("/");
          return (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="grid size-12 place-items-center rounded-full border border-border bg-card/60 text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_oklch(0.645_0.17_256_/_0.45)]"
            >
              <Icon className="size-5" aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>Designed &amp; developed by Wendy Chen</p>
        <p className="font-mono text-xs">© 2026 Wendy Chen</p>
        <div className="flex gap-3">
          {socials.map((item) => {
            const Icon = item.icon;
            const external = item.href.startsWith("http") || item.href.startsWith("/");
            return (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

function BrandLogo({ src, name }: { src?: string | null; name: string }) {
  if (src) {
    return (
      <div className="flex h-14 w-28 shrink-0 items-center justify-center rounded-lg border border-border bg-white px-3 py-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={`${name} logo`} className="max-h-full max-w-full object-contain" />
      </div>
    );
  }

  const initials = name
    .replace(/,.*$/, "")
    .split(/\s+/)
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-14 w-28 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
      <span className="font-mono text-base text-primary">{initials}</span>
    </div>
  );
}

function SectionHeading({ pre, accent, post }: { pre: string; accent: string; post?: string }) {
  return (
    <h2 className="text-center font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
      {pre} <span className="text-primary">{accent}</span>
      {post ? ` ${post}` : ""}
    </h2>
  );
}
