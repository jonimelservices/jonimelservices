import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { useCopy } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { copy, href } = useCopy();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label={copy.ui.navAria}>
          {copy.nav.slice(0, 2).map((item) => {
            const to = href(item.to);
            const active = pathname === to || pathname === item.to;
            return (
              <Link
                key={item.to}
                to={to as never}
                className={cn(
                  "rounded-sm px-3 py-2 text-sm tracking-tight transition-colors duration-150",
                  active
                    ? "font-medium text-primary"
                    : "text-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button asChild size="sm" className="ml-2">
            <Link to={href("/contact") as never}>{copy.nav[2].label}</Link>
          </Button>
        </nav>

        <button
          type="button"
          className="relative flex size-11 items-center justify-center rounded-sm text-fg lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? copy.ui.closeMenu : copy.ui.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative size-5">
            <Menu
              className={cn(
                "absolute inset-0 size-5 transition-[opacity,transform,filter] duration-200",
                open ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100",
              )}
            />
            <X
              className={cn(
                "absolute inset-0 size-5 transition-[opacity,transform,filter] duration-200",
                open ? "scale-100 opacity-100" : "scale-[0.25] opacity-0 blur-[4px]",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "border-t border-border bg-bg lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {copy.nav.map((item) => {
            const to = href(item.to);
            const active = pathname === to || pathname === item.to;
            return (
              <Link
                key={item.to}
                to={to as never}
                className={cn(
                  "flex min-h-11 items-center rounded-md px-3 text-base",
                  active ? "bg-fg/5 font-medium text-primary" : "text-muted",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </Container>
      </div>
    </header>
  );
}
