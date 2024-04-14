/* eslint-disable react/jsx-no-undef */
"use client";


import { LandImg, IncomeIcon,
    OwnedIcon,
    RentedIcon,
    DateIcon, } from '@/assets/Images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';

const Page = () => {
  return (
    <div className=''>
        <div className="md:mt-8 mt-4">
            <p className='font-bold text-white md:text-[18px] font-lustra text-[14px]'>Rented Lands</p>

            <div className="flex items-center">
                <div className="flex items-center">
                    <IoIosArrowBack className='cursor-pointer' fontSize={"2.5rem"} color='#fff' />
                </div>
                <div className="md:mt-7 mt-4 grid overflow-auto grid-cols-4 gap-4">
                    {[1,2,3,4].map((_, i)=>(
                        <Link href={"inventory/122"} key={i} className="listing-blur border-gradient p-4 backdrop-blur-md bg-[rgba(0,0,0,0.7)] flex flex-col gap-4">
                            <div className="flex justify-center">
                                <Image src={LandImg} alt="" className="w-full" />
                            </div>
                            <div className="flex flex-col gap-3 justify-between">
                                <div className="flex flex-col gap-1">
                                    {/* <small className="md:text-[14px] text-[12px]">10 minutes ago</small> */}
                                    <h1 className='2xl:text-[24px] md:text-[16px] text-[14px] font-extrabold'>Astral Citadel</h1>
                                    <small className='2xl:text-[14px] text-[12px]'>Size 1x1</small>
                                </div>
                                <div className="flex items-center gap-3 w-full">
                                    <Image src={DateIcon} alt='' />
                                    <div className="flex flex-col">
                                        <small className='2xl:text-[14px] text-[12px]'>Expiry Date</small>
                                        <span className='2xl:text-[24px] md:text-[14px] text-white text-[14px] font-extrabold'>02/05/2024</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center">
                    <IoIosArrowForward className='cursor-pointer' fontSize={"2.5rem"} color='#fff' />
                </div>
            </div>

        </div>

        <div className="flex md:flex-row flex-col gap-4 md:mt-10 mt-5">
            <div className='flex-[4] inventory_gradient rounded-[12px] md:p-8 p-5'>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">                        
                        <span className="text-white font-lustra lg:text-[30px] text-[20px] font-bold">Rent Collected History</span>
                    </div>
                    <div className="md:mt-2 mt-4 w-full">
                        <table className='w-full tbl'>
                            <thead className='text-[#bdbdbd] text-left md:text-[13px] text-[12px] font-bold'>
                                <th>Land</th>
                                <th>Coordinates</th>
                                <th className=''>Rental Time</th>
                                <th className=''>Income</th>
                            </thead>
                            <tbody className='text-white font-semibold md:text-[14px] text-[12px]'>
                                {[1,2,3,4,5].map((_, i)=>(
                                <tr key={i} className='py-3'>
                                    <td className='py-2'>Astral Citadel</td>
                                    <td className='py-2'>12. 250. 147</td>
                                    <td className='py-2'>3 Days</td>
                                    <td className='py-2'>450 $</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flex-[2] flex flex-col md:gap-10 gap-6">
                <div className="flex items-center referral_gradient gap-2 md:p-3 p-5 rounded-[8px]">
                    <Image src={IncomeIcon} className='md:w-[85px] w-[60px] md:h-[85px] h-[60px]' alt='' />
                    <div className="flex flex-col gap-1">
                        <span className="md:text-[14px] text-[10px]">Total Rental Income</span>
                        <span className="md:text-[40px] text-[14px] font-bold text-nowrap">5,187 $</span>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col items-center gap-4">
                    <div className="flex md:flex-col flex-row md:gap-2 gap-2 md:items-start items-center w-full money_gradient md:p-3 p-5 rounded-[8px]">
                        <Image src={OwnedIcon} className='xl:w-[60px] h-[60px]' alt='' />
                        <div className="flex flex-col mt-1">
                            <span className='md:text-[14px] text-[10px]'>Lands Owned</span>
                            <span className='md:text-[40px] text-[14px] font-bold'>14</span>
                        </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-2 gap-2 md:items-start items-center w-full money_gradient md:p-3 p-5 rounded-[8px]">
                        <Image src={RentedIcon} className='xl:w-[60px] h-[60px]' alt='' />
                        <div className="flex flex-col mt-1">
                            <span className='md:text-[14px] text-[10px]'>Lands Rented</span>
                            <span className='md:text-[40px] text-[14px] font-bold'>9</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page