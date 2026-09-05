import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/content-es";
import { HomePage } from "@/routes/index";

export const Route = createFileRoute("/es/")({
  head: () => ({
    meta: [
      { title: `Servicios de consultoría en Florida | ${site.name}` },
      { name: "description", content: site.description },
    ],
  }),
  component: HomePage,
});
