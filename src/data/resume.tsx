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
  avatarUrl: "/me.png",
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
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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

  work: [
    {
      company: "Headstarter AI",
      href: "https://headstarter.co/",
      badges: [],
      location: "Remote",
      title: "Software Engineering Fellow",
      logoUrl: "/headstarter.jpg",
      start: "July 2024",
      end: "Present",
      description:
        "Building 5 AI projects in 5 weeks and will garner 1,000 users, waitlisted users, or dollars in the final week.",
    },
    {
      company: "ForOurLastNames",
      badges: [],
      href: "https://www.forourlastnames.io/",
      location: "Remote",
      title: "Full-Stack Engineering Intern",
      logoUrl: "/FOLN.png",
      start: "July 2024",
      end: "Present",
      description:
        "Developing a referral program, integrating Stripe to track and analyze data to measure effectiveness. Researching custom app functionalities and test distribution tools with Wrap Vendor and TestFlight. Assisting in developing back-end functionality for the B2B Marketplace within the Bubble platform.",
    },
    {
      company: "Westminster School District",
      href: "https://www.wsdk8.us/",
      badges: [],
      location: "Westminster, CA",
      title: "Educational Technology Developer",
      logoUrl: "/WSD.jpg",
      start: "May 2024",
      end: "Present",
      description:
        "Collaborating with school district stakeholders to plan and implement a phonetic-focused language learning software catered to dual immersion English-Vietnamese kids, recognizing the lack of existing platform. Leading cross-functional stakeholder meetings in order to plan the prioritization of features. Utilizing Azure AI speech services to provide phonetic analysis and personalized feedback on user speech.",
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
