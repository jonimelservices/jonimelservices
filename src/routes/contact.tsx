import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/content";
import { useCopy } from "@/lib/locale";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact | ${site.name}` },
      {
        name: "description",
        content:
          "Contact Jonimel Services for business planning, financial modeling, and operational excellence in Florida.",
      },
    ],
  }),
  component: ContactPage,
});

export function ContactPage() {
  const { copy } = useCopy();
  return (
    <section className="pb-20">
      <PageHero
        eyebrow={copy.contact.eyebrow}
        title={copy.contact.headline}
        lede={copy.contact.lede}
      />
      <Container>
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <aside className="flex flex-col gap-6 lg:col-span-2">
            <img
              src="/images/florida.jpg"
              alt={copy.contact.imageAlt}
              className="aspect-video w-full rounded-xl object-cover"
              width={1792}
              height={1008}
            />
            <ul className="flex flex-col gap-5">
              {copy.contact.asides.map((item) => (
                <li key={item.title}>
                  <h2 className="font-display text-lg font-medium tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
