import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    {
    id:1,
    image: IMG1,
    title: "Crypto Currency Dashboard and Financial Visualization",
    github: "https://github.com/Nandi97",
    demo: "https://dribbble.com/Alien_pixels"
},
    {
    id:2,
    image: IMG2,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com/Nandi97",
    demo: "https://dribbble.com/Alien_pixels"
},
    {
    id:3,
    image: IMG3,
    title: "Figma dhasboard UI kit for data design web apps",
    github: "https://github.com/Nandi97",
    demo: "https://dribbble.com/Alien_pixels"
},
    {
    id:4,
    image: IMG4,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com/Nandi97",
    demo: "https://dribbble.com/Alien_pixels"
},
    {
    id:5,
    image: IMG5,
    title: "Charts Templates and infographic in Figma",
    github: "https://github.com/Nandi97",
    demo: "https://dribbble.com/Alien_pixels"
},
    {
    id:6,
    image: IMG6,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com/Nandi97",
    demo: "https://dribbble.com/Alien_pixels"
},
]


function Portfolio() {
    return (
        <section
            id="portfolio"
        >
            <h5>My Recent work</h5>
            <h2>Portfolio</h2>
            <div className="portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" srcset="" /></div>
                        <h3>This is a Portfolio item title</h3>
                        
                        <div className="portfolio__item-cta">
                            <a
                            className="btn text-white border-white"
                            href="https://github.com/Nandi97"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            className="btn-primary"
                            href="https://dribbble.com/Alien_pixels"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="" srcset="" /></div>
                        <h3>This is a Portfolio item title</h3>
                        
                        <div className="portfolio__item-cta">
                            <a
                            className="btn text-white border-white"
                            href="https://github.com/Nandi97"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            className="btn-primary"
                            href="https://dribbble.com/Alien_pixels"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="" srcset="" /></div>
                        <h3>This is a Portfolio item title</h3>
                        
                        <div className="portfolio__item-cta">
                            <a
                            className="btn text-white border-white"
                            href="https://github.com/Nandi97"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            className="btn-primary"
                            href="https://dribbble.com/Alien_pixels"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio__item ">
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="" srcset="" /></div>
                        <h3>This is a Portfolio item title</h3>
                        
                        <div className="portfolio__item-cta">
                            <a
                            className="btn text-white border-white"
                            href="https://github.com/Nandi97"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            className="btn-primary"
                            href="https://dribbble.com/Alien_pixels"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG5} alt="" srcset="" /></div>
                        <h3>This is a Portfolio item title</h3>
                        
                        <div className="portfolio__item-cta">
                            <a
                            className="btn text-white border-white"
                            href="https://github.com/Nandi97"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            className="btn-primary"
                            href="https://dribbble.com/Alien_pixels"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG6} alt="" srcset="" /></div>
                        <h3>This is a Portfolio item title</h3>
                        
                        <div className="portfolio__item-cta">
                            <a
                            className="btn text-white border-white"
                            href="https://github.com/Nandi97"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            className="btn-primary"
                            href="https://dribbble.com/Alien_pixels"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio
