"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Senior Software Engineer",
  "Distributed Systems Architect",
  "Backend Platform Engineer",
  "Enterprise Java Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        40
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-cyan-400 text-sm mb-6 tracking-widest">
          Hi, my name is
        </p>
        <h1 className="text-6xl sm:text-7xl font-bold text-slate-100 mb-4 leading-none tracking-tight">
          Akhil Kallam.
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-400 mb-6 h-12">
          {displayed}
          <span className="inline-block w-0.5 h-8 bg-cyan-400 ml-1 animate-pulse" />
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-10">
          10+ years building scalable, high-performance distributed systems at
          enterprise scale. Currently leading the{" "}
          <span className="text-slate-200">eB2B Products &amp; Promotions</span>{" "}
          platform at{" "}
          <span className="text-cyan-400 font-semibold">PepsiCo</span> —
          serving global markets across LATAM, India, NA, and Australia.
          Specializing in Java, Spring Boot, Apache Kafka, and cloud-native
          microservices.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-cyan-400 text-navy-900 text-[#0F172A] px-6 py-3 rounded font-semibold text-sm hover:bg-cyan-300 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded font-semibold text-sm hover:bg-cyan-400/10 transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-5 mt-12">
          {[
            {
              href: "https://linkedin.com/in/akhilkallam",
              label: "LinkedIn",
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              href: "https://github.com/akhilkallam",
              label: "GitHub",
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              ),
            },
            {
              href: "mailto:kallam.akhil91@gmail.com",
              label: "Email",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-slate-600 text-xs font-mono">scroll</span>
        <svg
          className="w-4 h-4 text-slate-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}
