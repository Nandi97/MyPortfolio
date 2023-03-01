import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

function Portfolio() {
    return (
        <section
            className="flex flex-col items-center w-full p-10 lg:px-20"
            id="portfolio"
        >
            <h5>My Recent work</h5>
            <h2 className="pb-10 text-3xl text-sky-400">Portfolio</h2>
            <div className="container portfolio__container grid grid-cols-3 gap-10">
                <article className="portfolio__item p-5 bg-blue-500 rounded-3xl border border-transparent transition duration-300">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" srcset="" />
                        <h3>This is a Portfolio item title</h3>
                        <a className="border hover:border-white hover:text-white text-sm md:text-base border-[#6ECCAF] p-2 rounded-md text-[#6ECCAF]" href="https://github.com/Nandi97" target='_blank' rel="noreferrer">Github</a>
                        <a className="bg-[#6ECCAF] hover:bg-white border text-sm md:text-base hover:border-white text-white border-[#6ECCAF] p-2 rounded-md hover:text-[#6ECCAF]" href="https://dribbble.com/Alien_pixels" target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item p-5 bg-blue-500 rounded-3xl border border-transparent transition duration-300">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="" srcset="" />
                        <h3>This is a Portfolio item title</h3>
                        <a className="border hover:border-white hover:text-white text-sm md:text-base border-[#6ECCAF] p-2 rounded-md text-[#6ECCAF]" href="https://github.com/Nandi97" target='_blank' rel="noreferrer">Github</a>
                        <a className="bg-[#6ECCAF] hover:bg-white border text-sm md:text-base hover:border-white text-white border-[#6ECCAF] p-2 rounded-md hover:text-[#6ECCAF]" href="https://dribbble.com/Alien_pixels" target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item p-5 bg-blue-500 rounded-3xl border border-transparent transition duration-300">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="" srcset="" />
                        <h3>This is a Portfolio item title</h3>
                        <a className="border hover:border-white hover:text-white text-sm md:text-base border-[#6ECCAF] p-2 rounded-md text-[#6ECCAF]" href="https://github.com/Nandi97" target='_blank' rel="noreferrer">Github</a>
                        <a className="bg-[#6ECCAF] hover:bg-white border text-sm md:text-base hover:border-white text-white border-[#6ECCAF] p-2 rounded-md hover:text-[#6ECCAF]" href="https://dribbble.com/Alien_pixels" target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item p-5 bg-blue-500 rounded-3xl border border-transparent transition duration-300">
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="" srcset="" />
                        <h3>This is a Portfolio item title</h3>
                        <a className="border hover:border-white hover:text-white text-sm md:text-base border-[#6ECCAF] p-2 rounded-md text-[#6ECCAF]" href="https://github.com/Nandi97" target='_blank' rel="noreferrer">Github</a>
                        <a className="bg-[#6ECCAF] hover:bg-white border text-sm md:text-base hover:border-white text-white border-[#6ECCAF] p-2 rounded-md hover:text-[#6ECCAF]" href="https://dribbble.com/Alien_pixels" target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item p-5 bg-blue-500 rounded-3xl border border-transparent transition duration-300">
                    <div className="portfolio__item-image">
                        <img src={IMG5} alt="" srcset="" />
                        <h3>This is a Portfolio item title</h3>
                        <a className="border hover:border-white hover:text-white text-sm md:text-base border-[#6ECCAF] p-2 rounded-md text-[#6ECCAF]" href="https://github.com/Nandi97" target='_blank' rel="noreferrer">Github</a>
                        <a className="bg-[#6ECCAF] hover:bg-white border text-sm md:text-base hover:border-white text-white border-[#6ECCAF] p-2 rounded-md hover:text-[#6ECCAF]" href="https://dribbble.com/Alien_pixels" target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item p-5 bg-blue-500 rounded-3xl border border-transparent transition duration-300">
                    <div className="portfolio__item-image">
                        <img src={IMG6} alt="" srcset="" />
                        <h3>This is a Portfolio item title</h3>
                        <a className="border hover:border-white hover:text-white text-sm md:text-base border-[#6ECCAF] p-2 rounded-md text-[#6ECCAF]" href="https://github.com/Nandi97" target='_blank' rel="noreferrer">Github</a>
                        <a className="bg-[#6ECCAF] hover:bg-white border text-sm md:text-base hover:border-white text-white border-[#6ECCAF] p-2 rounded-md hover:text-[#6ECCAF]" href="https://dribbble.com/Alien_pixels" target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio
