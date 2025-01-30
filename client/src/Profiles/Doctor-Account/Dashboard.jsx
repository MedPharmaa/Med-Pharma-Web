// import React from 'react'
import avatar from '../../assets/avatar.svg'
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { Button } from "@material-tailwind/react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);
    const handleSignOut = () => {
        dispatch({ type: "LOGOUT" });
        toast.success("Logged out successfully");
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }
    return (
        <div className='max-w-[1170px] px-5 py-32 mx-auto'>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="pb-[50px] px-[30px] rounded-md border p-8">
                    <div className="flex items-center justify-center">
                        <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-blue-400">
                            <img src={avatar} alt="" className='w-full h-full rounded-full' />
                        </figure>
                    </div>
                    <div className='text-center mt-4'>
                        <h3 className='text-[18px] leading-[30px] text-gray-500 font-semibold'>
                            <span className='text-black font-bold'>Hello,</span> {user.name}
                        </h3>
                        <p className='text-red-800 rounded-full '>{user.email}</p>
                    </div>
                    <div className='mt-[30px] md:mt-[50px] gap-4 flex'>
                        <Button className='bg-black ' onClick={handleSignOut}>Logout</Button>
                        <Button className='bg-red-900 w-48 ' >Delete Account</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard