import { useState } from 'react'

import { FaBars } from 'react-icons/fa'
import { RiCloseFill } from 'react-icons/ri'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {

        if (isMenuOpen) {
            setIsMenuOpen(false)
        } else {
            setIsMenuOpen(true)
        }

    }
    return (
        <nav className=' w-full  px-8 py-4 shadow-md sticky top-0 bg-[var(--color-bg)] z-50'>
            <div className='mx-auto max-w-6xl flex justify-between items-center'>
                <div className='w-40 md:w-50'>
                    <img src="/logo.png" alt="Nextcent Logo" className=' w-full object-contain' />
                </div>
                <div className='hidden md:block'>
                    <ul className='flex gap-8 text-lg'>
                        <li><a href="#" className='font-bold hover:text-[#26cb8b] transition-colors duration-300'>Home</a></li>
                        <li><a href="#" className='hover:text-[#26cb8b] transition-colors duration-300'>Services</a></li>
                        <li><a href="#" className='hover:text-[#26cb8b] transition-colors duration-300'>Products</a></li>
                        <li><a href="#" className='hover:text-[#26cb8b] transition-colors duration-300'>Feature</a></li>
                        <li><a href="#" className='hover:text-[#26cb8b] transition-colors duration-300'>Testimonials</a></li>
                        <li><a href="#" className='hover:text-[#26cb8b] transition-colors duration-300'>FAQ</a></li>
                    </ul>
                </div>
                <div className='hidden md:flex gap-4 font-semibold'>
                    <button className=' text-[var(--color-primary)] px-4 py-2 rounded-md '>Login</button>
                    <button className='bg-[var(--color-primary)] text-white px-4 py-2 rounded-md'>Sign Up</button>
                </div>

                <div className='md:hidden flex items-center'>
                    <button onClick={toggleMenu} className='text-[var(--color-text)]'>
                        {isMenuOpen ? <RiCloseFill className='text-2xl' /> : <FaBars className='text-2xl' />}
                    </button>
                </div>

            </div>
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}  bg-[var(--color-text)] p-4`}>
                <ul className='flex flex-col gap-4 text-lg mb-4' onClick={toggleMenu}>
                    <li><a href="#" className='font-bold hover:text-[#26cb8b] transition-colors duration-300'>Home</a></li>
                    <li><a href="#" className='hover:bg-[#26cb8b] transition-colors duration-300'>Services</a></li>
                    <li><a href="#" className='hover:bg-[#26cb8b] transition-colors duration-300'>Products</a></li>
                    <li><a href="#" className='hover:bg-[#26cb8b] transition-colors duration-300'>Feature</a></li>
                    <li><a href="#" className='hover:bg-[#26cb8b] transition-colors duration-300'>Testimonials</a></li>
                    <li><a href="#" className='hover:bg-[#26cb8b] transition-colors duration-300'>FAQ</a></li>
                </ul>
                <div className='flex justify-around items-center border-t pt-2 md:hidden gap-4 font-semibold'>
                    <button className=' text-[var(--color-primary)] px-4  rounded-md '>Login</button>
                    <button className=' text-[var(--color-primary)] px-4  rounded-md'>Sign Up</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar