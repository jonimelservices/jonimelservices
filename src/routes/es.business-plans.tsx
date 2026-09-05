import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/content-es";
import { BusinessPlansPage } from "@/routes/business-plans";

export const Route = createFileRoute("/es/business-plans")({
  head: () => ({
    meta: [
      { title: `Planificación y estrategia | ${site.name}` },
      {
        name: "description",
        content:
          "Planes de negocio para visas, inversionistas, SBA y más, además de modelos financieros y presentaciones de 12 a 15 diapositivas.",
      },
    ],
  }),
  component: BusinessPlansPage,
});
