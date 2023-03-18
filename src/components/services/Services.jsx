import React from 'react'
import './services.css'
import { AiOutlineCheck } from 'react-icons/ai'

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="services__container">
                <article>
                    <div className="service__head">
                        <h3 className="">UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>User research</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>User experience (UX) design</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>User interface (UI) design</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Usability testing</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Interaction design</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Responsive design</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Front-end development</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Accessibility design</p>
                        </li>
                    </ul>
                </article>
                {/* End of UI/UX  */}
                <article>
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Website development</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Custom web application development</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>E-commerce development</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>CMS development</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>API integration</p>
                        </li>

                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Web hosting and server management</p>
                        </li>

                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Website maintenance and support</p>
                        </li>

                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Web security</p>
                        </li>

                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>SEO optimization</p>
                        </li>
                    </ul>
                </article>
                {/* End of Web Development  */}
                <article>
                    <div className="service__head">
                        <h3>IT Consultation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>IT strategy and planning</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>System architecture and design</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>T project management</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>IT infrastructure management</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Cybersecurity and risk management</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Cloud computing and migration</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Data analytics and business intelligence</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Training and support</p>
                        </li>
                    </ul>
                </article>
                {/* End of IT Expert  */}
                <article>
                    <div className="service__head">
                        <h3>IT System Admin</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Server and network administration</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>User management</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>System backups and disaster recovery</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Security management</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Software installation and maintenance</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Technical support</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>
                                System monitoring and performance optimization
                            </p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>IT documentation and reporting</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service__list-icon" />
                            <p>Cloud computing and virtualization</p>
                        </li>
                    </ul>
                </article>
                {/* End of IT Expert  */}
            </div>
        </section>
    )
}

export default Services
