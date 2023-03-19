import React, { useRef } from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_m384vpx',
                'template_rvbuwzp',
                form.current,
                'J9FUA9o9WKbiCTqIq'
            )
            .then(
                (result) => {
                    console.log(result.text)
                },
                (error) => {
                    console.log(error.text)
                }
            )
        e.target.reset()
    }
    return (
        <section id="contact" className="bg-white">
            <Toaster />
            <h5 className="text-black">Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options ">
                    <article className="contact__option">
                        <AiOutlineMail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>alvin_kigen@yahoo.com</h5>
                        <a
                            className="text-[#c7493a] hover:text-black"
                            href="mailto:alvin_kigen@yahoo.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send an Email
                        </a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="text-[#006AFF] contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>alvin kigen</h5>
                        <a
                            className="text-[#c7493a] hover:text-black"
                            href="https://m.me/cartez.detwiler1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a Message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="text-[#25D366] contact__option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+254-712-012-246</h5>
                        <a
                            className="text-[#c7493a] hover:text-black"
                            href="https://wa.me/+254712012246"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a Message
                        </a>
                    </article>
                </div>
                {/* END  */}
                <form ref={form} onSubmit={sendEmail}>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="name"
                                placeholder=""
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#c7493a] peer"
                                required
                            />
                            <label
                                htmlFor="name"
                                className="peer-focus:font-medium absolute text-sm text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#c7493a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Your Name
                                <sup className="text-base text-red-600">*</sup>
                            </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input
                                type="email"
                                name="email"
                                placeholder=""
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#c7493a] peer"
                                required
                            />
                            <label
                                htmlFor="email"
                                className="peer-focus:font-medium absolute text-sm text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#c7493a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Your Email
                                <sup className="text-base text-red-600">*</sup>
                            </label>
                        </div>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <textarea
                            name="message"
                            placeholder=""
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#c7493a] peer"
                            required
                        />
                        <label
                            htmlFor="message"
                            className="peer-focus:font-medium absolute text-sm text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#c7493a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Your Message
                            <sup className="text-base text-red-600">*</sup>
                        </label>
                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary text-[#c7493a]"
                        onClick={() => toast.success('Email Sent')}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
