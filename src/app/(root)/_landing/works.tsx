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
      "Implemented Clinical AI",
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
    title:
      "Implementation of Cyber Security Measures for Security Operation Center",
    client: "Controller of Certifying Authorities",
    role: "Technical Project Lead",
    duration: "2022",
    description: [
      "Led the deployment and integration of cybersecurity tools for the Security Operation Center (SOC)",
      "Implemented Vulnerability Assessment and Penetration Testing (VAPT) tools to proactively identify and mitigate security threats",
      "Deployed Endpoint Security solutions to safeguard critical infrastructure",
      "Integrated Multifactor Authentication (MFA) to enhance identity and access management",
      "Ensured seamless configuration and interoperability of security tools within the SOC environment",
      "Provided technical leadership and training to SOC teams",
      "Conducted post-implementation testing and audits to validate system security and performance",
    ],
    tech: ["Nessus", "Burp Suite", "Metasploit", "Acunetix", "RSA SecurID"],
  },
  {
    title: "Automated Tax Reporting System",
    client: "General Electric",
    role: "Technical Project Lead",
    duration: "March 2020 - Nov 2020",
    description: [
      "Integrated Automated Tax Reporting System with SAP and Oracle ERPs for accurate tax reporting across regions",
      "Developed an ETL process to improve data extraction and reporting",
      "Optimized the reporting workflow, cutting operational costs",
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
  {
    title: "PrismERP",
    client: "www.prismerp.net",
    role: "R&D",
    duration: "2019-2023",
    description: [
      "Conducted R&D for new ERP modules, analyzing business requirements and proposing scalable solutions",
      "Developed detailed user stories and functional specifications",
      "Assisted in the implementation and customization of PrismERP for clients across various industries",
      "Collaborated with cross-functional teams to enhance existing features and ensure system scalability",
      "Conducted technical feasibility studies for new technologies and frameworks",
    ],
    tech: ["Python", "Django", "PostgreSQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "PrismVAT",
    client: "www.prismvat.net",
    role: "Requirement Analysis, Development & Implementation",
    duration: "2020",
    description: [
      "Requirement Analysis & Development of Indirect Tax Management System as per State Mandated Regulation",
      "Integration with IVAS (Integrated VAT Administration System) through REST API",
      "Conducted Conference Room piloting and demonstration for government approval",
      "Implemented the software for international clients integrating with existing enterprise systems (SAP, Oracle)",
    ],
    tech: [
      "Python",
      "Django",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
      "REST API",
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
      <ul className="text-zinc-400 mb-4 list-disc pl-4">
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
    <section
      className="py-20 bg-black text-white border-t border-b relative overflow-hidden"
      id="works"
    >
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
