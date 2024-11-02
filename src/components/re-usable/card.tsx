'use client'
import { generateSlug } from '@/data/data';
import { ICardTMDB } from '@/types/type';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

interface CardProps {
  card: ICardTMDB;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
  const [src, setSrc] = useState(true);
  const router = useRouter();

  return (
    <>
      {src && (
        <div
          className="relative group overflow-hidden"
          onClick={() => router.push(`/movie/${generateSlug(card.title)}?id=${card.id}`)}
        >
          <Image
            src={`${imageBaseUrl}${card.poster_path}`}
            alt={card.title}
            width={200}
            height={300}
            className="rounded-sm w-full h-auto group-hover:transform group-hover:scale-110 transition-transform duration-300"
            onError={() => setSrc(false)}
          />
          {card.vote_average > 1 && (
            <span className="px-2 py-1 bg-cta text-white rounded-sm absolute top-4 right-4 font-medium shadow-md">
              {card.vote_average.toFixed(1)}
            </span>
          )}
          <div className="card-title absolute bottom-0 w-full rounded-sm flex justify-center pb-2">
            <h3 className="text-white font-medium text-sm text-center">{card.title}</h3>
          </div>
          <div className="absolute top-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,.5)] rounded-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="rounded-full flex justify-center items-center w-20 h-20 bg-cta">
              <FaPlay size={30} className="text-primarycolor ps-1" />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
