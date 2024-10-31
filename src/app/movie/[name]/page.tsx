import MovieDetail from '@/components/movie-detail/MovieDetail';

interface MoviePageProps {
  searchParams: Promise<{ id: string }>;
}

const MoviePage: React.FC<MoviePageProps> = async ({ searchParams }) => {
  // const id = searchParams.id;
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

  // const fetchMovieCredits = async (id: string) => {
  //   const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
  //   const res = await fetch(url);
  //   if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
  //   return res.json();
  // };

  const fetchMovieVideos = async (id: string) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return res.json();
  };

  const movieData = await fetchMovieData(id);
  // const creditsData = await fetchMovieCredits(id);
  const videosData = await fetchMovieVideos(id);

  // const popularCast = creditsData.cast.filter((actor: ICastMember) => actor.popularity > 50);
  // const directors = creditsData.crew.filter((person: any) => person.job === 'Director');
  const videos = videosData.results;

  return (
    <MovieDetail
      movieData={movieData}
      // popularCast={popularCast}
      // directors={directors}
      videos={videos}
      idmbId={id}
    />
  );
};

export default MoviePage;
