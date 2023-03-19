import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'

function Footer() {
    return <footer>
        <a href="#" className='footer__logo'>AKIGEN</a>

        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
        </ul>
        <div className="footer__socials">
            <a href="https://www.facebook.com/cartez.detwiler1"><BsFacebook className='text-[#4267B2]'/></a>
            <a href="https://www.instagram.com/alvin_kigen/"><AiOutlineInstagram className='text-pink-600'/></a>
            <a href="https://www.linkedin.com/in/alvin-kigen-5752581a9/"><AiOutlineLinkedin className='text-[#0072b1]'/></a>
            
        </div>
        <div className="footer__copyright">
            <small>&copy; Alvin Kigen. All Rights Reserved.</small>
        </div>
    </footer>
}

export default Footer
