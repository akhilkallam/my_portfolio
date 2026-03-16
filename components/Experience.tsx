"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const jobs = [
  {
    company: "PepsiCo",
    title: "Software Engineer Sr. Analyst",
    period: "Apr 2023 – Present",
    location: "Plano, TX",
    bullets: [
      "Led end-to-end development of the eB2B Products & Promotions platform — core B2B module for trade promotions and product catalog management for Key Account Managers globally.",
      "Architected migration from Pimcore to domain-driven microservices, decoupling product catalog and CEP portal into independently deployable services; improved data retrieval, catalog sync, fault tolerance, and deployment flexibility.",
      "Built event-driven workflows using Apache Kafka for real-time product and promotion event streaming across microservices, reducing end-to-end processing latency.",
      "Designed a hybrid SQL/NoSQL data strategy (relational for transactions, NoSQL for catalog/session), optimizing read/write performance for high-volume B2B workloads.",
      "Enabled 4 global markets (LATAM, India, NA, Australia) via configurable market-aware UI and region-specific business logic, cutting rollout time from 10 days to 2 days.",
      "Boosted application performance by 5x; migrated to AKS (Docker, Kubernetes, Jenkins CI/CD); integrated Okta SSO; leveraged GitHub Copilot & ChatGPT to accelerate team delivery.",
    ],
    tech: ["Java", "Spring Boot", "Apache Kafka", "AKS", "Kubernetes", "Docker", "Okta", "Couchbase", "PostgreSQL"],
  },
  {
    company: "Verifone Inc.",
    title: "Software Development Engineer",
    period: "Nov 2018 – Apr 2023",
    location: "Chicago, IL",
    bullets: [
      "Architected an Integrated Deployment System that automated package and cryptographic key downloads to payment terminals over the internet — eliminating manual USB side-loading, cutting deployment effort by 20x.",
      "Identified and resolved critical process gaps between deployment and operations teams at deployment centers — standardized handoff workflows and reduced terminal provisioning errors across global rollouts.",
      "Partnered with hardware, software, and security teams to design new application features (schema design, business logic, RESTful APIs); led root cause analysis and performance tuning.",
      "Provided 24/7 on-call support for global deployment operations handling mission-critical payment infrastructure.",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "Security/PKI", "Docker"],
  },
  {
    company: "Deloitte",
    title: "Software Developer",
    period: "Oct 2017 – Oct 2018",
    location: "Nashville, TN",
    bullets: [
      "Developed and integrated multiple third-party demographic APIs for a critical state government client, enforcing strict data integrity and consistency across distributed data sources.",
      "Built RESTful web services, MVC components, and validation workflows to reconcile demographic data across providers, preventing data corruption and ensuring compliance with state reporting requirements.",
      "Configured and managed batch jobs for recurring data analysis and operational reporting across all phases of the SDLC.",
    ],
    tech: ["Java", "Spring MVC", "REST APIs", "PostgreSQL", "Batch Processing"],
  },
  {
    company: "Infosys",
    title: "Senior Software Engineer",
    period: "Sep 2013 – Dec 2015",
    location: "Bengaluru, India",
    bullets: [
      "Production support engineer for Goldman Sachs client — monitored and maintained mission-critical financial workflows using Autosys for batch scheduling and job dependency management.",
      "Monitored workflow failures across financial systems using ELK Stack and custom dashboards; collaborated with L1/L2 support teams for root cause analysis and incident resolution.",
      "Designed and developed a regional data monitoring dashboard providing actionable operational insights across complex financial pipelines.",
    ],
    tech: ["Java", "Autosys", "ELK Stack", "SQL", "Shell Scripting"],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper id="experience">
      <SectionHeading number="02" title="Work Experience" />
      <div className="flex flex-col md:flex-row gap-0">
        {/* Tab list */}
        <ul className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-slate-700 shrink-0 md:w-44">
          {jobs.map((job, i) => (
            <li key={job.company}>
              <button
                onClick={() => setActive(i)}
                className={`w-full text-left px-5 py-3 text-sm font-mono transition-all whitespace-nowrap ${
                  active === i
                    ? "text-cyan-400 border-b-2 md:border-b-0 md:border-l-2 border-cyan-400 bg-cyan-400/5"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                }`}
              >
                {job.company}
              </button>
            </li>
          ))}
        </ul>

        {/* Content */}
        <div className="md:pl-10 pt-6 md:pt-0 flex-1">
          <div className="mb-1">
            <h3 className="text-xl font-semibold text-slate-100">
              {jobs[active].title}{" "}
              <span className="text-cyan-400">@ {jobs[active].company}</span>
            </h3>
            <p className="font-mono text-slate-500 text-sm mt-1">
              {jobs[active].period} · {jobs[active].location}
            </p>
          </div>
          <ul className="mt-5 space-y-3">
            {jobs[active].bullets.map((b) => (
              <li key={b} className="flex gap-3 text-slate-400 leading-relaxed">
                <span className="text-cyan-400 mt-1 shrink-0">▹</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-6">
            {jobs[active].tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
