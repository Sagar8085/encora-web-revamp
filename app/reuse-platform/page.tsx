import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';

export const metadata = {
  title: "Legacy Reuse Platform | Encora",
  description: "Learn more about Encora's legacy reusable foodware platform and sign up for the waitlist or contact us for pilots.",
};

export default function ReusePlatformPage() {
  return (
    <main className="min-h-screen text-foreground">
      <section className="container mx-auto max-w-3xl px-6 py-16  mt-[5rem]">
        <h1 className="heading-lg text-center font-semibold tracking-tight dark:text-white mb-12">
          Encora Reuse Platform
        </h1>

        <article className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 md:p-8">
          <div className="space-y-6">
            <p className="text-sm sm:text-base text-muted-foreground">
              Encora originally launched as a reusable foodware platform with app-based checkout and smart return infrastructure.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              That app-based platform is still available for select pilots and partner deployments, but is not currently the main public offering.
            </p>
            <div className="pt-2 space-y-4">
              <p className="text-sm sm:text-base font-semibold">
                If you are interested in bringing Encora to your campus, property, venue, or organization, please contact us.
              </p>
              <p className="text-sm sm:text-base font-semibold">
                If you are an individual interested in future availability, please join the waitlist.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 flex flex-col sm:flex-row gap-4 border-t border-emerald-500/20">
            <Link
              href="https://user.encora.co/individual"
              className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
            >
              Join the Waitlist
            </Link>
            <TrackedLink
              href="/contact-us"
              eventName="demo_book_click"
              className="inline-flex flex-1 items-center justify-center rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Contact Us / Book a Demo
            </TrackedLink>
          </div>
        </article>
      </section>
    </main>
  );
}
