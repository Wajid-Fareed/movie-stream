import HeroSlider from '@/components/home-slider/HeroSlider'
import LatestMovies from '@/components/latest-movie/LatestMovies';
import Suggestion from '@/components/suggestion/Suggestion';
export default function Home() {
  return (
    <>
    <HeroSlider />
    <Suggestion />
    <LatestMovies />
    </>
  );
}
