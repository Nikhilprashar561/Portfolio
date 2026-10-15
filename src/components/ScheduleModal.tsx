"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Clock, CheckCircle2, AlertCircle, Loader2, Mail } from "lucide-react";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [topic, setTopic] = useState("New Web Application");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const timeSlots = [
    "10:00 AM - 10:30 AM (IST)",
    "02:00 PM - 02:30 PM (IST)",
    "05:00 PM - 05:30 PM (IST)",
    "08:00 PM - 08:30 PM (IST)",
  ];

  // Helper to construct mailto link as transparent fallback
  const mailtoSubject = encodeURIComponent(`Meeting Request: ${topic} - ${name || "Client"}`);
  const mailtoBody = encodeURIComponent(
    `Hi Nikhil,\n\nI would like to request a meeting to discuss:\nTopic: ${topic}\nPreferred Date: ${date || "[Selected Date]"}\nPreferred Time: ${timeSlot || "[Selected Time]"}\n\nClient Name: ${name}\nClient Email: ${email}\nNotes: ${note || "None"}\n\nPlease let me know your availability.`
  );
  const fallbackMailto = `mailto:nikhilprashar561@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please provide your name.");
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please provide a valid email address.");
      return;
    }
    if (!date) {
      setError("Please select a preferred date.");
      return;
    }
    if (!timeSlot) {
      setError("Please choose a preferred time slot.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          date,
          timeSlot,
          topic,
          note: note.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit request.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please use the email fallback below.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError(null);
    setName("");
    setEmail("");
    setDate("");
    setTimeSlot("");
    setNote("");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="schedule-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-lux-card border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4.5 border-b border-stone-200 bg-[#fbf9f5]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-stone-100 text-stone-800">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 id="schedule-modal-title" className="text-base font-bold text-stone-900 leading-tight">
                Schedule a Call
              </h3>
              <p className="text-xs text-stone-500 mt-0.5 font-normal">
                Request a 30-minute intro call with Nikhil Prashar
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-white">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-stone-900">
                Meeting Request Received!
              </h4>
              <p className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed font-normal">
                Thank you, <span className="font-semibold text-stone-800">{name}</span>. Your request for{" "}
                <span className="font-semibold text-stone-800">{date}</span> at{" "}
                <span className="font-semibold text-stone-800">{timeSlot}</span> has been received.
              </p>
              <div className="p-3.5 rounded-xl bg-[#f5f2eb] border border-stone-200 text-xs text-stone-700 text-left max-w-sm mx-auto font-normal">
                <span className="font-bold text-stone-900 block mb-0.5">Confirmation Notice:</span>
                Nikhil will review your request and send a Google Meet or Zoom calendar invite to{" "}
                <span className="font-mono font-semibold">{email}</span>.
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  onClick={handleReset}
                  type="button"
                  className="px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition-colors"
                >
                  Done
                </button>
                <a
                  href={fallbackMailto}
                  className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-xs font-medium hover:bg-stone-50 transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in email client</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 rounded-xl bg-[#f5f2eb] border border-stone-200 text-xs text-stone-700 leading-snug font-normal">
                <span className="font-bold text-stone-900 block mb-0.5">Direct Request:</span>
                Select your preferred date &amp; time. Nikhil will review your request and confirm via calendar invite.
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                  <div>
                    <span className="font-bold block">Notice:</span>
                    <span>{error}</span>
                  </div>
                </div>
              )}

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="sched-name" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="sched-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#fbf9f5] text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800 transition-all font-normal"
                  />
                </div>

                <div>
                  <label htmlFor="sched-email" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="sched-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#fbf9f5] text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800 transition-all font-normal"
                  />
                </div>
              </div>

              {/* Topic Selector */}
              <div>
                <label htmlFor="sched-topic" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Project Topic / Scope
                </label>
                <select
                  id="sched-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#fbf9f5] text-stone-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800 transition-all font-normal"
                >
                  <option value="New Web Application">New Web Application Development</option>
                  <option value="Full-Stack Project">Full-Stack SaaS / Dashboard</option>
                  <option value="Frontend Engineering">Frontend &amp; Responsive UI</option>
                  <option value="Backend APIs">Backend &amp; API Architecture</option>
                  <option value="General Consultation">General Discussion &amp; Consultation</option>
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="sched-date" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="sched-date"
                    type="date"
                    required
                    min="2026-01-01"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#fbf9f5] text-stone-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800 transition-all font-normal"
                  />
                </div>

                <div>
                  <label htmlFor="sched-time" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Preferred Time Slot <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="sched-time"
                    required
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#fbf9f5] text-stone-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800 transition-all font-normal"
                  >
                    <option value="">Select a time slot...</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional brief note */}
              <div>
                <label htmlFor="sched-note" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Brief Overview <span className="text-stone-400 font-normal">(optional)</span>
                </label>
                <textarea
                  id="sched-note"
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Share 1-2 sentences about what you want to build or discuss..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 bg-[#fbf9f5] text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800 transition-all resize-none font-normal"
                />
              </div>

              {/* Submit Button & Transparent Fallback */}
              <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 hover:from-stone-800 hover:to-zinc-800 disabled:opacity-60 text-white font-medium text-xs sm:text-sm shadow-lux transition-all active:scale-98 cursor-pointer border border-stone-700/50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Clock className="w-4 h-4" />
                      <span>Submit Meeting Request</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-stone-500 font-normal">
                  Prefer direct email?{" "}
                  <a
                    href={fallbackMailto}
                    className="text-stone-900 font-semibold hover:underline inline-flex items-center gap-0.5"
                  >
                    Open prefilled draft in your email client
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
