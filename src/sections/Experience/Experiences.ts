export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    logo: "logos/CodEx.png",
    company: "Code Exitos",
    position: "Software Engineer",
    companyInformation:
      "SaaS platform that enables enterprise companies to build, run, and measure their positive impact campaigns",
    responsibilities: [
      {
        title: "Projects",
        bullets: ["Simera", "Quotient", "Clean Break", "Wendys tax map"],
      },
      {
        title: "Achievements",
        bullets: ["Simera", "Quotient", "Clean Break", "Wendys tax map"],
      },
    ],
    jobDate: "Jan 2016 - Apr 2021",
    location: "Austin, Texas",
  },
  {
    id: 2,
    logo: "logos/CodEx.png",
    company: "Code Exitos",
    position: "Software Engineer",
    companyInformation:
      "SaaS platform that enables enterprise companies to build, run, and measure their positive impact campaigns",
    responsibilities: [
      {
        title: "Achievements",
        bullets: ["Simera", "Quotient", "Clean Break", "Wendys tax map"],
      },
    ],
    jobDate: "Jan 2016 - Apr 2021",
    location: "Austin, Texas",
  },
];

export interface Experience {
  id: number;
  logo: string;
  company: string;
  position: string;
  companyInformation: string;
  responsibilities: { title: string; bullets: string[] }[];
  jobDate: string;
  location: string;
}
