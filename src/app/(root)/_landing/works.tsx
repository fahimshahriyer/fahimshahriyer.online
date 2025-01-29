interface Project {
  title: string;
  client: string;
  role: string;
  duration: string;
  description: string[];
  tech: string[];
}
const projects: Project[] = [
  {
    title: "Cloud-Based Dental Practice Management Software",
    client: "US Client (Confidential)",
    role: "Software Project Lead",
    duration: "Aug 2023 - July 2024",
    description: [
      "Led and coordinated cross-functional teams",
      "Facilitated Scrum ceremonies",
      "Improved productivity by 20% through continuous integration and automated testing",
    ],
    tech: [
      "AngularJS",
      "Bootstrap",
      ".NET Core",
      "C#",
      "Microsoft SQL Server",
      "Jenkins",
      "GitLab",
      "Microsoft Azure",
    ],
  },
  {
    title: "Automated Tax Reporting System",
    client: "General Electric",
    role: "Technical Project Manager",
    duration: "March 2020 - Nov 2020",
    description: [
      "Integrated with SAP and Oracle ERPs for accurate tax reporting across regions",
      "Developed an ETL process to improve data extraction and reporting",
      "Optimized tax reporting workflow, cutting operational costs",
    ],
    tech: [
      "Python",
      "Django",
      "PostgreSQL",
      "AWS (EC2)",
      "REST API",
      "ETL",
      "HTML",
      "CSS",
      "JS",
    ],
  },
];

function ProjectCard({
  title,
  client,
  role,
  duration,
  description,
  tech,
}: Project) {
  return (
    <div className="border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-colors bg-background">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-sm text-zinc-500 mb-1">{client}</p>
      <p className="text-sm text-zinc-400 mb-2">
        {role} • {duration}
      </p>
      <ul className="text-zinc-400 mb-4 list-disc list-inside">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tech.map((techItem, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 text-sm bg-zinc-800 rounded-full text-zinc-300"
          >
            {techItem}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function WorksSection() {
  return (
    <section className="py-20 bg-black text-white border-t border-b relative overflow-hidden" id="works">
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-7xl mb-12 text-center">Works</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <div className="dotted-bg w-[calc(100vw+1400px)] h-full absolute top-0 -left-[1200px] z-0"></div>
    </section>
  );
}
