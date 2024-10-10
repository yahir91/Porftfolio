export const STORY: STORY[] = [
  {
    id: 1,
    name: "Monorepos with Nx",
    topic:
      "Monorepos simplify code management, boosting efficiency with Nx and Yarn.",
    link: "https://yahir-cardona.medium.com/in-this-documentation-i-will-explain-how-to-set-up-a-monorepo-in-an-already-existing-polyrepos-fb750a60513a",
  },
  {
    id: 2,
    name: "Teams Notification Implementation",
    topic:
      "Learn how to implement Teams notifications using Microsoft Graph integration",
    link: "https://medium.com/@yahir-cardona/teams-notification-implementation-4ba5bfee2564",
  },
  {
    id: 3,
    name: "Boost your Javascript code with jQuery",
    topic:
      "Master jQuery to simplify JavaScript DOM manipulation and enhance code.",
    link: "https://medium.com/@yahir-cardona/boost-your-javascript-code-with-jquery-30eaccd4c029",
  },
  {
    id: 4,
    name: "Responsive Webpage",
    topic:
      "Learn to create responsive webpages easily with HTML, CSS, and media queries.",
    link: "https://medium.com/@yahir-cardona/easy-way-to-make-a-good-responsive-webpage-for-newbies-d774b2ea98dd",
  },
];

export interface STORY {
  id: number;
  name: string;
  topic: string;
  link: string;
}
