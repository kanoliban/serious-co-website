export interface TeamMember {
  name: string;
  slug: string;
  image: string;
}

export interface TechStackItem {
  label: string;
  icon?: string;
  isLink?: boolean;
  href?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  workType: string;
  image: string;
  featured: boolean;
  turnaround?: string;
  clientSource?: string;
  designTeam?: TeamMember[];
  techStack?: TechStackItem[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Jayded AF",
    slug: "jayded-af",
    description: "Premium gin martini brand needed to convert website visitors into customers. We built direct-response landing pages with clear purchase paths that increased online sales and drove traffic to retail partners.",
    category: "Premium Spirits",
    workType: "Food and Beverage",
    image: "/jayded-af-project-video.mp4",
    featured: true,
    turnaround: "1.5 months",
    clientSource: "Cold call",
    designTeam: [
      {
        name: "Liban",
        slug: "liban-kano",
        image: "/team/liban-kano-color.jpg",
      },
      {
        name: "Amanti",
        slug: "amanti-melkamu",
        image: "/team/amanti-melkamu-color.jpg",
      },
      {
        name: "Matthieu",
        slug: "matthieu",
        image: "/team/matthieu-color.jpg",
      },
    ],
    techStack: [
      { label: "Direct-Response Design" },
      { label: "Conversion Optimization" },
      { label: "Figma", icon: "figma" },
      { label: "Vercel", icon: "vercel" },
    ],
  },
  {
    id: "2",
    title: "HealThrive Recovery",
    slug: "healthrive-recovery",
    description: "Addiction treatment center needed families to call. We built a direct-response website that converts visitors into admissions inquiries. Families find help. The center fills beds.",
    category: "Healthcare",
    workType: "Health and Wellness",
    image: "/healthrive-recovery-project.png",
    featured: true,
    turnaround: "3 weeks",
    clientSource: "Referral from previous client",
    designTeam: [
      {
        name: "Liban",
        slug: "liban-kano",
        image: "/team/liban-kano-color.jpg",
      },
      {
        name: "Amanti",
        slug: "amanti-melkamu",
        image: "/team/amanti-melkamu-color.jpg",
      },
    ],
    techStack: [
      { label: "Direct-Response Design" },
      { label: "Conversion Optimization" },
      { label: "Figma", icon: "figma" },
      { label: "Webflow", icon: "webflow" },
    ],
  },
];
