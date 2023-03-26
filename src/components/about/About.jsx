import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import './about.css'
import ME_ABOUT from '../../assets/me-about.webp'

const About = () => {
    return (
        <section id="about" className="bg-[#212121]">
            <h5>Get To know</h5>
            <h2>About Me</h2>
            <div className="container grid grid-cols-1 gap-20 about__container lg:grid-cols-12">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME_ABOUT} alt="About" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="grid grid-cols-1 gap-4 about__cards lg:grid-cols-3 lg:gap-6 lg:pb-5 lg:mt-5">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small className="text-white">
                                3+ Years Working
                            </small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small className="text-white">
                                10+ Clients Worldwide
                            </small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small className="text-white">
                                10+ Completed Projects
                            </small>
                        </article>
                    </div>

                    <p className="mt-8 mb-10 text-[#ffffff] my-6 lg:my-0 lg:py-5">
                        Hi there! I'm an IT expert with a passion for web
                        development and a solid set of skills in various
                        frameworks, including Laravel and React, as well as
                        proficiency in web languages such as HTML and CSS. I'm
                        also highly competent in networking, virtual machine
                        setup, and server management. Additionally, I have
                        extensive knowledge of hardware and PC builds,
                        specifically geared towards high-end gaming and
                        networking.
                    </p>
                    <p className="mt-8 mb-10 text-[#ffffff] my-6 lg:my-0 lg:py-5">
                        I'm highly motivated and always eager to learn new
                        technologies and techniques to improve my skills and
                        enhance my projects. Whether it's building a responsive
                        website, creating a powerful gaming rig, or optimizing
                        server performance, I bring a dedicated approach and a
                        strong work ethic to every project.
                    </p>
                    <p className="mt-8 mb-10 text-[#ffffff] my-6 lg:my-0 lg:py-5">
                        In my free time, I enjoy experimenting with new
                        technologies and creating personal projects to expand my
                        skills and explore new concepts. I'm always looking for
                        opportunities to collaborate with like-minded
                        individuals and take on new challenges in the world of
                        IT.
                    </p>

                    <a href="#contact" className="btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
