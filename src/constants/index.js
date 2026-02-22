import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Developer",
    
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - April 2024",
    points: [
      "Developed object-oriented applications using Core Java concepts like OOP, Collections, and Exception Handling.",
      "Built and integrated backend systems with MySQL using JDBC for efficient database operations.",
      "Designed and implemented RESTful APIs using Spring Boot for scalable web applications.",
      "Applied data structures and algorithms to optimize application performance and solve real-world problems.",
    ],
  },
  {
    title: "Gesture Genius",
    
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Jan 2025",
    points: [
      "Developed a real-time hand gesture recognition system to control games using a webcam instead of a traditional controller.",
      "Implemented computer vision techniques to detect finger movements and map gestures to game actions.",
      "Designed a user-friendly interface for seamless and interactive gaming experience.",
      "Built a cost-effective and accessible gaming solution using AI and machine learning technologies.",
    ],
  },
  {
    title: "Web Developer",
    //company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2025 - Aug 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Timeless Trove",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2025 - Feb 2026",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const projects = [
  {
    name: "Timeless Trove",
    description:
      "Timeless Trove is a visually rich and elegant website that showcases the beauty of Indian handcrafted artistry. The platform highlights traditional crafts passed down through generations, blending cultural heritage with modern design aesthetics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Tomeshwari-02/Timeless-Trove",
  },
  {
    name: "International Tourism",
    description:
      "International Tourism is a modern and visually engaging travel website designed to help users discover the most beautiful destinations around the world. The platform provides an immersive experience through stunning visuals, clean UI, and smooth navigation.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Tomeshwari-02/International-Tourism",
  },
  {
    name: "Poké-Arena",
    description:
      "Poké-Arena is an interactive  Pokémon guessing  game  where players identify Pokémon based on their silhouette. Set in a futuristic “Quantum Field” stadium, the game challenges users to test their Pokémon knowledge while tracking their streak score.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Tomeshwari-02/Pok-mon-Game",
  },
];

export { services, technologies, experiences, testimonials, projects };
