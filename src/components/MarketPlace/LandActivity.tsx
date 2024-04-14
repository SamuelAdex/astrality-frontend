"use client";

import { LandAct, LineChart } from '@/assets/Images';
import Image from 'next/image';
import React from 'react'

const LandActivity = () => {
  return (
    <div className='md:w-[95%] w-full md:px-0 px-6 m-auto m-[0px] my-10'>
        <div className='flex items-center gap-2 p-4'>
            <Image src={LandAct} className='bg-[rgba(0,0,0,0.5)] p-3 rounded-[8px] w-[80px] h-[80px]' alt='' />
            <span className="text-white lg:text-[30px] text-[20px] font-bold font-lustra">LAND ACTIVITY</span>
        </div>

        <div className="">
            <Image src={LineChart} alt='' />
        </div>
    </div>
  )
}

export default LandActivity