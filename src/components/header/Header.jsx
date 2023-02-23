import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
    return (
        <header className="lg:h-screen md:h-[515px] h-screen pt-28 overflow-hidden px-24">
            <div className="text-center h-full relative">
                <h5 className="">Hello I'm</h5>
                <h1 className="">Alvin Kigen</h1>
                <h5 className="text-[#F3ECB0]">Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="pt-20 px-6 pb-6 overflow-hidden bg-gradient-to-b md:mx-0 mx-8 from-[#ADE792] to-transparent w-96 h-[480px] absolute left-1/2 -translate-x-2/4 mt-16 rounded-t-[192px]">
                    <img src={ME} alt="" />
                </div>
                <a
                    href="#contact"
                    className="text-[#ADE792] text-sm hidden sm:flex absolute -right-9 bottom-20 rotate-90 font-light"
                >
                    Scroll Down
                </a>
            </div>
        </header>
    )
}

export default Header
