import React from 'react'
import heroImg from '../assets/images/illustration.png'
import testimonialImg from '../assets/images/rafiki.png'
import testimonialImg1 from '../assets/images/pana.png'
import img9 from '../assets/images/image9.png'
import { FaArrowRight } from 'react-icons/fa'
import clientImg1 from '../assets/clients/client-1.png'
import clientImg2 from '../assets/clients/client-2.png'
import clientImg3 from '../assets/clients/client-3.png'
import clientImg4 from '../assets/clients/client-4.png'
import clientImg5 from '../assets/clients/client-5.png'
import clientImg6 from '../assets/clients/client-6.png'
import ServiceCard from '../components/ServiceCard'
import { PiCreditCard, PiHandsClapping, PiUsersThreeLight, PiUsersThree } from 'react-icons/pi'
import { TbHandClick } from 'react-icons/tb'

const home = () => {
    return (
        <main className='  bg-[var(--color-bg)]'>
            {/* hero section */}
            <section id='hero' className='h-[350px] md:h-[500px] overflow-hidden bg-[#f5f7fa] w-full'>
                <div className='mx-auto max-w-6xl py-0 md:py-16 px-8 relative'>
                    <div className='flex flex-col justify-between items-center text-center md:text-left md:items-start mt-12 gap-2 md:gap-8  '>

                        <h1 className='text-5xl md:text-6xl font-extrabold flex-1'>Lessons and insights
                            <span className='md:block font-extrabold text-[var(--color-primary)]'> from 8 years </span></h1>
                        <p className='text-md'>where to grow your business as a photographer; site or social media  </p>

                        <button className=' bg-[var(--color-primary)] text-white font-bold px-6 py-4  rounded-md cursor-pointer hover:bg-[var(--color-primary)] hover:brightness-90'>Register Now
                            <span>
                                <FaArrowRight className='inline-block ml-4 text-lg' />
                            </span>
                        </button>

                    </div>
                    <div className='absolute inset-y-0 bottom-0 right-0 pt-20 '>
                        <img src={heroImg} alt='hero' className='hidden md:block w-[200px] h-[200px] md:w-[400px] md:h-[400px] opacity-80 md:opacity-100 ' />
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className='py-8 bg-white'>
                <div className='mx-auto max-w-6xl items-center text-center'>
                    <h2 className='text-4xl font-bold mb-4'>Our Clients</h2>
                    <p className='text-lg mb-4'>We have been working with some fortune 500+ clients.</p>
                    <div className='w-full '>
                        <div className='flex flex-wrap  justify-around  gap-6 pt-4 px-6 md:px-0'>
                            <img src={clientImg1} alt="Client- 1" className='w-[60px] h-[60px] object-contain' />
                            <img src={clientImg2} alt="Client- 2" className='w-[60px] h-[60px] object-contain' />
                            <img src={clientImg3} alt="Client- 3" className='w-[60px] h-[60px] object-contain' />
                            <img src={clientImg4} alt="Client- 4" className='w-[60px] h-[60px] object-contain' />
                            <img src={clientImg5} alt="Client- 5" className='w-[60px] h-[60px] object-contain' />
                            <img src={clientImg6} alt="Client- 6" className='w-[60px] h-[60px] object-contain hidden md:block' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-8 bg-white'>
                <div className='mx-auto max-w-6xl text-center'>
                    <div className='max-w-3xl mx-auto pb-4 gap-2'>

                        <h2 className='text-3xl md:text-4xl md:leading-12 font-bold px-8 mb-4'>Manage your entire community <br /> in a single system</h2>
                        <p className='text-lg mb-2'>What is Nextcent suitable for?</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 item-center align-center px-8 gap-4 py-2  md:px-0 max-w-6xl w-full'>
                        {/* Service Cards can be added here */}
                        <ServiceCard
                            avatar={<PiUsersThreeLight
                                size={50}
                                className="p-2 rounded-full shadow-md bg-[var(--color-accent)]"
                            />}
                            title="Membership Organizations"
                            description="our membership management software provides full automation of membership renewals and payments."
                        />
                        <ServiceCard
                            avatar={<PiUsersThreeLight
                                size={50}
                                className="p-2 rounded-full shadow-md bg-[var(--color-accent)]"
                            />}
                            title="National Associations"
                            description="our membership management software provides full automation of membership renewals and payments."
                        />
                        <ServiceCard
                            avatar={<PiUsersThreeLight
                                size={50}
                                className="p-2 rounded-full shadow-md bg-[var(--color-accent)]"
                            />}
                            title="Clubs And Groups"
                            description="our membership management software provides full automation of membership renewals and payments."
                        />
                    </div>
                </div>
            </section>

            <section id='testimonials' className='py-8 bg-[white]'>
                <div className='mx-auto max-w-6xl text-center'>
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <div className='w-[200px] md:w-1/2 md:h-fit '>
                            <img src={testimonialImg} alt="" className='w-full h-full object-contain overflow-hidden' />
                        </div>
                        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start gap-3 md:gap-6 p-8 text-center md:text-left'>
                            <h1 className='font-bold text-2xl md:text-4xl md:leading-12'>The unseen of spending three years at PixelGrade</h1>
                            <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor, similique sint culpa nemo vero cum recusandae fugiat, a mollitia soluta nam quos laudantium vitae.</p>

                            <button className=' w-full mt-2 md:max-w-[30%]  bg-[var(--color-primary)] text-white font-bold px-2 py-4  rounded-md cursor-pointer hover:bg-[var(--color-primary)] hover:brightness-90 transition-all duration-300'>Learn More

                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id='stats' className='py-8 bg-[var(--color-accent)]'>
                <div className='mx-auto max-w-6xl text-center'>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start gap-3 px-8 text-center md:text-left'>
                            <h1 className='font-bold text-xl md:text-3xl '>Helping a local <span className='text-[var(--color-primary)] block'> business reinvent itself.</span></h1>
                            <p className='text-sm'>we reached here with our hardwork and dedication.</p>
                        </div>

                        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start gap-6 px-8 py-4 text-center md:text-left '>
                            <div className='flex flex-wrap justify-between px-8  items-start w-full mx-auto'>
                                <div className='flex flex-col md:flex-row items-center gap-3'>
                                    <PiUsersThree
                                        size={40}
                                        className='text-[var(--color-primary)]'
                                    />
                                    <div className='flex flex-col text-center md:text-left'>
                                        <h1 className='text-xl font-bold'>2,345,678</h1>
                                        <p className="text-md">Members</p>

                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row items-center gap-3 '>
                                    <PiHandsClapping
                                        size={40}
                                        className='text-[var(--color-primary)]'
                                    />
                                    <div className='flex flex-col text-center md:text-left'>
                                        <h1 className='text-xl font-bold'>2,345,678</h1>
                                        <p className="text-md">Clubs</p>

                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-wrap justify-between px-8  items-center  w-full mx-auto '>
                                <div className='flex flex-col md:flex-row items-center gap-3 '>
                                    <TbHandClick
                                        size={40}
                                        className='text-[var(--color-primary)]'
                                    />
                                    <div className='flex flex-col text-center md:text-left'>
                                        <h1 className='text-xl font-bold'>2,345,678</h1>
                                        <p className="text-md">Events Bookings</p>

                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row items-center gap-3 '>
                                    <PiCreditCard
                                        size={40}
                                        className='text-[var(--color-primary)]'
                                    />
                                    <div className='flex flex-col text-center md:text-left'>
                                        <h1 className='text-xl font-bold'>2,345,678</h1>
                                        <p className="text-md">Payments</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='testimonials' className='py-8 bg-white'>
                <div className='mx-auto max-w-6xl '>
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <div className='w-[200px] md:w-1/2 md:h-fit '>
                            <img src={testimonialImg1} alt="" className='w-full h-full object-cover overflow-hidden' />
                        </div>
                        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start gap-3 md:gap-6 p-8 text-center md:text-left'>
                            <h1 className='font-bold text-2xl md:text-3xl md:leading-12'>How to design your site footer like we did??</h1>
                            <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia libero magni dolore doloremque? Deserunt hic suscipit assumenda! Laboriosam aliquid eaque soluta, quisquam nostrum dolorem ipsum.</p>

                            <button className=' w-full mt-2 md:max-w-[30%]  bg-[var(--color-primary)] text-white font-bold px-2 py-4  rounded-md cursor-pointer hover:bg-[var(--color-primary)] hover:brightness-90 transition-all duration-300'>Learn More

                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id='stats' className='py-8 bg-[var(--color-accent)]'>
                <div className='mx-auto max-w-6xl'>
                    <div className='flex flex-col md:flex-row  gap-8 items-center justify-between'>
                        <div className='w-full md:w-1/3 md:h-fit px-8  md:p-4 rounded-lg '>
                            <img src={img9} alt="" className='w-full h-full object-cover overflow-hidden' />
                        </div>
                        <div className='w-full md:w-2/3 flex flex-col items-center md:items-start gap-3 md:gap-6 px-8 md:px-16 text-justify md:text-left'>
                            <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi, qui vel suscipit similique quas quaerat omnis neque ullam laborum dolore, temporibus nulla dicta numquam, inventore recusandae facilis excepturi ab autem optio? Aliquam tempora, eos quia iusto eius laboriosam accusamus assumenda corporis exercitationem tempore accusantium ratione fugit, qui vero cupiditate. Deserunt ratione illo saepe magnam vel adipisci accusamus? Quod, sapiente distinctio? Quas molestiae, neque impedit aperiam cumque atque est similique minima, animi magni ad suscipit, fuga quae consequatur! Facere et, nostrum perspiciatis at nihil accusamus tempore. Vel sed, sint quam distinctio tempora aut, cupiditate voluptatum aperiam eius unde perspiciatis porro?</p>

                            <p className='self-start text-sm mt-1 md:mt-2  font-bold text-[var(--color-primary)]'>Tim Smith<span className='font-normal text-[var(--color-secondary)] block mt-1'>British Dragon Boat Racing Association</span></p>

                            <div className='w-full flex  md:justify-start justify-between  md:gap-4 '>
                                <div className='flex md:justify-around w-full md:w-2/3 gap-2 md:gap-6 pt-4 px-6 md:px-0'>
                                    <img src={clientImg1} alt="Client- 1" className='w-[50px] h-[50px] object-contain -rotate-[15deg]' />
                                    <img src={clientImg2} alt="Client- 2" className='w-[50px] h-[50px] object-contain' />
                                    <img src={clientImg3} alt="Client- 3" className='w-[50px] h-[50px] object-contain' />
                                    <img src={clientImg4} alt="Client- 4" className='w-[50px] h-[50px] object-contain hidden md:block' />
                                    <img src={clientImg5} alt="Client- 5" className='w-[50px] h-[50px] object-contain hidden md:block' />
                                    <img src={clientImg6} alt="Client- 6" className='w-[50px] h-[50px] object-contain hidden md:block' />
                                </div>
                                <div className='w-full md:w-fit px-6 '>

                                    <button className=' mt-2   text-[var(--color-primary)]   px-2 py-4  rounded-md cursor-pointer hover:text-[var(--color-primary)] hover:brightness-90 transition-all duration-300'>Learn More
                                        <FaArrowRight className='inline ms-2' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section></section>
        </main>
    )
}

export default home