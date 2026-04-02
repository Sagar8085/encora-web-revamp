import { solutionsData } from "@/app/data";

const Solutions = () => {
  return (
    <section className="section-spacing border-b border-[#E0E0E0] dark:border-encora-mint/30">
      <div className="container-encora space-y-4">
        <div className="text-center ">
          <h2 className="heading-lg  dark:text-white">
            {solutionsData.heading}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-6xl mx-auto dark:text-white/80">
            {solutionsData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionsData.solutions.map((solution, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg hover:bg-encora-gray dark:hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-encora-gray dark:bg-white/10 rounded-full text-5xl hover:bg-encora-mint dark:hover:bg-white hover:scale-110 transition-all duration-300">
                  {solution.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-encora-green dark:text-white mb-3">
                {solution.title}
              </h3>
              <p className="text-sm font-normal text-muted-foreground dark:text-white/70">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
