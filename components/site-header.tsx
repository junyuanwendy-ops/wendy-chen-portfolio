import { Briefcase, Download, FolderGit2, Heart, Home, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#evidence", icon: FolderGit2 },
  { label: "Hobbies", href: "#hobbies", icon: Heart },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-2xl font-bold tracking-tight text-primary">
          WC<span className="text-foreground">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
              >
                <Icon className="size-4" aria-hidden="true" />
                {item.label}
              </a>
            );
          })}
        </div>

        <Button asChild size="sm" className="shadow-[0_0_20px_oklch(0.645_0.17_256_/_0.35)]">
          <a href={profile.resumePath} target="_blank" rel="noreferrer">
            Resume
            <Download data-icon="inline-end" aria-hidden="true" />
          </a>
        </Button>
      </nav>
    </header>
  );
}
