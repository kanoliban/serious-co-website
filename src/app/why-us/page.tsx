"use client";

import { motion } from "framer-motion";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, TrendingUp, Target, Zap, Shield } from "lucide-react";

export default function WhyUsPage() {
  // OUR STANDARDS
  const standards = [
    {
      metric: "2:1",
      label: "Minimum acceptable return",
      detail: "Below this, we kill the campaign. No excuses."
    },
    {
      metric: "4:1",
      label: "Target return on ad spend",
      detail: "What we aim for on every campaign."
    },
    {
      metric: "90 days",
      label: "Before any campaign is judged",
      detail: "Advertising takes time to work."
    },
  ];

  // THE PROCESS
  const process = [
    {
      step: "01",
      title: "We study your product and market",
      description: "Week 1. We collect everything: customers, competitors, margins, what's worked, what hasn't. We find the message that makes people buy.",
      outcome: "The core message that sells"
    },
    {
      step: "02",
      title: "We create the advertisement",
      description: "Weeks 2-3. We write dozens of headlines to find the right one. Copy, visuals, formats. The work that will actually run.",
      outcome: "An advertisement ready to sell"
    },
    {
      step: "03",
      title: "We run it, measure it, improve it",
      description: "Week 4 and ongoing. The ad goes live. We track results. Money spent, money returned. Every month: analysis, optimization, reporting.",
      outcome: "Sales you can measure"
    },
  ];

  // WHAT YOU GET
  const outcomes = [
    { icon: TrendingUp, title: "Sales", desc: "Revenue you can measure" },
    { icon: Target, title: "Clarity", desc: "Know exactly what's working" },
    { icon: Shield, title: "Accountability", desc: "Real ROI, not vanity metrics" },
    { icon: Zap, title: "Efficiency", desc: "Ad spend that produces returns" },
  ];

  return (
    <ContentPageLayout>
      <div className="relative z-20 text-white">

        {/* HERO */}
        <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20">
          <motion.div
            className="max-w-5xl w-full space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-4">
                Why Us
              </h1>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              We create advertisements
              <br />
              <span className="text-white/40">that sell things.</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/60 max-w-3xl font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Not brand awareness. Not social content. Not creative concepts.
              <br />
              Advertisements that generate revenue you can measure.
            </motion.p>
          </motion.div>
        </section>

        {/* THE STANDARD */}
        <section className="py-32 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div>
                <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-6">
                  The Standard
                </h1>
                <h2 className="text-4xl md:text-5xl font-light leading-tight">
                  We hold ourselves accountable.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {standards.map((marker, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="bg-white/5 border-white/10 h-full hover:bg-white/10 transition-all">
                      <CardHeader>
                        <CardTitle className="text-5xl font-light text-white">
                          {marker.metric}
                        </CardTitle>
                        <CardDescription className="text-white/60 text-base">
                          {marker.label}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-white/40 leading-relaxed">
                          {marker.detail}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE PROCESS */}
        <section className="py-32 px-6 border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div>
                <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-6">
                  The Process
                </h1>
                <h2 className="text-4xl md:text-5xl font-light leading-tight">
                  Three steps. That&apos;s it.
                </h2>
              </div>

              <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
                {process.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm overflow-hidden data-[state=open]:bg-white/10 transition-all"
                  >
                    <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                      <div className="flex items-center gap-6 text-left w-full">
                        <div className="text-5xl font-light text-white/20 group-data-[state=open]:text-white/40 transition-colors">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-light text-white group-data-[state=open]:text-white transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-8">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 pl-[88px]"
                      >
                        <p className="text-lg text-white/70 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                          <Check className="w-5 h-5 text-white/60 flex-shrink-0" />
                          <p className="text-white/80">
                            <span className="font-medium">Outcome:</span> {item.outcome}
                          </p>
                        </div>
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-32 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-6">
                  What You Get
                </h1>
                <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                  Advertising that sells.
                </h2>
                <p className="text-xl text-white/60">
                  Monthly reports showing money spent and money returned.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {outcomes.map((outcome, idx) => {
                  const Icon = outcome.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Card className="bg-white/5 border-white/10 h-full hover:bg-white/10 transition-all">
                        <CardContent className="p-8 space-y-4">
                          <div className="p-3 rounded-xl bg-white/5 w-fit">
                            <Icon className="w-8 h-8 text-white/60" />
                          </div>
                          <h3 className="text-2xl font-light text-white">
                            {outcome.title}
                          </h3>
                          <p className="text-white/60">
                            {outcome.desc}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-light leading-tight">
                  Ready to sell more?
                </h2>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                  Tell us what you sell. We&apos;ll tell you if we can help.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="/contact"
                  className="px-10 py-5 rounded-full bg-white text-blue-900 font-medium text-lg tracking-tight transition-all hover:bg-white/90 active:scale-[0.98] shadow-2xl shadow-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start a Conversation
                </motion.a>
                <motion.a
                  href="mailto:hello@averyseriouscompany.com"
                  className="px-10 py-5 rounded-full border-2 border-white/20 text-white font-medium text-lg tracking-tight transition-all hover:bg-white/10 hover:border-white/40 active:scale-[0.98]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Email Us
                </motion.a>
              </div>

              <p className="text-sm text-white/40">
                Starting at $2,500/month. Three tiers available. Media costs separate. 90-day minimum.
              </p>
            </motion.div>
          </div>
        </section>

      </div>
    </ContentPageLayout>
  );
}
