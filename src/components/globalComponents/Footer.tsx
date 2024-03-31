/* eslint-disable no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Excludeline from '../../assets/img/Exclude.png'
import Telegram from '../../assets/img/telegram.png'
import Discord from '../../assets/img/discord.png';
import Facebook from '../../assets/img/facebook (2).png';
import Twitter from '../../assets/img/twitter.png';
import Instagram from '../../assets/img/youtube.png';
import linkedIn from '../../assets/img/linkedIn.png';
import Button from '../elements/Button'


const Footer = () => {
  return (
    <div className='grid place-items-center mt-16'>
      <div className="md:w-[95%] w-full bg-[#111520]">
        <div className='md:p-16 p-6'>
          <div className="flex md:flex-row flex-col items-center gap-20">
            <div className="flex-1">
              <div className="text-white font-extrabold md:text-[40px] text-[28px]">
                <h1 className='text-gradient-outline'>INFO</h1>
              </div>
              <div className="flex items-center gap-7 text-white 2xl:text-[24px] md:text-[20px] text-[14px] mt-5">
                <Link href={'#'}>FAQ</Link>
                <Link href={'#'}>Terms of use</Link>
                <Link href={'#'}>Privacy Policy</Link>
                <Link href={'#'}>Lisences</Link>
              </div>
              <Image src={Excludeline} alt='' className='mt-4' />
              <div className="flex items-center gap-4 md:justify-end mt-4">
                <Image src={Telegram} alt='' />
                <Image src={Discord} alt='' />
                <Image src={Facebook} alt='' />
                <Image src={Twitter} alt='' />
                <Image src={Instagram} alt='' />
                <Image src={linkedIn} alt='' />
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="">
                <h1 className='text-gradient-outline md:text-[40px] text-[28px] text-white'>NEWSLETTER</h1>
              </div>
              <div className="flex flex-col md:gap-8 gap-5 w-full mt-4">
                <input placeholder='Enter your Email' type='text' className='rounded-[6px] bg-[#252F3D] text-[#cecece] p-3 w-full' />
                <Button
                  text={"SUBSCRIBE"}
                  btnStyle={'text-white font-black md:text-[28px] md:w-[269px] w-full text-[20px]'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='md:mt-24 mt-10'>
          <hr style={{background: 'linear-gradient(180deg, #4FB1F6 0%, #FB18EE 100%)', height: '2px'}} />
          <p className='md:text-[20px] md:text-left text-center text-[14px] text-[#626377] p-8'>Copyright Astrality. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer