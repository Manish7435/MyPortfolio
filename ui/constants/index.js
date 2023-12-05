import {
  backend,
  web,
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
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon:' /html.png',
  },
  {
    name: "CSS 3",
    icon:' /css.png',
  },
  {
    name: "JavaScript",
    icon:' /javascript.png',
  },

  {
    name: "React JS",
    icon:' /reactjs.png',
  },
  {
    name: "Tailwind CSS",
    icon:' /tailwind.png',
  },

  {
    name: "Three JS",
    icon: '/threejs.svg',
  },
  {
    name: "git",
    icon: '/git.png',
  },
  {
    name: "figma",
    icon: '/figma.png',
  },
];

const experiences = [
  {
    title: "Icons Library",
    company_name: "Cogoport",
    icon: 'https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/cogoports-new-g-logo.png',
    iconBg: "#383E56",
    date: "Aug 2022 - Sept 2022",
    points: [
      "Created a npm package for icons using Figma and Rollup",
      "Created documentation for the icons using ReactJs and NextJs.",
      "This reduces the import bundle size by 60% with tree-shaking ."
    ],
  },
  {
    title: "Public Website",
    company_name: "Cogoport",
    icon: 'https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/cogoports-new-g-logo.png',
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Feb 2022",
    points: [
      "Developed the first version of public website using NextJS.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Fully rsponsible for the SEO of the Public website and achived 100% performance on Ahrefs."
    ],
  },
  {
    title: "Globalization (HCM Vietnam)",
    company_name: "Cogoport Vietnam",
    icon: 'https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/cogoports-new-g-logo.png',
    iconBg: "#383E56",
    date: "June 2023 - Nov 2023",
    points: [
      "Restructured the front-end codebase and transformed it form unorganized to a scalable architecture, reduced development time by more than 50% for any country expansion.",
      "Implemented necessary changes in backend codebase so that users can see the data only belongs to them.",
      "Worked on a Dunning project in Kotlin as a backend developer."
    ],
  },
  {
    title: "HRMS",
    company_name: "Cogoport",
    icon: 'https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/cogoports-new-g-logo.png',
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Leading a team of 3 front-end and 4 backend engineers on HRMS project.",
      "Participating in code review and providing constructive feedback to the developers.",
    ],
  },
];


export { services, technologies, experiences };
