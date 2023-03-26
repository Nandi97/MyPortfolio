import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
    return (
        <header>
            <div class="sm:px-6 lg:px-8 py-10">
                <div class="grid items-center grid-cols-1 md:grid-cols-2">
                    <div className="z-10 flex flex-col items-center justify-center h-full md:-mt-48">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Hey 👋 I am <br class="block sm:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500">
                                Alvin Kigen
                            </span>
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

                    <div class="relative z-0">
                        <svg
                            class="absolute inset-x-0 bottom-0 md:top-0 -mb-32 md:-mb-44 -translate-x-1/2 left-1/2 pb-28 md:pb-0 md:w-[600px] w-96"
                            viewBox="0 0 551 545"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M551 224.656C551 373.677 434.779 545 285.54 545C136.3 545 15.3176 424.195 15.3176 275.174C15.3176 126.154 -52.379 0 96.8605 0C246.1 0 551 75.636 551 224.656Z"
                                fill="url(#paint0_linear)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear"
                                    x1="11.4792"
                                    y1="0.000136836"
                                    x2="567.423"
                                    y2="17.3016"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#c7493a" />
                                    <stop offset="1" stop-color="#2925EB" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <LazyLoadImage
                            class="relative grayscale w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 pt-24 md:pt-0"
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
