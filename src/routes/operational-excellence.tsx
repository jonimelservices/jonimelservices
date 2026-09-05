import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ServiceBlocks } from "@/components/service-blocks";
import { site } from "@/lib/content";
import { useCopy } from "@/lib/locale";

export const Route = createFileRoute("/operational-excellence")({
  head: () => ({
    meta: [
      {
        title: `Operational Excellence | ${site.name}`,
      },
      {
        name: "description",
        content:
          "SOPs, employee handbooks, process improvement, KPIs, and performance dashboards so Florida businesses can scale without the strain.",
      },
    ],
  }),
  component: OperationsPage,
});

export function OperationsPage() {
  const { copy } = useCopy();
  return (
    <>
      <PageHero
        eyebrow={copy.operations.eyebrow}
        title={copy.operations.headline}
        lede={copy.operations.lede}
      />
      <Container className="pb-12">
        <img
          src="/images/operations.jpg"
          alt={copy.operations.imageAlt}
          className="aspect-wide w-full rounded-xl object-cover object-center"
          width={1728}
          height={1152}
        />
      </Container>
      <ServiceBlocks blocks={copy.operations.blocks} />
      <CtaBand />
    </>
  );
}
