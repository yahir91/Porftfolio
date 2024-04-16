export const EDUCATION: Education[] = [
  {
    id: 1,
    name: "Microverse",
    location: "Remote",
    title: "Software Developer",
  },
  {
    id: 2,
    name: "Unitec",
    location: "San Pedro Sula",
    title: "Civil Engineer",
  },
];

export interface Education {
  id: number;
  name: string;
  location: string;
  title: string;
}
