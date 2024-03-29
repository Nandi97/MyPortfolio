import React from 'react';
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './testimonials.css';

import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const data = [
	{
		avatar: AVTR1,
		name: 'Alvin Kigen',
		review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat pariatur repellat at et non quam mollitia molestias sapiente officia reprehenderit, aliquid adipisci numquam maxime dolorem voluptatem dolor labore nemo laboriosam!',
	},
	{
		avatar: AVTR2,
		name: 'Alvin Kigen',
		review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat pariatur repellat at et non quam mollitia molestias sapiente officia reprehenderit, aliquid adipisci numquam maxime dolorem voluptatem dolor labore nemo laboriosam!',
	},
	{
		avatar: AVTR3,
		name: 'Alvin Kigen',
		review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat pariatur repellat at et non quam mollitia molestias sapiente officia reprehenderit, aliquid adipisci numquam maxime dolorem voluptatem dolor labore nemo laboriosam!',
	},
	{
		avatar: AVTR4,
		name: 'Alvin Kigen',
		review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat pariatur repellat at et non quam mollitia molestias sapiente officia reprehenderit, aliquid adipisci numquam maxime dolorem voluptatem dolor labore nemo laboriosam!',
	},
];

const Testimonials = () => {
	return (
		<section id="testimonials" className="snap-start">
			<h5 className="">Review from clients</h5>
			<h2>Testimonials</h2>
			<Swiper
				className="container testimonials__container"
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index} className="testimonial">
							<div className="client__avatar">
								<img src={avatar} alt="" />
							</div>
							<h5 className="client__name">{name}</h5>
							<small className="client__review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
