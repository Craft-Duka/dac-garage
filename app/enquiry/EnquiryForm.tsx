"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { BUSINESS, SERVICES } from "@/lib/constants";

interface FormState {
  name: string;
  email: string;
  phone: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  service: string;
  preferredBranch: string;
  preferredDate: string;
  message: string;
}

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  vehicleMake: "",
  vehicleModel: "",
  vehicleYear: "",
  service: "",
  preferredBranch: "",
  preferredDate: "",
  message: "",
};

const inputCls =
  "w-full bg-surface border border-divider rounded-xl px-4 py-3 text-main text-sm placeholder:text-secondary focus:outline-none focus:border-accent transition-colors";

function EnquiryFormInner() {
  const searchParams = useSearchParams();
  const preselectedService =
    searchParams.get("service") ?? searchParams.get("product") ?? "";

  const [form, setForm] = useState<FormState>({
    ...INITIAL,
    service: preselectedService,
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const service =
      SERVICES.find((item) => item.id === form.service)?.title ?? form.service;
    setStatus("loading");
    setFeedback("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, service: service || form.service }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message);
      setStatus("success");
      setFeedback("Thanks — your enquiry has been sent. Our team will be in touch shortly.");
    } catch {
      setStatus("error");
      setFeedback("We couldn’t send your enquiry right now. Please try again or contact us by email.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="brand-subheading block text-xs text-main mb-1.5"
          >
            Full Name{" "}
            <span className="text-accent" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. John Kamau"
            value={form.name}
            onChange={handleChange}
            className={inputCls}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="brand-subheading block text-xs text-main mb-1.5"
          >
            Phone / WhatsApp{" "}
            <span className="text-accent" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+254 700 000 000"
            value={form.phone}
            onChange={handleChange}
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="brand-subheading block text-xs text-main mb-1.5"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          className={inputCls}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="vehicleMake"
            className="brand-subheading block text-xs text-main mb-1.5"
          >
            Vehicle Make
          </label>
          <input
            id="vehicleMake"
            name="vehicleMake"
            type="text"
            placeholder="e.g. Toyota"
            value={form.vehicleMake}
            onChange={handleChange}
            className={inputCls}
          />
        </div>
        <div>
          <label
            htmlFor="vehicleModel"
            className="brand-subheading block text-xs text-main mb-1.5"
          >
            Model
          </label>
          <input
            id="vehicleModel"
            name="vehicleModel"
            type="text"
            placeholder="e.g. Axio"
            value={form.vehicleModel}
            onChange={handleChange}
            className={inputCls}
          />
        </div>
        <div>
          <label
            htmlFor="vehicleYear"
            className="brand-subheading block text-xs text-main mb-1.5"
          >
            Year
          </label>
          <input
            id="vehicleYear"
            name="vehicleYear"
            type="text"
            inputMode="numeric"
            placeholder="e.g. 2018"
            value={form.vehicleYear}
            onChange={handleChange}
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="service"
            className="brand-subheading block text-xs text-main mb-1.5"
          >
            Service required
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputCls}
          >
            <option value="">Select…</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="other">Other / General Enquiry</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="preferredBranch"
            className="brand-subheading block text-xs text-main mb-1.5"
          >
            Preferred Branch
          </label>
          <select
            id="preferredBranch"
            name="preferredBranch"
            value={form.preferredBranch}
            onChange={handleChange}
            className={inputCls}
          >
            <option value="">No preference</option>
            {BUSINESS.locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="preferredDate"
          className="brand-subheading block text-xs text-main mb-1.5"
        >
          Preferred Date
        </label>
        <input
          id="preferredDate"
          name="preferredDate"
          type="date"
          value={form.preferredDate}
          onChange={handleChange}
          className={inputCls}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="brand-subheading block text-xs text-main mb-1.5"
        >
          Tell us more{" "}
          <span className="text-accent" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe the issue, damage, or work you need done…"
          value={form.message}
          onChange={handleChange}
          className={`${inputCls} resize-none`}
        />
      </div>

      {feedback && (
        <p
          role="alert"
          className={`text-sm px-4 py-3 rounded-xl border ${
            status === "success"
              ? "bg-green-50 border-green-200 text-green-900"
              : "bg-red-900/20 border-red-700/30 text-red-400"
          }`}
        >
          {feedback}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary w-full"
      >
        {status === "loading" ? "Sending…" : "Send enquiry ↗"}
      </button>

      <p className="brand-body text-secondary text-xs text-center">
        Your details are sent securely to our enquiry inbox. For direct contact, email{" "}
        <a href={BUSINESS.emailLink} className="text-accent underline">
          {BUSINESS.email}
        </a>
        .
      </p>
    </form>
  );
}

export function EnquiryForm() {
  return (
    <Suspense
      fallback={
        <div className="brand-body text-secondary text-sm">Loading form…</div>
      }
    >
      <EnquiryFormInner />
    </Suspense>
  );
}
