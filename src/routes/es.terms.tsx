import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/content-es";
import { TermsPage } from "@/routes/terms";

export const Route = createFileRoute("/es/terms")({
  head: () => ({
    meta: [
      { title: `Términos y condiciones | ${site.name}` },
      {
        name: "description",
        content:
          "Términos y condiciones de los servicios de consultoría de JONIMEL SERVICES LLC en Florida.",
      },
    ],
  }),
  component: TermsPage,
});
