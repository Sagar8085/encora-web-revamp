"use client";

// import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// export default function ContactPage() {
//   const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
//   const [error, setError] = useState("");

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       org: "",
//       email: "",
//       useCase: "",
//       message: ""
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Please enter your name."),
//       org: Yup.string(),
//       email: Yup.string().email("Enter a valid work email.").required("Please enter your email"),
//       useCase: Yup.string().required("Select a use case."),
//       message: Yup.string().required("Tell us a bit more.")
//     }),
//     async onSubmit(values, { resetForm }) {
//       setStatus("loading");
//       setError("");
//       try {
//         const res = await fetch("/api/contact", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(values),
//         });
//         if (!res.ok) throw new Error(await res.text());
//         setStatus("success");
//         resetForm();
//       } catch (err: any) {
//         setStatus("error");
//         setError(err?.message || "Something went wrong.");
//       }
//     }
//   });

//   return (
//     <div className="container mx-auto max-w-3xl px-6 py-16 lg:py-24">
//   <h1 className="text-[clamp(26px,4.8vw,36px)] font-semibold tracking-tight">
//     Contact us
//   </h1>
//   <p className="mt-2 text-muted-foreground">
//     Tell us a bit about your use case and we’ll get back to you shortly.
//   </p>

//   <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6" noValidate>
//     {/* Honeypot anti-spam field */}
//     <input
//       type="text"
//       name="company"
//       className="hidden"
//       tabIndex={-1}
//       autoComplete="off"
//     />

//     {/* Name */}
//     <div>
//       <label htmlFor="name" className="block text-sm font-medium">
//         Name
//       </label>
//       <input
//         id="name"
//         name="name"
//         required
//         placeholder="Your name"
//         className="mt-1 w-full rounded-md border bg-background px-3 py-2"
//         value={formik.values.name}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//       />
//       {formik.touched.name && formik.errors.name && (
//         <p className="mt-1 text-sm text-destructive">{formik.errors.name}</p>
//       )}
//     </div>

//     {/* Organization */}
//     <div>
//       <label htmlFor="org" className="block text-sm font-medium">
//         Organization
//       </label>
//       <input
//         id="org"
//         name="org"
//         placeholder="Your organization"
//         className="mt-1 w-full rounded-md border bg-background px-3 py-2"
//         value={formik.values.org}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//       />
//       {formik.touched.org && formik.errors.org && (
//         <p className="mt-1 text-sm text-destructive">{formik.errors.org}</p>
//       )}
//     </div>

//     {/* Email */}
//     <div>
//       <label htmlFor="email" className="block text-sm font-medium">
//         Work email
//       </label>
//       <input
//         id="email"
//         type="email"
//         name="email"
//         required
//         placeholder="you@email.com"
//         className="mt-1 w-full rounded-md border bg-background px-3 py-2"
//         value={formik.values.email}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//       />
//       {formik.touched.email && formik.errors.email && (
//         <p className="mt-1 text-sm text-destructive">{formik.errors.email}</p>
//       )}
//     </div>

//     {/* Use case */}
//     <div>
//       <label htmlFor="useCase" className="block text-sm font-medium">
//         Use case
//       </label>
//       <select
//         id="useCase"
//         name="useCase"
//         required
//         className="mt-1 w-full rounded-md border bg-background px-3 py-2"
//         value={formik.values.useCase}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//       >
//         <option value="">Select…</option>
//         <option value="pilot">Pilot</option>
//         <option value="spec">Spec sheet</option>
//         <option value="partnership">Partnership</option>
//         <option value="press">Press</option>
//       </select>
//       {formik.touched.useCase && formik.errors.useCase && (
//         <p className="mt-1 text-sm text-destructive">{formik.errors.useCase}</p>
//       )}
//     </div>

//     {/* Message */}
//     <div>
//       <label htmlFor="message" className="block text-sm font-medium">
//         Message
//       </label>
//       <textarea
//         id="message"
//         name="message"
//         required
//         rows={5}
//         placeholder="What are you trying to solve? Timeline?"
//         className="mt-1 w-full rounded-md border bg-background px-3 py-2"
//         value={formik.values.message}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//       />
//       {formik.touched.message && formik.errors.message && (
//         <p className="mt-1 text-sm text-destructive">{formik.errors.message}</p>
//       )}
//     </div>

//     {/* Submit */}
//     <button
//       type="submit"
//       disabled={status === "loading" || formik.isSubmitting}
//       className="inline-flex items-center justify-center rounded-lg border border-transparent px-4 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90 transition disabled:opacity-60"
//     >
//       {status === "loading" || formik.isSubmitting ? "Sending…" : "Send"}
//     </button>

