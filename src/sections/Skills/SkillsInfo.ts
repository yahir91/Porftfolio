export const SKILLS: Skills[] = [
  {
    id: 1,
    title: "Front End",
    skills: [
      { logo: "skillsLogos/React.png", name: "React" },
      { logo: "skillsLogos/React.png", name: "React" },
      { logo: "skillsLogos/React.png", name: "React" },
      { logo: "skillsLogos/React.png", name: "React" },
    ],
  },
  {
    id: 2,
    title: "Front End",
    skills: [{ logo: "skillsLogos/React.png", name: "React" }],
  },
  {
    id: 3,
    title: "Front End",
    skills: [{ logo: "skillsLogos/React.png", name: "React" }],
  },
];

export interface Skills {
  id: number;
  title: string;
  skills: { logo: string; name: string }[];
}
