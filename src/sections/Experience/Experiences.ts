export const EXPERIENCES: Experience[] = [
  {
    logo: "/logos/About.png",
    company: "Code Exitos",
    position: "Software Engineer",
    companyInformation:
      "SaaS platform that enables enterprise companies to build, run, and measure their positive impact campaigns",
    responsibilities: [
      {
        title: "Projects",
        bullets: ["Simera", "Quotient", "Clean Break", "Wendys tax map"],
      },
    ],
    jobDate: "Jan 2016 - Apr 2021",
    location: "Austin, Texas",
  },
];

export interface Experience {
  logo: string;
  company: string;
  position: string;
  companyInformation: string;
  responsibilities: { title: string; bullets: string[] }[];
  jobDate: string;
  location: string;
}
