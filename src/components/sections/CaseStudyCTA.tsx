"use client";

import { motion } from "framer-motion";
import CTAButton from "../ui/CTAButton";

interface CaseStudyCTAProps {
  title?: string;
  subtitle?: string;
}

export default function CaseStudyCTA({
  title = "Ready to increase sales?",
  subtitle = "Let's talk about advertising that actually works."
}: CaseStudyCTAProps) {
  const calendarUrl = "https://calendar.app.google/KKjjEffx5VEeuZ9Z7";
  const phoneNumber = "952-215-7878";
  const phoneUrl = `tel:${phoneNumber}`;
  const emailUrl = "mailto:hello@averyseriouscompany.com";

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative py-24"
    >
      <div className="relative z-20">
        {/* Divider */}
        <div className="border-t border-white/10 mb-20"></div>

        {/* CTA Content */}
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mx-auto">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <p className="text-xs text-white/70 font-medium tracking-widest uppercase">
              Next Steps
            </p>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
              {title}
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* CTA Buttons - Prioritized Layout */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            {/* Primary CTA: Google Calendar */}
            <CTAButton
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-white to-white/90 hover:shadow-2xl hover:shadow-white/20"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            >
              Book Call
            </CTAButton>

            {/* Secondary CTA: Phone */}
            <CTAButton
              href={phoneUrl}
              variant="secondary"
              size="lg"
              className="border-white/40 hover:border-white/80"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
            >
              Call (952) 215-7878
            </CTAButton>

            {/* Tertiary CTA: Email */}
            <CTAButton
              href={emailUrl}
              variant="secondary"
              size="lg"
              className="border-white/20 hover:border-white/40 text-white/80 hover:text-white"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            >
              Email Us
            </CTAButton>
          </div>

          {/* Subtext */}
          <p className="text-sm text-white/50 pt-4">
            We typically respond within 24 hours
          </p>
        </div>
      </div>
    </motion.div>
  );
}
