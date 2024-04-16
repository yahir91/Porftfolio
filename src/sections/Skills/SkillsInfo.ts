export const SKILLS: Skills[] = [
  {
    id: 1,
    title: "Languages",
    skills: [
      { logo: "skillsLogos/Javascript.png", name: "Javascript" },
      { logo: "skillsLogos/Typescript.png", name: "Typescript" },
      { logo: "skillsLogos/Ruby.png", name: "Ruby" },
      { logo: "skillsLogos/Html.png", name: "HTML" },
      { logo: "skillsLogos/Css.png", name: "CSS" },
    ],
  },
  {
    id: 2,
    title: "Front End",
    skills: [
      { logo: "skillsLogos/React.png", name: "React" },
      { logo: "skillsLogos/Next.svg", name: "Next.Js" },
      { logo: "skillsLogos/Responsive.png", name: "Responsive Design" },
      { logo: "skillsLogos/Scss.png", name: "Scss" },
      { logo: "skillsLogos/Vite.png", name: "Vite" },
    ],
  },
  {
    id: 3,
    title: "Back End",
    skills: [
      { logo: "skillsLogos/Nest.png", name: "Nest.Js" },
      { logo: "skillsLogos/Node.svg", name: "Node.Js" },
      { logo: "skillsLogos/Rails.svg", name: "Ruby on Rails" },
      { logo: "skillsLogos/Postgresql.svg", name: "PostgreSQL" },
      { logo: "skillsLogos/Prisma.svg", name: "Prisma" },
      { logo: "skillsLogos/Amazon.svg", name: "Amazon" },
    ],
  },
  {
    id: 4,
    title: "Testing",
    skills: [
      { logo: "skillsLogos/Jest.svg", name: "Jest" },
      { logo: "skillsLogos/Rspec.png", name: "Rspec" },
      { logo: "skillsLogos/Vitest.svg", name: "Vitest" },
    ],
  },
];

export interface Skills {
  id: number;
  title: string;
  skills: { logo: string; name: string }[];
}
