export const PROJECTS: Project[] = [
  {
    id: 1,
    image: "projects/ecommerce.png",
    name: "Game Ecommerce",
    about:
      "An ecommerce build with Next.js, Stripe and Strapi. In this website you can search for games add them to your cart to later make the payment in stripe.",
    link: "https://pixelpilgrimage.netlify.app/",
    github: "",
    accomplishments: ["uandiw", "iaiwdjnui"],
  },
  {
    id: 2,
    image: "projects/instagram.png",
    name: "Instagram",
    about:
      "This project is a instagram clone built with the new rails 7 and Turbo Rails",
    link: "",
    github: "",
    accomplishments: ["uandiw", "iaiwdjnui"],
  },
  {
    id: 3,
    image: "projects/platform.png",
    name: "Platform Game",
    about:
      "This is a platform game called Mage vs Assasisn created with vanilla javascript",
    link: "https://quizzical-bardeen-7ebe1a.netlify.app/",
    github: "",
    accomplishments: ["uandiw", "iaiwdjnui"],
  },
  {
    id: 2,
    image: "projects/Simera.png",
    name: "Simera",
    about:
      "This is a platform game called Mage vs Assasisn created with vanilla javascript",
    link: "https://app.simera.me/login",
    github: "",
    accomplishments: ["uandiw", "iaiwdjnui"],
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
