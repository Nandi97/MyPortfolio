import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {DiJavascript} from 'react-icons/di'
import {SiTailwindcss} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {DiPhp} from 'react-icons/di'
import {FaLaravel} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'

function Experience() {
    return (
        <section className="h-screen lg:px-20 p-10 w-full" id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container grid grid-cols-2">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <AiFillHtml5 />
                            <h4>HTML</h4>
                            <small className="text-blue-200">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <IoLogoCss3 />
                            <h4>CSS</h4>
                            <small className="text-blue-200">Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <DiJavascript />
                            <h4>Javascript</h4>
                            <small className="text-blue-200">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <SiTailwindcss />
                            <h4>Tailwind CSS</h4>
                            <small className="text-blue-200">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <GrReactjs />
                            <h4>ReactJS</h4>
                            <small className="text-blue-200">Experienced</small>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND EXPERIENCE */}

                <div className="experience__backend">
<h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <FaNodeJs />
                            <h4>Node JS</h4>
                            <small className="text-blue-200">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <SiMongodb />
                            <h4>MongoDb</h4>
                            <small className="text-blue-200">Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <DiPhp />
                            <h4>PHP</h4>
                            <small className="text-blue-200">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <FaLaravel />
                            <h4>Laravel</h4>
                            <small className="text-blue-200">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <SiMysql />
                            <h4>MySQL</h4>
                            <small className="text-blue-200">Experienced</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
