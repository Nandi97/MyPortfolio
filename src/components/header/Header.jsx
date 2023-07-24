import React from 'react';
import CTA from './CTA';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import HeaderSocials from './HeaderSocials';
import './header.css';
import ME from '../../assets/me.webp';
import DotGrid from '../ui/DotGrid';

const Header = () => {
	return (
		<header>
			<div class="sm:px-6 lg:px-8 py-10">
				<div class="grid items-center grid-cols-1 md:grid-cols-2">
					<div className="z-10 flex flex-col items-center justify-center h-full md:-mt-48">
						<h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
							Hey 👋 I am <br class="block sm:hidden" />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500">
								Alvin Kigen
							</span>
						</h2>

						<p class="mt-4 text-xl text-gray-600 md:mt-8">
							<span class="relative inline-block">
								<span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
								<span class="relative">
									{' '}
									An IT expert and Frontend Web Developer{' '}
								</span>
							</span>
						</p>
						<div class="max-w-lg mt-3 md:mt-8">
							<CTA />
						</div>
					</div>

					<div class="relative z-0">
						
						<div className="grid h-screen place-content-center bg  px-8 py-12 absolute md:top-0 -translate-x-1/2 left-1/2  ">
							<DotGrid />
						</div>

						<LazyLoadImage
							class="relative grayscale w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 pt-24 md:pt-0"
							src={ME}
							alt=""
						/>
					</div>
				</div>
				<HeaderSocials />
				<a href="#contact">Scroll Down</a>
			</div>
		</header>
	);
};

export default Header;
