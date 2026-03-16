import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading number="01" title="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 space-y-5 text-slate-400 leading-relaxed">
          <p>
            I&apos;m a senior full-stack engineer specializing in building
            scalable distributed systems and enterprise-grade backend platforms.
            With{" "}
            <span className="text-slate-200 font-medium">
              10+ years of production experience
            </span>
            , I&apos;ve shipped systems that operate at global scale — from
            payment terminal deployment pipelines handling millions of devices
            to B2B commerce platforms serving markets across 4 continents.
          </p>
          <p>
            Currently at{" "}
            <span className="text-cyan-400 font-medium">PepsiCo</span>, I lead
            the eB2B Products &amp; Promotions platform — a mission-critical
            module enabling trade promotions and product catalog management for
            Key Account Managers worldwide. I architected the migration from a
            monolithic CMS to domain-driven microservices, cutting market
            rollout time from{" "}
            <span className="text-slate-200">10 days to 2 days</span> and
            boosting application performance by{" "}
            <span className="text-slate-200">5x</span>.
          </p>
          <p>
            I care deeply about system reliability, observability, and
            cross-functional delivery. I work best at the intersection of
            complex backend architecture, cloud infrastructure, and real-world
            engineering constraints.
          </p>
          <p>
            Outside of engineering, I&apos;m passionate about fitness, travel,
            and mentoring early-career engineers.
          </p>
        </div>

        {/* Quick facts card */}
        <div className="md:col-span-2 bg-slate-800/50 border border-slate-700 rounded-lg p-6 space-y-4">
          {[
            { label: "Location", value: "Plano, TX" },
            { label: "Current Role", value: "Sr. Software Engineer" },
            { label: "Company", value: "PepsiCo" },
            { label: "Experience", value: "10+ years" },
            { label: "Education", value: "M.S. Computer Science" },
            { label: "University", value: "UNC Charlotte" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex justify-between items-center border-b border-slate-700/50 pb-3 last:border-0 last:pb-0"
            >
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                {label}
              </span>
              <span className="text-sm text-slate-200">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
