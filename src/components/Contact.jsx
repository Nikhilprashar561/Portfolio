import React from "react";
import { Mail, Github, Linkedin, Send, Twitter, X } from "lucide-react";
import { Button } from "./ui/button";

const Contact = ({ close }) => {
  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/60 backdrop-blur-md
        overflow-y-auto
      "
    >
      {/* CLOSE BUTTON */}
      <Button
        onClick={close}
        className="fixed top-4 right-4 z-50 h-9 w-9 rounded-full p-0"
      >
        <X className="h-5 w-5" />
      </Button>

      {/* WRAPPER */}
      <div
        className="
          min-h-[100dvh]
          px-3 py-6
          flex
          items-start
          md:items-center
          justify-center
        "
      >
        {/* MODAL */}
        <div
          className="
            w-full max-w-5xl
            rounded-2xl
            bg-background
            shadow-xl
          "
        >
          <section className="px-4 py-8 sm:px-8 sm:py-10">
            <div className="max-w-6xl mx-auto">
              {/* HEADING */}
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Let’s Connect
                </h2>
                <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
                  Choose the way that works best for you. I’m always open to
                  discussing new projects, ideas, or opportunities.
                </p>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* LEFT */}
                <div className="rounded-2xl border p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    🚀 Direct Connect
                  </h3>

                  <div className="space-y-4 text-sm sm:text-base">
                    <a href="mailto:nikhilprashar561@gmail.com" className="flex gap-3 break-all">
                      <Mail size={18} />
                      nikhilprashar561@gmail.com
                    </a>

                    <a href="https://github.com/Nikhilprashar561" target="_blank" className="flex gap-3">
                      <Github size={18} />
                      GitHub
                    </a>

                    <a href="https://www.linkedin.com/in/nikhilprashar1/" target="_blank" className="flex gap-3">
                      <Linkedin size={18} />
                      LinkedIn
                    </a>

                    <a href="https://x.com/NikhilPrashar_" target="_blank" className="flex gap-3">
                      <Twitter size={18} />
                      Twitter
                    </a>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="rounded-2xl border p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    ✉️ Drop Your Details
                  </h3>

                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-indigo-500"
                    />

                    <textarea
                      rows={4}
                      placeholder="Your message"
                      className="w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-indigo-500"
                    />

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2 text-white"
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
