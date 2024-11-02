import MovieDetail from '@/components/movie-detail/MovieDetail';
import RelativeMovies from '@/components/relative-movies/RelaiveMovies';

interface MoviePageProps {
  searchParams: Promise<{ id: string }>;
}

const MoviePage: React.FC<MoviePageProps> = async ({ searchParams }) => {
  const { id } = await Promise.resolve(searchParams);
  if (!id) {
    return <p>Movie ID is missing</p>;
  }

  const fetchMovieData = async (id: string) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return res.json();
  };


  const fetchMovieVideos = async (id: string) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return res.json();
  };

  const movieData = await fetchMovieData(id);
  const videosData = await fetchMovieVideos(id);

  const videos = videosData.results;

  return (
    <>
      <MovieDetail
        movieData={movieData}
        videos={videos}
        idmbId={id}
      />
      <div className='mb-4'>
        <RelativeMovies movieData={movieData} />
      </div>
    </>
  );
};

export default MoviePage;
