import { Container } from "@/components/container";

export function ServiceBlocks({
  blocks,
}: {
  blocks: { title: string; body: string; items: string[] }[];
}) {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <ol className="grid gap-4 lg:grid-cols-3">
          {blocks.map((block, i) => (
            <li
              key={block.title}
              className="flex flex-col rounded-xl bg-surface p-6 text-left shadow-[var(--shadow-border)] sm:p-7"
            >
              <span className="font-display text-sm tabular-nums text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-fg">
                {block.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{block.body}</p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-fg"
                  >
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
