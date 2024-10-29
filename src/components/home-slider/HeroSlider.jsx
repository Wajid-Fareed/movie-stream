'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { HeroData } from '@/data/data';
import Container from '../layout/Container';
import Button from '../ui/button';
import Image from 'next/image';

const HeroSlider = () => {
    return (
        <Container>
            <Swiper
                pagination={{
                    // dynamicBullets: true,
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                  }}
                modules={[Autoplay,Pagination]}
                className="heroSwiper"
            >
                {HeroData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="slide-content relative group">
                            <div>
                                {item.imgUrl && <Image src={item.imgUrl.src} alt={item.title} width={1550} height={400} className="w-full h-auto min-h-[170px] object-cover rounded-sm" />}
                            </div>
                            <div className='group-hover:opacity-100 opacity-0 transition-opacity duration-500 flex items-center absolute left-0 top-0 w-full h-full inset-0 z-10'>
                                <div className='z-10 p-3 md:p-5 xl:p-10 w-[80%] xsm:w-3/4 mx-auto bg-[rgba(0,0,0,.7)] shadow-lg rounded-md'>
                                    <h2 className="text-11 xs:text-sm sm:text-base xl:text-xl font-bold text-white uppercase">{item.title}</h2>
                                    {item.description && <p className="text-10 xs:text-11 sm:text-12 xl:text-sm mt-1 md:mt-2 text-white text-nowrap text-ellipsis overflow-hidden">{item.description}</p>}
                                    <Button className='text-11 sm:text-sm md:text-base lg:text-lg font-medium mt-2 md:mt-4 w-20 sm:w-28 md:w-32 lg:w-40 h-7 sm:h-8 md:h-10 lg:h-12 shadow-md'>Watch now</Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default HeroSlider;
