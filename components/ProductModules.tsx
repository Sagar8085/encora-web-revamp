// import { Archive, QrCode, ScanLine, BadgeCheck, Webhook } from "lucide-react";
import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";

const ProductModules = () => {
  const modules = [
    {
      title: "Bins",
      description:
        "Intelligent bin management and tracking for efficient returns processing.",
      icon: BinIcon,
    },
    {
      title: "Tags",
      description:
        "Smart labeling and identification system for product categorization.",
      icon: TagsIcon,
    },
    {
      title: "Verify",
      description:
        "Automated verification and compliance checking for all returns.",
      icon: VerifyIcon,
    },
    {
      title: "Connect",
      description:
        "Seamless integration with your existing retail and logistics systems.",
      icon: ConnectIcon,
    },
  ];

  return (
    <section className=" section-spacing ">
      <div className="container-encora space-y-4">
        <div className="text-center">
          <h2 className="heading-lg mb-4 dark:text-white">
            Core Platform Modules
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground  mx-auto dark:text-white/80">
            Encora's modular architecture gives you the flexibility to build the
            returns solution that fits your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {modules.map((module, index) => (
            <div
              key={index}
              className="rounded-lg p-8 shadow-sm border border-[#E0E0E0] dark:border-encora-mint/30
             bg-white dark:bg-white/10 backdrop-blur-sm transition-all duration-300
             hover:bg-white/80 dark:hover:bg-encora-green/10 hover:border-encora-mint/50"
            >
              <div className="icon-container mb-4 transition-all duration-300 bg-emerald-500/10 dark:bg-white/10 group-hover:bg-encora-mint dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-encora-green">
                {typeof module.icon === "function" ? (
                  <module.icon className="dark:stroke-encora-mint-light" />
                ) : (
                  <module.icon className="w-6 h-6 text-encora-green dark:text-encora-mint dark:stroke-red-500" />
                )}
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
