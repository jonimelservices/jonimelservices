import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import * as en from "@/lib/content";
import * as es from "@/lib/content-es";

export type Locale = "en" | "es";
export type Copy = typeof en;

const messages: Record<Locale, Copy> = { en, es };

export function isSpanishPath(pathname: string) {
  return pathname === "/es" || pathname.startsWith("/es/");
}

export function withLocale(path: string, locale: Locale) {
  const bare = path.replace(/^\/es(?=\/|$)/, "") || "/";
  if (locale === "en") return bare;
  return bare === "/" ? "/es" : `/es${bare}`;
}

export function otherLocaleHref(pathname: string) {
  return withLocale(pathname, isSpanishPath(pathname) ? "en" : "es");
}

const LocaleContext = createContext<{
  locale: Locale;
  copy: Copy;
  href: (path: string) => string;
} | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale: Locale = isSpanishPath(pathname) ? "es" : "en";
  const value = useMemo(
    () => ({
      locale,
      copy: messages[locale],
      href: (path: string) => withLocale(path, locale),
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useCopy() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useCopy must be used within LocaleProvider");
  return ctx;
}
