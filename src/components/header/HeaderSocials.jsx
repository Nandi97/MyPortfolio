import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="absolute left-0 flex-col items-center hidden gap-3 header__socials lg:flex bottom-12">
            <a
                className="text-[#ADE792] hover:text-white"
                href="https://www.linkedin.com/in/alvin-kigen-5752581a9/"
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin />
            </a>
            <a
                className="text-[#ADE792] hover:text-white"
                href="https://github.com/Nandi97/"
                target="_blank"
                rel="noreferrer"
            >
                <BsGithub />
            </a>
        </div>
    )
}

export default HeaderSocials
