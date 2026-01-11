"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface CaseStudy {
  title: string;
  description: string;
  href: string;
  category: string;
  workType: string;
  gradient: string;
  accent: string;
  image: string;
  thumbnail: string;
}

// Grid Case Study Card Component
function CaseStudyGridCard({
  study,
  index,
  isMobile,
  onOpenPreview,
}: {
  study: CaseStudy;
  index: number;
  isMobile: boolean;
  onOpenPreview?: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };
  const handleMouseLeave = () => {
    if (!isMobile) setIsHovered(false);
  };

  const handleClick = (e: React.MouseEvent, href: string) => {
    if (href === "#") {
      e.preventDefault();
      // Fun quirky messages for coming soon projects that match the website's aesthetic
      const messages = [
        "🚀 *adjusts monocle* This project is being crafted with the utmost seriousness... almost there!",
        "⚡ Our very serious team is putting the finishing touches on this masterpiece!",
        "🎯 *dramatic pause* Something extraordinary is brewing in our secret laboratory...",
        "✨ We're applying the final layers of pure excellence to this digital experience!",
        "🔥 *clears throat professionally* This project will be so good, it might break the internet!",
        "🎭 *serious business face* We're not joking - this will be absolutely spectacular!",
        "🌟 Our AI-powered design elves are working overtime on this one!",
        "🎪 *tips hat* This project is going to be so serious, it might become a case study for case studies!"
      ];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];

      // Create a custom styled alert that matches the website aesthetic
      const alertBox = document.createElement('div');
      alertBox.style.cssText = `
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        z-index: 10000;
      `;

      const modal = document.createElement('div');
      modal.style.cssText = `
        background: linear-gradient(135deg, #1e3a8a, #3730a3);
        color: white;
        padding: 16px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.25);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(16px);
        font-family: 'Inter', sans-serif;
        font-size: 0.95rem;
        font-weight: 300;
        letter-spacing: 0.02em;
        text-align: center;
        max-width: 360px;
        width: 100%;
        animation: fadeInScale 0.25s ease-out;
      `;

      // Add CSS animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `;
      document.head.appendChild(style);

      const isVideo = study.image.endsWith('.mp4') || study.image.endsWith('.webm') || study.image.endsWith('.mov');
      const mediaHTML = isVideo
        ? `<video src="${study.image}" style="display:block; width:100%; height:auto; max-height:40svh; border-radius: 10px;" autoplay loop muted playsinline></video>`
        : `<img src="${study.image}" alt="${study.title} preview" style="display:block; width:100%; height:auto; max-height:40svh; border-radius: 10px;" loading="lazy" />`;

      modal.innerHTML = `
        <div style="margin-bottom: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.25); border-radius: 12px; min-height: 160px; display: flex; align-items: center; justify-content: center;">${mediaHTML}</div>
        <div style="margin-bottom: 12px; line-height: 1.4;">${randomMessage}</div>
        <button style="
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.85rem;
          transition: all 0.2s ease;
          width: 100%;
        ">Got it</button>
      `;

      const button = modal.querySelector('button') as HTMLButtonElement | null;
      if (button) {
        button.addEventListener('mouseover', () => {
          button.style.background = 'rgba(255,255,255,0.2)';
        });
        button.addEventListener('mouseout', () => {
          button.style.background = 'rgba(255,255,255,0.1)';
        });
        button.addEventListener('click', () => {
          if (alertBox.parentElement) alertBox.remove();
        });
      }

      // Dismiss when tapping the backdrop (outside modal)
      alertBox.addEventListener('click', (ev) => {
        if (ev.target === alertBox) {
          if (alertBox.parentElement) alertBox.remove();
        }
      });

      // Prevent backdrop click when tapping inside modal
      modal.addEventListener('click', (ev) => ev.stopPropagation());

      alertBox.appendChild(modal);
      document.body.appendChild(alertBox);
      // No auto-dismiss
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
      className="relative"
    >
      <Link
        href={study.href}
        className={`block group relative overflow-hidden rounded-2xl bg-gradient-to-br ${study.gradient} backdrop-blur-sm border border-white/10 ${study.href === "#" ? "cursor-pointer" : ""} h-full flex flex-col transition-transform duration-300 ease-out hover:-translate-y-2`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => handleClick(e, study.href)}
        ref={cardRef}
      >
        {/* Thumbnail Container */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10"></div>
          {study.thumbnail.endsWith('.mp4') || study.thumbnail.endsWith('.webm') || study.thumbnail.endsWith('.mov') ? (
            <video
              src={study.thumbnail}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={study.thumbnail}
              alt={`${study.title} Preview`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}

          {/* Coming Soon Badge */}
          {study.href === "#" && (
            <div className="absolute top-4 right-4 z-20">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium font-mono tracking-wide text-yellow-300 bg-yellow-400/10 border border-yellow-400/30 backdrop-blur-sm">
                Coming Soon
              </span>
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col justify-between min-h-[120px]">
          <div className="space-y-4">
            {/* Eyebrow Text */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium tracking-widest uppercase text-white/60 group-hover:text-white/80 transition-colors duration-300">
                {study.workType}
              </span>
              <span className="text-xs font-mono text-white/40 group-hover:text-white/60 transition-colors duration-300">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-light tracking-wide text-white group-hover:text-white/95 transition-colors duration-300 leading-tight">
              {study.title}
            </h3>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      </Link>
    </motion.div>
  );
}

export default function CaseStudiesClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    const checkMobile = () => {
      if (typeof window === 'undefined') return;
      const coarse = window.matchMedia('(pointer: coarse)').matches;
      const noHover = window.matchMedia('(hover: none)').matches;
      const smallWidth = window.innerWidth <= 640;
      setIsMobile(coarse || noHover || smallWidth);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const caseStudies: CaseStudy[] = [
    {
      title: "Jayded AF",
      description: "Premium gin martini brand needed to convert website visitors into customers. Direct-response landing pages with clear purchase paths increased online sales and drove traffic to retail partners.",
      href: "/work/jayded-af",
      category: "Premium Spirits",
      workType: "Food and Beverage",
      gradient: "from-purple-500/20 to-pink-500/20",
      accent: "text-purple-300",
      image: "/jayded-af-project-video.mp4",
      thumbnail: "/projects/jayded/jayded-af-project.png"
    },
    {
      title: "HealThrive Recovery",
      description: "Addiction treatment center needed families to call. We built a direct-response website that converts visitors into admissions inquiries. Families find help. The center fills beds.",
      href: "/work/healthrive-recovery",
      category: "Healthcare",
      workType: "Health and Wellness",
      gradient: "from-blue-500/20 to-cyan-500/20",
      accent: "text-cyan-300",
      image: "/healthrive-recovery-project.png",
      thumbnail: "/projects/healthrive/healthrive-recovery-project.png"
    },
    {
      title: "Zachary Construction Group",
      description: "Coming soon — Construction company generating qualified leads through direct-response advertising.",
      href: "#",
      category: "Construction",
      workType: "Construction",
      gradient: "from-orange-500/20 to-yellow-500/20",
      accent: "text-orange-300",
      image: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
      thumbnail: "/projects/zachary-construction/zachary-construction-01.png"
    },
    {
      title: "Pet Love Cremation & Memorial",
      description: "Coming soon — Pet memorial service converting grief into inquiries with dignity.",
      href: "#",
      category: "Pet Services",
      workType: "Pet Services",
      gradient: "from-green-500/20 to-teal-500/20",
      accent: "text-green-300",
      image: "/pet-love-cremation-project.gif",
      thumbnail: "/projects/pet-love/pet-love-01.png"
    },
    {
      title: "Beka Wealth Advisors",
      description: "Coming soon — Financial advisory firm acquiring high-net-worth clients through targeted advertising.",
      href: "#",
      category: "Financial Services",
      workType: "Finance",
      gradient: "from-indigo-500/20 to-blue-500/20",
      accent: "text-indigo-300",
      image: "/beka-wealth-advisors-project.gif",
      thumbnail: "/projects/beka/beka-01.png"
    },
    {
      title: "Pacific Life",
      description: "Coming soon — Insurance company driving policy inquiries through direct-response campaigns.",
      href: "#",
      category: "Financial Services",
      workType: "Finance",
      gradient: "from-emerald-500/20 to-cyan-500/20",
      accent: "text-emerald-300",
      image: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
      thumbnail: "/projects/pacific-life/pacific-life-01.png"
    },
    {
      title: "WEOY",
      description: "Coming soon — Technology platform converting visitors into users.",
      href: "#",
      category: "Technology",
      workType: "Technology",
      gradient: "from-violet-500/20 to-purple-500/20",
      accent: "text-violet-300",
      image: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
      thumbnail: "/projects/weoy/weoy-01.png"
    },
    {
      title: "Zachary Group",
      description: "Coming soon — Business services group generating qualified B2B leads.",
      href: "#",
      category: "Business Services",
      workType: "Business",
      gradient: "from-slate-500/20 to-gray-500/20",
      accent: "text-slate-300",
      image: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
      thumbnail: "/projects/zachary-group/zachary-group-01.png"
    },
    {
      title: "The Last Paradox",
      description: "Coming soon — Album release campaign driving streams and merchandise sales.",
      href: "#",
      category: "Entertainment",
      workType: "Entertainment",
      gradient: "from-pink-500/20 to-purple-500/20",
      accent: "text-pink-300",
      image: "/the-last-paradox-project.gif",
      thumbnail: "/projects/the-last-paradox/the-love-paradox.png"
    }
  ];

  return (
    <div className="relative z-20 text-base leading-relaxed space-y-32 text-white">
      {/* Hero Section with Eyebrow + Descriptive Subheading */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
        <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
          Our Work
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
          Work that sells.
        </h2>
        <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
          Every project here solved a sales problem. We don&apos;t show work that looks good. We show work that worked.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
        {caseStudies.map((study, index) => (
          <CaseStudyGridCard
            key={index}
            study={study}
            index={index}
            isMobile={isMobile}
            onOpenPreview={() => setOpenIndex(index)}
          />
        ))}
      </div>

      {/* Mobile bottom sheet preview */}
      {isMobile && openIndex !== null && (
        <Sheet open onOpenChange={(open) => !open && setOpenIndex(null)}>
          <SheetContent side="bottom" className="bg-black/70 backdrop-blur-md border-white/10">
            <SheetHeader>
              <SheetTitle className="text-white/90">{caseStudies[openIndex]?.title}</SheetTitle>
              <SheetDescription className="text-white/70">
                {caseStudies[openIndex]?.category} · {caseStudies[openIndex]?.workType}
              </SheetDescription>
            </SheetHeader>
            <div className="px-4 pb-4 flex items-center justify-center">
              {caseStudies[openIndex]?.image.endsWith('.mp4') || caseStudies[openIndex]?.image.endsWith('.webm') || caseStudies[openIndex]?.image.endsWith('.mov') ? (
                <video
                  src={caseStudies[openIndex]?.image}
                  className="block max-w-full max-h-[40svh] object-contain rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={caseStudies[openIndex]?.image}
                  alt={`${caseStudies[openIndex]?.title} Preview`}
                  className="block max-w-full max-h-[40svh] object-contain rounded-lg"
                />
              )}
            </div>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
}
