import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rohit Meshram",
  initials: "RM",
  url: "https://rohitm.dev",
  location: "Gurgaon, India",
  locationLink: "https://www.google.com/maps/place/gurgaon",
  description: "Software Engineer",
  summary:
    "I am a software engineer specializing in frontend development, with a passion for building scalable and efficient systems. I am currently working as a software engineer at [Radiansys](https://radiansys.com).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rohitmeshram@gmail.com",
    tel: "+917038044328",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/rohit-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/rohit-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/rohit-twitter",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Radiansys Inc",
      href: "https://radiansys.com",
      badges: [],
      location: "Gurgaon, India",
      title: "Software Engineer",
      logoUrl: "/radiansys.jpeg",
      start: "July 2023",
      end: "Present",
      description: "I am working on cool shit",
    },
  ],
  education: [
    {
      school: "University of Mumbai (Ramrao Adik Institute of Technology)",
      href: "https://dypatil.edu/schools/ramrao-adik-institute-of-technology",
      degree: "Bachelor of Engineering in Electronics and Telecommunication",
      logoUrl: "/rait.jpeg",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Mind Cache",
      href: "https://mindcache.rohitm.dev",
      dates: "Jan 2025 – Mar 2025",
      active: true,
      description:
        "AI-powered second brain to organize and search web content using a RAG architecture with Pinecone & Vercel AI SDK. Features custom auth and a neobrutalist UI.",
      technologies: [
        "Next.js",
        "Better Auth",
        "TypeScript",
        "PostgreSQL",
        "Pinecone",
        "Vercel AI SDK",
        "Drizzle ORM",
      ],
      links: [
        {
          type: "Website",
          href: "https://mindcache.rohitm.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/TheRohit/think-think",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Summarise",
      href: "https://summarise.rohitm.dev",
      dates: "Aug 2024 - Jan 2025",
      active: true,
      description:
        "Video analysis system using LLMs and vector databases. Features a multi-modal AI pipeline (Deepgram, Groq Llama 3, Pinecone), Redis caching, and streamed AI responses.",
      technologies: [
        "Next.js",
        "Redis",
        "Pinecone",
        "Groq",
        "Deepgram",
        "TypeScript",
        "Vercel AI SDK",
        "ytdl-core",
      ],
      links: [
        {
          type: "Website",
          href: "https://summarise.rohitm.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/TheRohit/summarise-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
} as const;
