import React from 'react';
import './footer.css';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import FOOTER_LOGO from '../../assets/logo_animated_gif.gif';

const Footer = () => {
	let Links = [
		{ name: 'Home', link: '#' },
		{ name: 'About', link: '#about' },
		{ name: 'Experience', link: '#experience' },
		{ name: 'Services', link: '#services' },
		{ name: 'Contact', link: '#contact' },
		{ name: 'Portfolio', link: '#portfolio' },
		{ name: 'Testimonials', link: '#testimonials' },
	];
	return (
		<footer>
			<div className="footer__logo">
				<img src={FOOTER_LOGO} alt="animated logo" />
			</div>

			<ul className="permalinks">
				{Links.map((link) => (
					<li key={link.name}>
						<a href={link.link}>{link.name}</a>
					</li>
				))}
			</ul>
			<div className="footer__socials">
				<a href="https://www.facebook.com/cartez.detwiler1">
					<BsFacebook className="text-[#4267B2]" />
				</a>
				<a href="https://www.instagram.com/alvin_kigen/">
					<AiOutlineInstagram className="text-pink-600" />
				</a>
				<a href="https://www.linkedin.com/in/alvin-kigen-5752581a9/">
					<AiOutlineLinkedin className="text-[#0072b1]" />
				</a>
			</div>
			<div className="footer__copyright">
				<small>&copy; Alvin Kigen. All Rights Reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
