import React from 'react'
import { BsSend } from 'react-icons/bs'
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='w-full px-4 py-2 shadow-md  bg-[var(--color-secondary)]'>
            <div className='mx-auto max-w-6xl py-4 px-4 text-center text-gray-400'>
                <div className='flex flex-col-reverse md:flex-row items-start justify-between p-4 gap-8  '>
                    <div className='flex flex-col items-start justify-between w-full md:w-2/6 gap-4 md:gap-8'>
                        <img src="/Logo-dark.png" alt="" className='w-40 md:w-50' />
                        <div className='flex flex-col items-start p-1 gap-2'>
                            <p className='text-sm'>Copyright © {new Date().getFullYear()} Nexcent ltd.</p>
                            <p className='text-sm'>All rights reserved.</p>
                        </div>
                        <div className="flex items-center justify-center gap-4">

                            <FaInstagram className='w-8 h-8 p-2 rounded-full bg-[#717171] text-[var(--color-accent)] transition-colors duration-300 hover:bg-green-500' />
                            <FaGlobe className='w-8 h-8 p-2 rounded-full bg-[#717171] text-[var(--color-accent)] transition-colors duration-300 hover:bg-green-500' />
                            <FaTwitter className='w-8 h-8 p-2 rounded-full bg-[#717171] text-[var(--color-accent)] transition-colors duration-300 hover:bg-green-500' />
                            <FaYoutube className='w-8 h-8 p-2 rounded-full bg-[#717171] text-[var(--color-accent)] transition-colors duration-300 hover:bg-green-500' />
                        </div>
                    </div>

                    <div className='flex flex-row justify-around w-full md:w-3/6 items-end gap-6'>

                        <div className='flex flex-col items-start gap-6'>
                            <h1 className='text-lg text-white font-bold'>Company</h1>
                            <ul className='flex flex-col items-start gap-2 text-sm '>
                                <li><a href="#" className='hover:text-[#26cb8b] transition-colors duration-300'>About Us</a></li>
                                <li><a href="#" className='hover:text-[#26cb8b] transition-colors duration-300'>Blog</a></li>
                                <li><a href="#" className='hover:text-[#26cb8b] transition-colors duration-300'>Contact Us</a></li>
                                <li><a href="#" className='hover:text-[#26cb8b] transition-colors duration-300'>Pricing</a></li>
                                <li><a href="#" className='hover:text-[#26cb8b] transition-colors duration-300'>Testimonials</a></li>
                            </ul>

                        </div>

                        <div className='flex flex-col items-start gap-6'>
                            <h1 className='text-lg text-white font-bold'>Support</h1>
                            <ul className='flex flex-col items-start gap-2 text-sm '>
                                <li><a href="#" className='hover:text-[#26cb8b] transition-colors duration-300'>Help Center </a></li>
                                <li><a href="#" className='hover:text-[#26cb8b] transition-colors duration-300'>Terms of Services</a></li>
                                <li><a href="#" className='hover:text-[#26cb8b] transition-colors duration-300'>Privacy Policy</a></li>
                                <li><a href="#" className='hover:text-[#26cb8b] transition-colors duration-300'>Legal</a></li>
                                <li><a href="#" className='hover:text-[#26cb8b] transition-colors duration-300'>Status</a></li>
                            </ul>

                        </div>
                    </div>
                    <div className='flex flex-col items-center md:items-start gap-4 w-full md:w-1/3'>
                        <h1 className='text-lg text-white font-bold'>Stay up to date</h1>

                        <form className='flex flex-col w-full p-2 gap-2'>
                            <input type="email" placeholder={`Your Email Address `} className='px-4 py-2 rounded-md bg-[var(--color-bg)] text-gray-700' />
                            <button type='submit' className='flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300'>
                                <span>Subscribe</span>
                                <BsSend className='text-lg' />
                            </button>
                            <p className='text-xs text-gray-500'>We care about your data in accordance with our <a href="#" className='text-[var(--color-primary)] hover:underline'>Privacy Policy</a>.</p>
                        </form>

                    </div>

                </div>
            </div>
        </footer >
    )
}

export default Footer