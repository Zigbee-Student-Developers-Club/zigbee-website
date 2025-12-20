export interface VolumeProps {
  id: string;
  title: string;
  year: number;
  volume: number;
  image: string;
  downloadUrl?: string;
}

export const magazineData: VolumeProps[] = [
  {
    id: "1",
    title: "Generative AI Revolution",
    year: 2023,
    volume: 8,
    image: "/logo.png",
  },
  {
    id: "2",
    title: "The Metaverse Frontier",
    year: 2022,
    volume: 7,
    image: "/logo.png",
  },
  {
    id: "3",
    title: "Tech in Pandemic",
    year: 2021,
    volume: 6,
    image: "/logo.png",
  },
  {
    id: "4",
    title: "Blockchain Beginnings",
    year: 2020,
    volume: 5,
    image: "/logo.png",
  },
];
