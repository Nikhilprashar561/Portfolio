"use client";

import { useState } from "react";
import {
  Calendar,
  MessageCircle,
  Mail,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

interface ContactSectionProps {
  onOpenSchedule: () => void;
}

export default function ContactSection({ onOpenSchedule }: ContactSectionProps) {
  // Contact form fields strictly limited to Name, Email, Message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Anti-bot trap

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Direct WhatsApp URL. Phone number is strictly hidden from plain text.
  const whatsappUrl = `https://wa.me/916239130326?text=${encodeURIComponent(
    "Hi Nikhil, I saw your portfolio and would like to discuss a project."
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!message.trim() || message.trim().length < 5) {
      setErrorMessage("Please enter a short message describing what you need.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          honeypot,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send message right now.");
      }

      setSuccess(true);
    } catch (err: unknown) {
      const errorText = err instanceof Error ? err.message : "Something went wrong. Please use direct email or WhatsApp.";
      setErrorMessage(errorText);
    } finally {
      setLoading(false);
    }
  };

  const handleResetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSuccess(false);
    setErrorMessage(null);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#fbf9f5] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-lux-sm">
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Let&apos;s Work Together
          </h2>
          <p className="mt-3 text-base text-stone-600 font-normal leading-relaxed">
            Have a question, project inquiry, or collaboration in mind? Choose how you&apos;d like to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Quick Contact Options (Left - 5 cols) */}
          <div className="md:col-span-5 space-y-4">
            {/* Schedule a Call Card */}
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 shadow-lux-sm hover:shadow-lux transition-all">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-700">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-stone-900 text-base">Schedule a Call</h3>
              </div>
              <p className="text-sm text-stone-600 mb-4 font-normal">
                Pick a convenient time for a 30-minute intro video call to discuss your goals.
              </p>
              <button
                onClick={onOpenSchedule}
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white text-sm font-medium shadow-lux hover:shadow-lux-hover transition-all cursor-pointer border border-stone-700/50"
              >
                <span>Book 30-Min Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 shadow-lux-sm hover:shadow-lux transition-all">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-stone-900 text-base">Chat on WhatsApp</h3>
              </div>
              <p className="text-sm text-stone-600 mb-4 font-normal">
                Prefer direct messaging? Start a conversation on WhatsApp anytime.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Nikhil on WhatsApp"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50/90 hover:bg-emerald-100 text-emerald-900 text-sm font-medium border border-emerald-200/80 shadow-2xs transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Start WhatsApp Chat</span>
              </a>
            </div>

            {/* Direct Email Card */}
            <div className="p-4 rounded-xl border border-stone-200/90 bg-white shadow-lux-sm flex items-center justify-between text-xs sm:text-sm text-stone-600">
              <div className="flex items-center gap-2 font-medium">
                <Mail className="w-4 h-4 text-stone-500" />
                <span>Email:</span>
              </div>
              <a
                href="mailto:nikhilprashar561@gmail.com"
                className="font-mono text-stone-900 hover:text-indigo-600 font-semibold transition-colors"
              >
                nikhilprashar561@gmail.com
              </a>
            </div>
          </div>

          {/* 3-Field Contact Form (Right - 7 cols) */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-lux-card">
              <h3 className="text-xl font-bold text-stone-900 mb-1.5">
                Send a Direct Message
              </h3>
              <p className="text-sm text-stone-600 mb-6 font-normal">
                Leave a message below and I&apos;ll get back to you promptly.
              </p>

              {success ? (
                <div className="p-6 rounded-xl bg-emerald-50/80 border border-emerald-200 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-emerald-900">Message Received!</h4>
                  <p className="text-sm text-emerald-800 mt-1 font-normal">
                    Thank you for reaching out. I will review your message and reply via email shortly.
                  </p>
                  <button
                    onClick={handleResetForm}
                    type="button"
                    className="mt-4 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-medium transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Anti-spam honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_url"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-800">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-[#fbf9f5] text-sm text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800 transition-all font-normal"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-[#fbf9f5] text-sm text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800 transition-all font-normal"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Tell me about your project, idea, or what you're looking to build..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-[#fbf9f5] text-sm text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800 transition-all resize-y font-normal"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 hover:from-stone-800 hover:to-zinc-800 disabled:opacity-60 text-white font-medium text-sm shadow-lux hover:shadow-lux-hover transition-all cursor-pointer border border-stone-700/50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
