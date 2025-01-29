import { Button } from "@/components/ui/button";
import Image from "next/image";
import ExperienceSection from "./_landing/experience";
import EducationSection from "./_landing/education";
import WorksSection from "./_landing/works";
import CertificationsSection from "./_landing/certification";
import LanguageSkillsSection from "./_landing/language";

export default function Home() {
  return (
    <div>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <div className="relative w-[280px] h-[280px] mx-auto mb-8">
              <Image
                src="/profile.png"
                alt="Profile"
                fill
                className="object-cover rounded-full border-4 border-white/10"
              />
            </div>
            <h1 className="text-[100px] md:text-[100px] font-medium text-center text-primary relative z-20 leading-none">
              Fahim Shahriyer
            </h1>
            <h2 className="text-[100px] md:text-[100px] leading-none text-dotted text-center mt-0 p-2">
              software project manager
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              Experienced Professional with 6+ years of experience in Agile
              software development, API integrations, and cloud infrastructure.
              Focused on backlog management and stakeholder collaboration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Button className="w-full sm:w-auto">Get in Touch</Button>
            </div>
          </div>
        </div>
      </section>
      <ExperienceSection />
      <EducationSection />
      <WorksSection />
      <CertificationsSection />
      <LanguageSkillsSection />
    </div>
  );
}
