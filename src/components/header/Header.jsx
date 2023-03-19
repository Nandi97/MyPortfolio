import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
    return (
        // <header>
        //     <div className="relative h-full text-center">
        //         <div className="grid grid-cols-12 justify-items-center">
        //         <div className="content-center h-full col-span-12 md:col-span-6">
        //         <h5 className="text-center text-black intro">Hello I'm</h5>
        //         <h1 className="name text-3xl font-bold text-[#c7493a] text-center">Alvin Kigen</h1>
        //                 <h5 className="text-[#000]">Fullstack Developer</h5>
        //                 <CTA />
        //         </div>

        //         <div className="header__me">
        //             <img src={ME} alt="" />
        //         </div></div>

        //         <HeaderSocials />
        //         <a href="#contact">Scroll Down</a>
        //     </div>
        // </header>
        <header>
            <div className="h-full mx-auto">
                <div className="grid grid-cols-12">
                    <div className="flex flex-col items-center h-full md:col-span-6 col-span-full">
                        <h5 className="text-center text-black intro">
                            Hello I'm
                        </h5>
                        <h1 className="name text-3xl font-bold text-[#c7493a] text-center">
                            Alvin Kigen
                        </h1>
                        <h5 className="text-[#000]">Fullstack Developer</h5>
                        <CTA />
                    </div>
                    <div className="items-center h-full py-10 md:col-span-6 drop-shadow-2xl col-span-full">
                        <LazyLoadImage
                            width={600}
                            className="h-auto max-w-xl transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
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
