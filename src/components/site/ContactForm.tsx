import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/data/services";
import { brands } from "@/data/brands";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";
type Errors = Partial<Record<string, string>>;

const fields = [
  { name: "firstName", label: "First Name", type: "text", required: true, half: true },
  { name: "lastName", label: "Last Name", type: "text", required: true, half: true },
  { name: "email", label: "Email", type: "email", required: true, half: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true, half: true },
  { name: "company", label: "Company Name", type: "text", required: false, half: false },
] as const;

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm outline-none transition-colors duration-200 placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");

  function validate(data: Record<string, string>): Errors {
    const e: Errors = {};
    if (!data.firstName?.trim()) e.firstName = "First name is required.";
    if (!data.lastName?.trim()) e.lastName = "Last name is required.";
    if (!data.email?.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Enter a valid email address.";
    if (!data.phone?.trim()) e.phone = "Phone number is required.";
    else if (data.phone.replace(/[^\d]/g, "").length < 7) e.phone = "Enter a valid phone number.";
    if (!data.interest?.trim()) e.interest = "Select a product or service.";
    if (!data.message?.trim()) e.message = "Please tell us how we can help.";
    else if (data.message.trim().length < 10) e.message = "Please add a little more detail.";
    return e;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      if (site.formEndpoint) {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...data, _to: site.email }),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        // No form service connected yet: hand the enquiry to the visitor's
        // email client. Set `formEndpoint` in src/lib/site.ts to send directly.
        const body = [
          `Name: ${data.firstName} ${data.lastName}`,
          `Email: ${data.email}`,
          `Phone: ${data.phone}`,
          `Company: ${data.company || "-"}`,
          `Product / Service: ${data.interest}`,
          "",
          data.message,
        ].join("\n");
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
          "Website enquiry — Electrosys",
        )}&body=${encodeURIComponent(body)}`;
      }

      setStatus("success");
      setMessage(
        site.formEndpoint
          ? "Thank you — your enquiry has been sent. We'll be in touch shortly."
          : "Your email client has been opened with the enquiry ready to send.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        `We couldn't send your enquiry. Please email us directly at ${site.email}.`,
      );
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-card p-7 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
            <label htmlFor={f.name} className="mb-2 block text-[0.7rem] font-bold tracking-[0.14em] uppercase text-muted-foreground">
              {f.label} {f.required && <span className="text-primary-deep">*</span>}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              autoComplete={f.name}
              aria-invalid={Boolean(errors[f.name])}
              aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
              className={inputClass}
              placeholder={f.label}
            />
            {errors[f.name] && (
              <p id={`${f.name}-error`} className="mt-2 text-xs text-destructive">
                {errors[f.name]}
              </p>
            )}
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor="interest" className="mb-2 block text-[0.7rem] font-bold tracking-[0.14em] uppercase text-muted-foreground">
            Product / Service <span className="text-primary-deep">*</span>
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            aria-invalid={Boolean(errors.interest)}
            className={inputClass}
          >
            <option value="" disabled>
              Select an option
            </option>
            <optgroup label="Services">
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Brands">
              {brands.map((b) => (
                <option key={b.slug} value={b.name}>
                  {b.name}
                </option>
              ))}
            </optgroup>
            <option value="Other">Other / not sure</option>
          </select>
          {errors.interest && (
            <p className="mt-2 text-xs text-destructive">{errors.interest}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-[0.7rem] font-bold tracking-[0.14em] uppercase text-muted-foreground">
            Message <span className="text-primary-deep">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            aria-invalid={Boolean(errors.message)}
            className={inputClass}
            placeholder="Tell us about your site, load and timescales."
          />
          {errors.message && (
            <p className="mt-2 text-xs text-destructive">{errors.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-primary-foreground shadow-green transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === "loading" ? "Sending" : "Send Enquiry"}
      </button>

      <div aria-live="polite" className="mt-5">
        {status === "success" && (
          <p className="flex items-start gap-2 rounded-xl bg-primary-soft p-4 text-sm text-primary-deep">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {message}
          </p>
        )}
        {status === "error" && (
          <p className="flex items-start gap-2 rounded-xl bg-destructive/10 p-4 text-sm text-destructive">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
