import React from 'react'
import CV from '../../assets/cv.pdf'

function CTA() {
    return (
        <div className="mt-10 hidden lg:flex gap-5 justify-center">
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
