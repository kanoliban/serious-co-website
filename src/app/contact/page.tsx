import type { Metadata } from "next";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import ContactIntakeForm from "@/components/sections/ContactIntakeForm";

export const metadata: Metadata = {
  title: "Contact - A Very Serious Company",
  description: "Ready to increase sales? Tell us about your business. We create advertisements that sell things.",
  openGraph: {
    title: "Contact - A Very Serious Company",
    description: "Ready to increase sales? Tell us about your business. We create advertisements that sell things.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - Contact",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - A Very Serious Company",
    description: "Ready to increase sales? Tell us about your business. We create advertisements that sell things.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function ContactPage() {
  return (
    <ContentPageLayout>
      <div className="relative z-20 text-white">
        <div className="max-w-3xl mx-auto pt-20 lg:pt-24">
          {/* Hero */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
              Contact
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
              Let&apos;s talk.
            </h2>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Have a question? Send a message. Ready to start? Tell us about your business.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12">
            <ContactIntakeForm />
          </div>

          {/* Bottom Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-sm text-white/50 uppercase tracking-wider">Response time</div>
              <div className="text-white font-light">Within 24 hours</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-white/50 uppercase tracking-wider">Investment</div>
              <div className="text-white font-light">From $2,500/mo</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-white/50 uppercase tracking-wider">Minimum</div>
              <div className="text-white font-light">90 days</div>
            </div>
          </div>
        </div>
      </div>
    </ContentPageLayout>
  );
}
