"use client";

import HeroKineticMasonry from "@/components/sections/HeroKineticMasonry";

export default function HealThriveRecoveryClient() {
  // Sample media items for the kinetic masonry
  const mediaItems = [
    { type: "image" as const, src: "/healthrive-recovery-project.png", alt: "HealThrive Recovery project" },
    { type: "image" as const, src: "/healthrive-recovery-project.png", alt: "HealThrive Recovery project" },
    { type: "image" as const, src: "/healthrive-recovery-project.png", alt: "HealThrive Recovery project" },
    { type: "image" as const, src: "/healthrive-recovery-project.png", alt: "HealThrive Recovery project" },
    { type: "image" as const, src: "/healthrive-recovery-project.png", alt: "HealThrive Recovery project" },
    { type: "image" as const, src: "/healthrive-recovery-project.png", alt: "HealThrive Recovery project" },
  ];

  return (
    <HeroKineticMasonry
      heading="HealThrive Recovery"
      subheading="Addiction treatment center needed families to call. We built a direct-response website that converts visitors into admissions inquiries. Families find help. The center fills beds."
      ctaLabel="View Case Study"
      onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      items={mediaItems}
      columnCount={3}
      speedsSec={[24, 28, 26]}
      gapPx={12}
    />
  );
}


