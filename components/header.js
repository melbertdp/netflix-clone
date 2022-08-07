import { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import constants from '../utils/constants';


const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <Image
                    src={`${constants.NETFLIX_LOGO}`}
                    alt="logo"
                    className=" ml-4 cursor-pointer rounded"
                    width={130}
                    height={30}
                />

                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink cursor-default font-semibold text-white hover:text-white">
                        Home
                    </li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className="h-6 w-6" />
                <Link href="/account" className='pl-4'>
                    <Image
                        src={`${constants.ACCOUNT_ICON}`}
                        alt="profile"
                        className=" ml-4 cursor-pointer rounded"
                        width={30}
                        height={30}
                    />
                </Link>
            </div>
        </header>
    );
}

export default Header