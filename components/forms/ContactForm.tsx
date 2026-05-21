"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/validation";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="p-4 rounded-full bg-brand-dim mb-4">
          <CheckCircle className="h-10 w-10 text-brand" />
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">Message received!</h3>
        <p className="text-text-muted mb-6">
          We'll get back to you within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-5 py-2.5 rounded-xl border-2 border-brand text-brand font-semibold text-sm hover:bg-brand-dim transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5">
          Full Name <span className="text-state-error">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          placeholder="Jane Smith"
          className="w-full px-4 py-3 rounded-xl border border-border bg-bg-surface text-text-primary placeholder:text-text-faint text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-state-error">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">
          Email Address <span className="text-state-error">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="jane@company.com"
          className="w-full px-4 py-3 rounded-xl border border-border bg-bg-surface text-text-primary placeholder:text-text-faint text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-state-error">{errors.email.message}</p>
        )}
      </div>

      {/* Company (optional) */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-1.5">
          Company <span className="text-text-faint text-xs font-normal">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          {...register("company")}
          placeholder="Acme Inc."
          className="w-full px-4 py-3 rounded-xl border border-border bg-bg-surface text-text-primary placeholder:text-text-faint text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
        />
      </div>

      {/* Audience type */}
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-1.5">
          I am a… <span className="text-state-error">*</span>
        </label>
        <div className="flex gap-4">
          {(["employer", "candidate"] as const).map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                value={type}
                {...register("audience")}
                className="accent-brand w-4 h-4"
              />
              <span className="text-sm text-text-secondary capitalize group-hover:text-text-primary transition-colors">
                {type === "employer" ? "Hiring (Employer)" : "Job Seeker (Candidate)"}
              </span>
            </label>
          ))}
        </div>
        {errors.audience && (
          <p className="mt-1 text-xs text-state-error">{errors.audience.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">
          Message <span className="text-state-error">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          placeholder="Tell us about your hiring needs or the kind of role you're looking for…"
          className="w-full px-4 py-3 rounded-xl border border-border bg-bg-surface text-text-primary placeholder:text-text-faint text-sm focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-state-error">{errors.message.message}</p>
        )}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <p className="text-sm text-state-error bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand text-brand-foreground font-semibold text-base hover:bg-brand-strong disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
