"use client";

import CTAButton from "../ui/CTAButton";

const DATA = [
  {
    title: "Strategy",
    description:
      "Analysis of product, market, and customers. We find the core message that sells.",
    icon: "CircleHelp",
    image:
      "https://cdn.cosmos.so/410de9a7-1213-433a-93da-043b0e2e2a7b?format=jpeg",
  },
  {
    title: "Creative",
    description:
      "The advertisement itself. Copy, visuals, formats. Work that actually runs.",
    icon: "Volume2",
    image:
      "https://cdn.cosmos.so/c32afa87-08ab-4e83-b768-7c1c7877e889?format=jpeg",
  },
  {
    title: "Measurement",
    description:
      "Tracking results. Attribution. Money spent, money returned. If it doesn't sell, it isn't creative.",
    icon: "Lightbulb",
    image:
      "https://cdn.cosmos.so/410de9a7-1213-433a-93da-043b0e2e2a7b?format=jpeg",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 bg-[#0B3D91] text-white">
      <div className="border-y border-white/20">
        <div className="container flex flex-col gap-8 border-x max-lg:border-x px-6 lg:px-10 py-4 border-white/20">
          <h1 className="text-4xl leading-tight tracking-tight font-extralight md:text-5xl lg:text-6xl">
            A Very Serious Company
          </h1>
          <div className="max-w-[600px] space-y-2" style={{ letterSpacing: '-0.32px' }}>
            <p>We create advertisements that increase sales.</p>
            <p>That&apos;s it. One service, delivered well.</p>
            <p className="font-normal">If it doesn&apos;t sell, it isn&apos;t creative.</p>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <CTAButton
              href="https://calendar.app.google/KKjjEffx5VEeuZ9Z7"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              className="hover:scale-105"
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            >
              Book Call
            </CTAButton>
            <CTAButton
              href="mailto:hello@averyseriouscompany.com"
              variant="secondary"
              size="md"
            >
              Email Us
            </CTAButton>
          </div>
        </div>
      </div>

      <div className="lg:px-0! container border-x border-white/20">
        <div className="items-center">
          <div className="grid flex-1 max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:divide-x border-white/20">
            {DATA.map((item, index) => (
              <div
                key={index}
                className="relative isolate pt-5 text-start lg:pt-20"
              >
                <h3 className="mt-2 px-4 text-lg tracking-tight lg:px-8">
                  {item.title}
                </h3>
                <p className="pb-6 pt-2 lg:px-8 text-white/80">
                  {item.description}
                </p>
                <div className="border-t border-white/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="bg-muted dark:invert"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-16 w-full border-y md:h-24 lg:h-32 border-white/20">
        <div className="container h-full w-full border-x border-white/20"></div>
      </div>
    </section>
  );
};

export { FeatureSection };