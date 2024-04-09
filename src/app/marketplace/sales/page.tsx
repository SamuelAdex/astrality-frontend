"use client";


import React from 'react'
import OutlineText from '@/components/elements/OutlineText';
import Button from '@/components/elements/Button';
import { ListingBg, SaleBg, SaleBottom } from '../../../../public/assets/Images';
import Image from 'next/image';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Header from '@/components/globalComponents/Header';
import Footer from '@/components/globalComponents/Footer';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter()
  return (
    <div className=''>
        <Header />
        <div className="2xl:px-12 md:px-12 px-5 pt-[8rem]">
            <Button
                text={"Back"}
                btnStyle={"border-white text-white font-bold md:text-[16px] px-4 text-[14px]"}
                type={"outline"}
                iconName={<MdOutlineKeyboardDoubleArrowRight className='rotate-[180deg]' fontSize={"1.2rem"} color={"#fff"} />}
                onBtnClick={()=> router.back() }
            />
        </div>
        <div className='md:px-16 m-auto m-[0px] rounded-[12px] px-5 py-[2.5rem] mb-20 listing'>
            <div className="flex justify-between items-center">
                <div className="flex md:flex-row flex-col md:items-center md:gap-10 gap-5">
                    <OutlineText>RECENT SALES</OutlineText>
                    {/* <div className='flex items-center gap-3'>
                        <span className='p-2 border-gradient hover:text-white active:text-white text-[#626377] h-[48px] md:text-[16px] text-[14px] grid place-items-center cursor-pointer'>ALL</span>               
                        <span className='p-2 border-gradient hover:text-white active:text-white text-[#626377] h-[48px] md:text-[16px] text-[14px] grid place-items-center cursor-pointer'>SALE</span>               
                        <span className='p-2 border-gradient hover:text-white active:text-white text-[#626377] h-[48px] md:text-[16px] text-[14px] grid place-items-center cursor-pointer'>RENT</span>
                    </div> */}
                </div>
                {/* <div className="">
                    <Button
                        text={"See All"}
                        btnStyle={"border-white text-white flex-row-reverse font-bold md:text-[16px] px-4 text-[14px]"}
                        type={"outline"}
                        iconName={<MdOutlineKeyboardDoubleArrowRight fontSize={"1.2rem"} color={"#fff"} />}
                    />
                </div> */}
            </div>
            <div className="mt-10 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((_, i)=>(
                    <div key={i} className="listing-blur border-gradient p-6 backdrop-blur-md bg-[rgba(0,0,0,0.7)] flex flex-col gap-4">
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
                    </div>
                ))}
            </div>
        </div>
        <div className='md:my-12 mb-14'>
          <Image 
            src={SaleBottom}
            alt=''
          />
        </div>
        <Footer />
    </div>
  )
}

export default Page