"use client";

import { ExternalLink, MousePointer2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { evidenceLinks } from "@/data/portfolio";

export function EvidenceTabs() {
  return (
    <Tabs defaultValue={evidenceLinks[0].discipline} className="w-full">
      <TabsList variant="line" className="mb-8 flex w-full flex-wrap justify-start gap-3 border-b border-border/80 p-0">
        {evidenceLinks.map((item) => (
          <TabsTrigger
            key={item.discipline}
            value={item.discipline}
            className="h-10 flex-none px-0 text-sm font-bold text-white/90 hover:text-white data-[state=active]:text-white"
          >
            {item.discipline}
          </TabsTrigger>
        ))}
      </TabsList>

      {evidenceLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <TabsContent key={item.discipline} value={item.discipline}>
            <div className="grid gap-8 rounded-xl border bg-card/40 p-6 backdrop-blur-sm lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Icon aria-hidden="true" />
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">0{index + 1} / PROJECT</div>
                </div>
                <div>
                  <h3 className="max-w-2xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                    {item.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.artifacts.map((artifact) => (
                    <Badge key={artifact} variant="outline" className="h-7 border-primary/20 bg-primary/5 text-primary">
                      {artifact}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 lg:border-l lg:border-border/80 lg:pl-6">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${item.company.name} project artifact`}
                  className="group block"
                >
                  <div className="flex h-32 items-center justify-center overflow-hidden rounded-xl border bg-white p-6 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/60 group-hover:shadow-[0_8px_30px_oklch(0.645_0.17_256_/_0.25)]">
                    {item.company.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.company.logo}
                        alt={`${item.company.name} logo`}
                        className="max-h-full max-w-[78%] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <span className="font-display text-3xl font-bold text-neutral-800">
                        {item.company.name}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-center font-mono text-xs text-muted-foreground">
                    {item.company.name} · <span className="text-primary">click to explore</span>
                  </p>
                </a>

                <div className="grid gap-3 font-mono text-xs text-muted-foreground">
                  <div className="grid grid-cols-[9rem_1fr] border-b border-border/70 pb-3">
                    <span>Role</span>
                    <span className="text-foreground">Analyst / preparer</span>
                  </div>
                  <div className="grid grid-cols-[9rem_1fr] border-b border-border/70 pb-3">
                    <span>Output</span>
                    <span className="text-foreground">Model, memo, or presentation artifact</span>
                  </div>
                  <div className="grid grid-cols-[9rem_1fr] border-b border-border/70 pb-3">
                    <span>Portfolio use</span>
                    <span className="text-foreground">Proof of judgment and technical range</span>
                  </div>
                </div>

                <div className="relative w-fit">
                  <Button asChild>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      View artifact
                      <ExternalLink data-icon="inline-end" aria-hidden="true" />
                    </a>
                  </Button>
                  <span aria-hidden="true" className="pointer-events-none absolute -bottom-3 -right-3">
                    <span className="relative flex size-7 items-center justify-center">
                      <span className="absolute size-7 animate-ping rounded-full bg-accent/40" />
                      <MousePointer2 className="animate-clicktap relative size-5 fill-accent text-accent drop-shadow" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
