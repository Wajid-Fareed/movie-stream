'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Container from '../layout/Container';
import Button from '../ui/button';
import Image from 'next/image';
import { generateSlug } from '@/data/data';
import { useRouter } from 'next/navigation';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HeroSlider = () => {
    const [movies, setMovies] = useState([]);
    const router = useRouter();
    useEffect(() => {
        const fetchHottestMovies = async () => {
            try {
                const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
                const latestUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;

                const [popularRes, latestRes] = await Promise.all([
                    fetch(popularUrl),
                    fetch(latestUrl),
                ]);

                const popularData = await popularRes.json();
                const latestData = await latestRes.json();
                const combinedMovies = [
                    ...latestData.results,
                    ...popularData.results,
                ]
                    .filter((movie, index, self) =>
                        index === self.findIndex((m) => m.id === movie.id)
                    )
                    .sort((a, b) => b.vote_average - a.vote_average)
                    .slice(0, 10);

                setMovies(combinedMovies);
            } catch (error) {
                console.error("Error fetching hottest movies:", error);
            }
        };

        fetchHottestMovies();
    }, []);

    return (
        <Container>
            {movies.length == 0 ? (<SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
                <Skeleton className="w-full h-[200px] xsm:h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] xl:h-[600px] rounded-sm" />
            </SkeletonTheme>) : (<Swiper
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay, Pagination]}
                className="heroSwiper"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className="slide-content relative group cursor-pointer" onClick={() => router.push(`/movie/${generateSlug(movie.title)}?id=${movie.id}`)}>
                            <div>
                                {movie.backdrop_path && (
                                    <Image
                                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                        alt={movie.title}
                                        width={1550}
                                        height={600}
                                        className="w-full xl:h-[600px] object-cover rounded-sm"
                                    />
                                )}
                            </div>
                            <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-500 flex items-end absolute left-0 top-0 w-full h-full inset-0 z-10">
                                <div className="z-10 p-3 md:p-5 xl:p-10 mb-10 w-[80%] xsm:w-3/4 mx-auto bg-[rgba(0,0,0,.7)] shadow-lg rounded-md">
                                    <h2 className="text-11 xs:text-sm sm:text-base xl:text-xl font-bold text-white uppercase">
                                        {movie.title}
                                    </h2>
                                    {movie.overview && (
                                        <p className="text-10 xs:text-11 sm:text-12 xl:text-sm mt-1 md:mt-2 text-white text-nowrap text-ellipsis overflow-hidden">
                                            {movie.overview}
                                        </p>
                                    )}
                                    <Button className="text-11 sm:text-sm md:text-base lg:text-lg font-medium mt-2 md:mt-4 w-20 sm:w-28 md:w-32 lg:w-40 h-7 sm:h-8 md:h-10 lg:h-12 shadow-md">
                                        Watch now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>)}


        </Container>
    );
};

export default HeroSlider;
