import React from 'react'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import './about.css'

const About = () => {
    return (
        <section id="about">
            <h5>Get To know</h5>
            <h2>About Me</h2>
            <div className="container grid grid-cols-1 gap-20 about__container lg:grid-cols-12">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="grid grid-cols-1 gap-4 about__cards lg:grid-cols-3 lg:gap-6 lg:pb-5 lg:mt-5">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>300+ Clients Worldwide</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>20+ Completed Projects</small>
                        </article>
                    </div>

                    <p className="mt-8 mb-10 text-[#ffffff] my-6 lg:my-0 lg:py-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Enim placeat velit quidem minus minima, sequi
                        tempora vel voluptatum. Laboriosam officia veritatis
                        facere ullam amet nobis deleniti rem odit. Ut, quas!
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
