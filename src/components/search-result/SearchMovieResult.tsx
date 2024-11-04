'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ICardTMDB } from '@/types/type';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Card from '@/components/re-usable/card';
import Container from '../layout/Container';

const SearchMovieResult: React.FC = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');
    const [results, setResults] = useState<ICardTMDB[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResults = async () => {
            if (query) {
                setLoading(true);
                try {
                    const response = await fetch(
                        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=en-US`
                    );
                    if (!response.ok) {
                        throw new Error('Failed to fetch results');
                    }
                    const data = await response.json();
                    setResults(data.results);
                } catch (error) {
                    console.error('Error fetching search results:', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchResults();
    }, [query]);

    return (
        <Container className='pt-5'>
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
                {loading ? (
                    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
                        {Array.from({ length: 30 }).map((_, index) => (
                            <Skeleton key={index} className="w-[200px] h-[350px] rounded-sm" />
                        ))}
                    </SkeletonTheme>
                ) : (
                    results.map((item, index) => <Card card={item} key={index} />)
                )}
            </div>
        </Container>
    );
};

export default SearchMovieResult