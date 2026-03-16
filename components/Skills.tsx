import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "TypeScript", "JavaScript", "SQL"],
    icon: "⌨",
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "AngularJS", "Tailwind CSS"],
    icon: "🖥",
  },
  {
    category: "Backend & APIs",
    skills: ["Spring Boot", "Spring MVC", "Hibernate", "REST APIs", "gRPC"],
    icon: "⚙",
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Couchbase"],
    icon: "🗄",
  },
  {
    category: "Messaging",
    skills: ["Apache Kafka", "Event-Driven Architecture", "Pub/Sub"],
    icon: "📡",
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["Azure AKS", "Azure ASE", "AWS", "Docker", "Kubernetes"],
    icon: "☁",
  },
  {
    category: "DevOps & CI/CD",
    skills: ["Jenkins", "Git", "AKS Pipelines", "Automated Deploy"],
    icon: "🔄",
  },
  {
    category: "Security",
    skills: ["Okta SSO/OAuth", "Pen Testing", "Qualys", "Fortify"],
    icon: "🔒",
  },
  {
    category: "Observability",
    skills: ["AppDynamics", "ELK Stack", "Autosys", "FullStory"],
    icon: "📊",
  },
  {
    category: "AI & Tools",
    skills: ["GitHub Copilot", "ChatGPT", "Prompt Engineering"],
    icon: "🤖",
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading number="03" title="Tech Stack" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skillGroups.map(({ category, skills }) => (
          <div
            key={category}
            className="bg-slate-800/40 border border-slate-700/60 rounded-lg p-5 hover:border-cyan-400/30 transition-colors duration-300"
          >
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">
              {category}
            </h3>
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
