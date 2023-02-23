import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
      <div className='header__socials hidden sm:flex flex-col items-center gap-3 absolute left-0 bottom-12'>
          <a className='text-[#ADE792] hover:text-white' href="https://www.linkedin.com/in/alvin-kigen-5752581a9/" target='_blank'><BsLinkedin /></a>
          <a className='text-[#ADE792] hover:text-white' href="https://github.com/Nandi97/" target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials