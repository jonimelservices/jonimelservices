import { Link, useRouterState } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { otherLocaleHref, useCopy } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  const { copy, locale, href } = useCopy();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const switchHref = otherLocaleHref(pathname);

  return (
    <footer className="mt-auto border-t border-border bg-bg">
      <Container className="flex flex-col gap-10 py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="max-w-xs">
            <Logo size="footer" />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {copy.site.description}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-subtle">
              {copy.ui.pages}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link to={href("/") as never} className="text-sm text-fg hover:text-primary">
                  {copy.ui.home}
                </Link>
              </li>
              {copy.nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={href(item.to) as never}
                    className="text-sm text-fg hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 text-xs text-subtle">
              <p>
                © {new Date().getFullYear()} {copy.site.name} LLC. {copy.site.rights}
              </p>
              <p>{copy.site.footerLine}</p>
            </div>
            <nav aria-label={copy.ui.legal} className="flex flex-wrap gap-x-4 gap-y-1">
              <Link
                to={href("/privacy") as never}
                className="text-xs text-muted hover:text-primary"
              >
                {copy.ui.privacy}
              </Link>
              <Link
                to={href("/terms") as never}
                className="text-xs text-muted hover:text-primary"
              >
                {copy.ui.terms}
              </Link>
            </nav>
          </div>
          <a
            href={switchHref}
            lang={locale === "en" ? "es" : "en"}
            hrefLang={locale === "en" ? "es" : "en"}
            className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
          >
            {locale === "en" ? copy.ui.toSpanish : copy.ui.toEnglish}
          </a>
        </div>
      </Container>
    </footer>
  );
}
