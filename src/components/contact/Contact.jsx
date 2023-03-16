import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
const Contact = () => {
    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail />
                        <h4>Email</h4>
                        <h5>alvin_kigen@yahoo.com</h5>
                        <a href="mailto:alvin_kigen@yahoo.com">
                            Send a Message
                        </a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine />
                        <h4>Messenger</h4>
                        <h5>alvin kigen</h5>
                        <a href="https://m.me/cartez.detwiler1">
                            Send a Message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp />
                        <h4>Whatsapp</h4>
                        <h5>+254-712-012-246</h5>
                        <a href="mailto:alvin_kigen@yahoo.com">
                            Send a Message
                        </a>
                    </article>
                </div>
                {/* END  */}
                <form action=""></form>
            </div>
        </section>
    )
}

export default Contact
