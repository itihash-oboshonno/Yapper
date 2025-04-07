import React, { useState } from 'react';
import logo from '../../assets/chorui_logo.webp'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { HiExternalLink } from 'react-icons/hi';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LandingPage = () => {
    const [showPass, setShowPass] = useState(false)
    const handleShowPass = () => {
        setShowPass(!showPass);
    }
    return (
        <div className='bg-gray-950 text-white'>
            <div className='flex flex-col mdt:flex-row gap-5 sm:gap-10 mdt:gap-20 mdt:justify-center items-center min-h-screen'>
                <div className='pt-10 sm:pt-20 mdt:p-4'>
                    <img className='max-w-32 mdt:max-w-full' src={logo} alt="" />
                </div>
                <div className='grid gap-3 max-w-sm w-full p-4'>
                    <p className='text-center text-3xl font-bold pb-2'>Login</p>
                    <button className='rounded-lg px-4 py-2 w-full bg-white border-2 border-gray-950 text-gray-800 flex justify-center items-center gap-3 hover:cursor-pointer hover:bg-gray-950 hover:text-white hover:border-white transition-all'>
                        <FcGoogle className='text-xl' /><span>Login With Google</span>
                    </button>
                    <div className='flex items-center justify-center gap-3'>
                        <hr className='w-full' />
                        <p>or</p>
                        <hr className='w-full' />
                    </div>
                    <form className='grid gap-3 w-full relative'>
                        <input placeholder='Email' className='rounded-md bg-white px-4 py-2 placeholder:text-gray-400 text-gray-800 outline-0 focus:ring-2 focus:ring-amber-300' type="email" name="email" />
                        <input placeholder='Password' className='rounded-md bg-white px-4 py-2 placeholder:text-gray-400 text-gray-800 outline-0  focus:ring-2 focus:ring-amber-300' type={showPass ? "text" : "password"} name="password" />
                        <div
                            onClick={handleShowPass}
                            className="absolute right-1.5 top-14 p-2 cursor-pointer text-gray-950"
                        >
                            {showPass ? <FaEye /> : <FaEyeSlash />}
                        </div>
                        <div className='flex items-center justify-between text-sm'>
                            <div className='flex items-center gap-1'>
                                <input type="checkbox" name="remember" />
                                <p>Remember Me</p>
                            </div>
                            <Link to='/resetpass' className='hover:underline'>Forgot Passowrd?</Link>
                        </div>
                        <p className='flex items-center justify-center gap-1 pt-2'>Don't have an account? Please <Link to='/signup' className='underline flex items-center gap-1' >Register <HiExternalLink /></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;