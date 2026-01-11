import type { Metadata } from "next";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Our Work - A Very Serious Company",
  description: "Work that sells. Every project here solved a sales problem. We don't show work that looks good. We show work that worked.",
  openGraph: {
    title: "Our Work - A Very Serious Company",
    description: "Work that sells. Every project here solved a sales problem. We don't show work that looks good. We show work that worked.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - Our Work",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work - A Very Serious Company",
    description: "Work that sells. Every project here solved a sales problem. We don't show work that looks good. We show work that worked.",
    images: ["/a-very-serious-company.jpeg"],
  },
};


export default function OurWorkPage() {
  return (
    <ContentPageLayout>
      <CaseStudiesClient />
      
      {/* WebSite Collection Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Our Work - A Very Serious Company",
            "description": "Work that sells. Every project here solved a sales problem. We don't show work that looks good. We show work that worked.",
            "url": "https://avery-serious-company.com/work",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Direct-Response Advertising Portfolio",
              "description": "Work that solved sales problems. Every project here increased revenue for our clients.",
              "numberOfItems": 7,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Jayded AF Premium Gin Brand Website",
                    "url": "https://avery-serious-company.com/work/jayded-af",
                    "description": "Premium gin martini brand website design project"
                  }
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "HealThrive Recovery Healthcare Website",
                    "url": "https://avery-serious-company.com/work/healthrive-recovery",
                    "description": "Healthcare website design project for addiction treatment center"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Zachary Construction Group",
                    "url": "https://avery-serious-company.com/work",
                    "description": "Construction company digital presence (Coming Soon)"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Pet Love Cremation & Memorial",
                    "url": "https://avery-serious-company.com/case-studies",
                    "description": "Pet memorial services digital platform (Coming Soon)"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Beka Wealth Advisors",
                    "url": "https://avery-serious-company.com/case-studies",
                    "description": "Financial advisory platform (Coming Soon)"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Strangers Meeting Strangers",
                    "url": "https://avery-serious-company.com/work",
                    "description": "Community platform for meaningful connections (Coming Soon)"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "The Last Paradox",
                    "url": "https://avery-serious-company.com/case-studies",
                    "description": "Warner Bros. Music Group artist digital experience (Coming Soon)"
                  }
                }
              ]
            },
            "isPartOf": {
              "@type": "WebSite",
              "name": "A Very Serious Company",
              "url": "https://avery-serious-company.com"
            }
          })
        }}
      />
    </ContentPageLayout>
  );
}