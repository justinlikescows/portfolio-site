import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Justin Pham",
  initials: "JP",
  url: "https://justinpham.dev",
  location: "Irvine, CA",
  locationLink: "https://www.google.com/maps/place/irvine",
  description:
    "a software engineer turned product manager. I love take creative ideas and turn them into reality, especially in the realm of Artificial Intelligence.",
  summary:
    "Hi everyone, my name is Justin Pham and I am a senior year studying Computer Science and Informatics with an emphasis on Artificial Intellience and Organization & Information Technology at UC Irvine. I aspire to work in product management, as I enjoy problem-solving, logical puzzles, and discovering innovative solutions. My aspirations so far have manifested in the form of software engineering internships of most recently, a product management internship at Capital One. Outside of my professional life, I love traveling the world, bouldering, and coffee. Thanks for stopping by!",
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
      start: "January 2025",
      end: "March 2025",
      description:
        `• Utilized Jira to manage to navigate evolving feature prioritization and lead a team of 6 students in a 10-week incubator 
• Drove Unibites from idea to MVP launch by developing product roadmap, aligning stakeholders around core user pain points, and executing an agile development process that generated 100+ user reviews, showing early product-market fit`,
    },
    {
      org: "Delta Sigma Pi",
      href: "https://www.dspuci.com/",
      badges: [],
      location: "Irvine, CA",
      title: "Director of Technology and Vice President of Alumni Relations",
      logoUrl: "/dsp.jpg",
      start: "June 2024",
      end: "June 2025",
      description:
        `• Developed the Chapter's first interactive alumni analytics dashboard using Next.js, Tailwind CSS, and Framer Motion, enabling dynamic search, visualization, and Excel data ingestion for 400+ Delta Sigma Pi alumni profiles
• Modernized the chapter website with React componentization, shifting the static  site into a dynamic, scalable platform`,
    },
    {
      org: "Undergraduate Business Association",
      href: "https://www.ubauci.org/",
      badges: [],
      location: "Irvine, CA",
      title: "Mentor",
      logoUrl: "/uba.jpeg",
      start: "October 2024",
      end: "December 2024",
      description:
        `• Fostered a one-on-one mentorship to a lower classman, guiding development in professionalism through proactive resume and cover letter reviews, networking workshops, and interview preparation`,
    },
  ],
  work: [
    {
      company: "Capital One",
      href: "https://www.capitalone.com/",
      badges: [],
      location: "McLean, VA",
      title: "Product Management Intern",
      logoUrl: "/c1.png",
      start: "June 2025",
      end: "August 2025",
      description:
      `• Spearheaded the Dynamic Decisioning MVP to revolutionize proactive interactive voice response experiences, projected to save customers 55,000 hours monthly and reduce TCT by 8.4% through personalized user flows
• Conducted trade-off analysis for  the "buy" decision of RulesLab as an enterprise decisioning platform over a "build" of an in-house build, enabling agile rule management and empowering business users by reducing development overhead
• Collaborated with engineers to design a scalable, microservice architecture between 3 orchestration layers
• Outlined a phased product roadmap, with an initial build design focused on scalable data ingestion and setting the technical foundation for integrating AI predictive capabilities with a classification model based on customer data`,
  },
  {
    company: "Neoboard",
    href: "https://www.linkedin.com/company/neoboardapp/",
    badges: [],
    location: "Irvine, CA",
    title: "Software Engineer Intern",
    logoUrl: "/neoboard.jpg",
    start: "January 2025",
    end: "June 2025",
    description:
      `• Engineered a 3-service Dockerized distributed system, integrating it with Canvas LMS via LTI 1.3 standards
• Implemented core asynchronous processing for AI text detection by integrating three third-party APIs with features including intelligent scheduling and an automatic retry mechanism for submission processing
• Conducted requirements engineering and user validation testing through interviews and surveys with 10+ professors`,
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
        "• Led a team of developers in ideating and implementing four AI-driven applications, including a SAAS Flashcard WebApp and RAG Chatbot",
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
        `• Constructed user growth platform features, utilizing tools such as Stripe for cross-user referral incentivization, social media APIs for multimedia sharing, and Google Chart API to visualize program success metrics
• Designed and engineered a scalable PostgreSQL user schema, enabling the creation of a dynamic friends list feature in a 100+ user base, enhancing user interaction and engagement by 25% across core features through content sharing
• Aligned production website's UI/UX to meet design specifications and wireframes, enhancing visual consistency
• Organized and led meetings with cross-functional teams, facilitating standups and storyboard progress checks`,
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
      `• Identified key areas in which the main Wonsulting product offering was lacking through user feedback analysis
• Conducted prompt engineering to refine model output, evaluating generations against a defined quality rubric
• Led a iterative design approach utilizing Google Colab, working with the design team to guide feature creation
• Developed Python scripts and API infrastructure to integrate GPT 3.0 for automated resume bullet point generation`,
  },
  ],
  education: [
    {
      school: "University of California, Irvine",
      href: "https://uci.edu/",
      degree: "B.S. Computer Science",
      logoUrl: "/uci.png",
      start: "September 2022",
      end: "December 2025",
    },
    {
      school: "University of California, Irvine",
      href: "https://uci.edu/",
      degree: "B.S. Informatics",
      logoUrl: "/uci.png",
      start: "September 2022",
      end: "December 2025",
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
