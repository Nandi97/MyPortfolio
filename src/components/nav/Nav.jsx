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
                    activeNav === '#' ? 'active:text-[#c7493a]' : ''
                } `}
            >
                Home
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={`text-white ${
                    activeNav === '#about' ? 'active:text-[#c7493a] ' : ''
                } `}
            >
                About Me
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={`text-white ${
                    activeNav === '#experience' ? 'active:text-[#c7493a]' : ''
                } `}
            >
                Experience
            </a>
            <a
                href="#services"
                onClick={() => setActiveNav('#services')}
                className={`text-white ${
                    activeNav === '#services' ? 'active:text-[#c7493a]' : ''
                } `}
            >
                Services
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={`text-white ${
                    activeNav === '#contact' ? 'active:text-[#c7493a]' : ''
                } `}
            >
                Contact
            </a>
        </nav>
    )
}

export default Nav
