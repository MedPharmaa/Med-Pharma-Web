import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";

import icon1 from '../../assets/icon01.png'
import icon2 from '../../assets/icon02.png'
import icon3 from '../../assets/icon03.png'


const HowItWorks = () => {
    return (
        <section className='container'>
            <div className="xl:w-[470px] mx-auto relative z-10">
                <h2 className="text-4xl font-bold text-center">
                    Providing best medical services
                </h2>
                <p className="text-center mt-4">
                    World-class care for everyone. Our health system offers unmatched,
                    expert health care.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ld:gap-[30px] mt-[30px] lg:mt-[55px]'>
                <div className='py-[30px] px-5' data-aos="flip-left">
                    <div className='flex items-center justify-center'>
                        <img src={icon1} className='rounded-xl' alt="" />
                    </div>

                    <div className='mt-[30px]'>
                        <h2 className='text-[26px] leading-9 text-black font-[700] text-center'>
                            Find a Doctor
                        </h2>
                        <p className='text-[16px] leading-7 text-gray-400 font-[400] mt-4 text-center'>
                            World-class care for everyone. Our health system offers unmatched,
                            expert health care.
                        </p>

                        <Link to="/doctors"
                            className='w-[44px] h-[44px] rounded-full border border-solid border-black mt-[30x] mx-auto flex items-center justify-center group '
                        >
                            <IoIosArrowRoundForward />
                        </Link>
                    </div>
                </div>
                <div className='py-[30px] px-5' data-aos="flip-left" >
                    <div className='flex items-center justify-center'>
                        <img src={icon3} className='rounded-xl' alt="" />
                    </div>

                    <div className='mt-[30px]'>
                        <h2 className='text-[26px] leading-9 text-black font-[700] text-center'>
                            Book Appointments
                        </h2>
                        <p className='text-[16px] leading-7 text-gray-400 font-[400] mt-4 text-center'>
                            World-class care for everyone. Our health system offers unmatched,
                            expert health care.
                        </p>

                        <Link to="/doctors"
                            className='w-[44px] h-[44px] rounded-full border border-solid border-black mt-[30x] mx-auto flex items-center justify-center group '
                        >
                            <IoIosArrowRoundForward />
                        </Link>
                    </div>
                </div>
                <div className='py-[30px] px-5' data-aos="flip-left">
                    <div className='flex items-center justify-center'>
                        <img src={icon2} className='rounded-xl' alt="" />
                    </div>

                    <div className='mt-[30px]'>
                        <h2 className='text-[26px] leading-9 text-black font-[700] text-center'>
                            Find a Location
                        </h2>
                        <p className='text-[16px] leading-7 text-gray-400 font-[400] mt-4 text-center'>
                            World-class care for everyone. Our health system offers unmatched,
                            expert health care.
                        </p>

                        <Link to="/"
                            className='w-[44px] h-[44px] rounded-full border border-solid border-black mt-[30x] mx-auto flex items-center justify-center group '
                        >
                            <IoIosArrowRoundForward />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks