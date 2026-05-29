import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { EvidenceTabs } from "@/components/evidence-tabs";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  education,
  experience,
  leadership,
  narrativeStats,
  profile,
  skills,
  thinkingModes,
} from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProfileSection />
        <ExperienceSection />
        <EvidenceSection />
        <ContactSection />
      </main>
    </>
  );
}

function HeroSection() {
  return (
    <section className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-20">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-6">
          <h1 className="max-w-4xl font-serif text-[clamp(4.5rem,12vw,9.8rem)] leading-[0.86] text-foreground">
            {profile.name}
          </h1>
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="font-serif text-3xl leading-tight text-primary md:text-4xl">
              {profile.positioning}
            </p>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">{profile.summary}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href="#profile">
              Start with profile
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

        <div className="grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 border-y py-6 sm:grid-cols-4">
          {narrativeStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div key={stat.label} className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary">
                  <Icon aria-hidden="true" />
                  <span className="font-mono text-2xl text-foreground">{stat.value}</span>
                </div>
                <p className="text-sm leading-5 text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <SensemakingField />
    </section>
  );
}

function SensemakingField() {
  return (
    <div className="relative min-h-[36rem] overflow-hidden border bg-card/70 p-5 shadow-[0_24px_80px_oklch(0.19_0.025_245_/_0.08)] backdrop-blur">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="grid h-full gap-5 lg:grid-cols-[0.72fr_1fr]">
        <div className="flex flex-col justify-between border-r border-border/80 pr-5">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase text-muted-foreground">Working Model</p>
            <h2 className="font-serif text-4xl leading-tight">
              Human context, accounting evidence, analytical structure.
            </h2>
          </div>
          <div className="mt-12 flex flex-col gap-3 font-mono text-xs">
            {["Source documents", "Assumption logic", "Review-ready output"].map((item, index) => (
              <div key={item} className="grid grid-cols-[2.4rem_1fr] items-center border-t border-border/70 pt-3">
                <span className="text-primary">0{index + 1}</span>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative grid content-center gap-4">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full text-primary/25"
            viewBox="0 0 420 420"
            preserveAspectRatio="none"
          >
            <path d="M70 80 C190 20, 260 120, 350 78" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M60 220 C160 150, 250 270, 360 200" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M82 330 C180 390, 265 310, 350 350" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
          {thinkingModes.map((mode, index) => {
            const Icon = mode.icon;

            return (
              <div
                key={mode.title}
                className="relative grid grid-cols-[3.5rem_1fr] gap-4 border bg-background/72 p-4 backdrop-blur-sm"
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-serif text-2xl leading-none">{mode.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                  </div>
                  <p className="font-mono text-xs text-primary">{mode.label}</p>
                  <p className="max-w-xl text-sm leading-6 text-muted-foreground">{mode.copy}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <section id="profile" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionIntro
          label="Profile"
          title="A portfolio about judgment, not just files."
          copy="The redesign frames Wendy as someone who can move between accounting evidence, finance analysis, data tools, and operational execution. Projects are still present, but they support the story rather than dominate it."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {thinkingModes.map((mode) => {
            const Icon = mode.icon;

            return (
              <Card key={mode.title} size="sm" className="bg-card/78">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon aria-hidden="true" />
                    {mode.title}
                  </CardTitle>
                  <CardDescription>{mode.label}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-muted-foreground">{mode.copy}</CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="border-y bg-card/42">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-10">
          <SectionIntro
            label="Experience"
            title="A professional path across accounting, research, operations, and product."
            copy="The timeline stays factual and compact, with impact bullets drawn from the resume."
          />

          <div className="flex flex-col gap-0 border-y">
            {experience.map((item) => (
              <article key={`${item.organization}-${item.role}`} className="grid gap-5 border-b py-7 last:border-b-0 md:grid-cols-[13rem_1fr]">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-primary">{item.date}</span>
                  <span className="text-sm text-muted-foreground">{item.place}</span>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="font-serif text-3xl leading-tight">{item.role}</h3>
                    <p className="mt-1 text-primary">{item.organization}</p>
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
        </div>

        <aside className="flex flex-col gap-5">
          <EducationCard />
          <SkillsCard />
          <LeadershipCard />
        </aside>
      </div>
    </section>
  );
}

function EducationCard() {
  return (
    <Card className="bg-background/75">
      <CardHeader>
        <CardTitle>Education</CardTitle>
        <CardDescription>Accounting, analytics, economics, and finance foundation.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {education.map((item) => (
          <div key={item.school} className="flex flex-col gap-2 border-b pb-5 last:border-b-0 last:pb-0">
            <h3 className="font-serif text-2xl leading-tight">{item.school}</h3>
            <p className="text-sm text-foreground">{item.degree}</p>
            <p className="font-mono text-xs text-muted-foreground">{item.meta} · {item.place}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {item.coursework.map((course) => (
                <Badge key={course} variant="secondary">{course}</Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function SkillsCard() {
  return (
    <Card className="bg-background/75">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
        <CardDescription>Technical tools and language range.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <SkillGroup title="Technical" items={skills.technical} />
        <Separator />
        <SkillGroup title="Languages" items={skills.languages} />
      </CardContent>
    </Card>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-mono text-xs uppercase text-primary">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item} variant="outline" className="h-7 bg-card">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function LeadershipCard() {
  return (
    <Card className="bg-background/75">
      <CardHeader>
        <CardTitle>Leadership</CardTitle>
        <CardDescription>Professional development and student organization roles.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {leadership.map((item) => (
          <div key={item.organization} className="flex flex-col gap-1 border-b pb-4 last:border-b-0 last:pb-0">
            <p className="font-serif text-xl">{item.role}</p>
            <p className="text-sm text-primary">{item.organization}</p>
            <p className="font-mono text-xs text-muted-foreground">{item.date}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function EvidenceSection() {
  return (
    <section id="evidence" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="grid gap-12">
        <SectionIntro
          label="Evidence"
          title="A few artifacts, organized by what they prove."
          copy="Instead of a project-heavy gallery, this section shows representative work as evidence of technical range: modeling, audit judgment, cost analysis, and venture finance."
        />
        <EvidenceTabs />
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
      <div className="grid gap-8 border bg-foreground p-6 text-background md:grid-cols-[1fr_auto] md:items-center md:p-10">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase text-background/65">Contact</p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">Open to accounting, tax, audit, finance, and analytics conversations.</h2>
          <p className="max-w-2xl text-sm leading-7 text-background/72">
            The fastest way to reach Wendy is by email. LinkedIn and resume are available for a fuller professional record.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="secondary">
            <a href={`mailto:${profile.email}`}>
              Email Wendy
              <Mail data-icon="inline-end" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outline" className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
              <ExternalLink data-icon="inline-end" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="flex max-w-3xl flex-col gap-4">
      <p className="font-mono text-xs uppercase text-primary">{label}</p>
      <h2 className="font-serif text-4xl leading-tight md:text-6xl">{title}</h2>
      <p className="text-base leading-8 text-muted-foreground md:text-lg">{copy}</p>
    </div>
  );
}
