import React from 'react'
import CV from '../../assets/cv.pdf'

function CTA() {
    return (
        <div className="flex-col justify-center gap-5 mt-10 lg:flex md:flex-row">
            <a className="btn" href={CV} download>
                Download CV
            </a>
            <a className="btn-primary" href="#contact">
                Lets's Talk
            </a>
        </div>
    )
}

export default CTA
