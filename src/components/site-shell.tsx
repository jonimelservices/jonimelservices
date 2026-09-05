import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useCopy } from "@/lib/locale";

export function SiteShell({ children }: { children: ReactNode }) {
  const { copy } = useCopy();
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-fg"
      >
        {copy.ui.skip}
      </a>
      <SiteHeader />
      <main id="content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
