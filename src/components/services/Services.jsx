import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

const Services = () => {
    return (
        <section className="flex flex-col items-center w-full p-10 lg:px-20" id="services">
            <h5>What I Offer</h5>
            <h2 className="pb-10 text-3xl text-sky-400">Services</h2>
            <div className="container services__container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4 lg:gap-12">
                <article className="service border h-fit border-blue-700 bg-blue-600 transition duration-300 rounded-b-3xl hover:cursor-default hover:bg-blue-500 hover:text-white">
                    <div className="service__head  bg-blue-300 p-8 rounded-b-3xl shadow">
                        <h3 className='text-base text-blue-900 text-center'>UI/UX Design</h3>
                    </div>
                    <ul className="service__list p-8">
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                    </ul>
                </article>
                {/* End of UI/UX  */}
                <article className="service border h-fit border-blue-700 bg-blue-600 transition duration-300 rounded-b-3xl hover:cursor-default hover:bg-blue-500 hover:text-white">
                    <div className="service__head bg-blue-300 p-8 rounded-b-3xl shadow">
                        <h3 className='text-base text-blue-900 text-center'>Web Development</h3>
                    </div>
                    <ul className="service__list p-8">
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                        
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                    </ul>
                </article>
                {/* End of Web Development  */}
                <article className="service border h-fit border-blue-700 bg-blue-600 transition duration-300 rounded-b-3xl hover:cursor-default hover:bg-blue-500 hover:text-white">
                    <div className="service__head bg-blue-300 p-8 rounded-b-3xl shadow">
                        <h3 className='text-base text-blue-900 text-center'>Content Creation</h3>
                    </div>
                    <ul className="service__list p-8">
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                        <li className='flex gap-4 mb-3'>
                            <AiOutlineCheck className='service__list-icon text-blue-900 mt-[2px]' />
                            <p className='text-sm'>Lorem ipsum dolor sit amet  elit.</p>
                        </li>
                    </ul>
                </article>
                {/* End of Content Creation  */}
            </div>
        </section>
    )
}

export default Services
