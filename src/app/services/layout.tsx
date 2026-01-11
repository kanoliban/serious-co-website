import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Service - A Very Serious Company",
  description: "We create advertisements that increase sales. One service, delivered well. Strategy, creative, placement, measurement, optimization.",
  openGraph: {
    title: "The Service - A Very Serious Company",
    description: "We create advertisements that increase sales. One service, delivered well. Strategy, creative, placement, measurement, optimization.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - The Service",
      },
    ],
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
