"use client";

import React from 'react'
import AuthBg from '../../../public/assets/img/auth_bg.png'
import AuthGradient from '../../../public/assets/img/auth_gradient.png'
import {AstralityLogo2} from '../../../public/assets/Images'
import Image from 'next/image';
import Button from '../elements/Button';
import { useRouter } from 'next/navigation';
import { FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";

const Login = () => {
    const router = useRouter()
  return (
    <div className='flex flex-col justify-center items-end auth h-[125dvh] md:p-8 p-6'>
        <div className="md:w-[600px] w-full auth-gradient md:p-12 p-9 rounded-[20px] md:mt-16 mt-9">
            <div className="text-center w-full flex flex-col items-center">
                <Image src={AstralityLogo2} alt='' />
                <div className="text-white font-bold md:text-[28px] text-[18px]">Sign In</div>
            </div>
            <div className="w-full flex flex-col md:gap-6 gap-3 mt-6">
                <div className="flex items-center text-[#CECECE] gap-2 bg-[#0B1017] border-[1px] rounded-[10px] border-[#626377] py-3 px-4">
                    <FaUser fontSize={"1.2rem"} />
                    <input placeholder='Username or Email' type='email' className='w-full focus:outline-none p-1 bg-transparent md:text-[18px] text-[16px]' />
                </div>
                <div className="flex items-center text-[#CECECE] gap-2 bg-[#0B1017] border-[1px] rounded-[10px] border-[#626377] py-3 px-4">
                    <MdLock fontSize={"1.2rem"} />
                    <input placeholder='Password' type='password' className='w-full focus:outline-none p-1 bg-transparent md:text-[18px] text-[16px]' />
                </div>
                <div className='text-white font-extrabold text-center md:text-[16px] text-[14px]'>
                    <span className='cursor-pointer'>Forgot Password?</span>
                </div>
                <Button 
                    text={"Sign In"}
                    btnStyle={'text-white font-bold w-full md:text-[16px] p-4 text-[14px] w-[167px] rounded-[8px]'}
                    onBtnClick={()=> router.push('/login')}
                />

                <div className="">
                    <div className='text-white text-center font-bold mb-5 md:text-[16px] text-[14px]'>{"Don't have a account?"}</div>
                    <Button
                        text={"Create Account"}
                        btnStyle={'text-white font-bold md:text-[16px] w-full p-4 text-[14px] border-white rounded-[8px] w-[229px]'}
                        type={'outline'}
                        onBtnClick={()=> router.push('/register')}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login