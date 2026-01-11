"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CTAButton from "../ui/CTAButton";

interface list {
  title: string;
  value: string;
  summary: string;
  image: {
    src: string;
    alt: string;
  };
}

const LIST: Array<list> = [
  {
    title: "Strategy that finds the message.",
    value: "1",
    summary:
      "Analysis of product, market, and customers. We find the core message that sells. Not brand positioning. Sales positioning.",
    image: {
      src: "https://cdn.cosmos.so/a13978fa-5536-4e89-a976-5d24b239a389?format=jpeg",
      alt: "Strategy analysis",
    },
  },
  {
    title: "Creative that sells.",
    value: "2",
    summary:
      "The advertisement itself. Copy, visuals, formats. Work that actually runs. We measure results, not awards.",
    image: {
      src: "https://cdn.cosmos.so/31a4b92a-1b71-47ee-87e2-7594ad90e52a?format=jpeg",
      alt: "Advertisement creative",
    },
  },
  {
    title: "Optimization until it works.",
    value: "3",
    summary:
      "Testing variations. Scaling what works. Killing what doesn't. We don't stop until the numbers prove it's working.",
    image: {
      src: "https://cdn.cosmos.so/65975927-a67d-4024-9f78-cc6a3f6c737f?format=jpeg",
      alt: "Optimization process",
    },
  },
];

const FeatureSectionTwo = () => {
  return (
    <section className="py-16 bg-[#0B3D91] text-white">
      <div className="container max-w-6xl mx-auto">
        <div className="mx-auto mb-8 flex flex-col items-start justify-between gap-8 md:mb-16">
          <h1 className="text-left text-4xl max-w-4xl lg:text-6xl font-bold text-white">
            A Very Serious Company
          </h1>
          <div className="text-lg max-w-xl leading-relaxed">
            <p className="mb-2 text-white">We create advertisements that increase sales.</p>
            <p className="mb-2 text-white">That&apos;s it. One service, delivered well.</p>
            <p className="mb-8 text-white">If it doesn&apos;t sell, it isn&apos;t creative.</p>
            <div className="flex flex-col sm:flex-row gap-3">
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
        <div>
          <Tabs defaultValue={LIST[0].value} className="gap-16 xl:flex-row">
            <TabsList className="h-fit w-fit flex-col gap-2.5 bg-transparent p-0">
              {LIST.map((item, i) => (
                <TabsTrigger
                  className="flex-col items-start rounded-none p-5 text-left shadow-none border whitespace-normal data-[state=active]:outline cursor-pointer xl:max-w-[34.0625rem] border-white/20 text-white bg-transparent hover:bg-white/10"
                  key={`tab-trigger-${i}`}
                  value={item.value}
                >
                  <div className="leading-normal font-bold text-white">{item.title}</div>
                  <div className="leading-normal text-white/80">
                    {item.summary}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            {LIST.map((item, i) => (
              <TabsContent
                className="w-full"
                key={`tab-content-${i}`}
                value={item.value}
              >
                <AspectRatio
                  ratio={16 / 9}
                  className="overflow-hidden rounded-[0.75rem]"
                >
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="block size-full object-cover object-center"
                  />
                </AspectRatio>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { FeatureSectionTwo };