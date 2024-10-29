import React from 'react'
import Container from '../layout/Container'
import Image from 'next/image'
import { Moviesdata } from '@/data/data'
import { FaPlay } from 'react-icons/fa'

const MovieDetail = () => {
  return (
    <Container className='py-5'>
      {Moviesdata.map((item) => (
        <div key={item.id}>
          <div className='relative group'>
            {item.imgUrl && (<Image src={item.imgUrl?.src} alt={item.title} width={item.imgUrl?.width} height={item.imgUrl?.height} className='w-full h-auto rounded-sm' />)}
            <div className='absolute top-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,.5)] rounded-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
              <span className='rounded-full flex justify-center items-center w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-cta'><FaPlay className='text-[30px] sm:text-[60px] text-primarycolor ps-1' /></span>
            </div>
          </div>
          <div className='flex gap-5 mt-5'>
            <div className='min-w-[200px] hidden lg:block'>
              <Image src={item.posterImg.src} alt={item.title} width={item.posterImg.width} height={item.posterImg.height} className='w-full h-auto rounded-sm' />
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl font-semibold'>{item.title}</h2>
              <p>{item.description}</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Genre: </p>
                  <span className='text-primarycolor'>
                    {item.genre.map((genreItem, index) => (
                      <span key={genreItem.id}>
                        {genreItem.name}{index < item.genre.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Quality: </p>
                  <span className='text-primarycolor'>
                    {item.quality}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Actor: </p>
                  <span className='text-primarycolor'>
                    {item.actor.map((genreItem, index) => (
                      <span key={genreItem.id}>
                        {genreItem.name}{index < item.actor.length - 1 ? ', ' : ''} 
                      </span>
                    ))}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Duration: </p>
                  <span className='text-primarycolor'>
                    {item.duration}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Director: </p>
                  <span className='text-primarycolor'>
                    {item.director}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Relase Date: </p>
                  <span className='text-primarycolor'>
                    {item.relaseDate}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>Country: </p>
                  <span className='text-primarycolor'>
                    {item.country}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-medium'>IMDb: </p>
                  <span className='text-primarycolor'>
                    {item.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </Container>
  )
}

export default MovieDetail