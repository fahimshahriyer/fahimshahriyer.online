export default function EducationSection() {
  return (
    <section className="py-20 dark:bg-[#121212] text-white" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl mb-12 text-center">Education</h2>
        <div className="space-y-8">
          <div className="border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-colors max-w-7xl m-auto">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium">
                  Bachelor of Science in Computer Science & Engineering
                </h3>
                <p className="text-zinc-400">
                  University of Science & Technology, Chittagong (USTC)
                </p>
              </div>
              <span className="text-zinc-500">2011 - 2016</span>
            </div>
            <p className="mt-4 text-zinc-400">
              Research Area: Machine Learning in Recommendation Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
