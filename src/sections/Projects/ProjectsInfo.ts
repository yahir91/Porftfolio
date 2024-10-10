export const PROJECTS: Project[] = [
  {
    id: 1,
    image: "projects/ecommerce.png",
    name: "Game Ecommerce",
    about:
      "In this website you can search for games add them to your cart to later make the payment in stripe.",
    link: "https://pixelpilgrimage.netlify.app/",
    github: "https://github.com/yahir91/ecommerce",
    accomplishments: [
      "NextJs",
      "Stripe",
      "React",
      "Typescript",
      "Tailwind",
      "Strapi",
    ],
  },
  {
    id: 2,
    image: "projects/instagram.png",
    name: "Instagram",
    about: "This project is a instagram clone",
    link: "",
    github: "https://github.com/yahir91/instagram",
    accomplishments: [
      "Ruby",
      "Ruby on rails",
      "Postgresql",
      "React",
      "Tailwind",
    ],
  },
  {
    id: 3,
    image: "projects/platform.png",
    name: "Platform Game",
    about: "This is a platform game called Mage vs Assasin",
    link: "https://quizzical-bardeen-7ebe1a.netlify.app/",
    github: "",
    accomplishments: ["Javascript", "Phaser", "Webpack"],
  },
  {
    id: 4,
    image: "projects/Simera.png",
    name: "Simera",
    about: "This is a platform game called Mage vs Assasin",
    link: "https://app.simera.me/login",
    github: "",
    accomplishments: [
      "React",
      "Typescript",
      "NestJs",
      "Postgresql",
      "Prisma",
      "Elasticsearch",
      "GraphQL",
    ],
  },
];

export interface Project {
  id: number;
  image: string;
  name: string;
  about: string;
  link: string;
  github: string;
  accomplishments: string[];
}
