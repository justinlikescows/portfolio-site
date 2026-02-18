import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  siteTitle: "Justin's Portfolio",
  name: "Justin Pham",
  initials: "JP",
  url: "https://justinpham.dev",
  location: "Irvine, CA",
  locationLink: "https://www.google.com/maps/place/irvine",
  description:
    "Product Manager who builds AI-powered products. I love taking creative ideas and turning them into reality through user research, data-driven decisions, and technical execution.",
  summary:
    "I'm a recent graduate from UC Irvine with a B.S. in Computer Science and Informatics, where I specialized in AI and Organization and Information Technology. I love to work at the intersection of product and engineering. After building features as a software engineer at Wonsulting, FOLN, and Neoboard, I discovered my passion for the 'why' behind what we build. This led me to product management — where I can combine technical depth with user empathy to solve real problems.\n\nMost recently, I spent my summer at Capital One designing an AI-powered IVR system projected to save customers 55,000 hours monthly. Before that, I led Unibites through a 10-week incubator, taking it from idea to MVP with 100+ user reviews.\n\nI'm drawn to products at the intersection of AI and user experience. When I'm not thinking about product strategy, you'll find me traveling, bouldering, or hunting for the perfect cup of coffee.",
  avatarUrl: {
    one: "/me.jpg",
    two: "/me2.PNG",
    three: "/me3.png",
  },
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "PostgreSQL",
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
    { href: "/blog", icon: PencilLine, label: "Blog" },
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
      location: "Irvine, CA",
      title: "Product Management Fellow",
      logoUrl: "/product.ico",
      start: "January 2025",
      end: "March 2025",
      description:
        `Utilized Jira to navigate evolving feature prioritization and lead a team of 6 students in a 10-week incubator\nDrove Unibites from idea to MVP launch by developing product roadmap, aligning stakeholders around core user pain points, and executing an agile development process that generated 100+ user reviews`,
      productWork: true,
    },
    {
      org: "Delta Sigma Pi",
      href: "https://www.dspuci.com/",
      location: "Irvine, CA",
      title: "Director of Technology and Vice President of Alumni Relations",
      logoUrl: "/dsp.jpg",
      start: "June 2024",
      end: "June 2025",
      description:
        `Developed the chapter's first interactive alumni analytics dashboard using Next.js, Tailwind CSS, and Framer Motion for 400+ alumni profiles\nModernized the chapter website with React componentization, shifting the static site into a dynamic, scalable platform`,
      productWork: false,
    },
    {
      org: "Undergraduate Business Association",
      href: "https://www.ubauci.org/",
      location: "Irvine, CA",
      title: "Mentor",
      logoUrl: "/uba.jpeg",
      start: "October 2024",
      end: "December 2024",
      description:
        `Fostered one-on-one mentorship to lower classmen, guiding development in professionalism through proactive resume and cover letter reviews, networking workshops, and interview preparation`,
      productWork: false,
    },
  ],
  work: [
    {
      company: "Capital One",
      href: "https://www.capitalone.com/",
      location: "McLean, VA",
      title: "Product Management Intern",
      logoUrl: "/c1.png",
      start: "June 2025",
      end: "August 2025",
      description:
        `Spearheaded the Dynamic Decisioning MVP to revolutionize proactive interactive voice response experiences, projected to save customers 55,000 hours monthly and reduce TCT by 8.4% through personalized user flows
Conducted trade-off analysis for  the “buy” decision of RulesLab as an enterprise decisioning platform over a “build” of an in-house build, enabling agile rule management and empowering business users by reducing development overhead
Collaborated with engineers to design a scalable, microservice architecture between 3 orchestration layers
Outlined a phased product roadmap, with an initial build design focused on scalable data ingestion and setting the technical foundation for integrating AI predictive capabilities with a classification model based on customer data
`,
      productWork: true,
    },
    {
      company: "Neoboard",
      href: "https://www.linkedin.com/company/neoboardapp/",
      location: "Irvine, CA",
      title: "Software Engineer Intern",
      logoUrl: "/neoboard.jpg",
      start: "January 2025",
      end: "June 2025",
      description:
        `Engineered a 3-service Dockerized distributed system, integrating it with Canvas LMS via LTI 1.3 standards
Implemented core asynchronous processing for AI text detection by integrating three third-party APIs with features including intelligent scheduling and an automatic retry mechanism for submission processing
Conducted requirements engineering and user validation testing through interviews and surveys with 10+ professors
`,
      productWork: false,
    },
    {
      company: "Headstarter AI",
      href: "https://headstarter.co/",
      location: "Remote",
      title: "Software Engineering Fellow",
      logoUrl: "/headstarter.jpg",
      start: "July 2024",
      end: "September 2024",
      description:
        "Led a team of developers in ideating and implementing four AI-driven applications, including a SAAS Flashcard WebApp and RAG Chatbot",
      productWork: false,
    },
    {
      company: "ForOurLastNames",
      href: "https://www.forourlastnames.io/",
      location: "Remote",
      title: "Full-Stack Engineering Intern",
      logoUrl: "/FOLN.png",
      start: "July 2024",
      end: "September 2024",
      description:
        `Constructed user growth platform features, utilizing tools such as Stripe for cross-user referral incentivization, social media APIs for multimedia sharing, and Google Chart API to visualize program success metrics
Designed and engineered a scalable PostgreSQL user schema, enabling the creation of a dynamic friends list feature in a 100+ user base, enhancing user interaction and engagement by 25% across core features through content sharing
Aligned production website’s UI/UX to meet design specifications and wireframes, enhancing visual consistency
Organized and led meetings with cross-functional teams, facilitating standups and storyboard progress checks

`,
      productWork: false,
    },
    {
      company: "Wonsulting",
      href: "https://www.wonsulting.com/",
      location: "Remote",
      title: "Software Development Intern",
      logoUrl: "/wonsulting.jpg",
      start: "June 2022",
      end: "October 2022",
      description:
        `Identified key areas in which the main Wonsulting product offering was lacking through user feedback analysis
Conducted prompt engineering to refine model output, evaluating generations against a defined quality rubric
Led a iterative design approach utilizing Google Colab, working with the design team to guide feature creation
Developed Python scripts and API infrastructure to integrate GPT 3.0 for automated resume bullet point generation

`,
      productWork: false,
    },
  ],
  education: [
    {
      school: "University of California, Irvine",
      href: "https://uci.edu/",
      degree: "B.S. Computer Science & B.S. Informatics",
      logoUrl: "/uci.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "Garden Grove High School",
      href: "https://www.gghs.us/",
      degree: "Valedictorian — Top of 500+ students",
      logoUrl: "/gghs.jpg",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Scoutify",
      href: "scoutify.dev",
      dates: "Present",
      active: true,
      description:
        "A lead intelligence platform that identifies high-opportunity local businesses by analyzing online presence gaps (e.g., missing websites, weak SEO, low digital engagement)",
      technologies: ["Next.js", "TypeScript", "API Integration"],
      image: { src: "/scoutify.png", width: 600, height: 400 },
      productContext: {
        problem: "Agencies and consultants waste hours manually researching potential clients with digital presence gaps",
        targetAudience: "Growth-enablement agencies and independent consultants seeking high-value leads",
        impact: [
          { metric: "Lead Quality", value: "High-opportunity" },
          { metric: "Research Time", value: "Automated" },
        ],
        productDecisions: [
          "Defined product strategy focused on online presence gap analysis",
          "Designed monetization model targeting B2B consultants and agencies",
          "Built lead scoring system based on digital maturity indicators",
        ],
        learnings: "Positioning as a growth-enablement tool rather than just lead gen increases perceived value and justifies premium pricing",
      },
    },
    {
      title: "Dissect AI",
      href: "",
      dates: "August 2024",
      active: true,
      description:
        "AI-powered audio and data analysis platform enabling precise transcription, semantic insights, and real-time feedback through advanced ML models and cloud-based processing pipelines",
      technologies: ["Python", "Machine Learning", "Cloud Services", "Audio Processing"],
      image: { src: "/dissect.png", width: 600, height: 400 },
      productContext: {
        problem: "Users need accurate audio transcription with contextual understanding and actionable insights",
        targetAudience: "Content creators, researchers, and professionals analyzing audio data",
        impact: [
          { metric: "Transcription Accuracy", value: "High precision" },
          { metric: "Processing Speed", value: "Real-time" },
        ],
        productDecisions: [
          "Built cloud-based processing pipeline for scalable performance",
          "Balanced model accuracy, latency, and UX through iterative optimization",
        ],
        learnings: "Technical product strategy requires constant trade-offs between accuracy, speed, and cost — user feedback drives prioritization",
      },
    },
    {
      title: "Art Farm Labs",
      href: "",
      dates: "June 2024",
      active: true,
      description:
        "E-commerce platform tailored to parent-child user hierarchy, utilizing Shopify API and Next.js for real-time GraphQL calls with integrated Sanity CMS",
      technologies: ["Next.js", "Shopify API", "GraphQL", "Sanity CMS"],
      image: { src: "/artfarm.png", width: 600, height: 400 },
      productContext: {
        problem: "Parent-child art education businesses need specialized e-commerce with hierarchical user management",
        targetAudience: "Art education businesses managing parent and student accounts",
        impact: [
          { metric: "Frontend Edit Time", value: "50% reduction" },
          { metric: "User Hierarchy", value: "Parent-child model" },
        ],
        productDecisions: [
          "Led Agile ceremonies to coordinate development across capstone team",
          "Integrated Sanity CMS for server-side components to reduce iteration time",
          "Used Shopify API with GraphQL for real-time e-commerce functionality",
        ],
        learnings: "CMS integration dramatically reduces content update friction; proper user hierarchy design is critical for educational platforms",
      },
    },
    {
      title: "Rate My Professor Chatbot",
      href: "https://rate-my-professor-ai-blue.vercel.app/",
      dates: "June 2024",
      active: true,
      description:
        "A RAG Chatbot that utilizes a knowledge base of Rate My Professor data to augment its response generation",
      technologies: ["Pinecone", "Next.js", "OpenAI", "MUI"],
      image: { src: "/RMP.png", width: 600, height: 400 },
      productContext: {
        problem: "Students struggle to find relevant professor reviews efficiently, wasting time scrolling through unstructured feedback",
        targetAudience: "College students searching for course recommendations",
        impact: [
          { metric: "Response Time", value: "<2 seconds" },
          { metric: "Data Points", value: "1000+ reviews" },
        ],
        productDecisions: [
          "Implemented RAG architecture for context-aware responses",
          "Used Pinecone vector database for semantic search capabilities",
          "Designed conversational UI to make searches feel natural",
        ],
        learnings: "RAG models significantly improve accuracy over basic LLM responses by grounding answers in specific data",
      },
    },
    {
      title: "AI Flashcard SAAS",
      href: "https://ai-flashcard2.vercel.app/",
      dates: "August 2024",
      active: true,
      description:
        "A SAAS which automates the process of creating flashcards by utilizing AI for question and answer generation.",
      technologies: ["Firebase", "Stripe", "OpenAI", "Next.js", "MUI"],
      image: { src: "/flashcard.png", width: 600, height: 400 },
      productContext: {
        problem: "Students spend hours manually creating flashcards instead of studying",
        targetAudience: "Students and lifelong learners who want efficient study tools",
        impact: [
          { metric: "Time Saved", value: "80% faster" },
          { metric: "Payment Integration", value: "Stripe" },
        ],
        productDecisions: [
          "Monetized with Stripe to validate willingness to pay",
          "Used Firebase for real-time sync across devices",
          "Implemented AI generation with quality controls and review flow",
        ],
        learnings: "Payment integration is complex but essential for SAAS validation; users want control over AI-generated content",
      },
    },
    {
      title: "Fluent.ly",
      href: "https://devpost.com/software/j-jzktbg",
      dates: "February 2023",
      active: true,
      description:
        "Using AI to analyze pronunciation, Fluently provides language learning feedback that is both personalized and objective.",
      technologies: ["Flask", "Python", "JavaScript", "Azure", "CSS", "HTML"],
      image: { src: "/fluently.jpg", width: 600, height: 400 },
      productContext: {
        problem: "Language learners lack real-time, objective pronunciation feedback",
        targetAudience: "Self-directed language learners seeking pronunciation improvement",
        impact: [
          { metric: "Feedback Accuracy", value: "90%+" },
          { metric: "Languages Supported", value: "5+" },
        ],
        productDecisions: [
          "Used Azure Speech API for accurate pronunciation analysis",
          "Designed instant feedback loop to reinforce learning",
          "Built simple UI to reduce friction in practice sessions",
        ],
        learnings: "Real-time feedback is crucial for language learning; users need encouragement alongside correction",
      },
    },
    {
      title: "Intinero",
      href: "https://devpost.com/software/itinero-travel-app",
      dates: "January 2024",
      active: true,
      description:
        "A comprehensive travel app that helps users plan journeys and understands preferences through advanced language AI.",
      technologies: ["RapidAPI", "Axios", "React", "Tailwind", "JavaScript"],
      image: { src: "/itinero.jpg", width: 600, height: 400 },
      productContext: {
        problem: "Travel planning is fragmented across multiple apps and websites",
        targetAudience: "Travelers seeking personalized, AI-driven itinerary planning",
        impact: [
          { metric: "Planning Time", value: "60% reduction" },
          { metric: "API Integrations", value: "5+ services" },
        ],
        productDecisions: [
          "Integrated multiple travel APIs for comprehensive data",
          "Used NLP to understand user preferences from natural language",
          "Designed unified interface to reduce app-switching",
        ],
        learnings: "API integration complexity is real; users value simplicity over feature abundance",
      },
    },
  ],
} as const;
