import React from 'react'
import './services.css'
import { AiOutlineCheck } from 'react-icons/ai'

const Services = () => {
    return (
        <section
            id="services"
        >
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="services__container">
                <article>
                    <div className="service__head">
                        <h3 className="">
                            UI/UX Design
                        </h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>
                    </ul>
                </article>
                {/* End of UI/UX  */}
                <article>
                    <div className="service__head">
                        <h3>
                            Web Development
                        </h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>

                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>
                    </ul>
                </article>
                {/* End of Web Development  */}
                <article>
                    <div className="service__head">
                        <h3>
                            Content Creation
                        </h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet elit.
                            </p>
                        </li>
                    </ul>
                </article>
                {/* End of Content Creation  */}
            </div>
        </section>
    )
}

export default Services
