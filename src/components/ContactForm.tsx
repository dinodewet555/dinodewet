"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const projectTypes = [
  "Semantic SEO Website",
  "Next.js Development",
  "WordPress Development",
  "AI Architecture",
  "Digital Strategy",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid #1f1f1f",
    borderRadius: "10px",
    color: "#ffffff",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    padding: "0.85rem 1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s ease",
  } as React.CSSProperties;

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-xl border"
        style={{ borderColor: "#1f1f1f", background: "#0d0d0d", minHeight: "400px" }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center border mb-6"
          style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.04)" }}
        >
          <CheckCircle size={24} color="#ffffff" strokeWidth={1.5} />
        </div>
        <h3
          className="font-heading font-bold text-white mb-3"
          style={{ fontSize: "1.3rem", letterSpacing: "-0.01em" }}
        >
          Message Received
        </h3>
        <p
          className="text-sm"
          style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", maxWidth: "300px", lineHeight: 1.7 }}
        >
          Thank you for reaching out. Dino will review your project details and be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            className="block text-xs mb-2 uppercase tracking-widest"
            style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
            onBlur={(e) => (e.target.style.borderColor = "#1f1f1f")}
          />
        </div>
        <div>
          <label
            className="block text-xs mb-2 uppercase tracking-widest"
            style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
            onBlur={(e) => (e.target.style.borderColor = "#1f1f1f")}
          />
        </div>
      </div>

      <div>
        <label
          className="block text-xs mb-2 uppercase tracking-widest"
          style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
        >
          Business / Company
        </label>
        <input
          type="text"
          name="business"
          placeholder="Your business name"
          value={form.business}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
          onBlur={(e) => (e.target.style.borderColor = "#1f1f1f")}
        />
      </div>

      <div>
        <label
          className="block text-xs mb-2 uppercase tracking-widest"
          style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
        >
          Project Type
        </label>
        <select
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer" }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
          onBlur={(e) => (e.target.style.borderColor = "#1f1f1f")}
        >
          <option value="" style={{ background: "#0d0d0d" }}>
            Select a project type
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t} style={{ background: "#0d0d0d" }}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          className="block text-xs mb-2 uppercase tracking-widest"
          style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
        >
          Project Details & Goals
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Describe your project, goals, current website status, and any specific requirements..."
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
          onBlur={(e) => (e.target.style.borderColor = "#1f1f1f")}
        />
      </div>

      <button
        type="submit"
        className="btn-primary flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium mt-2"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Send Message <ArrowRight size={14} />
      </button>
    </form>
  );
}
