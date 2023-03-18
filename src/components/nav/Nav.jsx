/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a
                href="#"
                onClick={() => setActiveNav('#')}
                className={`text-white ${
                    activeNav === '#' ? 'active:text-[#ADE792]' : ''
                } `}
            >
                Home
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={`text-white ${
                    activeNav === '#about' ? 'active:text-[#ADE792] ' : ''
                } `}
            >
                About Me
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={`text-white ${
                    activeNav === '#experience' ? 'active:text-[#ADE792]' : ''
                } `}
            >
                Experience
            </a>
            <a
                href="#services"
                onClick={() => setActiveNav('#services')}
                className={`text-white ${
                    activeNav === '#services' ? 'active:text-[#ADE792]' : ''
                } `}
            >
                Services
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={`text-white ${
                    activeNav === '#contact' ? 'active:text-[#ADE792]' : ''
                } `}
            >
                Contact
            </a>
        </nav>
    )
}

export default Nav
