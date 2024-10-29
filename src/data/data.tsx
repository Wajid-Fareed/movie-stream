import { ICardMovie, IHeroSlider } from "@/types/type";
import heroImglastvoyage from '../../public/assets/images/hero-slider/the-last-voyage.jpg';
import heroImg_oppenheimer from '../../public/assets/images/hero-slider/oppenheimer.jpg';
import terrifier3poster from '../../public/assets/images/card-poster/terrifier-3-poster.jpg'
import terrifier3bg from '../../public/assets/images/movie-background/terrifier-3.jpg'

export const HeroData: IHeroSlider[] = [
   {
      id: 1,
      imgUrl: heroImglastvoyage,
      title: 'the last voyage of the demeter',
      description: 'The crew of the merchant ship Demeter attempts to survive the ocean voyage from Carpathia to London as they are stalked each night by a merciless …',
   },
   {
      id: 2,
      imgUrl: heroImg_oppenheimer,
      title: 'Oppenheimer',
      description: 'The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.',
   },
]

export const Moviesdata: ICardMovie[] = [
   {
      id: 1,
      title: 'Terrifier 3',
      description: 'Five years after surviving Art the Clown’s Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they’re safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.',
      imgUrl: terrifier3bg,
      posterImg: terrifier3poster,
      quality: 'HD',
      duration: '2H 30M',
      actor: [
         {
            id: 1,
            name: 'Lauren LaVera',
         },
         {
            id: 2,
            name: 'David Howard Thornton',
         },
         {
            id: 3,
            name: 'Antonella Rose',
         }
      ],
      relaseDate: '2024',
      director: 'Damien Leone',
      genre: [
         {
            id: 1,
            name: 'Horror'
         }
      ],
      country: 'United States',
      rating: 7.2
   }
]

export const generateSlug = (text: string) => {
   return text
     .toString()
     .toLowerCase()
     .trim()
     .replace(/\s+/g, '-')
     .replace(/[^\w\-]+/g, '')
     .replace(/\-\-+/g, '-');
 };