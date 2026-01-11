"use client";

import { motion } from "framer-motion";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { teamMembers } from "@/content/team";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";

export default function AboutPage() {
  // Core beliefs from constitutional documents
  const beliefs = [
    "Advertising is not a creative exercise. It is a commercial one.",
    "The purpose of an advertisement is to change behavior. Specifically, to make someone who was not going to buy something decide to buy it.",
    "Creativity serves this purpose or it serves nothing.",
    "Measurement is not optional. An advertisement that cannot be measured cannot be improved.",
    "Simplicity is not a limitation. Clear communication outperforms clever communication.",
    "The client's money is not our money. Every dollar spent should return more than a dollar in profit.",
    "Results are the only reputation that matters.",
  ];

  // Ogilvy quotes from constitutional documents
  const ogilvyQuotes = [
    {
      quote: "We sell, or else.",
      context: "David Ogilvy built the most successful advertising agency of his era on this principle."
    },
    {
      quote: "If it doesn't sell, it isn't creative.",
      context: "The standard by which all work is judged."
    },
    {
      quote: "The consumer is not a moron. She is your wife.",
      context: "Do not insult her intelligence."
    },
    {
      quote: "Facetiousness is anathema. Permanent success has rarely been built on frivolity. People do not buy from clowns.",
      context: "This is why we are A Very Serious Company."
    },
  ];

  return (
    <ContentPageLayout>
      <div className="relative z-20 text-white">

        {/* HERO: THE ORIGIN */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20">
          <motion.div
            className="max-w-5xl w-full space-y-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-4">
                  The Origin
                </h1>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Take a simple, basic idea.
                <br />
                <span className="text-white/40">Take it very seriously.</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white/60 max-w-3xl font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                This is the principle of Charlie Munger. It is the foundation of A Very Serious Company.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* THE SIMPLE IDEA */}
        <section className="py-32 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="max-w-4xl">
                <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-6">
                  The Simple Idea
                </h1>
                <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                  Advertising exists to sell things.
                </h2>
                <div className="space-y-6 text-xl text-white/70 leading-relaxed">
                  <p>
                    Not to entertain. Not to inspire. Not to win awards. Not to build brands in the abstract. Not to create experiences. Not to start conversations.
                  </p>
                  <p>
                    To sell things.
                  </p>
                  <p>
                    This is what advertising was before it became an industry. A merchant wrote words to convince people to buy his goods. He measured success by whether more people bought. If they did, he wrote more words like those. If they didn&apos;t, he wrote different words.
                  </p>
                  <p>
                    Then advertising became prestigious. Creative directors won awards. Agencies built reputations for cleverness. The industry began optimizing for peer approval rather than client results.
                  </p>
                  <p className="text-white font-medium">
                    The simple idea was buried under decades of professional self-importance.
                  </p>
                  <p className="text-white font-medium">
                    We dig it back up.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE INHERITANCE - OGILVY */}
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
                  The Inheritance
                </h1>
                <h2 className="text-4xl md:text-5xl font-light leading-tight">
                  David Ogilvy built the most successful
                  <br />
                  <span className="text-white/40">advertising agency of his era.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ogilvyQuotes.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="bg-white/5 border-white/10 h-full hover:bg-white/10 transition-all">
                      <CardContent className="p-8 space-y-4">
                        <Quote className="w-8 h-8 text-white/20" />
                        <p className="text-2xl font-light text-white leading-relaxed">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                        <p className="text-sm text-white/50">
                          {item.context}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="max-w-3xl text-lg text-white/70 leading-relaxed space-y-4">
                <p>
                  At age 25, in 1936, Ogilvy articulated principles he would follow for the rest of his career. Decades later, reviewing that early document, he wrote: &ldquo;It proves two things: A) At 25 I was brilliantly clever, and B) I have learned nothing new in the subsequent 27 years.&rdquo;
                </p>
                <p className="text-white font-medium">
                  The principles do not change because they are true.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE BELIEF */}
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
                  What We Believe
                </h1>
                <h2 className="text-4xl md:text-5xl font-light leading-tight mb-12">
                  The standard by which we work.
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {beliefs.map((belief, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-6 border-l-2 border-white/20 hover:border-white/60 hover:bg-white/5 transition-all"
                  >
                    <p className="text-lg text-white/80">{belief}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE TEAM */}
        <section className="py-32 px-6 border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-6">
                  The Team
                </h1>
                <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                  The people who do the work.
                </h2>
                <p className="text-xl text-white/60">
                  No account managers. No layers. Just the people responsible for your results.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, idx) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link href={`/team/${member.slug}`} className="block group">
                      <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all overflow-hidden">
                        <div className="aspect-[4/5] relative overflow-hidden">
                          <img
                            src={member.image.color}
                            alt={member.name}
                            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                        <CardHeader className="relative -mt-16 z-10">
                          <CardTitle className="text-xl font-light text-white">
                            {member.name}
                          </CardTitle>
                          <CardDescription className="text-white/60">
                            {member.title}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-white/50 line-clamp-2">
                            {member.description}
                          </p>
                          <div className="flex items-center gap-2 mt-4 text-sm text-white/40 group-hover:text-white/80 transition-colors">
                            <span>Learn more</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE PURPOSE */}
        <section className="py-32 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-6">
                  The Purpose
                </h1>
                <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                  Return advertising to its original function.
                </h2>
              </div>

              <div className="space-y-6 text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                <p>
                  We create advertisements that sell things.
                </p>
                <p>
                  We measure whether they work.
                </p>
                <p>
                  We improve them until they do.
                </p>
                <p className="text-white font-medium pt-4">
                  This is the job. We take it very seriously.
                </p>
              </div>

              <div className="pt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/why-us"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-blue-900 font-medium text-lg tracking-tight transition-all hover:bg-white/90 active:scale-[0.98] shadow-2xl shadow-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See how we work
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="/work"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full border-2 border-white/20 text-white font-medium text-lg tracking-tight transition-all hover:bg-white/10 hover:border-white/40 active:scale-[0.98]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View our work
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </ContentPageLayout>
  );
}
