import { Download, Mail } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { navItems, profile } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/82 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-3">
          <Avatar className="size-9 rounded-lg border bg-card">
            <AvatarFallback className="rounded-lg bg-card font-mono text-xs text-primary">WC</AvatarFallback>
          </Avatar>
          <span className="font-serif text-xl text-foreground">{profile.shortName}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" aria-label="Email Wendy">
            <a href={`mailto:${profile.email}`}>
              <Mail />
            </a>
          </Button>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <a href={profile.resumePath} target="_blank" rel="noreferrer">
              Resume
              <Download data-icon="inline-end" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
