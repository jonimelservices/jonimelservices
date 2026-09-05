import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/content-es";
import { PrivacyPage } from "@/routes/privacy";

export const Route = createFileRoute("/es/privacy")({
  head: () => ({
    meta: [
      { title: `Política de privacidad | ${site.name}` },
      {
        name: "description",
        content:
          "Política de privacidad de JONIMEL SERVICES LLC: cómo recopilamos, usamos y protegemos la información.",
      },
    ],
  }),
  component: PrivacyPage,
});
