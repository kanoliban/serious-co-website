import type { Metadata } from "next";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "FAQ - A Very Serious Company",
  description: "Straight answers about our direct-response advertising service. Pricing starts at $2,500/month. 90-day minimum. We create advertisements that increase sales.",
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
    answer: (
      <div className="space-y-3">
        <p>Three tiers based on scope:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Starter ($2,500/mo):</strong> Single campaign, one channel, monthly optimization</li>
          <li><strong>Growth ($5,000/mo):</strong> Full campaign suite, 2-3 channels, bi-weekly optimization</li>
          <li><strong>Scale ($8,000+/mo):</strong> Multi-campaign strategy, all channels, weekly optimization</li>
        </ul>
        <p className="text-white/60">Media costs are separate. 90-day minimum engagement.</p>
      </div>
    ),
    schemaAnswer: "Three tiers: Starter ($2,500/mo) for single campaign and one channel; Growth ($5,000/mo) for full campaign suite and 2-3 channels; Scale ($8,000+/mo) for multi-campaign strategy across all channels. Media costs are separate. 90-day minimum engagement."
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
    answer: (
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Week 1:</strong> Orientation. We collect everything we need about your product, market, and customers.</li>
        <li><strong>Weeks 2-3:</strong> Creation. We write dozens of headlines to find the right one.</li>
        <li><strong>Week 4:</strong> The advertisement goes live.</li>
        <li><strong>Ongoing:</strong> Monthly cycle of analysis, optimization, and reporting.</li>
      </ul>
    ),
    schemaAnswer: "Week 1: Orientation. We collect everything we need about your product, market, and customers. Weeks 2-3: Creation. We write dozens of headlines to find the right one. Week 4: The advertisement goes live. Ongoing: Monthly cycle of analysis, optimization, and reporting."
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
  "Budget to invest ($2.5k+ monthly in media)",
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
              <div className="text-lg text-white/80 leading-relaxed">
                {faq.answer}
              </div>
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

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter Tier */}
            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
              <div className="text-sm font-medium text-white/60 uppercase tracking-wider mb-2">Starter</div>
              <div className="text-3xl font-light text-white mb-1">$2,500</div>
              <div className="text-sm text-white/70 mb-4">per month</div>
              <ul className="text-xs text-white/60 space-y-1 text-left">
                <li>• Single campaign</li>
                <li>• One channel</li>
                <li>• Monthly optimization</li>
              </ul>
            </div>
            {/* Growth Tier */}
            <div className="text-center p-6 rounded-lg bg-white/10 border border-white/20 ring-1 ring-white/10">
              <div className="text-sm font-medium text-white uppercase tracking-wider mb-2">Growth</div>
              <div className="text-3xl font-light text-white mb-1">$5,000</div>
              <div className="text-sm text-white/70 mb-4">per month</div>
              <ul className="text-xs text-white/60 space-y-1 text-left">
                <li>• Full campaign suite</li>
                <li>• 2-3 channels</li>
                <li>• Bi-weekly optimization</li>
              </ul>
            </div>
            {/* Scale Tier */}
            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
              <div className="text-sm font-medium text-white/60 uppercase tracking-wider mb-2">Scale</div>
              <div className="text-3xl font-light text-white mb-1">$8,000+</div>
              <div className="text-sm text-white/70 mb-4">per month</div>
              <ul className="text-xs text-white/60 space-y-1 text-left">
                <li>• Multi-campaign strategy</li>
                <li>• All channels</li>
                <li>• Weekly optimization</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center gap-8 text-sm text-white/60 mt-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/40"></span>
              Media costs separate
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/40"></span>
              90-day minimum
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
                "text": faq.schemaAnswer || faq.answer
              }
            }))
          })
        }}
      />
    </ContentPageLayout>
  );
}
