"use client";

import { ExternalLink } from "lucide-react";
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
            className="h-10 flex-none px-0 text-sm"
          >
            {item.discipline}
          </TabsTrigger>
        ))}
      </TabsList>

      {evidenceLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <TabsContent key={item.discipline} value={item.discipline}>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg border bg-card text-primary">
                    <Icon aria-hidden="true" />
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">0{index + 1} / EVIDENCE</div>
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

              <div className="border-l border-border/80 pl-6">
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
                <Button asChild className="mt-6">
                  <a href={item.href} target="_blank" rel="noreferrer">
                    View artifact
                    <ExternalLink data-icon="inline-end" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
