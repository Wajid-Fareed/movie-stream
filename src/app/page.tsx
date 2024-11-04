import HeroSlider from '@/components/home-slider/HeroSlider'
import LatestMovies from '@/components/latest-movie/LatestMovies';
import Suggestion from '@/components/suggestion/Suggestion';
import UpcomingMovies from '@/components/upcoming-movies/UpcomingMovies';
export default function Home() {
  return (
    <>
    <HeroSlider />
    <Suggestion />
    <UpcomingMovies />
    <LatestMovies />
    
    </>
  );
}
