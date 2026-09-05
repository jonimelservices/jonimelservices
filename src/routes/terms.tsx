import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/content";
import { useCopy } from "@/lib/locale";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions | ${site.name}` },
      {
        name: "description",
        content:
          "Terms & Conditions for JONIMEL SERVICES LLC consultancy services in Florida.",
      },
    ],
  }),
  component: TermsPage,
});

export function TermsPage() {
  const { copy } = useCopy();
  return <LegalPage {...copy.legal.terms} />;
}
