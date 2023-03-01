import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { DiJavascript } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { DiPhp } from 'react-icons/di'
import { FaLaravel } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'

function Experience() {
    return (
        <section
            className="flex flex-col items-center w-full p-10 lg:px-20"
            id="experience"
        >
            <h5>What Skills I Have</h5>
            <h2 className="pb-10 text-3xl text-sky-400">My Experience</h2>

            <div className="container grid grid-cols-1 gap-8 lg:grid-cols-2 experience__container">
                <div className="px-20 py-10 transition duration-300 ease-in-out bg-blue-200 border border-transparent experience__frontend rounded-3xl hover:bg-blue-100 hover:text-blue-50 hover:border-blue-400 hover:cursor-default">
                    <h3 className="mb-8 text-center text-blue-700">
                        Frontend Development
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 experience__content">
                        <article className="experience__details">
                            <AiFillHtml5 className="text-[#FF5733]" />
                            <h4 className='text-blue-900'>HTML</h4>
                            <small className="text-blue-800">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <IoLogoCss3 className="text-[#264de4]" />
                            <h4 className='text-blue-900'>CSS</h4>
                            <small className="text-blue-800">Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <DiJavascript className="text-[#F0DB4F]" />
                            <h4 className='text-blue-900'>Javascript</h4>
                            <small className="text-blue-800">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <SiTailwindcss className="text-[#3CB0AF]" />
                            <h4 className='text-blue-900'>Tailwind CSS</h4>
                            <small className="text-blue-800">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <GrReactjs className="text-[#61DBFB]" />
                            <h4 className='text-blue-900'>ReactJS</h4>
                            <small className="text-blue-800">Experienced</small>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND EXPERIENCE */}

                <div className="px-20 py-10 transition duration-300 ease-in-out bg-blue-200 border border-transparent experience__backend rounded-3xl hover:bg-blue-100 hover:text-blue-50 hover:border-blue-400 hover:cursor-default">
                    <h3 className="mb-8 text-center text-blue-700">
                        Backend Development
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 experience__content">
                        <article className="experience__details">
                            <FaNodeJs className="text-[#68A063]" />
                            <h4 className='text-blue-900'>Node JS</h4>
                            <small className="text-blue-800">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <SiMongodb className="text-[#4DB33D]" />
                            <h4 className='text-blue-900'>MongoDb</h4>
                            <small className="text-blue-800">Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <DiPhp className="text-[#787CB5]" />
                            <h4 className='text-blue-900'>PHP</h4>
                            <small className="text-blue-800">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <FaLaravel className="text-[#F05340]" />
                            <h4 className='text-blue-900'>Laravel</h4>
                            <small className="text-blue-800">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <SiMysql className="text-[#F29111]" />
                            <h4 className='text-blue-900'>MySQL</h4>
                            <small className="text-blue-800">Experienced</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
