import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { useCopy } from "@/lib/locale";

export function CtaBand() {
  const { copy, href } = useCopy();
  return (
    <section className="bg-primary text-primary-fg">
      <Container className="flex flex-col items-start gap-6 py-14 sm:py-16 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {copy.cta.title}
          </h2>
          <p className="mt-3 text-primary-fg/75">{copy.cta.body}</p>
        </div>
        <Button asChild variant="inverse" size="lg">
          <Link to={href("/contact") as never}>
            {copy.cta.action}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Container>
    </section>
  );
}
