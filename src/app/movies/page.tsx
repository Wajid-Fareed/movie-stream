'use client'
import Container from '@/components/layout/Container';
import Card from '@/components/re-usable/card';
import { ICardTMDB } from '@/types/type';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MoviesPage = () => {
    const [movies, setMovies] = useState<ICardTMDB[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const loaderRef = useRef<HTMLDivElement | null>(null);

    const fetchMovies = async (page: number) => {
        setLoading(true);
        const url1 = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&page=${page}&language=en-US`;
        const url2 = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&page=${page + 1}&language=en-US`;
        const url3 = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&page=${page + 2}&language=en-US`;

        try {
            const [response1, response2, response3] = await Promise.all([fetch(url1), fetch(url2), fetch(url3)]);
            const data1 = await response1.json();
            const data2 = await response2.json();
            const data3 = await response3.json();

            setMovies((prevMovies) => [...prevMovies, ...data1.results, ...data2.results, ...data3.results]);
            setTotalPages(Math.ceil(data1.total_pages / 3));
        } catch (error) {
            console.error('Error fetching movies:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies(currentPage);
    }, [currentPage]);

    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        if (target.isIntersecting && currentPage < totalPages * 3) {
            setCurrentPage((prevPage) => prevPage + 3);
        }
    }, [currentPage, totalPages]);

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, { threshold: 1.0 });
        
        const currentLoaderRef = loaderRef.current;
        if (currentLoaderRef) observer.observe(currentLoaderRef);
    
        return () => {
            if (currentLoaderRef) observer.unobserve(currentLoaderRef);
        };
    }, [handleObserver]);
    

    return (
        <Container className="mt-5">
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
                {movies.map((item,index) => (
                    <Card card={item} key={index} />
                ))}
                {loading && (
                    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
                        {Array.from({ length: 30 }).map((_, index) => (
                            <Skeleton key={index} className="w-[200px] h-[350px] rounded-sm" />
                        ))}
                    </SkeletonTheme>
                )}
            </div>

            {/* Loader for Infinite Scroll */}
            <div ref={loaderRef} className="flex justify-center mt-10">
                <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
                    {Array.from({ length: 30 }).map((_, index) => (
                        <Skeleton key={index} className="w-[200px] h-[350px] rounded-sm" />
                    ))}
                </SkeletonTheme>
            </div>
        </Container>
    );
};

export default MoviesPage;
