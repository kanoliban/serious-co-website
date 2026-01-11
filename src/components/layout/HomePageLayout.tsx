"use client";

import React from "react";
import { motion } from "framer-motion";
import ShootingStarBackground from "../blocks/ShootingStarBackground";
import PageFooter from "./PageFooter";

const HomePageLayout = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B3D91]" style={{ backgroundColor: 'var(--brand-blue, #0B3D91)' }}>
      <ShootingStarBackground numberOfStars={100} />

      <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 pt-[var(--nav-h,64px)] min-h-[calc(100svh-var(--nav-h,64px))] grid grid-rows-[1fr_auto] grid-areas-[title_footer]">
        {/* Title Area */}
        <motion.div
          className="grid-area-title flex items-center z-10 lg:max-w-2xl w-full lg:w-auto -mt-32 lg:mt-0"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2
          }}
        >
          <motion.h1
            className="text-left font-playfair font-extralight tracking-tight leading-tight text-white"
            style={{
              fontSize: 'clamp(2.371875rem, 5.06vw + 1.265rem, 4.5rem)',
              lineHeight: '1.1'
            }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4
            }}
          >
            A Very Serious<br />Company
          </motion.h1>
        </motion.div>

        {/* Footer Area */}
        <motion.div
          className="grid-area-footer"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 1.2
          }}
        >
          <PageFooter />
        </motion.div>
      </div>
    </section>
  );
};

export { HomePageLayout };
