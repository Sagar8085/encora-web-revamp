"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { pushToDataLayer } from "lib/gtm";
import { contactData } from "./data";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      org: "",
      email: "",
      useCase: "",
      message: "",
      company: "", // honeypot
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      useCase: Yup.string().required("Please select a topic"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (values.company) return; // honeypot spam protection

      setStatus("loading");
      setError("");

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (!res.ok) throw new Error("Failed to send");

        setSent(true);
        resetForm();
        setStatus("success");
        pushToDataLayer({ event: "contact_form_submit", form_name: "Contact Us", page_path: window.location.pathname });
      } catch {
        setError("Something went wrong. Please try again.");
        setStatus("error");
      }
    },
  });

  if (sent) {
    return (
      <main className="min-h-screen text-foreground">
        <section className="container mx-auto max-w-3xl px-6 py-16 lg:py-24">
          <h1 className="text-[clamp(26px,4.8vw,36px)] font-semibold tracking-tight">
            {contactData.successHeading}
          </h1>
          <p className="mt-3 text-muted-foreground">
            {contactData.successText}
            <a href={contactData.successEmailLink} className="underline">
              {contactData.successEmail}
            </a>
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-foreground">
      <section className="container mx-auto max-w-3xl px-6 py-16 lg:py-24 mt-[5rem]">
        <h1 className="heading-lg text-center font-semibold tracking-tight dark:text-white">
          {contactData.heading}
        </h1>
        <p className="mt-2 text-muted-foreground text-center">
          {contactData.subheading}
        </p>

        <form
          onSubmit={formik.handleSubmit}
          className="mt-8 space-y-6"
          noValidate
        >
          {/* Honeypot */}
          <input
            type="text"
            name="company"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              {contactData.labels.name}
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="mt-1 text-sm text-destructive">
                {formik.errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="org" className="block text-sm font-medium">
              {contactData.labels.organization}
            </label>
            <input
              id="org"
              name="org"
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              value={formik.values.org}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              {contactData.labels.email}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-sm text-destructive">
                {formik.errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="useCase" className="block text-sm font-medium">
              {contactData.labels.useCase}
            </label>
            <select
              id="useCase"
              name="useCase"
              required
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              value={formik.values.useCase}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {contactData.useCaseOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {formik.touched.useCase && formik.errors.useCase && (
              <p className="mt-1 text-sm text-destructive">
                {formik.errors.useCase}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              {contactData.labels.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="mt-1 text-sm text-destructive">
                {formik.errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading" || formik.isSubmitting}
            className="inline-flex items-center justify-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90 disabled:opacity-60"
          >
            {status === "loading" || formik.isSubmitting
              ? contactData.submittingText
              : contactData.submitButtonText}
          </button>

          <p className="text-xs text-muted-foreground">
            {contactData.privacyTextStart}
            <a href="/privacy" className="underline">
              {contactData.privacyTextLink}
            </a>
            {contactData.privacyTextEnd}
          </p>

          {status === "error" && (
            <p className="text-sm text-destructive">{error}</p>
          )}
        </form>
      </section>
    </main>
  );
}
