"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ListingBg } from '../../../public/assets/Images'
import Button from '../elements/Button'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import OutlineText from '../elements/OutlineText'

const Assets = () => {
  return (
    <div className='md:px-12 md:w-[95%] w-full m-auto m-[0px] rounded-[12px] px-5 py-[2.5rem] mb-20 bg-[#080D12] border-[2px] border-[#bdbdbd]'>
        <div className="flex md:flex-row flex-col justify-between md:items-center">
            <div className="flex md:flex-row flex-col md:items-center md:gap-10 gap-3">
                <span className="text-white lg:text-[30px] text-[20px] font-bold font-lustra">MORE LANDS LIKE THIS</span>                
            </div>
        </div>
        <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3
         sm:grid-cols-2 grid-cols-1 gap-4">
            {[1,2,3,4].map((_, i)=>(
                <Link href={"marketplace/asset/16"} key={i} className="listing-blur border-gradient p-6 backdrop-blur-md bg-[rgba(0,0,0,0.7)] flex flex-col gap-4">
                    <div className="flex justify-center">
                        <Image src={ListingBg} className='w-full' alt="" />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <small className="md:text-[14px] text-[12px]">10 minutes ago</small>
                            <h1 className='2xl:text-[24px] md:text-[20px] text-[18px] font-extrabold'>Meeting Plot</h1>
                            <small className='2xl:text-[14px] text-[12px]'>GOLD SMITH</small>
                        </div>
                        <div className="flex items-end">
                            <span className="2xl:text-[24px] md:text-[20px] text-[18px] font-extrabold">1,200 $</span>
                        </div>
                    </div>
                    <div className="listing-btn">
                        <Button
                            text={"Buy"}
                            btnStyle={"text-white w-full font-extrabold md:text-[20px] text-[16px]"}
                        />
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Assets