export const PROJECTS: Project[] = [
  {
    id: 1,
    image: "projects/ecommerce.png",
    name: "Game Ecommerce",
    about: "An ecommerce build with Next.js, Stripe and Strapi. In this website you can search for games add them to your cart to later make the payment in stripe.",
  },
  {
    id: 2,
    image: "projects/instagram.png",
    name: "Instagram",
    about: "This project is a instagram clone built with the new rails 7 and Turbo Rails",
  },
  {
    id: 2,
    image: "projects/platform.png",
    name: "Platform Game",
    about: "This project is a instagram clone built with the new rails 7 and Turbo Rails",
  },
];

export interface Project {
  id: number;
  image: string;
  name: string;
  about: string;
}
