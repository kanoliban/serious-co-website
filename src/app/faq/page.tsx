import type { Metadata } from "next";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "FAQ - A Very Serious Company",
  description: "Straight answers about our direct-response advertising service. Pricing: $5k-$8k/month. 90-day minimum. We create advertisements that increase sales.",
  openGraph: {
    title: "FAQ - A Very Serious Company",
    description: "Straight answers about our direct-response advertising service. Pricing, process, and who we work with.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - FAQ",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - A Very Serious Company",
    description: "Straight answers about our direct-response advertising service. Pricing, process, and who we work with.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

const faqs = [
  {
    question: "What do you do?",
    answer: "We create advertisements that increase sales. Not brand strategy. Not awareness campaigns. Not social media content. Advertisements that sell things."
  },
  {
    question: "How much does it cost?",
    answer: "$5,000–$8,000 per month, depending on scope. Media costs are separate. 90-day minimum engagement. This is not negotiable."
  },
  {
    question: "Who should work with you?",
    answer: "Businesses with a proven product (customers exist and are satisfied), healthy margins (economics support advertising), a sales problem not a product problem, budget to invest ($5k+ monthly in media), and willingness to let us make creative decisions."
  },
  {
    question: "Who should NOT work with you?",
    answer: "Businesses that are pre-revenue or pre-product-market-fit, want brand awareness without sales objectives, require committee approval for creative decisions, cannot commit to 90 days, or have margins that don't support acquisition costs."
  },
  {
    question: "What's your process?",
    answer: "Week 1: Orientation. We collect everything we need about your product, market, and customers. Weeks 2-3: Creation. We write dozens of headlines to find the right one. Week 4: The advertisement goes live. Ongoing: Monthly cycle of analysis, optimization, and reporting."
  },
  {
    question: "What makes you different?",
    answer: "The advertising industry became unserious. Agencies optimize for awards, not sales. They build portfolios of 'brave' work that doesn't move product. We are serious. We measure results. If it doesn't sell, it isn't creative."
  }
];

const whoShouldWorkWithUs = [
  "Proven product (customers exist and are satisfied)",
  "Healthy margins (economics support advertising)",
  "A sales problem, not a product problem",
  "Budget to invest ($5k+ monthly in media)",
  "Willingness to let us make creative decisions"
];

const whoShouldNot = [
  "Pre-revenue or pre-product-market-fit",
  "Want brand awareness without sales objectives",
  "Require committee approval for creative decisions",
  "Cannot commit to 90 days",
  "Margins that don't support acquisition costs"
];

export default function FAQ() {
  return (
    <ContentPageLayout>
      <div className="relative z-20 space-y-32 text-white">

        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
          <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
            FAQ
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
            Straight answers.<br />No fluff.
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-3 pb-8 border-b border-white/10 last:border-b-0">
              <h3 className="text-xl sm:text-2xl font-light text-white">{faq.question}</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Qualifier Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-light text-white mb-3">Are We Right For Each Other?</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Who Should */}
            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h3 className="text-lg font-medium text-white mb-4">Work with us if you have:</h3>
              <ul className="space-y-3">
                {whoShouldWorkWithUs.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who Should Not */}
            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h3 className="text-lg font-medium text-white mb-4">Don&apos;t work with us if you:</h3>
              <ul className="space-y-3">
                {whoShouldNot.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <XMarkIcon className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Summary */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-light text-white mb-3">The Investment</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
              <div className="text-2xl font-light text-white mb-2">$5,000–$8,000</div>
              <div className="text-sm text-white/70">Per month</div>
              <p className="text-xs text-white/50 mt-2">Depending on scope</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
              <div className="text-2xl font-light text-white mb-2">Separate</div>
              <div className="text-sm text-white/70">Media costs</div>
              <p className="text-xs text-white/50 mt-2">You control your budget</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
              <div className="text-2xl font-light text-white mb-2">90 days</div>
              <div className="text-sm text-white/70">Minimum engagement</div>
              <p className="text-xs text-white/50 mt-2">Advertising takes time to work</p>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center space-y-4 pt-8 border-t border-white/10">
          <p className="text-lg sm:text-xl font-light leading-relaxed text-white/90 max-w-2xl mx-auto">
            If it doesn&apos;t sell, it isn&apos;t creative.
          </p>
          <p className="text-base text-white/70">
            Ready to increase sales? Let&apos;s talk.
          </p>
        </div>

      </div>

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </ContentPageLayout>
  );
}
