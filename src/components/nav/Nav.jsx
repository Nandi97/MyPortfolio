import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav className="bg-black/[0.3] w-fit py-3 px-7 z-[2] fixed left-2/4 -translate-x-1/2 block flex backdrop-blur-lg bottom-8 gap-3 rounded-[48px]">
        <a
          href="#"
                onClick={() => setActiveNav('#')}
                className={`text-[#ADE792] ${
                    activeNav === '#'
                        ? 'focus:bg-black/[0.4]'
                        : ''
                } active:text-white  hover:text-white bg-transparent p-3 rounded-full flex text-lg hover:bg-black/[0.4]`}
                
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={`text-[#ADE792] ${
                    activeNav === '#about'
                        ? 'focus:bg-black/[0.4] '
                        : ''
                } active:text-white  hover:text-white bg-transparent p-3 rounded-full flex text-lg hover:bg-black/[0.4]`}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={`text-[#ADE792] ${
                    activeNav === '#experience'
                        ? 'focus:bg-black/[0.4]'
                        : ''
                } active:text-white  hover:text-white bg-transparent p-3 rounded-full flex text-lg hover:bg-black/[0.4]`}
            >
                <BiBook />
            </a>
            <a
                href="#services"
                onClick={() => setActiveNav('#services')}
                className={`text-[#ADE792] ${
                    activeNav === '#services'
                        ? 'focus:bg-black/[0.4]'
                        : ''
                } active:text-white  hover:text-white bg-transparent p-3 rounded-full flex text-lg hover:bg-black/[0.4]`}
            >
                <RiServiceLine />
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={`text-[#ADE792] ${
                    activeNav === '#contact'
                        ? 'focus:bg-black/[0.4]'
                        : ''
                } active:text-white  hover:text-white bg-transparent p-3 rounded-full flex text-lg hover:bg-black/[0.4]`}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    )
}

export default Nav
