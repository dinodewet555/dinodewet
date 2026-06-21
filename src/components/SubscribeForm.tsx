"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company_website: honeypot }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }
      setStatus("done");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "done") {
    return (
      <div
        className="flex items-center justify-center gap-3 rounded-lg border px-5 py-4"
        style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
      >
        <CheckCircle size={18} color="#ffffff" strokeWidth={1.5} />
        <p className="text-sm" style={{ color: "#ffffff", fontFamily: "var(--font-body)" }}>
          You&apos;re subscribed. Thanks for joining.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Honeypot */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
          <label htmlFor="subscribe_company_website">Company website (leave blank)</label>
          <input
            id="subscribe_company_website"
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
          className="flex-1 rounded-lg border px-5 py-3.5 text-sm text-left outline-none"
          style={{
            borderColor: "#1f1f1f",
            background: "rgba(255,255,255,0.02)",
            color: "#ffffff",
            fontFamily: "var(--font-body)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
          onBlur={(e) => (e.target.style.borderColor = "#1f1f1f")}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {status === "loading" ? "Subscribing…" : <><span>Subscribe</span> <ArrowRight size={14} /></>}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-400" style={{ fontFamily: "var(--font-body)" }}>
          {error}
        </p>
      )}
      <p className="mt-4 text-xs" style={{ color: "#3a3a3a", fontFamily: "var(--font-body)" }}>
        Monthly updates only. Unsubscribe any time.
      </p>
    </form>
  );
}
