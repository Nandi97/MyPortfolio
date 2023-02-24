import React from 'react'
import CV from '../../assets/cv.pdf'

function CTA() {
    return (
        <div className="mt-10 hidden lg:flex gap-5 justify-center">
            <a
                className="border hover:border-white hover:text-white text-sm md:text-base border-[#6ECCAF] p-2 rounded-md text-[#6ECCAF]"
                href={CV}
                download
            >
                Download CV
            </a>
            <a
                className="bg-[#6ECCAF] hover:bg-white border text-sm md:text-base hover:border-white text-white border-[#6ECCAF] p-2 rounded-md hover:text-[#6ECCAF]"
                href="#contact"
            >
                Lets's Talk
            </a>
        </div>
    )
}

export default CTA
