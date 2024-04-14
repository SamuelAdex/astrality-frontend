"use client"

import Image from 'next/image'
import React from 'react'
import { UnderlineImg } from '../../../../public/assets/Images'
import Link from 'next/link'
import { LandImg } from '@/assets/Images'

const Page = () => {
  return (
    <div className='inventory_gradient object-cover p-8 rounded-[20px]'>
        <div className="md:text-[30px] font-bold flex flex-col text-[20px] text-white">
            <h1 className='font-lustra'>INVENTORY OVERVIEW</h1>
            <Image src={UnderlineImg} className='w-[45%]' alt='' />
        </div>
        <div className="md:mt-8 mt-4">
            <p className='font-bold text-white md:text-[18px] font-lustra text-[14px]'>Available To Rent</p>

            <div className="md:mt-7 mt-4 grid lg:grid-cols-4 md:grid-cols-3
            sm:grid-cols-2 grid-cols-1 gap-4">
                {[1,2,3,4].map((_, i)=>(
                    <Link href={"inventory/122"} key={i} className="listing-blur border-gradient p-4 backdrop-blur-md bg-[rgba(0,0,0,0.7)] flex flex-col gap-4">
                        <div className="flex justify-center">
                            <Image src={LandImg} alt="" className='w-full' />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                {/* <small className="md:text-[14px] text-[12px]">10 minutes ago</small> */}
                                <h1 className='2xl:text-[24px] md:text-[16px] text-[14px] font-extrabold'>Astral Citadel</h1>
                                <small className='2xl:text-[14px] text-[12px]'>Size 1x1</small>
                            </div>
                            <div className="flex items-end justify-end flex-col">
                                {/* <span className="2xl:text-[24px] text-right md:text-[16px] text-[14px] font-extrabold">Land</span> */}
                                <span className="2xl:text-[24px] md:text-[16px] text-[14px] font-extrabold md:mt-12 mt-8">1,200$</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        <div className="md:mt-8 mt-4">
            <p className='font-bold text-white md:text-[18px] font-lustra text-[14px]'>Rented</p>
            <div className="md:mt-7 mt-4 grid lg:grid-cols-4 md:grid-cols-3
            sm:grid-cols-2 grid-cols-1 gap-4">
                {[1,2,3,4].map((_, i)=>(
                    <Link href={"inventory/122"} key={i} className="listing-blur border-gradient p-4 backdrop-blur-md bg-[rgba(0,0,0,0.7)] flex flex-col gap-4">
                        <div className="flex justify-center">
                            <Image src={LandImg} alt="" className='w-full' />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                {/* <small className="md:text-[14px] text-[12px]">10 minutes ago</small> */}
                                <h1 className='2xl:text-[24px] md:text-[16px] text-[14px] font-extrabold'>Astral Citadel</h1>
                                <small className='2xl:text-[14px] text-[12px]'>Size 1x1</small>
                            </div>
                            <div className="flex items-end justify-end flex-col">
                                {/* <span className="2xl:text-[24px] text-right md:text-[16px] text-[14px] font-extrabold">Land</span> */}
                                <span className="2xl:text-[24px] md:text-[16px] text-[14px] font-extrabold md:mt-12 mt-8">1,200$</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Page


function LandAsset(){
    return (
        <div className="">
            land Asset
        </div>
    )
}