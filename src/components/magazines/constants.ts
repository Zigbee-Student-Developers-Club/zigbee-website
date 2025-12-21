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
    id: "afljdsflkerewrrjlrqer",
    title: "Reflections 5.0",
    year: 2025,
    volume: 5,
    image:
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735491157/WhatsApp_Image_2024-12-29_at_21.43.46_ff767631_zehaxp.webp",
    downloadUrl:
      "https://drive.google.com/file/d/1mZfbLe1yexz8a16PpsF4GouvFGOTCw6I/view?usp=drivesdk",
  },
  {
    id: "maOjKD0DWYeqbMzAw2D3",
    title: "Reflections 4.0",
    year: 2024,
    volume: 4,
    image:
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735491157/WhatsApp_Image_2024-12-29_at_21.43.46_ff767631_zehaxp.webp",
    downloadUrl:
      "https://drive.google.com/file/d/1dGbAhTlKc8mOfXva7jAU8LH6MDNLZ2Gw/view?usp=sharing",
  },
  {
    id: "QNe8sTLDG4eqpM6MsicZ",
    title: "Reflections 3.1",
    year: 2024,
    volume: 3,
    image:
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735142496/refraction3.1_mmh1js.webp",
    downloadUrl:
      "https://drive.google.com/file/d/1yYSh1qFfp2AyJa7BY5H9JWCMPfmqZg6G/view",
  },
  {
    id: "DDp3XeR611C8scPGWpXI",
    title: "Reflections 2.0",
    year: 2023,
    volume: 2,
    image:
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735140624/reflection2023_hlbevc.webp",
    downloadUrl:
      "https://drive.google.com/file/d/1ZJvMnvlvtFDsmyxR_AEfeuUYDL13vW_0/view",
  },
  {
    id: "7pYvnLAshHq2OfpVeF2W",
    title: "Reflections 1.0",
    year: 2022,
    volume: 1,
    image:
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735140592/reflection2022_yevtbr.webp",
    downloadUrl:
      "https://drive.google.com/file/d/1d4atWmN2TvQE-c5aexGquTB3_Nbh_Rzk/view",
  },
];
