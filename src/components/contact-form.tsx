import { useState, type FormEvent, type ReactNode } from "react";
import { Check } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input, fieldClass } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCopy } from "@/lib/locale";
import { cn } from "@/lib/utils";

type FieldKey = "name" | "email" | "phone" | "company" | "service" | "message";
type FieldErrors = Partial<Record<FieldKey, string>>;

export function ContactForm() {
  const { copy } = useCopy();
  const f = copy.form;
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const schema = z.object({
    name: z.string().trim().min(2, f.errName),
    email: z.string().trim().email(f.errEmail),
    phone: z
      .string()
      .trim()
      .refine((v) => v === "" || v.replace(/\D/g, "").length >= 10, f.errPhone),
    company: z.string().trim().optional(),
    service: z.enum(["planning", "operations", "both", "other"], {
      error: f.errService,
    }),
    message: z.string().trim().min(12, f.errMessage),
  });

  const serviceLabel = {
    planning: f.planning,
    operations: f.operations,
    both: f.both,
    other: f.other,
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    if (String(fd.get("company_website") ?? "").trim()) return;

    const values = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      service: String(fd.get("service") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as FieldKey]) {
          next[key as FieldKey] =
            key === "service" ? f.errService : issue.message;
        }
      }
      if (!values.service) next.service = f.errService;
      setErrors(next);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setSending(true);

    const payload = {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || "—",
      company: parsed.data.company || "—",
      service: serviceLabel[parsed.data.service],
      message: parsed.data.message,
      _subject: `New inquiry from ${parsed.data.name}`,
      _template: "table",
      _captcha: "false",
      _replyto: parsed.data.email,
    };

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(copy.contact.inbox)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        },
      );
      const data = (await res.json()) as { success?: string | boolean; message?: string };
      const ok = data.success === true || data.success === "true";
      if (!res.ok || !ok) {
        throw new Error(data.message || "Could not send.");
      }
      setSent(true);
      formEl.reset();
    } catch {
      setSubmitError(f.errSend);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-surface p-8 shadow-[var(--shadow-border)] sm:p-10">
        <span className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-fg">
          <Check className="size-5" strokeWidth={2} />
        </span>
        <h2 className="mt-5 font-display text-2xl font-medium tracking-tight">
          {f.sentTitle}
        </h2>
        <p className="mt-2 text-muted">{f.sentBody}</p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setSent(false)}
        >
          {f.sendAnother}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8"
    >
      <div className="sr-only" aria-hidden>
        <label htmlFor="company_website">Website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={f.name} htmlFor="name" error={errors.name}>
          <Input id="name" name="name" autoComplete="name" required />
        </Field>
        <Field label={f.email} htmlFor="email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </Field>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label={f.phone} htmlFor="phone" error={errors.phone} optional={f.optional}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(305) 555-0100"
          />
        </Field>
        <Field label={f.company} htmlFor="company" error={errors.company} optional={f.optional}>
          <Input id="company" name="company" autoComplete="organization" />
        </Field>
      </div>
      <div className="mt-5">
        <Field label={f.service} htmlFor="service" error={errors.service}>
          <div className="relative">
            <select
              id="service"
              name="service"
              defaultValue=""
              required
              aria-invalid={errors.service ? true : undefined}
              aria-describedby={errors.service ? "service-error" : undefined}
              onChange={() =>
                setErrors((prev) => {
                  if (!prev.service) return prev;
                  const next = { ...prev };
                  delete next.service;
                  return next;
                })
              }
              className={cn(
                fieldClass,
                "appearance-none pr-10",
                errors.service && "ring-2 ring-danger/55",
              )}
            >
              <option value="" disabled>
                {f.selectService}
              </option>
              <option value="planning">{f.planning}</option>
              <option value="operations">{f.operations}</option>
              <option value="both">{f.both}</option>
              <option value="other">{f.other}</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-subtle">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </Field>
      </div>
      <div className="mt-5">
        <Field label={f.message} htmlFor="message" error={errors.message}>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder={f.messagePlaceholder}
          />
        </Field>
      </div>
      {submitError ? (
        <p className="mt-4 text-sm font-medium text-danger" role="alert">
          {submitError}
        </p>
      ) : null}
      <Button
        type="submit"
        className="mt-6 w-full sm:w-auto"
        size="lg"
        disabled={sending}
      >
        {sending ? f.sending : f.send}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>
        {label}
        {optional ? (
          <span className="ml-1.5 font-normal text-subtle">{optional}</span>
        ) : null}
      </Label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-sm font-medium text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
