"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface RelatedServiceItem {
  name: string;
  slug?: string;
}

interface CaseStudyRelatedServicesProps {
  servicesUsed?: RelatedServiceItem[];
  teamMembers?: RelatedServiceItem[];
}

// Default services mapping - 5 components of our one service
const servicesList: { [key: string]: string } = {
  "Strategy": "/services",
  "Creative": "/services",
  "Placement": "/services",
  "Measurement": "/services",
  "Optimization": "/services",
};

export default function CaseStudyRelatedServices({
  servicesUsed = [],
  teamMembers = []
}: CaseStudyRelatedServicesProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative py-24"
    >
      <div className="relative z-20">
        {/* Divider */}
        <div className="border-t border-white/10 mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Services Used */}
          {servicesUsed.length > 0 && (
            <div className="space-y-6">
              <div>
                <p className="text-xs text-white/60 font-medium tracking-widest uppercase mb-4">
                  What We Did
                </p>
                <h3 className="text-lg text-white font-light">
                  The work that sold.
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {servicesUsed.map((service) => (
                  <Link
                    key={service.name}
                    href={service.slug || servicesList[service.name] || "#"}
                    className="px-4 py-2 rounded-full border border-white/20 hover:border-white/50 text-white/70 hover:text-white text-sm font-light transition-all duration-300 hover:bg-white/5"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Team Members Involved */}
          {teamMembers.length > 0 && (
            <div className="space-y-6">
              <div>
                <p className="text-xs text-white/60 font-medium tracking-widest uppercase mb-4">
                  The Team
                </p>
                <h3 className="text-lg text-white font-light">
                  Who did the work.
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {teamMembers.map((member) => (
                  <Link
                    key={member.name}
                    href={member.slug || `/team/${member.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-4 py-2 rounded-full border border-white/20 hover:border-white/50 text-white/70 hover:text-white text-sm font-light transition-all duration-300 hover:bg-white/5"
                  >
                    {member.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
