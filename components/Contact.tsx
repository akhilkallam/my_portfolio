"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "kallam.akhil91@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading number="05" title="Get In Touch" />
      <div className="max-w-xl mx-auto text-center">
        <p className="text-slate-400 leading-relaxed mb-10">
          I&apos;m open to senior engineering roles, staff engineer positions,
          and interesting technical collaborations. Whether you have an
          opportunity, a question, or just want to talk distributed systems —
          my inbox is open.
        </p>

        <button
          onClick={copyEmail}
          className="group relative inline-flex items-center gap-3 border border-cyan-400 text-cyan-400 px-8 py-4 rounded text-sm font-mono hover:bg-cyan-400/10 transition-all duration-200 mb-10"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied to clipboard!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {email}
            </>
          )}
        </button>

        <div className="flex justify-center gap-8 mt-4">
          {[
            { href: "https://linkedin.com/in/akhilkallam", label: "LinkedIn" },
            { href: "https://github.com/akhilkallam", label: "GitHub" },
            { href: "tel:2016658729", label: "(201) 665-8729" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-cyan-400 transition-colors font-mono"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
