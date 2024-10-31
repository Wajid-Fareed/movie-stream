'use client'
import { useEffect, useState } from 'react';
import Container from '../layout/Container';
import Link from 'next/link';
import { ICardTMDB } from '@/types/type';
import Card from '../re-usable/card';


const Suggestion: React.FC = () => {
  const [suggestions, setSuggestions] = useState<ICardTMDB[]>([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      }
    };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        setSuggestions(json.results || []);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <Container className="mt-10">
      <Link href="/" className="px-6 py-3 font-medium bg-cta hover:bg-ctaHover text-white rounded-sm shadow-md">
        Suggestion
      </Link>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-5 mt-10">
        {suggestions.map((item) => <Card card={item} key={item.id} />)}
      </div>
    </Container>
  );
};

export default Suggestion;
