import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="pl-10 absolute left-0 flex-col items-center gap-3 header__socials lg:flex bottom-12">
            <a
                className="hover:text-[#c7493a] text-black"
                href="https://www.linkedin.com/in/alvin-kigen-5752581a9/"
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin />
            </a>
            <a
                className="hover:text-[#c7493a] text-black"
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
