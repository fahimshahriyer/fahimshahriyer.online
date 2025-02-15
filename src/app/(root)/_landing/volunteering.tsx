interface Volunteering {
  title: string;
  organization: string;
  role: string;
  duration: string;
  description: string[];
}

const volunteeringActivities: Volunteering[] = [
  {
    title: "IT Project Manager",
    organization: "Legal Aid gUG (haftungsbeschränkt)",
    role: "IT Project Manager (Pro Bono)",
    duration: "Feb 2023 - Present",
    description: [
      "Assisting in designing and implementing digital solutions to improve accessibility to German law.",
      "Ensuring GDPR compliance in data handling and platform security.",
      "Collaborating with legal experts, NGOs, and developers to enhance platform functionality.",
    ],
  },
];

function VolunteeringCard({
  title,
  organization,
  role,
  duration,
  description,
}: Volunteering) {
  return (
    <div className="border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-colors bg-background">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-sm text-zinc-500 mb-1">{organization}</p>
      <p className="text-sm text-zinc-400 mb-2">
        {role} • {duration}
      </p>
      <ul className="text-zinc-400 mb-4 list-disc pl-4">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default function VolunteeringSection() {
  return (
    <section
      className="py-20 bg-black text-white border-t border-b relative overflow-hidden"
      id="volunteering"
    >
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-7xl mb-12 text-center">Volunteering</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {volunteeringActivities.map((activity, index) => (
            <VolunteeringCard key={index} {...activity} />
          ))}
        </div>
      </div>
      <div className="dotted-bg w-[calc(100vw+1400px)] h-full absolute top-0 -left-[1200px] z-0"></div>
    </section>
  );
}
