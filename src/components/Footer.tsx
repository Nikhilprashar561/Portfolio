"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { GitHubIcon, LinkedInIcon, TwitterXIcon, HashnodeIcon } from "@/components/BrandIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#stack" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-white border-t border-stone-200/90 py-10 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-100 text-center md:text-left">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-stone-200 shrink-0">
              <Image
                src="/nikhil.jpg"
                alt="Nikhil Prashar"
                fill
                className="object-cover object-top"
                sizes="36px"
              />
            </div>
            <div>
              <div className="font-bold text-stone-900 text-sm">
                Nikhil Prashar
              </div>
              <div className="text-xs text-stone-500 font-normal">
                Full Stack Developer
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm text-stone-600 hover:text-stone-950 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/nikhil_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-stone-900 font-semibold hover:text-indigo-950 transition-colors"
            >
              Resume (PDF)
            </a>
          </nav>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-normal">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Nikhilprashar561"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhilprashar1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-stone-500 hover:text-indigo-600 hover:bg-stone-50 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/NikhilPrashar_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="p-2 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-colors"
            >
              <TwitterXIcon className="w-4 h-4" />
            </a>
            <a
              href="https://nikhilprashar.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hashnode"
              className="p-2 rounded-lg text-stone-500 hover:text-indigo-600 hover:bg-stone-50 transition-colors"
            >
              <HashnodeIcon className="w-4 h-4" />
            </a>
          </div>

          <div>
            <span>© 2026 Nikhil Prashar. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-950 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
