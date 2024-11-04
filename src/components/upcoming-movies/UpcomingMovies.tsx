'use client'
import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Container from '../layout/Container';
import Card from '../re-usable/card';
import { ICardTMDB } from '@/types/type';
import Link from 'next/link';

const UpcomingMovies: React.FC = () => {
    const [upcomingMovies, setUpcomingMovies] = useState<ICardTMDB[]>([]);
    const [popularMovies, setPopularMovies] = useState<ICardTMDB[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                
                const upcomingResponse = await fetch(
                    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
                );
                if (!upcomingResponse.ok) {
                    throw new Error('Failed to fetch upcoming movies');
                }
                const upcomingData = await upcomingResponse.json();
                setUpcomingMovies(upcomingData.results);
    
                const popularResponse = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
                );
                if (!popularResponse.ok) {
                    throw new Error('Failed to fetch popular movies');
                }
                const popularData = await popularResponse.json();
                setPopularMovies(popularData.results);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };
    
        fetchMovies();
    }, []);
    

    if (loading) {
        return (
            <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
                {Array.from({ length: 30 }).map((_, index) => (
                    <Skeleton key={index} className="w-[200px] h-[350px] rounded-sm" />
                ))}
            </SkeletonTheme>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    const popularMovieIds = new Set(popularMovies.map(movie => movie.id));

    const filteredUpcomingMovies = upcomingMovies.filter(movie => 
        movie.vote_average >= 1 && !popularMovieIds.has(movie.id)
    );

    return (
        <Container className="mt-10">
            <Link href="/" className="px-6 py-3 font-medium bg-cta hover:bg-ctaHover text-white rounded-sm shadow-md">
                New Release
            </Link>
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-5 mt-10">
                {filteredUpcomingMovies.length > 0 ? (
                    filteredUpcomingMovies.map((item) => <Card card={item} key={item.id} />)
                ) : (
                    <div>No upcoming movies to display.</div>
                )}
            </div>
        </Container>
    );
};

export default UpcomingMovies;
