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
    "software engineer | building stuff | hacking with llms | everything frontend",

  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
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
      title: "HTTP/1.1 Server Implementation in TypeScript",
      href: "https://github.com/TheRohit/http-server-ts",
      dates: "May 2025",
      active: true,
      description:
        "A low-level HTTP/1.1 server implementation built entirely from scratch in TypeScript using Node.js native TCP sockets. Features custom HTTP request parsing from raw buffer data, modular routing system with type-safe handlers, and static file serving capabilities.",
      technologies: ["TypeScript", "Node.js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/TheRohit/http-server-ts",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/http-ts.jpeg",
    },
    {
      title:
        "Serverless AI Video Transcription Pipeline with Cloudflare Workers",
      href: "https://github.com/TheRohit/cf-hono-app",
      dates: "July 2024",
      active: true,
      description:
        "A serverless pipeline that automatically transcribes videos using AI and enables semantic search across transcriptions. Built on Cloudflare Workers with workflow orchestration for handling video processing pipelines.",
      technologies: [
        "Cloudflare Workers",
        "Hono",
        "Vectorize",
        "Deepgram",
        "Clerk Auth",
        "Drizzle ORM",
        "Vercel AI SDK",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/TheRohit/cf-hono-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cfw.png",
    },

    {
      title: "Mind Cache - AI Powered Second Brain",
      href: "https://mind-cache.rohitm.dev/dashboard",
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
          href: "https://mind-cache.rohitm.dev/dashboard",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/TheRohit/think-think",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mind-cache.png",
    },
    {
      title: "Summarise - Instant AI Video Chapters & Transcripts",
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
      image: "/summarise.jpeg",
    },

    {
      title: "Eulerian Video Magnification Heart Rate Detection API",
      href: "https://github.com/TheRohit/evm-flask",
      dates: "May 2025",
      active: true,
      description:
        "A Flask-based web application that uses computer vision and signal processing to detect heart rate from a video.",
      technologies: [
        "Python",
        "OpenCV",
        "FFmpeg",
        "SciPy",
        "Flask",
        "Docker",
        "Laplacian pyramid",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/TheRohit/evm-flask",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/evm.png",
    },
  ],
} as const;
