import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ServiceBlocks } from "@/components/service-blocks";
import { site } from "@/lib/content";
import { useCopy } from "@/lib/locale";

export const Route = createFileRoute("/business-plans")({
  head: () => ({
    meta: [
      {
        title: `Business Planning & Strategy | ${site.name}`,
      },
      {
        name: "description",
        content:
          "Immigration, investor, teaser, SBA, and specialized business plans — plus financial models and 12–15 slide pitch decks.",
      },
    ],
  }),
  component: BusinessPlansPage,
});

export function BusinessPlansPage() {
  const { copy } = useCopy();
  return (
    <>
      <PageHero
        eyebrow={copy.planning.eyebrow}
        title={copy.planning.headline}
        lede={copy.planning.lede}
        nowrap
      />
      <Container className="pb-12">
        <img
          src="/images/planning.jpg"
          alt={copy.planning.imageAlt}
          className="aspect-wide w-full rounded-xl object-cover object-center"
          width={1728}
          height={1152}
        />
      </Container>
      <ServiceBlocks blocks={copy.planning.blocks} />
      <CtaBand />
    </>
  );
}
