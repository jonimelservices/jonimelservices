import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/content";
import { useCopy } from "@/lib/locale";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${site.name}` },
      {
        name: "description",
        content:
          "Privacy Policy for JONIMEL SERVICES LLC — how we collect, use, and protect information.",
      },
    ],
  }),
  component: PrivacyPage,
});

export function PrivacyPage() {
  const { copy } = useCopy();
  return <LegalPage {...copy.legal.privacy} />;
}
