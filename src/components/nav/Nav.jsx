import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Nav = () => {
    return (
        <nav className="bg-black/[0.3] w-fit block py-3 px-7 z-[2] fixed left-2/4 -translate-x-1/2 block flex backdrop-blur-lg bottom-8 gap-3 rounded-[48px]">
            <a
                className="text-[#ADE792] hover:text-white bg-transparent p-3 rounded-full flex text-lg hover:bg-black/[0.4]"
                href="/"
            >
                <AiOutlineHome />
            </a>
            <a
                className="text-[#ADE792] hover:text-white bg-transparent p-3 rounded-full flex text-lg hover:bg-black/[0.4]"
                href="#about"
            >
                <AiOutlineUser />
            </a>
            <a
                className="text-[#ADE792] hover:text-white bg-transparent p-3 rounded-full flex text-lg hover:bg-black/[0.4]"
                href="#experience"
            >
                <BiBook />
            </a>
            <a
                className="text-[#ADE792] hover:text-white bg-transparent p-3 rounded-full flex text-lg hover:bg-black/[0.4]"
                href="#services"
            >
                <RiServiceLine />
            </a>
            <a
                className="text-[#ADE792] hover:text-white bg-transparent p-3 rounded-full flex text-lg hover:bg-black/[0.4]"
                href="#contact"
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    )
}

export default Nav
