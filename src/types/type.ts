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
export interface ICardTMDB {
    adult: boolean;
    backdrop_path?: StaticImageData | string;
    belongs_to_collection?: IBelongsCollection;
    budget: number;
    genre_ids?: IGenreTMDB[];
    genres?: IGenreTMDB[];
    homepage?: string;
    id: number;
    idmb_id?: string
    origin_country?: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: StaticImageData | string;
    release_date: string;
    revenue?: number;
    runtime?: number;
    spoken_languages?: ISpokenLanguages[];
    status?: string;
    tagline?: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface ISpokenLanguages {
    english_name: string;
    iso_639_1: string;
    name: string;
}
interface IBelongsCollection {
    backdrop_path: StaticImageData | string;
    id: number;
    name: string;
    poster_path: StaticImageData | string;
}
interface IGenreTMDB {
    id: number
    name?: string;
}
export interface IStreamMovie {
    cast: IMovieActors[];
    directors?: IDirector[]; 
    genres: IGenreStreamMovie[]; 
    id: string; 
    imdbId: string; 
    tmdbId: string;
    title: string; 
    originalTitle: string; 
    overview: string; 
    rating: number; 
    releaseYear: number; 
    runtime: number; 
    showType: string; 
    itemType: string; 
    imageSet: IImageSet; 
    streamingOptions: Record<string, unknown>; 
  }
  
  
interface IMovieActors {
    id?: number;
    name: string;
}
interface IGenreStreamMovie {
    id: string;
    name: string;
}
  interface IImageSet {
    horizontalBackdrop: IImageResolution; 
    horizontalPoster: IImageResolution; 
    verticalPoster: IImageResolution; 
  }
  
  interface IImageResolution {
    w240?: string; 
    w360?: string; 
    w480?: string; 
    w600?: string; 
    w720?: string; 
    w1080?: string; 
    w1440?: string; 
  }
  
 export interface ICastMember {
    id: number;
    name: string;
    character: string;
    popularity: number;
  }
  
 export interface IDirector {
    id: number;
    name: string;
  }
  
  export interface IVideo {
    id: string;
    key: string;
    name: string;
  }
  

  export interface IUserData {
    id?: number;
    first_name?: string;
    second_name?: string;
    email?: string;
    password?: string;
  }

  export interface IUserContext {
    userData?: IUserData;
    setUserData: React.Dispatch<React.SetStateAction<IUserData | undefined>>;
  }