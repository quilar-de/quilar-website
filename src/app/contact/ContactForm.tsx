"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  email?: string;
  message?: string;
}

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

const GENERIC_ERROR =
  "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@kila.de.";

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.firstName.trim()) errors.firstName = "Vorname ist erforderlich.";
  if (!data.email.trim()) {
    errors.email = "E-Mail ist erforderlich.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }
  if (!data.message.trim()) errors.message = "Nachricht ist erforderlich.";
  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function resetForm() {
    setFormData(INITIAL_DATA);
    setErrors({});
    setErrorMessage("");
    setFormState("idle");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Guard against double-submit (e.g. Enter key while a request is in flight).
    if (formState === "loading") return;

    // Honeypot: if a bot fills the hidden field, silently pretend success.
    const honeypot = (
      e.currentTarget.elements.namedItem("_gotcha") as HTMLInputElement | null
    )?.value;
    if (honeypot) {
      setFormState("success");
      return;
    }

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormState("loading");
    setErrorMessage("");

    try {
      if (!ENDPOINT || ENDPOINT.includes("your_form_id")) {
        throw new Error("missing_endpoint");
      }
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        // Log technical detail for debugging, but show users a friendly message.
        // eslint-disable-next-line no-console
        console.error("Contact form submission failed:", res.status, data);
        throw new Error("request_failed");
      }

      setFormState("success");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Contact form error:", err);
      setFormState("error");
      setErrorMessage(GENERIC_ERROR);
    }
  }

  if (formState === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-start justify-center py-16 space-y-4"
      >
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100">
          <svg
            aria-hidden="true"
            focusable="false"
            className="w-7 h-7 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          Nachricht gesendet!
        </h2>
        <p className="text-gray-600 max-w-md">
          Vielen Dank für Ihre Anfrage. Wir melden uns in der Regel innerhalb
          von 24 Stunden bei Ihnen.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-4 text-primary-600 hover:text-primary-700 font-medium underline-offset-4 hover:underline"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  const isLoading = formState === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={isLoading}
      className="space-y-6"
    >
      {/* Honeypot field for spam bots — hidden from real users. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="_gotcha">Bitte dieses Feld leer lassen</label>
        <input
          type="text"
          id="_gotcha"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Vorname <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={errors.firstName ? "true" : "false"}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            autoComplete="given-name"
            maxLength={100}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Max"
          />
          {errors.firstName && (
            <p
              id="firstName-error"
              className="mt-1 text-sm text-red-600"
            >
              {errors.firstName}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nachname
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            autoComplete="family-name"
            maxLength={100}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            placeholder="Mustermann"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          E-Mail <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          autoComplete="email"
          inputMode="email"
          maxLength={254}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="max@beispiel.de"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Unternehmen (optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          autoComplete="organization"
          maxLength={150}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
          placeholder="Ihre Firma GmbH"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Gewünschte Leistung
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
        >
          <option value="">Bitte wählen...</option>
          <option value="hometour">HomeTour - Virtuelle Rundgänge</option>
          <option value="3d">3D-Visualisierung</option>
          <option value="staging">Virtuelle Inszenierung</option>
          <option value="other">Sonstiges</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Nachricht <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          maxLength={5000}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Beschreiben Sie Ihr Projekt..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {formState === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
        >
          {errorMessage || GENERIC_ERROR}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        aria-disabled={isLoading}
        className="w-full sm:w-auto bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {isLoading ? (
          <>
            <svg
              aria-hidden="true"
              focusable="false"
              className="animate-spin h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span>Wird gesendet…</span>
          </>
        ) : (
          "Nachricht senden"
        )}
      </button>
    </form>
  );
}
