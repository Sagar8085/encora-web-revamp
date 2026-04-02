import { comparisonSectionData } from "@/app/data";

export default function ComparisonSection() {
  return (
    <section className="section-spacing bg-gray-50 dark:bg-white/5">
      <div className="container-encora text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="heading-lg dark:text-white">
            {comparisonSectionData.heading}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground dark:text-white/80 leading-relaxed">
            {comparisonSectionData.description}
          </p>
        </div>
      </div>
    </section>
  );
}
