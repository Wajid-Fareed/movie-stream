'use client'
import Container from '../Container'
import Link from 'next/link'
import { IoMdSearch } from 'react-icons/io'
import { HiBars3BottomRight } from 'react-icons/hi2'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    // SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { DialogTitle } from '@radix-ui/react-dialog'
import { usePathname } from 'next/navigation'
import { useUserContext } from '@/context/Provider'
import { IoPersonCircle } from 'react-icons/io5'


const Navbar = () => {
    const pathName = usePathname();
    const { userData } = useUserContext()
    const isActive = (href: string) => {
        if (pathName.startsWith(href)) {
            return " text-cta border-primarycolor animation-active ";
        }
        return "text-black group-hover:text-cta group-hover:border-primarycolor border-transparent";
    };
    return (
        <header className='w-full border-b shadow-sm'>
            <Container className='flex justify-between items-center gap-4 sm:gap-6 py-3'>
                <div className='flex-grow lg:flex-grow-0'>
                    <Link href='/' className='text-xl sm:text-2xl font-semibold text-cta'>Movie <span className='text-primarycolor'>Stream</span></Link>
                </div>
                <div className='hidden lg:flex'>
                    <nav>
                        <ul className='text-lg font-medium flex gap-8 items-center'>
                            <li className='group nav-item'>
                                <Link href="/" className={`border-b-2 nav-link ${isActive("/")}`}>Home</Link>
                            </li>
                            <li className='group nav-item'>
                                <Link href="/" className={`border-b-2 nav-link ${isActive("/movies")}`}>Movies</Link>
                            </li>
                            {/* <li className='group nav-item'>
                                <Link href="/" className={`border-b-2 nav-link ${isActive("/tv-series")}`}>Tv Series</Link>
                            </li> */}
                            <li className='group nav-item'>
                                <Link href="/" className={`border-b-2 nav-link ${isActive("/top-rating")}`}>Top Rating</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='flex items-center gap-4'>
                    <form action="" className='relative hidden sm:block'>
                        <input type="text" name='search' placeholder='Search movies' className='border rounded shadow-sm ps-3 pe-9 py-1 text-md w-64 focus:outline-none focus:ring focus:ring-cta' />
                        <button type="submit"><IoMdSearch size={25} className='text-cta absolute top-1 right-2' /></button>
                    </form>
                    <button type="submit" className='sm:hidden'><IoMdSearch size={25} className='text-cta' /></button>
                    <div>
                        <Link href={`/${userData ? 'profile': 'login'}`} >
                            <IoPersonCircle size={30} className='text-cta' />
                        </Link>
                    </div>
                </div>
                <div className='flex items-center lg:hidden'>
                    <Sheet>
                        <SheetTrigger><HiBars3BottomRight size={30} className='text-cta stroke-1' /></SheetTrigger>
                        <SheetContent>
                            <DialogTitle className='hidden'>navbar</DialogTitle>
                            <SheetHeader>
                                <SheetDescription className='mt-4'>
                                    <nav>
                                        <ul className='text-lg font-medium flex flex-col gap-4 items-start'>
                                            <li className='group nav-item'>
                                                <Link href="/" className={`border-b-2 border-transparent nav-link ${isActive("/")}`}>Home</Link>
                                            </li>
                                            <li className='group nav-item'>
                                                <Link href="/" className={`border-b-2 border-transparent nav-link ${isActive("/movies")}`}>Movies</Link>
                                            </li>
                                            {/* <li className='group nav-item'>
                                                <Link href="/" className={`border-b-2 border-transparent nav-link ${isActive("/tv-series")}`}>Tv Series</Link>
                                            </li> */}
                                            <li className='group nav-item'>
                                                <Link href="/" className={`border-b-2 border-transparent nav-link ${isActive("/top-rating")}`}>Top Rating</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>

            </Container>
        </header>
    )
}

export default Navbar