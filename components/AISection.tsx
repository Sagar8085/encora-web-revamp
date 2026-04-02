import { Camera, SearchCheck, Route, CircleDollarSign } from "lucide-react";

const AISection = () => {
  const features = [
    {
      title: "Proof at drop",
      description: "Capture verified condition and item details right at the point of return.",
      icon: <Camera className="w-5 h-5 dark:text-encora-green-dark" />,
    },
    {
      title: "Decisioning at intake",
      description: "Make real-time routing and process decisions before items ever enter the network.",
      icon: <SearchCheck className="w-5 h-5 dark:text-encora-green-dark" />,
    },
    {
      title: "Smarter routing",
      description: "Direct returns to their optimal destination instantly, reducing unnecessary miles.",
      icon: <Route className="w-5 h-5 dark:text-encora-green-dark" />,
    },
    {
      title: "Lower processing cost",
      description: "Minimize handling time and touchpoints to dramatically reduce reverse logistics costs.",
      icon: <CircleDollarSign className="w-5 h-5 dark:text-encora-green-dark" />,
    },
  ];

  return (
    <section className=" section-spacing border-t border-b border-[#E0E0E0] dark:border-encora-mint/30">
      <div className="container-encora space-y-4">
        <div className="text-center ">
          <h2 className="heading-lg  dark:text-white">What makes Encora different</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#E0E0E0] dark:border-encora-mint/30 group hover:border-encora-mint backdrop-blur-sm"
            >
              <div className="flex flex-col mb-4">
                <div className="icon-container inline-flex mb-4 group-hover:bg-encora-mint dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-encora-green transition-all ">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-encora-green dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm font-normal text-muted-foreground dark:text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
