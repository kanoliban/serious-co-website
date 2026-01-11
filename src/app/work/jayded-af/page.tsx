import type { Metadata } from "next";
import CaseStudyPageLayout from "@/components/sections/CaseStudyPageLayout";

export const metadata: Metadata = {
  title: "Jayded AF Case Study - A Very Serious Company",
  description: "Premium gin martini brand needed to convert visitors into customers. Direct-response landing pages increased online sales and drove traffic to retail partners.",
  openGraph: {
    title: "Jayded AF Case Study - A Very Serious Company",
    description: "Premium gin martini brand needed to convert visitors into customers. Direct-response landing pages increased online sales and drove traffic to retail partners.",
    images: [
      {
        url: "/jayded-af-project-video.mp4",
        width: 1200,
        height: 630,
        alt: "Jayded AF Premium Gin - Direct-Response Advertising",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayded AF Case Study - A Very Serious Company",
    description: "Premium gin martini brand needed to convert visitors into customers. Direct-response landing pages increased online sales and drove traffic to retail partners.",
    images: ["/jayded-af-project-video.mp4"],
  },
};

export default function JaydedAFCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Jayded AF Premium Gin - Direct-Response Advertising",
    "description": "Premium gin martini brand needed to convert visitors into customers. Direct-response landing pages increased online sales and drove traffic to retail partners.",
    "creator": {
      "@type": "Organization",
      "name": "A Very Serious Company",
      "url": "https://avery-serious-company.com"
    },
    "dateCreated": "2024",
    "genre": "Direct-Response Advertising Case Study",
    "keywords": ["direct-response advertising", "premium spirits", "conversion optimization", "sales advertising", "advertising that sells"],
    "about": {
      "@type": "Thing",
      "name": "Direct-Response Advertising"
    },
    "workExample": {
      "@type": "MediaObject",
      "contentUrl": "https://avery-serious-company.com/jayded-af-project-video.mp4",
      "encodingFormat": "video/mp4"
    },
    "url": "https://avery-serious-company.com/work/jayded-af",
    "image": "https://avery-serious-company.com/jayded-af-project-video.mp4",
    "isPartOf": {
      "@type": "CollectionPage",
      "name": "Our Work",
      "url": "https://avery-serious-company.com/work"
    }
  };

  return (
    <CaseStudyPageLayout
      slug="jayded-af"
      structuredData={structuredData}
    >
      {/* Project Media */}
      <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm max-w-4xl">
        <video
          src="/jayded-af-project-video.mp4"
          className="block w-full h-auto object-contain max-h-[60svh]"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </CaseStudyPageLayout>
  );
}
