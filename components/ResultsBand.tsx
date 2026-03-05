const ResultsBand = () => {
  const results = [
    { metric: "Return ↑", description: "Increase product recovery value" },
    { metric: "Labor ↓", description: "Reduce processing costs" },
    { metric: "Shrink ↓", description: "Minimize inventory loss" },
    { metric: "Compliance ✓", description: "Ready for regulations" },
  ];

  return (
    <section className="section-spacing">
      <div className="container-encora space-y-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Proven Results
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-light max-w-2xl mx-auto dark:text-white">
            Encora customers see measurable improvements across all key metrics
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div key={index} className="min-w-0">
              <div className="w-full h-full rounded-xl">
                <div className="text-center p-6 flex flex-col justify-center items-center gap-2">
                  <div className="text-4xl md:text-5xl font-bold text-encora-mint mb-0 whitespace-nowrap">
                    {result.metric}
                  </div>
                  <p className="text-sm font-normal text-muted-foreground  text-center break-words max-w-[18rem] body-text  dark:text-white/70">
                    {result.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsBand;
