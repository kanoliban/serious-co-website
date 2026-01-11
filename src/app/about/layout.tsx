import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - A Very Serious Company",
  description: "Take a simple, basic idea. Take it very seriously. We create advertisements that sell things. We measure whether they work. We improve them until they do.",
  openGraph: {
    title: "About - A Very Serious Company",
    description: "Take a simple, basic idea. Take it very seriously. We create advertisements that sell things. We measure whether they work. We improve them until they do.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - About",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - A Very Serious Company",
    description: "Take a simple, basic idea. Take it very seriously. We create advertisements that sell things.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
