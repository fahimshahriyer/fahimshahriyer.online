interface Certification {
  title: string;
  issuer: string;
  validUntil: string;
}

const Certifications: Certification[] = [
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    validUntil: "2025",
  },
  {
    title: "Atlassian Agile Project Management Professional Certificate",
    issuer: "Atlassian",
    validUntil: "2024",
  },
  {
    title: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Institute",
    validUntil: "2023",
  },
  {
    title: "SAP S/4HANA Essential Training",
    issuer: "Self-Paced",
    validUntil: "2024",
  },
  {
    title: "Agile Software Development - Remote Teams",
    issuer: "Self-Paced",
    validUntil: "2024",
  },
  {
    title: "DevOps with AWS",
    issuer: "Self-Paced",
    validUntil: "2024",
  },
];

function CertificationCard({ title, issuer, validUntil }: Certification) {
  return (
    <div className="border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-colors">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-zinc-400 mb-4">{issuer}</p>
      <span className="text-zinc-500">Valid until {validUntil}</span>
    </div>
  );
}

export default function CertificationsSection() {
  return (
    <section className="py-20 dark:bg-[#121212] text-white cursor-pointer" id="certifications">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl mb-12 text-center">
          Certifications & Training
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
