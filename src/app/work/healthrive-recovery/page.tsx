import type { Metadata } from "next";
import CaseStudyPageLayout from "@/components/sections/CaseStudyPageLayout";

export const metadata: Metadata = {
  title: "HealThrive Recovery Case Study - A Very Serious Company",
  description: "Addiction treatment center needed families to call. Direct-response website converts visitors into admissions inquiries. Families find help. The center fills beds.",
  openGraph: {
    title: "HealThrive Recovery Case Study - A Very Serious Company",
    description: "Addiction treatment center needed families to call. Direct-response website converts visitors into admissions inquiries. Families find help. The center fills beds.",
    images: [
      {
        url: "/healthrive-recovery-project.png",
        width: 1200,
        height: 630,
        alt: "HealThrive Recovery - Direct-Response Advertising",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealThrive Recovery Case Study - A Very Serious Company",
    description: "Addiction treatment center needed families to call. Direct-response website converts visitors into admissions inquiries. Families find help. The center fills beds.",
    images: ["/healthrive-recovery-project.png"],
  },
};

export default function HealThriveRecoveryCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "HealThrive Recovery - Direct-Response Advertising",
    "description": "Addiction treatment center needed families to call. Direct-response website converts visitors into admissions inquiries. Families find help. The center fills beds.",
    "creator": {
      "@type": "Organization",
      "name": "A Very Serious Company",
      "url": "https://avery-serious-company.com"
    },
    "dateCreated": "2024",
    "genre": "Direct-Response Advertising Case Study",
    "keywords": ["direct-response advertising", "healthcare marketing", "conversion optimization", "sales advertising", "advertising that sells"],
    "about": {
      "@type": "Thing",
      "name": "Direct-Response Advertising"
    },
    "workExample": {
      "@type": "MediaObject",
      "contentUrl": "https://avery-serious-company.com/healthrive-recovery-project.png",
      "encodingFormat": "image/png"
    },
    "url": "https://avery-serious-company.com/work/healthrive-recovery",
    "image": "https://avery-serious-company.com/healthrive-recovery-project.png",
    "isPartOf": {
      "@type": "CollectionPage",
      "name": "Our Work",
      "url": "https://avery-serious-company.com/work"
    }
  };

  return (
    <CaseStudyPageLayout
      slug="healthrive-recovery"
      structuredData={structuredData}
    >
      {/* Project Media */}
      <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm max-w-4xl">
        <img
          src="/healthrive-recovery-project.png"
          alt="HealThrive Recovery project preview"
          className="block w-full h-auto object-contain max-h-[60svh]"
        />
      </div>
    </CaseStudyPageLayout>
  );
}
