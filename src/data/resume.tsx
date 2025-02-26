import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Justin Pham",
  initials: "JP",
  url: "https://justinpham.dev",
  location: "Irvine, CA",
  locationLink: "https://www.google.com/maps/place/irvine",
  description:
    "Aspiring software engineer, product manager, and entrepeneur. I love to innovate, ideate, and create.",
  summary:
    "Hi everyone, my name is Justin Pham and I am a third year studying Computer Science and Informatics at the University of California, Irvine. I aspire to work in software engineering or product management post-grad, as I enjoy problem-solving, logical puzzles, and discovering innovative solutions. I have a solid history of leadership, communication, and technology. Outside of my professional life, I love traveling the world, bouldering, and coffee. Thanks for stopping by!",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "PostgresSQL",
    "Java",
    "C++",
    "MongoDB",
    "Express",
    "OpenAI",
    "Stripe",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "justinmpham714@gmail.com",
    tel: "714-862-8073",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/justinlikescows",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/justin-pham-035b2b224/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:justinmpham714@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  leadership: [
    {
      org: "Product Association",
      href: "https://www.productuci.com/",
      badges: [],
      location: "Irvine, CA",
      title: "Product Management Fellow",
      logoUrl: "/product.ico",
      start: "January 2024",
      end: "Present",
      description:
        `Leading a group of six cross functional team members, including SWEs, designers, and product marketers, across an 11 week intensive product development competition`,
    },
    {
      org: "Delta Sigma Pi",
      href: "https://www.dspuci.com/",
      badges: [],
      location: "Irvine, CA",
      title: "Vice President of Alumni Relations",
      logoUrl: "/dsp.jpg",
      start: "December 2024",
      end: "Present",
      description:
        `Expanding and maintaining database of 300+ alumni. Actively performing outreach to alumni to foster chapter relations.`,
    },
    {
      org: "Undergrade Business Association",
      href: "https://www.ubauci.org/",
      badges: [],
      location: "Irvine, CA",
      title: "Mentor",
      logoUrl: "/uba.jpeg",
      start: "October 2024",
      end: "December 2024",
      description:
        `Fostered a one-on-one mentorship to a lower classman, guiding development in professionalism through proactive resume and cover letter reviews, networking workshops, and interview preparation`,
    },
    {
      org: "Delta Sigma Pi",
      href: "https://www.dspuci.com/",
      badges: [],
      location: "Irvine, CA",
      title: "Director of Technology",
      logoUrl: "/dsp.jpg",
      start: "June 2024",
      end: "December 2024",
      description:
        `Optimizing and managing a GraphQL database, maintaining records for 45+ active brothers and 300+ alumni.
        Deployed a new React-based recruitment page, increasing means of user acquisition and marketing.`,
    },
  ],
  work: [
    {
      company: "Capital One",
      href: "https://www.capitalone.com/",
      badges: [],
      location: "McLean, VA",
      title: "Incoming Product Management Intern",
      logoUrl: "/c1.png",
      start: "December 2024",
      end: "Present",
      description:
        "",
    },
    {
      company: "Headstarter AI",
      href: "https://headstarter.co/",
      badges: [],
      location: "Remote",
      title: "Software Engineering Fellow",
      logoUrl: "/headstarter.jpg",
      start: "July 2024",
      end: "September 2024",
      description:
        "Led a team of developers in ideating and implementing four AI-driven applications, including a SAAS Flashcard WebApp and RAG Chatbot",
    },
    {
      company: "ForOurLastNames",
      badges: [],
      href: "https://www.forourlastnames.io/",
      location: "Remote",
      title: "Full-Stack Engineering Intern",
      logoUrl: "/FOLN.png",
      start: "July 2024",
      end: "September 2024",
      description:
        `Developed referral features integrating Stripe API to create, track, and analyze program success metrics
Updated production website UI/UX to align with design specifications, enhancing visual consistency
Led Agile processes, coordinating with cross-functional teams to ideate and implement project features
`,
    },
    {
      company: "Westminster School District",
      href: "https://www.wsdk8.us/",
      badges: [],
      location: "Westminster, CA",
      title: "Educational Technology Developer",
      logoUrl: "/WSD.jpg",
      start: "May 2024",
      end: "August 22024",
      description:
        `Engineered a language learning application based on a previous Stanford hackathon project, Fluent.ly
Collaborated with school district stakeholders to plan and implement a phonetic-focused language learning software catered to dual immersion English-Vietnamese kids, recognizing the lack of existing platform
Led and organized cross-functional stakeholder meetings in order to ideate and prioritize features
Utilized Azure AI speech services to provide phonetic analysis and personalized feedback on user speech
`,
    },
    {
      company: "Wonsulting",
      href: "https://www.wonsulting.com/",
      badges: [],
      location: "Remote",
      title: "Software Development Intern",
      logoUrl: "/wonsulting.jpg",
      start: "June 2022",
      end: "October 2022",
      description:
        "Identified key areas in which the main Wonsulting product offering was lacking through user feedback analysis. Led iterative design approach utilizing Colab, working with the marketing team to guide feature creation. Developed Python scripts and backend API calls to integrate AI for automated bullet point generation.",
    },
  ],
  education: [
    {
      school: "University of California, Irvine",
      href: "https://uci.edu/",
      degree: "B.S. Computer Science",
      logoUrl: "/uci.png",
      start: "September 2022",
      end: "EST December 2025",
    },
    {
      school: "University of California, Irvine",
      href: "https://uci.edu/",
      degree: "B.S. Informatics",
      logoUrl: "/uci.png",
      start: "September 2022",
      end: "EST December 2025",
    },
    {
      school: "Garden Grove High School",
      href: "https://www.gghs.us/",
      degree: "Valedictorian out of 500+ students",
      logoUrl: "/gghs.jpg",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Rate My Professor Chatbot",
      href: "https://rate-my-professor-ai-blue.vercel.app/",
      dates: "June 2024",
      active: true,
      description:
          "A RAG Chatbot that untilizes a provided knowledge base of Rate My Professor data to augment it's response generation",
      technologies: [
          "Pinecone",
          "Next.js",
          "OpenAI",
          "MUI",
      ],
      links: [
          // {
          //     type: "Devpost",
          //     href: "https://devpost.com/software/j-jzktbg",
          //     icon: <Icons.globe className="size-3" />,
          // },
      ],
      image: {
        src: "/RMP.png",
        width: 600, // Add the width property here
        height: 400, // Add the height property here
      },
      
      video: "",
  },
    {
      title: "AI Flashcard SAAS",
      href: "https://ai-flashcard2.vercel.app/",
      dates: "August 2024",
      active: true,
      description:
          "A SAAS which automates the process of creating flashcards by utilizing AI for question and answer generation.",
      technologies: [
          "Firebase",
          "Stripe",
          "Openai",
          "Next.js",
          "MUI",
      ],
      links: [
          // {
          //     type: "Devpost",
          //     href: "https://devpost.com/software/j-jzktbg",
          //     icon: <Icons.globe className="size-3" />,
          // },
      ],
      image: {
        src: "/flashcard.png",
        width: 600, // Add the width property here
        height: 400, // Add the height property here
      },
      
      video: "",
  },
    {
      title: "Fluent.ly",
      href: "https://devpost.com/software/j-jzktbg",
      dates: "Feburary 2023",
      active: true,
      description:
          "By using artificial intelligence to analyze pronunciation, Fluently provides language learning feedback that is both personalized and objective.",
      technologies: [
          "Flask",
          "Python",
          "JS",
          "Azure",
          "CSS",
          "HTML",
      ],
      links: [
          {
              type: "Devpost",
              href: "https://devpost.com/software/j-jzktbg",
              icon: <Icons.globe className="size-3" />,
          },
      ],
      image: {
        src: "/fluently.jpg",
        width: 600, // Add the width property here
        height: 400, // Add the height property here
      },
      
      video: "",
  },
    {
      title: "Intinero",
      href: "https://devpost.com/software/itinero-travel-app",
      dates: "Janurary 2024",
      active: true,
      description:
        "We recognized the need for a comprehensive travel app that not only helps users plan their journeys but also understands their preferences through advanced language AI.",
      technologies: [
        "RapidAPI",
        "Axios",
        "React",
        "Tailwind",
        "JS",
      ],
      links: [
        {
          type: "Devpost",
          href: "https://devpost.com/software/itinero-travel-app",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: {
        src: "/itinero.jpg",
        width: 600, // Add the width property here
        height: 400, // Add the height property here
      },

    
      video: "",
    },
    
  ],
  
} as const;
