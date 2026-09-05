import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  lede,
  nowrap,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  nowrap?: boolean;
}) {
  return (
    <section className="pt-12 pb-8 sm:pt-20 sm:pb-12">
      <Container>
        <p className="text-sm font-medium tracking-wide text-primary">{eyebrow}</p>
        <h1
          className={cn(
            "mt-3 font-display font-medium tracking-tight text-fg",
            nowrap
              ? "text-3xl sm:text-4xl md:text-5xl md:whitespace-nowrap"
              : "max-w-3xl text-4xl sm:text-5xl lg:text-6xl",
          )}
        >
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
      </Container>
    </section>
  );
}
