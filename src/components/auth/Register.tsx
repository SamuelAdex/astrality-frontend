"use client";

import React from 'react'
import AuthBg from '../../../public/assets/img/auth_bg.png'
import AuthGradient from '../../../public/assets/img/auth_gradient.png'
import {AstralityLogo2, Google, LoginFacebook,} from '../../../public/assets/Images'
import { BsFillCalendar2DateFill } from "react-icons/bs";
import Image from 'next/image';
import Button from '../elements/Button';
import { useRouter } from 'next/navigation';
import { FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";

const Register = () => {
    const router = useRouter()
  return (
    <div className='flex flex-col justify-center lg:items-end items-center auth h-[150dvh] md:p-8 p-6'>
        <div className="md:w-[600px] w-full auth-gradient md:p-12 p-9 rounded-[20px] md:mt-16 mt-9">
            <div className="text-center w-full flex flex-col items-center">
                <Image src={AstralityLogo2} alt='' />
                <div className="text-white font-bold md:text-[28px] text-[18px]">Create Account</div>
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
                <div className="flex items-center text-[#CECECE] gap-2 bg-[#0B1017] border-[1px] rounded-[10px] border-[#626377] py-3 px-4">
                    <BsFillCalendar2DateFill fontSize={"1.2rem"} />
                    <input placeholder='Date of birth' type='date' className='w-full focus:outline-none p-1 bg-transparent md:text-[18px] text-[16px]' />
                </div>
                
                <Button 
                    text={"Create Account"}
                    btnStyle={'text-white font-bold w-full md:text-[16px] p-4 text-[14px] w-[167px] rounded-[8px]'}
                    onBtnClick={()=> router.push('/login')}
                />
                <div className="text-center md:px-0 px-3 my-5">
                    <span className='text-white text-center font-bold mb-5 md:text-[16px] text-[14px]'>Or Create Account Using</span>
                    <div className="flex gap-7 items-center justify-center mt-4">
                        <Image
                            src={Google}
                            alt=''
                            className='md:w-[300px] w-full'
                        />
                        <Image
                            src={LoginFacebook}
                            alt=''
                            className='md:w-[300px] w-full'
                        />
                    </div>
                </div>

                <div className="">
                    <div className='text-white text-center font-bold mb-5 md:text-[16px] text-[14px]'>{"Already have a account?"}</div>
                    <Button
                        text={"Sign In"}
                        btnStyle={'text-white font-bold md:text-[16px] w-full p-4 text-[14px] border-white rounded-[8px] w-[229px]'}
                        type={'outline'}
                        onBtnClick={()=> router.push('/login')}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register