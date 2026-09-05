import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { useCopy } from "@/lib/locale";

export function NotFound() {
  const { copy, href } = useCopy();
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="text-sm font-medium tracking-wide text-primary">404</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-fg">
        {copy.ui.notFoundTitle}
      </h1>
      <p className="mt-4 max-w-md text-muted">{copy.ui.notFoundBody}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link to={href("/") as never}>{copy.ui.home}</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link to={href("/contact") as never}>{copy.nav[2].label}</Link>
        </Button>
      </div>
    </Container>
  );
}
