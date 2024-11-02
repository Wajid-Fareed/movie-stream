'use client'
import React, { useEffect, useState } from 'react';
import Container from '../layout/Container';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import { ICardTMDB, IStreamMovie, IVideo } from '@/types/type';
import Link from 'next/link';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
interface MovieProps {
  movieData?: ICardTMDB;
  idmbId?: string;
  videos: IVideo[];
}

const MovieDetail: React.FC<MovieProps> = ({ movieData, idmbId, videos }) => {
  const [movieStreamData, setMovieStreamData] = useState<IStreamMovie | null>(null);
  // console.log(videos , "videos")
  useEffect(() => {
    if (!idmbId) return;

    const fetchMovieDetails = async () => {
      const url = `https://streaming-availability.p.rapidapi.com/shows/movie/${idmbId}?series_granularity=episode`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
          'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const result = await response.json();
        setMovieStreamData(result);
        // console.log("Movie Streaming details:", result);
      } catch (error) {
        console.error("Fetch error Streaming:", error);
      }
    };

    fetchMovieDetails();
  }, [idmbId]);

  const handleWatchMovie = () => {
    if (movieStreamData?.streamingOptions?.fr && movieStreamData.streamingOptions.fr.length > 0) {
      const firstStreamingOption = movieStreamData.streamingOptions.fr[0];
      window.open(firstStreamingOption.link, '_blank');
    } else {
      if (videos && videos.length > 0) {
        const firstVideo = videos[0];
        const videoUrl = `https://www.youtube.com/watch?v=${firstVideo.key}`;
        window.open(videoUrl, '_blank');
      } else {
        alert("No streaming options or videos available.");
      }
    }
  };


  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <Container className='pt-5'>
      {movieData ? (
        <div>

          <div className='relative group' onClick={handleWatchMovie}>
            {movieData.backdrop_path && (
              <Image
                src={`${imageBaseUrl}${movieData.backdrop_path}`}
                alt={movieData.title || 'Movie Backdrop'}
                width={1500}
                height={700}
                className='w-full max-h-[700px] rounded-sm object-cover'
              />
            )}
            <div className='absolute top-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,.5)] rounded-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
              <span className='rounded-full flex justify-center items-center w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-cta'>
                <FaPlay className='text-[30px] sm:text-[60px] text-primarycolor ps-1' />
              </span>
            </div>
          </div>
          <div className='flex gap-5 mt-5'>
            <div className='min-w-[200px] hidden lg:block'>
              {movieData.poster_path && (
                <Image
                  src={`${imageBaseUrl}${movieData.poster_path}`}
                  alt={movieData.title || 'Movie Poster'}
                  width={200}
                  height={300}
                  className='w-full h-auto rounded-sm'
                />
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl font-semibold'>{movieData.title}</h2>
              <p>{movieData.overview}</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Genre: </p>
                  <span className='text-primarycolor'>
                    {movieData.genres && movieData.genres.length > 0 ? (
                      movieData.genres.map((genreItem, index) => (
                        <span key={genreItem.id}>
                          {genreItem.name}&nbsp;
                          {movieData.genres && index < movieData.genres.length - 1 ? ', ' : ''}&nbsp;
                        </span>
                      ))
                    ) : (
                      <span>No genres available</span>
                    )}

                  </span>
                </div>

                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Tag Line: </p>
                  <span className='text-primarycolor'>
                    {movieData.tagline}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Actor: </p>
                  <span className='text-primarycolor'>
                    {movieStreamData?.cast && movieStreamData.cast.length > 0 ? (
                      movieStreamData.cast.map((CastItem, index) => (
                        <span key={index}>
                          {typeof CastItem === "string" ? CastItem : CastItem.name}&nbsp;
                          {index < movieStreamData.cast.length - 1 ? ', ' : ''}&nbsp;
                        </span>
                      ))
                    ) : (
                      <span>No Actor available</span>
                    )}

                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Duration: </p>
                  <span className='text-primarycolor'>
                    {movieData.runtime} min
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Director: </p>
                  <span className='text-primarycolor'>
                    {movieStreamData?.directors && movieStreamData.directors.length > 0 ? (
                      movieStreamData.directors.map((CastItem, index) => (
                        <span key={index}>
                          {typeof CastItem === "string" ? CastItem : CastItem.name}&nbsp;
                          {movieStreamData?.directors && index < movieStreamData.directors.length - 1 ? ', ' : ''}&nbsp;
                        </span>
                      ))
                    ) : (
                      <span>No directors available</span>
                    )}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Release Year: </p>
                  <span className='text-primarycolor'>
                    {movieData.release_date}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>IMDb: </p>
                  <span className='text-primarycolor'>
                    {movieData.vote_average.toFixed(1)}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Budgets: </p>
                  <span className='text-primarycolor'>
                    {movieData.budget ? (movieData.budget / 1_000_000).toFixed(2) + ' M' : 'N/A'}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Revenue: </p>
                  <span className='text-primarycolor'>
                    {movieData.revenue ? (movieData.revenue / 1_000_000).toFixed(2) + ' M' : 'N/A'}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Home Page: </p>
                  <span className='text-primarycolor'>
                    {movieData.homepage && (<Link href={movieData.homepage} target='_blank'>{movieData.homepage}</Link>)}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Country: </p>
                  <span className='text-primarycolor'>
                    {movieData.origin_country}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (<SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
        <Skeleton className="w-full h-[170px] xsm2:h-[200px] xsm:h-[250px] xs:h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[700px] rounded-sm" />
      </SkeletonTheme>)}
    </Container>
  );
};

export default MovieDetail;
