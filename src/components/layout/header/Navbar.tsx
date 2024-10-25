import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import { IoMdSearch } from 'react-icons/io'
import { HiBars3BottomRight } from 'react-icons/hi2'

const Navbar = () => {
    return (
        <header className='w-full border-b shadow-sm'>
            <Container className='flex justify-between items-center gap-6 py-3'>
                <div className='flex-grow lg:flex-grow-0'>
                    <Link href='/' className='text-2xl font-semibold text-cta'>Movie <span className='text-primary'>Stream</span></Link>
                </div>
                <div className='hidden lg:flex'>
                    <nav>
                        <ul className='text-lg font-medium'>
                            <li>
                                <Link href="/" >Home</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <form action="" className='relative'>
                        <input type="text" name='search' placeholder='Search movie or series' className='border rounded shadow-sm ps-3 pe-9 py-1 text-md w-64 focus:outline-none' />
                        <button type="submit"><IoMdSearch size={25} className='text-cta absolute top-1 right-2' /></button>
                    </form>
                </div>
                <div className='flex items-center lg:hidden'>
                    <button><HiBars3BottomRight size={30} className='text-cta stroke-1' /></button>
                </div>
            </Container>
        </header>
    )
}

export default Navbar