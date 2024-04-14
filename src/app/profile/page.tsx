"use client";

import { RentChart, Userprofile, EditIcon,
  UserIcon,
  EmailIcon,
  CopyIcon,
  ReferralIcon,
  MoneyIcon,
  IDIcon } from '@/assets/Images';
import AssetProps from '@/components/elements/AssetProps';
import Button from '@/components/elements/Button';
import OutlineText from '@/components/elements/OutlineText';
import Image from 'next/image';
import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight, MdShare } from 'react-icons/md';

const Page = () => {
  return (
    <div className=''>
      <div className="flex md:flex-row flex-col gap-8">
        <div className="flex-[4.3]">
          <div className="overview_gradient rounded-[12px] p-10 flex flex-col gap-10">
            <div className="flex md:flex-row flex-col justify-between md:items-center">
              <span className="text-white lg:text-[25px] text-[20px] font-bold font-lustra">WALLET OVERVIEW</span>
              <div className="">
                <Button text={"Wallet Details"} btnStyle={"border-none text-white flex-row-reverse"} type={'outline'} iconName={<MdOutlineKeyboardDoubleArrowRight fontSize={"1.2rem"} color={"#fff"} />} />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1 flex-[2]">
                <span className="text-white font-bold md:text-[12px] text-[10px]">Total Balance</span>
                <span className="text-white lg:text-[30px] text-[20px] font-bold">2,542 $</span>
              </div>
              <Button text={"Withdraw"} btnStyle={"text-white flex-[2] w-full p-3 md:text-[18px] text-[14px]"} />
            </div>
          </div>
          <div className='md:mt-16 mt-4'>
            <div className="">
              <span className="text-white lg:text-[25px] text-[20px] font-bold font-lustra">RENT OVERVIEW</span>
            </div>
            <div className="mt-3">
              <Image src={RentChart} alt='' />
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <div className='profile_gradient rounded-[12px] py-7 px-5 relative'>
            <div className="flex justify-center">
              <Image src={Userprofile} alt='' />
              <Image src={EditIcon} className='absolute top-4 cursor-pointer right-4' alt='' />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <AssetProps title={"Username"} content={"Michael Scott"} icon={UserIcon} />
              <AssetProps title={"Email"} content={"littlekidslover@gmail.com"} icon={EmailIcon} />
              <AssetProps title={"User ID"} content={"miscott1234"} icon={IDIcon} />
            </div>
          </div>
          <div className="md:mt-6 mt-4 stats_gradient py-8 px-5 rounded-[12px]">
            <div className="text-center p-3 rounded-[8px] border-[1px] text-[#bdbdbd] md:text-[16px] text-[14px] border-[#bdbdbd]">www.astrality/wilson3236</div>
            <div className="flex gap-2 items-center mt-4 text-white">
              <Button text={"Share"} iconName={<MdShare fontSize={"1.3rem"} />} btnStyle={"text-white w-full font-san p-3"} />
              <Button text={"Copy"} imgPath={CopyIcon} type={"outline"} btnStyle={"text-white w-full border-[1px] border-white font-san p-2"} />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex flex-col w-full referral_gradient p-3 rounded-[8px]">
                <Image src={ReferralIcon} alt='' />
                <div className="flex flex-col mt-1">
                  <span className='md:text-[12px] text-[10px]'>Referrals</span>
                  <span className='md:text-[18px] text-[14px] font-bold'>54</span>
                </div>
              </div>
              <div className="flex flex-col w-full money_gradient p-3 rounded-[8px]">
                <Image src={MoneyIcon} alt='' />
                <div className="flex flex-col mt-1">
                  <span className='md:text-[12px] text-[10px]'>Money earned</span>
                  <span className='md:text-[18px] text-[14px] font-bold'>854 $</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-10 mt-4">
        <div className="offers bg-[#626377] p-6 rounded-[12px]">
          <div className="flex justify-between md:flex-row flex-col md:items-center">
              <div className="flex md:flex-row flex-col md:items-center gap-10">
                <span className="text-white lg:text-[30px] text-[20px] font-bold font-lustra">OFFERS RECEIVED</span>
                  {/* <div className='flex items-center gap-3'>
                      <span className='p-2 border-gradient hover:text-white active:text-white text-[#626377] h-[48px] md:text-[16px] text-[14px] grid place-items-center cursor-pointer'>ALL</span>               
                      <span className='p-2 border-gradient hover:text-white active:text-white text-[#626377] h-[48px] md:text-[16px] text-[14px] grid place-items-center cursor-pointer'>SALE</span>               
                      <span className='p-2 border-gradient hover:text-white active:text-white text-[#626377] h-[48px] md:text-[16px] text-[14px] grid place-items-center cursor-pointer'>RENT</span>
                  </div> */}
              </div>
              <div className="">
                  <Button
                      text={"See All"}
                      btnStyle={"border-white w-full md:mt-0 mt-4 text-white flex-row-reverse font-bold md:text-[16px] p-3 text-[14px]"}
                      type={"outline"}
                      iconName={<MdOutlineKeyboardDoubleArrowRight fontSize={"1.2rem"} color={"#fff"} />}
                  />
              </div>
          </div>

          <div className="md:mt-8 mt-4 w-full">
            <table className='w-full tbl'>
              <thead className='text-white text-left md:text-[14px] text-[12px] font-bold'>
                <th>Offers</th>
                <th>Land</th>
                <th>Size</th>
                <th></th>
              </thead>
              <tbody className='text-white md:text-[15px] text-[13px]'>
                {[1,2,3,4,5,6].map((_, i)=>(
                  <tr key={i}>
                    <td className='py-3'>854 $</td>
                    <td className='py-3'>254. 15. 25</td>
                    <td className='py-3'>1x1</td>
                    <td className='flex justify-end'>
                      <Button text={"View offer"} iconName={<MdOutlineKeyboardDoubleArrowRight fontSize={"1.2rem"} color={"#fff"} />} type={"outline"} btnStyle={'border-none text-white flex-row-reverse'} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page