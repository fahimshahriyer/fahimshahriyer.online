export default function LanguageSkillsSection() {
  const languages = [
    { name: "Bangla", level: "Native", proficiency: 100 },
    { name: "English", level: "Fluent", proficiency: 100 },
    { name: "German", level: "Good", proficiency: 50 },
  ];

  return (
    <section className="py-20 bg-black text-white" id="languages">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl mb-12 text-center">Language Skills</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          {languages.map((language, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium">{language.name}</h3>
                <span className="text-zinc-400">{language.level}</span>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-zinc-400 transition-all duration-500 ease-out"
                  style={{ width: `${language.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
