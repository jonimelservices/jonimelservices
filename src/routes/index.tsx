import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { ProcessPath } from "@/components/process-path";
import { site } from "@/lib/content";
import { useCopy } from "@/lib/locale";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `Expert Consultancy Services in Florida | ${site.name}`,
      },
      { name: "description", content: site.description },
    ],
  }),
  component: HomePage,
});

export function HomePage() {
  const { copy, href } = useCopy();
  return (
    <>
      <section className="pt-12 pb-10 sm:pt-20 sm:pb-16">
        <Container>
          <h1 className="font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl lg:text-6xl">
            <span className="block">{copy.home.headline}</span>
            <span className="block">{copy.home.headline2}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {copy.home.lede}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#services">
                {copy.home.explore}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to={href("/contact") as never}>{copy.home.getInTouch}</Link>
            </Button>
          </div>
        </Container>
        <Container className="mt-12 sm:mt-16">
          <figure>
            <img
              src="/images/hero.jpg"
              alt={copy.home.heroAlt}
              className="aspect-video w-full rounded-xl object-cover"
              width={1792}
              height={1008}
            />
          </figure>
        </Container>
      </section>

      <section id="services" className="py-16 sm:py-24">
        <Container>
          <div className="flex max-w-2xl flex-col gap-3">
            <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
              {copy.home.servicesTitle}
            </h2>
            <p className="text-base text-muted">
              {copy.home.servicesLede}
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {copy.services.map((service) => (
              <Link
                key={service.to}
                to={href(service.to) as never}
                className="group flex flex-col overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[var(--shadow-border-hover)]"
              >
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="aspect-photo w-full object-cover"
                  width={1728}
                  height={1152}
                  loading="lazy"
                />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-medium tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    {copy.home.viewService}
                    <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ProcessPath />

      <section className="py-16 sm:py-24">
        <Container>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {copy.home.resultsTitle}
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {copy.testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8"
              >
                <div className="flex gap-0.5 text-primary" aria-label={copy.ui.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-primary" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-display text-xl font-medium leading-snug tracking-tight text-fg">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted">
                  <span className="font-medium text-fg">{t.name}</span>
                  {" · "}
                  {t.role}, {t.place}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