//     {/* Privacy note */}
//     <p className="text-xs text-muted-foreground">
//       By submitting, you agree to our{" "}
//       <a href="/privacy" className="underline">
//         Privacy Policy
//       </a>.
//     </p>

//     {/* Status messages */}
//     {status === "success" && (
//       <p className="text-sm text-emerald-700">Thanks! We’ll be in touch shortly.</p>
//     )}
//     {status === "error" && (
//       <p className="text-sm text-destructive">{error}</p>
//     )}
//   </form>
// </div>
//   );
// }

// "use client";
// import React, { useState } from "react";

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: "", org: "", email: "", usecase: "", message: "" });
//   const [errors, setErrors] = useState<{[k:string]:string}>({});
//   const [sent, setSent] = useState(false);

//   const validate = () => {
//     const e: {[k:string]:string} = {};
//     if (!form.name.trim()) e.name = "Please enter your name.";
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid work email.";
//     if (!form.usecase.trim()) e.usecase = "Select a use case.";
//     if (!form.message.trim()) e.message = "Tell us a bit more.";
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const submit = async (ev: React.FormEvent) => {
//     ev.preventDefault();
//     if (!validate()) return;
//     // TODO: POST to /api/contact (serverless). For now, fake success:
//     setSent(true);
//   };

//   if (sent) {
//     return (
//       <div className="container mx-auto max-w-3xl px-6 py-16 lg:py-24">
//         <h1 className="text-[clamp(26px,4.8vw,36px)] font-semibold tracking-tight">Thanks — we’ll reply within 1 business day.</h1>
//         <p className="mt-3 text-muted-foreground">
//           If it’s urgent, email <a href="mailto:tedw@encora.co" className="underline">tedw@encora.co</a>.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto max-w-3xl px-6 py-16 lg:py-24">
//       <h1 className="text-[clamp(26px,4.8vw,36px)] font-semibold tracking-tight">Contact us</h1>
//       <p className="mt-2 text-muted-foreground">Tell us a bit about your use case and we’ll get back to you shortly.</p>
//       <form onSubmit={submit} className="mt-8 space-y-6">
//         <div>
//           <label className="block text-sm font-medium">Name</label>
//           <input className="mt-1 w-full rounded-md border bg-background px-3 py-2" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
//           {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Organization</label>
//           <input className="mt-1 w-full rounded-md border bg-background px-3 py-2" value={form.org} onChange={e=>setForm({...form, org:e.target.value})} />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Work email</label>
//           <input type="email" className="mt-1 w-full rounded-md border bg-background px-3 py-2" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
//           {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Use case</label>
//           <select className="mt-1 w-full rounded-md border bg-background px-3 py-2" value={form.usecase} onChange={e=>setForm({...form, usecase:e.target.value})}>
//             <option value="">Select…</option>
//             <option value="pilot">Pilot</option>
//             <option value="spec">Spec sheet</option>
//             <option value="partnership">Partnership</option>
//             <option value="press">Press</option>
//           </select>
//           {errors.usecase && <p className="mt-1 text-sm text-destructive">{errors.usecase}</p>}
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Message</label>
//           <textarea rows={5} className="mt-1 w-full rounded-md border bg-background px-3 py-2" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
//           {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
//         </div>
//         <button className="inline-flex items-center justify-center rounded-lg border border-transparent px-4 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90 transition">
//           Send
//         </button>
//         <p className="text-xs text-muted-foreground">By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.</p>
//         <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
//       </form>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

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
            Thanks — we’ll follow up within 1–2 business days.
          </h1>
          <p className="mt-3 text-muted-foreground">
            Prefer email?{" "}
            <a href="mailto:info@encora.com" className="underline">
              info@encora.com
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
          Let’s talk about your use case
        </h1>
        <p className="mt-2 text-muted-foreground text-center">
          Whether you’re evaluating reusable systems, retail returns, or
          compliance-driven drop-off, we’ll help you determine how Encora fits
          into your existing operations.
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
              Name
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
              Organization
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
              Email
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
              What are you reaching out about?
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
              <option value="">Select…</option>
              <option value="reusables">
                Reusable foodware or circular systems
              </option>
              <option value="returns">
                Retail returns / Encora Access (RetAI)
              </option>
              <option value="compliance">Compliance, EPR, or reporting</option>
              <option value="general">General inquiry</option>
            </select>
            {formik.touched.useCase && formik.errors.useCase && (
              <p className="mt-1 text-sm text-destructive">
                {formik.errors.useCase}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
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
              ? "Sending…"
              : "Contact Us"}
          </button>

          <p className="text-xs text-muted-foreground">
            By submitting, you agree to our{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
            .
          </p>

          {status === "error" && (
            <p className="text-sm text-destructive">{error}</p>
          )}
        </form>
      </section>
    </main>
  );
}
