import HeroSlider from '@/components/home-slider/HeroSlider'
import Suggestion from '@/components/suggestion/Suggestion';
import { Moviesdata } from '@/data/data';
export default function Home() {
  return (
    <>
    <HeroSlider />
    <Suggestion cardData={Moviesdata} />
    </>
  );
}
