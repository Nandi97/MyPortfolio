import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.webp'
import ME_BG from '../../assets/blob-shape.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
    return (
        <header>
            <div class="sm:px-6 lg:px-8 py-10">
                <div class="grid items-center grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col h-full justify-center items-center md:-mt-48">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Hey 👋 I am <br class="block sm:hidden" />
                            Alvin Kigen
                        </h2>

                        <p class="mt-4 text-xl text-gray-600 md:mt-8">
                            <span class="relative inline-block">
                                <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                                <span class="relative">
                                    {' '}
                                    An IT expert and Frontend Web Developer{' '}
                                </span>
                            </span>
                        </p>
                        <div class="max-w-lg mt-3 md:mt-8">
                            <CTA />
                        </div>
                    </div>

                    <div class="relative">
                        <LazyLoadImage
                            class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2 pb-28 md:pb-0"
                            src={ME_BG}
                            alt=""
                        />

                        <LazyLoadImage
                            class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 pt-24 md:pt-0"
                            src={ME}
                            alt=""
                        />
                    </div>
                </div>
                <HeaderSocials />
                <a href="#contact">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
