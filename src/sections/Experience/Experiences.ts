export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    logo: "logos/CodEx.png",
    company: "Code Exitos",
    position: "Software Engineer",
    companyInformation:
      "Code Exitos is a company that design, build and launch digital products. Helping entrepeneurs, innovarots and agencies create world-class software and hardware products.",
    responsibilities: [
      {
        title: "Achievements",
        bullets: [
          "Build a Website to connect companies with latin american talent, I worked as a full stack ruby on rails for the backend, and react for the frontend.",
          "Created a decentralized social media app with react native and Nestjs with a highly experienced team.",
          "Make several websites for tracking the assistance to events, making mobile apps website and a portal for tracking all the information of the attendees, created with React, React Native, Nextjs, AWS amplify and Nestjs.",
          "Worked in a mobile project called Clean Break with react native and Ruby on Rails. It is an app for booking cleaners, automatized for a better and simple user experience.",
        ],
      },
    ],
    jobDate: "Oct 2021 - Current",
    location: "San Pedro Sula, Honduras",
  },
  {
    id: 2,
    logo: "logos/micro.jpg",
    company: "Microverse",
    position: "Mentor and Code Reviewer",
    companyInformation:
      "Microverse is a remote coding school that offers a full-time software development program.",
    responsibilities: [
      {
        title: "Achievements",
        bullets: [
          "Mentor 10+ junior web developers, providing technical support through code reviews.",
          "Completed 300+ code reviews in Ruby, Rails, JavaScript, and React for 30+ students.",
        ],
      },
    ],
    jobDate: "June 2020 - September 2021",
    location: "Remote",
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
