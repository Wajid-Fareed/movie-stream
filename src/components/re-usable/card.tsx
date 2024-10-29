'use client'
import { generateSlug } from '@/data/data';
import { ICardMovie } from '@/types/type'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaPlay } from 'react-icons/fa'

interface CardProps {
  card: ICardMovie;
}
const Card: React.FC<CardProps> = ({ card }) => {
  const router = useRouter();
  return (
      <div className='relative group' onClick={() => router.push(`/movie/${generateSlug(card.title)}`)}>
        <Image src={card.posterImg.src} alt={card.title} width={card.posterImg.width} height={card.posterImg.height} className='rounded-sm w-full h-auto'/>
        <span className='px-2 py-1 bg-primarycolor text-white rounded-sm absolute top-4 right-4 font-medium shadow-md'>{card.quality}</span>
        <div className='card-title absolute bottom-0 w-full rounded-sm flex justify-center pb-2'>
          <h3 className='text-white font-medium text-lg'>{card.title}</h3>
        </div>
        <div className='absolute top-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,.5)] rounded-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
          <span className='rounded-full flex justify-center items-center w-20 h-20 bg-cta'><FaPlay size={30} className='text-primarycolor ps-1' /></span>
        </div>
      </div>
  )
}

export default Card