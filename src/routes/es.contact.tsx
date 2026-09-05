import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/content-es";
import { ContactPage } from "@/routes/contact";

export const Route = createFileRoute("/es/contact")({
  head: () => ({
    meta: [
      { title: `Contacto | ${site.name}` },
      {
        name: "description",
        content:
          "Contacte a Jonimel Services para planificación empresarial, modelado financiero y excelencia operativa en Florida.",
      },
    ],
  }),
  component: ContactPage,
});
