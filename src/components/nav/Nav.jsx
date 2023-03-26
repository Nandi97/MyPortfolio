/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import HEADER_LOGO from '../../assets/Transparent_Logo.png'

const Nav = () => {
    let Links = [
        { name: 'Home', link: '#' },
        { name: 'About', link: '#about' },
        { name: 'Experience', link: '#experience' },
        { name: 'Services', link: '#services' },
        { name: 'Contact', link: '#contact' },
    ]

    let [open, setOpen] = useState(false)
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <div className="bg-black/[0.3] justify-between py-4 md:px-10 px-7 items-center md:flex">
                <div className="">
                    <LazyLoadImage
                        className="hidden p-0 m-0 md:flex md:w-20"
                        src={HEADER_LOGO}
                        alt="my logo"
                    />
                </div>
                <div className="flex block">
                    <div
                        onClick={() => setOpen(!open)}
                        className="absolute -mt-4 -mr-2 text-3xl cursor-pointer right-8 top-6 md:hidden"
                    >
                        <HiOutlineMenuAlt3
                            name={open ? 'close' : 'menu'}
                            className="text-lg text-white"
                        />
                    </div>
                    <ul
                        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                            open
                                ? 'top-20 text-black bg-black/[0.3] -mt-12'
                                : 'top-[-490px]'
                        }`}
                    >
                        <LazyLoadImage
                            className="w-20 mt-5 md:hidden"
                            src={HEADER_LOGO}
                            alt="my logo"
                        />
                        {Links.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.link}
                                    onClick={() => setActiveNav('#')}
                                    className={`text-white ${
                                        activeNav === '/'
                                            ? 'active:text-[#c7493a]'
                                            : ''
                                    } `}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
