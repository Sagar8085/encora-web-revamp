export function FeatureCard({
  title,
  desc,
  Icon,
}: {
  title: string;
  desc: string;
  Icon: React.ElementType;
}) {
  return (
    <div
      className="group rounded-2xl border border-white/10 bg-white/70 p-4 shadow-sm
                 ring-1 ring-transparent backdrop-blur transition
                 hover:-translate-y-px hover:ring-emerald-600/20
                 dark:border-white/5 dark:bg-emerald-900/25"
    >
      <div className="flex items-start gap-3">
        <div
          className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl
                        bg-emerald-50 ring-1 ring-emerald-900/10
                        dark:bg-emerald-900/30 dark:ring-white/10"
        >
          <Icon className="h-6 w-6 text-emerald-700 dark:text-emerald-300" />
        </div>
        <div>
          <h3 className="text-lg font-semibold leading-6">{title}</h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
