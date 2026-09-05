import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/content-es";
import { OperationsPage } from "@/routes/operational-excellence";

export const Route = createFileRoute("/es/operational-excellence")({
  head: () => ({
    meta: [
      { title: `Excelencia operativa | ${site.name}` },
      {
        name: "description",
        content:
          "Procedimientos operativos, manuales de empleado, mejora de procesos, KPIs y paneles de desempeño para empresas en Florida.",
      },
    ],
  }),
  component: OperationsPage,
});
