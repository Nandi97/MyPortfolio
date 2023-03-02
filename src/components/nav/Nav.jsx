/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import'./nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a
                href="#"
                onClick={() => setActiveNav('#')}
                className={`text-[#ADE792] ${
                    activeNav === '#' ? 'focus:bg-black/[0.4]' : ''
                } `}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={`text-[#ADE792] ${
                    activeNav === '#about' ? 'focus:bg-black/[0.4] ' : ''
                } `}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={`text-[#ADE792] ${
                    activeNav === '#experience' ? 'focus:bg-black/[0.4]' : ''
                } `}
            >
                <BiBook />
            </a>
            <a
                href="#services"
                onClick={() => setActiveNav('#services')}
                className={`text-[#ADE792] ${
                    activeNav === '#services' ? 'focus:bg-black/[0.4]' : ''
                } `}
            >
                <RiServiceLine />
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={`text-[#ADE792] ${
                    activeNav === '#contact' ? 'focus:bg-black/[0.4]' : ''
                } `}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    )
}

export default Nav
