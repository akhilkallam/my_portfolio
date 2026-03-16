import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "eB2B Products & Promotions Platform",
    company: "PepsiCo",
    problem:
      "PepsiCo's global Key Account Manager team lacked a unified, market-aware platform for trade promotions and product catalog management — data was siloed in a legacy monolithic CMS (Pimcore) with no real-time event propagation.",
    solution:
      "Led end-to-end architecture of a domain-driven microservices platform. Decoupled the product catalog and CEP portal into independently deployable services, built event-driven workflows with Apache Kafka, and designed a hybrid SQL/NoSQL data strategy to serve high-volume B2B workloads.",
    impact: [
      "4 global markets enabled (LATAM, India, NA, Australia)",
      "Rollout time cut from 10 days → 2 days",
      "5x application performance improvement",
      "Kafka event streaming reduced end-to-end latency across microservices",
    ],
    tech: ["Java", "Spring Boot", "Apache Kafka", "AKS", "Docker", "Kubernetes", "Couchbase", "PostgreSQL", "Okta"],
    featured: true,
  },
  {
    title: "Integrated Deployment System",
    company: "Verifone",
    problem:
      "Payment terminal operators were manually side-loading software packages and cryptographic keys via USB drives at individual terminals — a process that was error-prone, unscalable, and created security vulnerabilities across global rollouts.",
    solution:
      "Architected an automated deployment system for over-the-internet package delivery and cryptographic key management to payment terminals. Standardized handoff workflows between deployment and operations teams, eliminating manual intervention at each device.",
    impact: [
      "20x reduction in deployment effort",
      "Eliminated manual USB-based provisioning globally",
      "Reduced terminal provisioning errors across all deployment centers",
      "Supported 24/7 global operations with on-call reliability",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "PKI/Cryptography", "PostgreSQL", "Docker"],
    featured: true,
  },
  {
    title: "Demographic Data Reconciliation Platform",
    company: "Deloitte",
    problem:
      "A state government client relied on data from multiple third-party demographic providers with no reconciliation layer — inconsistent records were corrupting reporting pipelines and threatening compliance with state reporting mandates.",
    solution:
      "Built RESTful web services and MVC validation workflows to integrate and reconcile data across multiple demographic API providers. Implemented batch jobs for recurring analysis and reporting, ensuring data consistency across all SDLC phases.",
    impact: [
      "Eliminated cross-provider data corruption in production",
      "Ensured 100% compliance with state reporting requirements",
      "Automated recurring data analysis with batch processing",
    ],
    tech: ["Java", "Spring MVC", "REST APIs", "PostgreSQL", "Batch Processing"],
    featured: false,
  },
  {
    title: "Financial Operations Monitoring Dashboard",
    company: "Infosys / Goldman Sachs",
    problem:
      "Mission-critical financial workflows at Goldman Sachs had no centralized operational visibility — batch job failures were discovered reactively, and there was no tooling for proactive monitoring or cross-team incident correlation.",
    solution:
      "Designed and built a regional data monitoring dashboard using ELK Stack for real-time workflow visibility, batch scheduling via Autosys, and custom alerting to surface failures before they escalated.",
    impact: [
      "Proactive failure detection across complex financial pipelines",
      "Reduced mean time to resolution through custom ELK dashboards",
      "Actionable operational insights across regional batch workflows",
    ],
    tech: ["Java", "ELK Stack", "Autosys", "SQL", "Kibana"],
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <SectionHeading number="04" title="Featured Work" />

      {/* Featured projects */}
      <div className="space-y-16 mb-20">
        {featured.map((project, i) => (
          <div
            key={project.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
              i % 2 === 1 ? "lg:direction-rtl" : ""
            }`}
          >
            {/* Info panel */}
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <p className="font-mono text-cyan-400 text-xs mb-2 tracking-widest uppercase">
                Featured Project · {project.company}
              </p>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                {project.title}
              </h3>
              <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-6 mb-5 space-y-4">
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1">
                    Problem
                  </span>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1">
                    Solution
                  </span>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-cyan-400/80 bg-cyan-400/5 border border-cyan-400/20 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact panel */}
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-6">
                <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5">
                  Impact
                </h4>
                <ul className="space-y-4">
                  {project.impact.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-slate-300 text-sm leading-relaxed"
                    >
                      <span className="text-cyan-400 mt-0.5 shrink-0 text-lg leading-none">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other projects */}
      <h3 className="text-center text-slate-500 font-mono text-sm mb-10 tracking-widest uppercase">
        Other Noteworthy Work
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {other.map((project) => (
          <div
            key={project.title}
            className="bg-slate-800/40 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <p className="font-mono text-xs text-cyan-400 mb-2 tracking-widest uppercase">
              {project.company}
            </p>
            <h3 className="text-lg font-semibold text-slate-100 mb-3">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
              {project.solution}
            </p>
            <ul className="space-y-2 mb-5">
              {project.impact.slice(0, 2).map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-xs text-slate-400"
                >
                  <span className="text-cyan-400">▹</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs text-slate-500 bg-slate-700/50 px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
