import { productModulesData } from "@/app/data";

const ProductModules = () => {

  return (
    <section className=" section-spacing ">
      <div className="container-encora space-y-4">
        <div className="text-center">
          <h2 className="heading-lg mb-4 dark:text-white">
            {productModulesData.heading}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground  max-w-4xl mx-auto dark:text-white/80">
            {productModulesData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {productModulesData.modules.map((module, index) => (
            <div
              key={index}
              className="rounded-lg p-8 shadow-sm border border-[#E0E0E0] dark:border-encora-mint/30
             bg-white dark:bg-white/10 backdrop-blur-sm transition-all duration-300
             hover:bg-white/80 dark:hover:bg-encora-green/10 hover:border-encora-mint/50"
            >
              <div className="icon-container mb-4 transition-all duration-300 bg-emerald-500/10 dark:bg-white/10 group-hover:bg-encora-mint dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-encora-green">
                {(() => {
                  const Icon = module.icon as React.ElementType;
                  return typeof module.icon === "function" ? (
                    <Icon className="dark:stroke-encora-mint-light" />
                  ) : (
                    <Icon className="w-6 h-6 text-encora-green dark:text-encora-mint dark:stroke-red-500" />
                  );
                })()}
                {/* <span className="text-3xl">{module.icon}</span> */}
              </div>

              <h3 className="text-xl font-bold text-encora-green dark:text-white mb-3">
                {module.title}
              </h3>

              <p className="text-sm font-normal text-muted-foreground">
                {module.description}
              </p>
            </div>

            // <div
            //   key={index}
            //   className="bg-white dark:bg-white/10 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#E0E0E0] dark:border-encora-mint/30 group hover:scale-105 backdrop-blur-sm"
            // >
            //   <div className="icon-container mb-4 group-hover:bg-encora-mint dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-encora-green transition-all dark:bg-white/10">
            //     <span className="text-3xl">{module.icon}</span>
            //   </div>
            //   <h3 className="text-xl font-bold text-encora-green dark:text-white mb-3">
            //     {module.title}
            //   </h3>
            //   <p className="body-text dark:text-white/70">
            //     {module.description}
            //   </p>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductModules;
