export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "facebook" | "mail";
};

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Hamd Ali",
  role: "WordPress Developer",
  roleSecondary: "Software Engineering Undergraduate",
  location: "Karachi, Pakistan",
  email: "hamdaliali408@gmail.com",
  emailHref: "mailto:hamdaliali408@gmail.com",
  whatsappDisplay: "0307-0223619",
  whatsappHref: "https://wa.me/923070223619",
  intro:
    "I'm a WordPress Developer with hands-on experience creating and customizing websites, and I'm currently completing a Bachelor's degree in Software Engineering. I work mostly with WordPress, Elementor Pro, HTML, and CSS, and I'm always working to sharpen my development skills.",
};

// Instagram was intentionally omitted: no verified profile URL was supplied.
export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hamd-ali-277414252/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/ow344210-alt",
    icon: "github",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/hamd.ali.497777?mibextid=wwXIfr&rdid=wE7tcV7XKhY1hbyP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19o7frFwUB%2F%3Fmibextid%3DwwXIfr%23",
    icon: "facebook",
  },
  {
    label: "Email",
    href: profile.emailHref,
    icon: "mail",
  },
];

export const aboutParagraphs: string[] = [
  "I began my career working as a WordPress Developer at Naborify, where I spent seven months developing and managing websites. That experience taught me how to take a project requirement and turn it into a working, responsive website using WordPress and Elementor Pro.",
  "Today I'm studying Software Engineering at Indus University, building on a three-year DAE diploma in the same field. Alongside my studies, I keep developing web projects so I can apply what I learn to real, practical work.",
  "My focus is on the front-end of WordPress sites: page building, layout customization, and making sure a site looks consistent and works well on every screen size. I enjoy solving problems, learning new tools, and paying attention to the small details that make a site feel finished.",
];

export const focusAreas: { title: string; description: string }[] = [
  {
    title: "WordPress Development",
    description:
      "Developing and managing WordPress websites, from initial setup to published pages.",
  },
  {
    title: "Website Customization",
    description:
      "Customizing layouts and content with Elementor Pro, HTML, and CSS to match project requirements.",
  },
  {
    title: "Responsive & Usable",
    description:
      "Keeping pages responsive and usable across devices, and fixing basic issues as they come up.",
  },
];

export const experience = {
  role: "WordPress Developer",
  company: "Naborify",
  duration: "7 months",
  summary:
    "Worked as a WordPress Developer building and maintaining websites, translating project requirements into customized, responsive pages.",
  responsibilities: [
    "Developed and managed websites using WordPress.",
    "Created and customized pages with Elementor Pro.",
    "Customized layouts and content according to project requirements.",
    "Used HTML and CSS for website customization.",
    "Identified and fixed basic website issues.",
    "Maintained website design, responsiveness, and functionality.",
  ],
  tools: ["WordPress", "Elementor Pro", "HTML", "CSS"],
};

export const education = [
  {
    degree: "Bachelor of Software Engineering",
    school: "Indus University, Karachi",
    note: "Undergraduate",
  },
  {
    degree: "Diploma of Associate Engineering (DAE), Software Engineering",
    school: "Ali Garh Institute, Karachi",
    note: "Three-year diploma",
  },
];

export const technicalSkills: string[] = [
  "WordPress",
  "Elementor Pro",
  "HTML",
  "CSS",
  "Python",
  "C++",
  "Website Development",
  "Website Customization",
];

export const softSkills: string[] = [
  "Communication",
  "Problem Solving",
  "Teamwork",
  "Time Management",
  "Quick Learning",
  "Adaptability",
  "Attention to Detail",
];

export type Project = {
  name: string;
  category: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
  note?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Personal Portfolio Website",
    category: "Academic / personal project",
    description:
      "A responsive single-page portfolio built to present my background, experience, and projects. It focuses on clear typography, consistent spacing, accessible navigation, and a layout that works from small phones up to large desktop screens.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [],
    note: "Source: included in the project repository.",
    featured: true,
  },
  {
    name: "Expense Tracker",
    category: "Academic programming project",
    description:
      "A command-line application for recording daily expenses by category and reviewing totals. It demonstrates object-oriented programming, JSON file persistence, and validated user input in Python.",
    tech: ["Python"],
    links: [],
    note: "Source: projects/python-expense-tracker/",
  },
  {
    name: "Student Grade Manager",
    category: "Academic programming project",
    description:
      "A console program that stores students and their grades, calculates averages and letter grades, and saves records to disk. It demonstrates classes, standard collections, and file handling in C++.",
    tech: ["C++"],
    links: [],
    note: "Source: projects/cpp-student-grade-manager/",
  },
];
