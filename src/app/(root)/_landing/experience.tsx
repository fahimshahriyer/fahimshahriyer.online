interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
  keyAchievements?: string[];
}

const experiences: Experience[] = [
  {
    title: "IT Project Manager (Pro Bono)",
    company: "Legal Aid gUG (haftungsbeschränkt)",
    duration: "Feb 2025 - Present",
    location: "Berlin, Germany",
    responsibilities: [
      "Assisting in designing and implementing digital solutions to improve accessibility to German law.",
      "Ensuring GDPR compliance in data handling and platform security.",
      "Collaborating with legal experts, NGOs, and developers to enhance platform functionality.",
    ],
  },
  {
    title: "Software Project Lead",
    company: "Enosis Solutions",
    duration: "Aug 2023 - July 2024",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Led three cross-functional teams of 20+ engineers to deliver software solutions, ensuring on-time delivery and smooth operations for millions of API transactions.",
      "Worked with stakeholders to prioritize backlogs, cutting delivery time by 15% and improving workflows with Agile practices.",
      "Held sprint ceremonies and tracked KPIs, boosting team productivity by 15%.",
      "Managed releases, reducing defects by 25% and ensuring smooth Azure Cloud deployments.",
    ],
    keyAchievements: [
      "Successfully migrated infrastructure to the cloud, improving scalability and reducing operational costs.",
      "Enhanced sprint-wise KPI metrics by 30%, supporting performance optimization.",
    ],
  },
  {
    title: "Project Manager & Research Associate",
    company: "Divine IT Limited",
    duration: "Feb 2022 - July 2023",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Collaborated with design, engineering, and business teams to launch new offerings to market and enhance existing offerings for customer adoption.",
      "Managed 3 high-impact implementation projects concurrently with a 95% on-time delivery rate.",
      "Conducted R&D on ERP product improvements, identifying new modules based on customer demand and optimizing existing ones to enhance user experience.",
      "Presented business cases to secure budgets and allocate teams for R&D, leading to product improvements.",
    ],
    keyAchievements: [
      "Earned the Service Excellence Award in 2023 for outstanding leadership and successful project deliveries.",
    ],
  },
  {
    title: "Senior Business Analyst & Research Associate",
    company: "Divine IT Limited",
    duration: "Nov 2020 - Jan 2022",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Defined requirements for 10+ software projects, improving user satisfaction by 20%.",
      "Created user stories and backlogs for ERP Implementation projects.",
      "Provided insights to streamline processes, reducing development time by 25%.",
    ],
    keyAchievements: [
      "Earned the Service Excellence Award in 2020 and 2021 for outstanding leadership and successful project deliveries.",
    ],
  },
  {
    title: "Business Analyst",
    company: "Divine IT Limited",
    duration: "Nov 2019 - Oct 2020",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Identified business needs for flagship projects, enabling successful implementations.",
      "Collaborated with project managers and teams to align solutions, boosting success rates by 20%.",
      "Led workshops and training for 30+ stakeholders, improving team productivity by 20%.",
    ],
  },
  {
    title: "Junior Business Analyst",
    company: "Divine IT Limited",
    duration: "Jan 2019 - Oct 2019",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Implemented ERP solutions for 5+ SME clients, deploying modules such as Financial Accounting, Supply Chain Management, and Payroll to optimize business operations.",
      "Created detailed project documentation (SRS, CRS, BRD), improving team communication and reducing delays by 15%.",
    ],
  },
];

const ExperienceCard = ({
  title,
  company,
  duration,
  responsibilities,
  location,
  keyAchievements,
}: Experience) => (
  <div className="border border-zinc-800 p-6 bg-background rounded-lg hover:border-zinc-700 transition-colors cursor-pointer mb-8 relative z-10">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-zinc-400">{company}</p>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-zinc-500">{duration}</span>
        <span className="text-zinc-600 text-sm">{location}</span>
      </div>
    </div>
    <ul className="list-disc pl-3 text-zinc-400 space-y-2">
      {responsibilities.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
    {keyAchievements && keyAchievements.length > 0 && (
      <div className="mt-4">
        <h4 className="text-zinc-200 font-medium mb-2">Key Achievements:</h4>
        <ul className="list-disc pl-3 text-zinc-400 space-y-2">
          {keyAchievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default function ExperienceSection() {
  return (
    <section
      className="py-20 text-white relative overflow-hidden"
      id="experience"
    >
      <div className="container mx-auto px-4 z-10 relative max-w-5xl">
        <h2 className="text-7xl mb-12 text-center">Experience</h2>
        <div className="space-y-12 relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-700 -translate-x-1/2 z-0"></div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
      <div className="dotted-bg w-[calc(100vw+1400px)] h-full absolute top-0 -left-[1200px] z-0"></div>
    </section>
  );
}
