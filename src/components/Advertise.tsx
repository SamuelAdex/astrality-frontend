"use client"

import React from 'react'
import GradientText from './elements/GradientText'
import Button from './elements/Button'
import Image from 'next/image'
import { ASTBrand } from '@/assets/Images'

const Advertise = () => {
  return (
    <div className='relative w-full mt-[10rem] advert '>
        {/* <Image src={'/assets/img/AST_Brands.png'} width={6304} height={1300} className='' alt='' /> */}
        <div className='flex flex-col items-end gap-24 lg:p-10 p-5 z-20'>
            <div className='md:w-[43%] w-full mt-[6rem]'>
                <div className='mb-4'>
                    <GradientText style={"md:text-[35px] text-[20px]"}>BRANDS AND ASTRALITY</GradientText>
                </div>
                <p className='text-white text-justify md:text-[18px] text-[16px]'>Experience branding like never before Astrality. We empower brands by intertwining virtual and augmented reality, crafting unique costumer engagements in the metaverse. Take your brand engagement to new dimensions with Astrality. Explore our platform and redefine the boundaries of your brand.</p>                
            </div>
            <div className='md:w-[43%] w-full'>
                <div className='mb-4'>
                    <GradientText style={"md:text-[35px] text-[20px]"}>ADVERTISEMENT</GradientText>
                </div>
                <p className='text-white text-justify md:text-[18px] text-[16px]'>In Astrality, revolutionize your brand’s visibility. Rent digital land to showcase immersive VR-enabled ads, creating engaging and interactive experiences. Dive deeper ito connections with consumers by launching virtual events and exclusive product lines. leverage live analytics to optimize your strategies and innovate in real time. In Astrality, advertising blends creativity, interactivity, and innovation.</p>
                <Button
                    text={"Advertise Now"}
                    btnStyle={"text-white font-bold md:w-[331px] w-full p-4 md:text-[20px] text-[16px] mt-12"}
                />
            </div>
        </div>
    </div>
  )
}

export default Advertise