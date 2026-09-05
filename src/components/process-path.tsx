import { useEffect, useState } from "react";
import { Compass, Search, TrendingUp } from "lucide-react";
import { Container } from "@/components/container";
import { useCopy } from "@/lib/locale";
import { cn } from "@/lib/utils";

const icons = [Search, Compass, TrendingUp];

export function ProcessPath() {
  const { copy } = useCopy();
  const steps = copy.process.steps;
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || pinned) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((n) => (n + 1) % steps.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused, pinned, steps.length]);

  return (
    <section
      id="process"
      className="relative border-y border-border py-16 sm:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container className="relative">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          {copy.process.title}
        </h2>
        <p className="mt-3 max-w-xl text-muted">{copy.process.lede}</p>

        <div className="relative mx-auto mt-12 max-w-2xl">
          <div className="absolute top-4 right-4 left-4 h-px bg-border" />
          <div
            className="absolute top-4 left-4 h-px bg-primary"
            style={{
              width: `calc((100% - 2rem) * ${active / 2})`,
              transition: "width var(--motion-slow) var(--ease-smooth-out)",
            }}
          />
          <div
            className="path-bead absolute top-4 size-2.5 rounded-full bg-primary"
            style={{
              left: `calc(1rem + (100% - 2rem) * ${active / 2})`,
              transition: "left var(--motion-slow) var(--ease-smooth-out)",
            }}
          />

          <div className="relative flex justify-between">
            {steps.map((step, i) => {
              const on = i === active;
              return (
                <button
                  key={step.n}
                  type="button"
                  aria-current={on ? "step" : undefined}
                  aria-label={`${step.n}: ${step.title}`}
                  onClick={() => {
                    setActive(i);
                    setPinned(true);
                  }}
                  onMouseEnter={() => setActive(i)}
                  className="flex flex-col items-center"
                >
                  <span
                    className={cn(
                      "relative flex size-8 items-center justify-center rounded-full text-xs font-medium tabular-nums",
                      "transition-[background-color,color,box-shadow,transform] duration-200",
                      on
                        ? "bg-primary text-primary-fg shadow-[var(--shadow-border-hover)]"
                        : "bg-surface text-muted shadow-[var(--shadow-border)]",
                    )}
                  >
                    {on ? <span className="path-node-ping" aria-hidden /> : null}
                    <span className="relative">{step.n.replace(/^0/, "")}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {steps.map((step, i) => {
            const Icon = icons[i];
            const on = i === active;
            return (
              <li key={step.n}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(i);
                    setPinned(true);
                  }}
                  onMouseEnter={() => setActive(i)}
                  className={cn(
                    "group relative flex h-full w-full flex-col overflow-hidden rounded-xl p-6 text-left sm:p-7",
                    "transition-[transform,box-shadow,background-color] duration-200 ease-[var(--ease-out)]",
                    on
                      ? "z-10 -translate-y-1 bg-surface shadow-[var(--shadow-border-hover)]"
                      : "bg-bg shadow-[var(--shadow-border)] hover:-translate-y-1",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-md",
                      "transition-[background-color,color] duration-200",
                      on
                        ? "bg-primary text-primary-fg"
                        : "bg-primary/10 text-primary",
                    )}
                  >
                    <Icon
                      className={cn(
                        "size-5",
                        on && i === 0 && "path-icon-scan",
                        on && i === 1 && "path-icon-spin",
                        on && i === 2 && "path-icon-rise",
                      )}
                      strokeWidth={1.75}
                    />
                  </span>
                  <p className="mt-5 font-display text-sm tabular-nums text-primary">
                    {step.n}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.more}
                  </p>
                  <span className="mt-6 flex gap-1.5" aria-hidden>
                    {steps.map((_, d) => (
                      <span
                        key={d}
                        className={cn(
                          "size-1.5 rounded-full bg-primary/20",
                          on && "path-dot",
                        )}
                        style={on ? { animationDelay: `${d * 180}ms` } : undefined}
                      />
                    ))}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
