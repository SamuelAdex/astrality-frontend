"use client";

import React from 'react'
import OutlineText from '../elements/OutlineText';
import {
    Stat1,
    Stat2,
    Stat3,
    Stat4,
    Stat5,
} from '../../../public/assets/Images'
import Image from 'next/image';

const Analytics = () => {
    let stats = [
        {
            id: 1,
            title: 'Total Sales',
            value: "2,411",
            bg: Stat1
        },
        {
            id: 2,
            title: 'Land Sold',
            value: "835",
            bg: Stat2
        },
        {
            id: 3,
            title: 'Total Rented out',
            value: "2,354",
            bg: Stat3
        },
        {
            id: 4,
            title: 'Looking For Rent',
            value: "1,521",
            bg: Stat4
        },
        {
            id: 5,
            title: 'Available Land',
            value: "2,101",
            bg: Stat5
        }
    ]
  return (
    <div className="md:px-12 px-5 pt-[8rem] analytic">
        <div className="flex items-center gap-10">
            <OutlineText>Analytics</OutlineText>
            <div className="flex gap-2">
               <span className='rounded-[5px] p-2 border-[1.8px] hover:border-white active:border-white border-[#626377] hover:text-white w-[48px] active:text-white text-[#626377] h-[48px] md:text-[16px] text-[14px] grid place-items-center cursor-pointer'>24H</span>  
               <span className='rounded-[5px] p-2 border-[1.8px] hover:border-white active:border-white border-[#626377] hover:text-white w-[48px] active:text-white text-[#626377] h-[48px] md:text-[16px] text-[14px] grid place-items-center cursor-pointer'>7D</span>  
               <span className='rounded-[5px] p-2 border-[1.8px] hover:border-white active:border-white border-[#626377] hover:text-white w-[48px] active:text-white text-[#626377] h-[48px] md:text-[16px] text-[14px] grid place-items-center cursor-pointer'>3DD</span>  
            </div>            
        </div>
        <div className=''>
            <div className="lg:flex flex md:flex-row mt-10 flex-col sm5:grid sm5:grid-cols-2 sm5:items-center sm5:justify-center items-center justify-center gap-5">                {stats.map((stat, i)=>(
                    <div key={i} className="md:w-[320px] w-full md:h-[320px] relative">
                        <Image src={stat.bg} alt="" className='absolute -z-[5] w-full md:h-auto h-[280px]' />
                        <div className='2xl:p-8 md:p-6 p-3'>
                            <span className='2xl:text-[20px] text-[14px] font-bold'>{stat.title}</span>
                            <h1 className='2xl:text-[48px] text-[35px] font-extrabold'>{stat.value}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Analytics