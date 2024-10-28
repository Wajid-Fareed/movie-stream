import { StaticImageData } from "next/image";

export interface IHeroSlider {
    id: number;
    imgUrl: StaticImageData;
    title: string
    description: string;
}