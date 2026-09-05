import { Container } from "@/components/container";

type Section = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  after?: string;
};

export function LegalPage({
  title,
  effective,
  sections,
  closing,
}: {
  title: string;
  effective?: string;
  sections: Section[];
  closing?: string;
}) {
  return (
    <article className="pb-20">
      <Container className="max-w-3xl pt-12 sm:pt-20">
        <h1 className="font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
          {title}
        </h1>
        {effective ? (
          <p className="mt-4 text-sm text-muted">{effective}</p>
        ) : null}
        <div className="mt-10 flex flex-col gap-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-xl font-medium tracking-tight text-fg">
                {section.title}
              </h2>
              {section.paragraphs?.map((p) => (
                <p key={p.slice(0, 48)} className="mt-3 text-sm leading-relaxed text-muted">
                  {p}
                </p>
              ))}
              {section.items ? (
                <ul className="mt-3 flex flex-col gap-2">
                  {section.items.map((item) => (
                    <li
                      key={item.slice(0, 48)}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      <span className="text-fg">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.after ? (
                <p className="mt-3 text-sm leading-relaxed text-muted">{section.after}</p>
              ) : null}
            </section>
          ))}
        </div>
        {closing ? (
          <p className="mt-12 text-sm italic leading-relaxed text-muted">{closing}</p>
        ) : null}
      </Container>
    </article>
  );
}
