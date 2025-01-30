// import React from 'react'
import avatar from '../../assets/avatar.svg'
import { useContext, useState } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { Button } from "@material-tailwind/react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import MyBookings from './MyBookings';
import ProfileSetting from './ProfileSetting'
import useGetProfile from '../../hooks/useFetchData';
import { BASE_URL } from '../../config';
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';



const MyAccount = () => {
    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);
    const handleSignOut = () => {
        dispatch({ type: "LOGOUT" });
        toast.success("Logged out successfully");
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }

    const [tab, setTab] = useState('bookings');

    const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`);
    console.log(userData, 'userData');

    return (
        <section>
            <div className='max-w-[1170px] px-5 py-32 mx-auto'>
                {loading && !error && <Loading />}
                {Error && !loading && <Error errMessage={error} />}
                {
                    !loading && !error &&
                    <div className="grid md:grid-cols-3 gap-10" >
                        <div className="pb-[50px] px-[30px] rounded-md border p-8" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center justify-center">
                                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-blue-400">
                                    <img src={avatar} alt="" className='w-full h-full rounded-full' />
                                </figure>
                            </div>
                            <div className='text-center mt-4'>
                                <h3 className='text-[18px] leading-[30px] text-gray-500 font-semibold'>
                                    <span className='text-black font-bold'>Hello,</span> {userData.name}
                                </h3>
                                <p className='text-red-800 rounded-full '>{userData.email}</p>
                            </div>
                            <div className='mt-[30px] md:mt-[50px] gap-4 flex'>
                                <Button className='bg-black hover:py-2 hover:px-2' onClick={handleSignOut}>Logout</Button>
                                <Button className='bg-red-900 w-48 ' >Delete Account</Button>
                            </div>
                        </div>

                        <div className='md:col-span-2 md:px-[30px]' data-aos="fade-left" data-aos-duration="1000">
                            <div>
                                <button onClick={() => setTab('bookings')} className={` ${tab == 'bookings' && 'bg-black text-white font-normal transition ease-out'} p-2 mr-5 px-5 rounded-md font-semibold text-black text-[16px] leading-7 border border-solid border-blue-600`}>My Bookings</button>
                                <button onClick={() => setTab('settings')} className={` ${tab == 'settings' && 'bg-black text-white font-normal transition ease-in-out'} p-2 px-5 rounded-md font-semibold text-black text-[16px] leading-7 border border-solid border-blue-600`}>Profile Setting</button>
                            </div>

                            {
                                tab == 'bookings' && <MyBookings />
                            }
                            {
                                tab == 'settings' && <ProfileSetting user={userData} />
                            }
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default MyAccount