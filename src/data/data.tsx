import { IHeroSlider } from "@/types/type";
import heroImg_1 from '../../public/assets/images/hero-slider/the-last-voyage.jpg'
import heroImg_2 from '../../public/assets/images/hero-slider/oppenheimer.jpg'

export const HeroData:IHeroSlider[]  = [
 {
    id:1,
    imgUrl: heroImg_1,
    title: 'the last voyage of the demeter',
    description: 'The crew of the merchant ship Demeter attempts to survive the ocean voyage from Carpathia to London as they are stalked each night by a merciless …',
 },
 {
    id:2,
    imgUrl: heroImg_2,
    title: 'Oppenheimer',
    description: 'The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.',
 },
]