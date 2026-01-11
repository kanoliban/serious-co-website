export interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  image: {
    bw: string;
    color: string;
  };
  slug: string;
  bio: string;
  expertise: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Liban Kano",
    title: "Principal",
    description: "Client relationships, strategy, and business development",
    slug: "liban-kano",
    image: {
      bw: "/team/liban-kano-bw.jpg",
      color: "/team/liban-kano-color.jpg"
    },
    bio: "Liban is responsible for client relationships, strategy, and business development. Final authority on all decisions. He believes that the purpose of advertising is not to entertain, but to sell.",
    expertise: ["Strategy", "Client Relationships", "Business Development", "Advertising"]
  },
  {
    id: "2",
    name: "Amanti Melkamu",
    title: "Client Development",
    description: "Prospect identification, outreach, and qualification",
    slug: "amanti-melkamu",
    image: {
      bw: "/team/amanti-melkamu-bw.jpg",
      color: "/team/amanti-melkamu-color.jpg"
    },
    bio: "Amanti is responsible for prospect identification and outreach. He finds potential clients, makes initial contact, qualifies prospects, and schedules discovery calls. Measured by qualified conversations generated.",
    expertise: ["Client Development", "Prospect Qualification", "Outreach", "Discovery"]
  },
  {
    id: "3",
    name: "Matthieu",
    title: "Design",
    description: "Visual execution and production",
    slug: "matthieu",
    image: {
      bw: "/team/matthieu-bw.jpg",
      color: "/team/matthieu-color.jpg"
    },
    bio: "Matthieu is responsible for visual execution. He translates strategy into visual assets, produces advertisement layouts, formats materials for channels, and maintains visual standards. Measured by craft and accuracy.",
    expertise: ["Visual Design", "Ad Production", "Layout", "Visual Standards"]
  }
];
