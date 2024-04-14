"use client";


import React from 'react'
import OutlineText from '../elements/OutlineText';
import Button from '../elements/Button';
import {SaleBg} from '../../../public/assets/Images'
import Image from 'next/image';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RecentSales = () => {
    const router = useRouter();
  return (
    <div className='md:px-12 md:w-[95%] w-full m-auto m-[0px] rounded-[12px] px-5 py-[2.5rem] mb-20 recent-sales'>
        <div className="flex justify-between md:flex-row flex-col md:items-center">
            <div className="flex items-center gap-10">
                <OutlineText>RECENT SALES</OutlineText>
                {/* <div className='flex items-center gap-3'>
                    <span className='p-2 border-gradient hover:text-white active:text-white text-[#626377] h-[48px] md:text-[16px] text-[14px] grid place-items-center cursor-pointer'>ALL</span>               
                    <span className='p-2 border-gradient hover:text-white active:text-white text-[#626377] h-[48px] md:text-[16px] text-[14px] grid place-items-center cursor-pointer'>SALE</span>               
                    <span className='p-2 border-gradient hover:text-white active:text-white text-[#626377] h-[48px] md:text-[16px] text-[14px] grid place-items-center cursor-pointer'>RENT</span>
                </div> */}
            </div>
            <div className="">
                <Button
                    text={"See All"}
                    btnStyle={"border-white text-white flex-row-reverse font-bold md:text-[16px] p-4 w-full md:mt-0 mt-4 text-[14px]"}
                    type={"outline"}
                    iconName={<MdOutlineKeyboardDoubleArrowRight fontSize={"1.2rem"} color={"#fff"} />}
                    onBtnClick={()=> router.push("/marketplace/sales")}
                />
            </div>
        </div>
        <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {[1,2,3,4,5,6,7,8].map((_, i)=>(
                <Link href={"marketplace/asset/234"} key={i} className="listing-blur border-gradient p-6 backdrop-blur-md bg-[rgba(0,0,0,0.7)] flex flex-col gap-4">
                    <div className="flex justify-center">
                        <Image src={SaleBg} alt="" className='w-full' />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <small className="md:text-[14px] text-[12px]">10 minutes ago</small>
                            <h1 className='2xl:text-[24px] md:text-[20px] text-[18px] font-extrabold'>Meeting Plot</h1>
                            <small className='2xl:text-[14px] text-[12px]'>GOLD SMITH</small>
                        </div>
                        <div className="flex items-end justify-end flex-col">
                            <span className="2xl:text-[24px] text-right md:text-[20px] text-[18px] font-extrabold">Land</span>
                            <span className="2xl:text-[24px] md:text-[20px] text-[18px] font-extrabold">1,200 $</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default RecentSales