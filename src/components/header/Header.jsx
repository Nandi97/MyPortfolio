import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
    return (
        <header className="">
            <div className="text-center h-full relative">
                <h5 className="">Hello I'm</h5>
                <h1 className="">Alvin Kigen</h1>
                <h5 className="text-[#F3ECB0]">Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="header__me">
                    <img src={ME} alt="" />
                </div>
                <a href="#contact">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
