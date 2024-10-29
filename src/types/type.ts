import { StaticImageData } from "next/image";

export interface IHeroSlider {
    id: number;
    imgUrl: StaticImageData;
    title: string
    description: string;
}

export interface ICardMovie {
    id: number;
    title: string;
    description: string;
    imgUrl?: StaticImageData;
    posterImg: StaticImageData;
    quality: string;
    duration: string;
    actor: IMovieActors[];
    relaseDate: string;
    director: string;
    genre: IMovieActors[];
    country: string;
    rating: number;
}

interface IMovieActors {
    id: number;
    name: string;
}