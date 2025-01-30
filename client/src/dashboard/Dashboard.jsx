import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
// import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { earningData, SparklineAreaData } from '../data/dummy2.js';
import welcomeBg from '../assets/welcome-bg.svg'
import { FiBarChart } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { GoDotFill } from 'react-icons/go';
import BarGraph from '../components/Charts/BarGraph.jsx';
// import { useStateContext } from '../context/ContextProvider.jsx';

const Dashboard = () => {
    // const { currentColor, currentMode } = useStateContext();
    return (
        <div className="mt-2">

            <div className="flex flex-wrap lg:flex-nowrap justify-center">

                <div
                    className="bg-white dark:bg-gray-100 h-44 rounded-xl w-full lg:w-[70vw] p-8 pt-9 m-3 bg-no-repeat bg-center bg-cover"
                    style={{
                        backgroundImage: `url(${welcomeBg})`,
                        backgroundSize: 'cover', /* Ensure full-width background image */
                    }}
                >
                    <div className="flex justify-between  gap-6 items-center">
                        <div>
                            <p className="font-bold text-gray-600">Earnings</p>
                            <p className="text-2xl">$63,448.78</p>
                        </div>
                        <button
                            type="button"
                            style={{ backgroundColor: 'black' }}
                            className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4 lg:mr-auto" /* Right-align button on larger screens */
                        >
                            <BsCurrencyDollar />
                        </button>
                    </div>
                    <div className="mt-6">
                        <button className="bg-green-600 w-auto text-white hover:transition hover:ease-in-out hover:bg-green-800 rounded-md p-3">
                            Download
                        </button>
                    </div>
                </div>



            </div>
            <div className="flex flex-wrap justify-center gap-1  items-center">
                {earningData.map((item) => (
                    <div key={item.title} className="bg-gray-50 shadow-lg h-44 md:w-56  p-4 pt-9 rounded-2xl ">
                        <button
                            type="button"
                            style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                            className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                        >
                            {item.icon === 'FiBarChart' && (
                                <FiBarChart
                                />
                            )}
                            {item.icon === 'BsBoxSeam' && (
                                <BsBoxSeam
                                />
                            )}
                            {item.icon === 'MdOutlineSupervisorAccount' && (
                                <MdOutlineSupervisorAccount
                                />
                            )}
                            {item.icon === 'HiOutlineRefresh' && (
                                <HiOutlineRefresh
                                />
                            )}
                        </button>
                        <p className="mt-3">
                            <span className="text-lg font-semibold">{item.amount}</span>
                            <span className={`text-sm text-${item.pcColor} ml-2`}>
                                {item.percentage}
                            </span>
                        </p>
                        <p className="text-sm text-gray-500  mt-1">{item.title}</p>
                    </div>
                ))}

            </div>
            <div className='flex gap-10 flex-wrap justify-start'>
                <div className='bg-white dark:text-gray-600 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 '>
                    <div className='flex justify-between sm:gap-96 md:gap-[30rem]'>
                        <div className='font-semibold text-xl'>Revenue Updates</div>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                                <span>
                                    {/* <GoPrimitiveDot /> */}
                                    <GoDotFill />
                                </span>
                                <span>Expense</span>
                            </p>
                            <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                                <span>
                                    {/* <GoPrimitiveDot /> */}
                                    <GoDotFill />
                                </span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 w-full flex gap-10 flex-wrap justify-center">
                        <div className=" flex gap-24 border-r-1 border-gray-800 m-4 pr-10">
                            <div>
                                <div>
                                    <p>
                                        <span className="text-3xl font-semibold">$93,438</span>
                                        <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                                            23%
                                        </span>
                                    </p>
                                    <p className="text-gray-500 mt-1">Budget</p>
                                </div>
                                <div className='mt-8'>
                                    <p>
                                        <span className="text-3xl font-semibold">$48,438</span>
                                    </p>
                                    <p className="text-gray-500 mt-1">Expense</p>
                                </div>
                            </div>
                            <div className='mt-5  w-full'>
                                <BarGraph data1={[300, 144, 443, 655, 237, 755]} data2={[200, 44, 343, 555, 137, 655]} title1="Revenue" title2="Transaction" bgColor1="rgb(0,115,255" bgColor2="rgb(53,162,235,0.8)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Dashboard