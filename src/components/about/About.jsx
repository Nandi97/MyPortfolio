import React from 'react'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import './about.css'

const About = () => {
    return (
        <section className="h-screen lg:px-20 p-10 w-full text-center" id="about">
            <h5>Get To know</h5>
            <h2 className='text-3xl text-sky-400'>About Me</h2>
            <div className="container about__container gap-20 grid grid-cols-1 lg:grid-cols-12">
                <div className="about__me w-full  flex items-center aspect-square rounded-3xl col-span-1 lg:col-span-4">
                    <div className="about__me-image rounded-3xl overflow-hidden rotate-[10deg] hover:rotate-0 transition duration-300">
                        <img src={ME} alt="About" />
                    </div>
                </div>
                <div className="about__content text-center lg:text-justify col-span-1 lg:col-span-8">
                    <div className="about__cards grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-4 lg:pb-5 lg:mt-5">
                        <article className='about__card border rounded-2xl p-8 flex flex-col items-center text-center hover:cursor-default bg-blue-400  hover:bg-transparent transition duration-300'>
                            <FaAward className='about__icon text-[#6eccaf] text-2xl mb-4'/>
                            <h5 className='text-base'>Experience</h5>
                            <small className='text-xs text-[#ffffff99]'>3+ Years Working</small>
                        </article>
                        <article className='about__card border rounded-2xl p-8 flex flex-col items-center text-center hover:cursor-default bg-blue-400  hover:bg-transparent transition duration-300'>
                            <FiUsers className='about__icon text-[#6eccaf] text-2xl mb-4'/>
                            <h5 className='text-base'>Clients</h5>
                            <small className='text-xs text-[#ffffff99]'>300+ Clients Worldwide</small>
                        </article>
                        <article className='about__card border rounded-2xl p-8 flex flex-col items-center text-center hover:cursor-default bg-blue-400  hover:bg-transparent transition duration-300'>
                            <VscFolderLibrary className='about__icon text-[#6eccaf] text-2xl mb-4'/>
                            <h5 className='text-base'>Projects</h5>
                            <small className='text-xs text-[#ffffff99]'>20+ Completed Projects</small>
                        </article>
                    </div>

                    <p className='mt-8 mb-10 text-[#ffffff99] my-6 lg:my-0 lg:py-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim placeat velit quidem minus minima, sequi tempora vel voluptatum. Laboriosam officia veritatis facere ullam amet nobis deleniti rem odit. Ut, quas!
                    </p>

                    <a href="#contact" className="bg-[#6ECCAF] hover:bg-white border text-sm md:text-base hover:border-white text-white border-[#6ECCAF] p-2 rounded-md hover:text-[#6ECCAF]"
                >Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
