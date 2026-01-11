import type { Metadata } from "next";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import {
  LightBulbIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  ChartBarIcon,
  ArrowPathIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "The Service - A Very Serious Company",
  description: "We create advertisements that increase sales. This is the entirety of what we offer. One service, delivered well. $5k-$8k/month, 90-day minimum.",
  openGraph: {
    title: "The Service - A Very Serious Company",
    description: "We create advertisements that increase sales. This is the entirety of what we offer. One service, delivered well.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - The Service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Service - A Very Serious Company",
    description: "We create advertisements that increase sales. This is the entirety of what we offer. One service, delivered well.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

const serviceComponents = [
  {
    icon: LightBulbIcon,
    title: "Strategy",
    description: "Analysis of product, market, customers. The core message that makes people buy.",
    color: "yellow"
  },
  {
    icon: PaintBrushIcon,
    title: "Creative",
    description: "The advertisement itself. Copy, visuals, formats. We write dozens of headlines to find the right one.",
    color: "purple"
  },
  {
    icon: MegaphoneIcon,
    title: "Placement",
    description: "Media purchased, scheduled, monitored. Your advertisement reaches people who can buy.",
    color: "blue"
  },
  {
    icon: ChartBarIcon,
    title: "Measurement",
    description: "Tracking results. Attribution. Money spent, money returned. You see exactly what's working.",
    color: "emerald"
  },
  {
    icon: ArrowPathIcon,
    title: "Optimization",
    description: "Testing variations. Scaling what works. Killing what doesn't. The cycle repeats monthly.",
    color: "orange"
  }
];

const whatWeDontDo = [
  { title: "Brand Strategy", description: "Positioning, values, guidelines" },
  { title: "Awareness Campaigns", description: "No measurable sales objective" },
  { title: "Social Media Management", description: "Organic content, calendars" },
  { title: "Public Relations", description: "Press releases, reputation" },
  { title: "Creative Concepts Without Execution", description: "Ideas without results" }
];

const colorClasses: Record<string, { bg: string; text: string }> = {
  yellow: { bg: "bg-yellow-500/20", text: "text-yellow-400" },
  purple: { bg: "bg-purple-500/20", text: "text-purple-400" },
  blue: { bg: "bg-blue-500/20", text: "text-blue-400" },
  emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400" },
  orange: { bg: "bg-orange-500/20", text: "text-orange-400" }
};

export default function OurServicesPage() {
  return (
    <ContentPageLayout>
      <div className="relative z-20 space-y-32 text-white">

        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
          <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
            The Service
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
            We create advertisements<br />that increase sales.
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            This is the entirety of what we offer.<br />
            One service, delivered well.
          </p>
        </div>

        {/* What We Do - 5 Components */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-light text-white mb-3">What We Do</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceComponents.map((component, index) => {
              const Icon = component.icon;
              const colors = colorClasses[component.color];
              return (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-4 h-4 ${colors.text}`} />
                    </div>
                    <h3 className="text-lg font-medium text-white">{component.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/70">
                    {component.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* What We Don't Do */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-light text-white mb-3">What We Don&apos;t Do</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDontDo.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <XMarkIcon className="w-3 h-3 text-red-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">{item.title}</h3>
                  <p className="text-xs text-white/50">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Standard */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-light text-white mb-3">The Standard</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
              <div className="text-3xl font-light text-white mb-2">2:1</div>
              <div className="text-sm text-white/70">Minimum acceptable return</div>
              <p className="text-xs text-white/50 mt-2">Below this, we kill the campaign</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
              <div className="text-3xl font-light text-white mb-2">4:1</div>
              <div className="text-sm text-white/70">Target return</div>
              <p className="text-xs text-white/50 mt-2">What we aim for on every campaign</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
              <div className="text-3xl font-light text-white mb-2">90 days</div>
              <div className="text-sm text-white/70">Minimum evaluation period</div>
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
            $5,000–$8,000 per month. Media costs separate. 90-day minimum.
          </p>
        </div>

      </div>
    </ContentPageLayout>
  );
}
