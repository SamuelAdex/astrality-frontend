"use client";

import Image from 'next/image';
import React, { useState } from 'react'
import gradient_bg from '../../../../assets/svg/join_bg.svg'
import img_Bg from '../../../../assets/svg/3d-illustration_bg.svg'
import ListingBg from '../../../../assets/svg/asset_bg.svg'
import verifyTag from '../../../../assets/svg/solar_verified-check-bold.svg'
import Button from '@/components/elements/Button';
import { MdClose, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import OutlineText from '@/components/elements/OutlineText';
import { Philosopher } from 'next/font/google';
import {
    Views,
    Tag,
    category_type,
    MapIcon,
    Nav,
    Graph,
    Dollar_icon,
    Info,
    UIGraph,
    StarFilled,
    DeviceHub,
} from '../../../../assets/Images';
import Assets from '@/components/MarketPlace/Assets';
import { SaleBottom } from '../../../../../public/assets/Images';
import LandActivity from '@/components/MarketPlace/LandActivity';
import Modal from '@/components/elements/Modal';
import Header from '@/components/globalComponents/Header';
import Footer from '@/components/globalComponents/Footer';

const Page = () => {
    const router = useRouter();
    const [isModal, setIsModal] = useState(false)
  return (
    <div className=''>
        <Header />
        <div className="md:w-[95%] md:px-0 px-6 pt-[9rem] m-auto m-[0px] relative lg:h-[800px] w-full">
            <div className="w-full flex lg:flex-row flex-col lg:gap-1 gap-3">
                <div className="md:w-[12%] w-full">
                    <Button
                        text={"Back"}
                        btnStyle={"border-white text-white font-bold md:text-[16px] px-4 text-[14px]"}
                        type={"outline"}
                        iconName={<MdOutlineKeyboardDoubleArrowRight className='rotate-[180deg]' fontSize={"1.2rem"} color={"#fff"} />}
                        onBtnClick={()=> router.back() }
                    />
                </div>
                <div className="md:w-[88%] w-full flex md:flex-row items-center flex-col gap-4">
                    <div className="p-2 grid relative place-items-center rounded-[12px] overflow-hidden asset_overlay md:w-[45%] w-full">
                        {/* <Image src={img_Bg} className='absolute top-0 animate-spin w-full -z-5' width={520} height={520} alt='' /> */}
                        <Image src={ListingBg} className='' alt='' />
                    </div>
                    <div className="md:w-[55%] w-full">
                        <div className="w-full">
                            <OutlineText>PIONEER LAND</OutlineText>
                            <div className="flex items-center gap-3">
                                <span className="text-white md:text-[20px] text-[16px]">Owned by</span>
                                <div className="flex gap-1 items-center">
                                    <span className="text-white font-semibold md:text-[20px] text-[16px]">Astrality</span>
                                    <Image width={40} height={40} src={verifyTag} alt='' />
                                </div>
                            </div>
                            <div className='grid md:grid-cols-3 gap-6 mt-4 sm:grid-cols-2 grid-cols-2'>
                                <AssetProps title={"Views"} content={"More than 100"} icon={Views} />
                                <AssetProps title={"Highest rent offer"} content={"1,524 $"} icon={Tag} />
                                <AssetProps title={"Land Type"} content={"Pioneer land"} icon={category_type} />
                                <AssetProps title={"Location"} content={"Astra city"} icon={MapIcon} />
                                <AssetProps title={"Coordinates"} content={"15.25.24"} icon={Nav} />
                                <AssetProps title={"Rent demand"} content={"High"} icon={Graph} />
                            </div>
                            <div className="md:mt-20 mt-10 flex items-center gap-10">
                                <div className="flex-[2.5]">
                                    <AssetProps title="Price" content={"1,200 $"} style={"lg:text-[30px]"} icon={Dollar_icon} />
                                </div>
                                <Button text={"Buy"} onBtnClick={()=> setIsModal(true)} btnStyle={"text-white font-bold w-full flex-[3] p-3 md:text-[25px]"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:p-10 px-6 rounded-[20px] flex md:flex-row flex-col md:gap-4 asset_gradient gap-6 md:mt-[-10rem] mt-8 md:divide-x md:divide-y-0 divide-y">
                <div className="flex flex-col md:gap-4 md:mt-[10rem] mt-8 md:flex-[3] gap-2">
                    <div className="flex items-center gap-5">
                        <Image src={Info} className='bg-[rgba(0,0,0,0.5)] p-3 rounded-[8px] w-[80px] h-[80px]' alt='' />
                        <span className="text-white font-lustra lg:text-[30px] text-[20px] font-bold">DESCRIPTION</span>
                    </div>
                    <p className="text-white 2xl:text-[24px] lg:text-[18px] text-[16px]">{"Astra City is the urban hub of the heartbeat of Astrality. Skyscrapers filled with virtual offices, buzzing digital marketplaces, and lively social spaces make it a hotspot for businesses and social butterflies alike. The city is the fusion of modern and futuristic architecture, embodying the spirit of progress and innovation that Astrality stands for."}</p>
                </div>
                <div className="flex-[2] md:pl-14 flex md:mt-[10rem] mt-8 flex-col md:gap-4 gap-2">
                    <div className="flex items-center gap-5">
                        <Image src={UIGraph} className='bg-[rgba(0,0,0,0.5)] p-3 rounded-[8px] w-[80px] h-[80px]' alt='' />
                        <span className="text-white font-lustra lg:text-[30px] text-[20px] font-bold">RENTAL DEMAND</span>
                    </div>
                    <p className="text-white 2xl:text-[24px] lg:text-[18px] text-[16px]"><b>854</b> requests to Rent the Land at <b>USDT 521</b> or Lower</p>
                </div>
            </div>
            {/* <Image className='absolute md:flex hidden bottom-[-30%] w-full h-[550px] object-cover rounded-[12px] -z-10 border-[2px] border-[#888787] bg-[#080D12]' src={gradient_bg} alt='' /> */}
        </div>

        <div className='md:w-[95%] md:px-0 px-6 pt-[9rem] m-auto m-[0px] relative w-full'>
            <GradientContainer icon={StarFilled} title={"PERKS"} style={"md:mt-[9.3rem]"} g_style={"rotate-[180deg]"}>
                <span className="text-white md:text-[30px] text-[20px]">Revealing soon...</span>
            </GradientContainer>
            <GradientContainer icon={DeviceHub} title={"UTILITIES"} g_style={''}>
                <span className="text-white md:text-[30px] text-[20px]">Revealing soon...</span>
            </GradientContainer>
        </div>

        <LandActivity />

        <Assets />
        <div className='md:my-12 mb-14'>
          <Image 
            src={SaleBottom}
            alt=''
          />
        </div>

        {isModal && (
            <Modal isOpen={isModal}>
                <BuyPopUp onCloseFunc={()=> setIsModal(false)} />
            </Modal>
        )}
        <Footer />
    </div>
  )
}

export default Page

interface AssetTypes {
    title?: String;
    content?: String;
    icon?: any;
    style?: String;
}

const AssetProps = ({title, content, icon, style}: AssetTypes)=>{
    return (
        <div className='flex gap-2 items-center cursor-pointer'>
            <Image src={icon} alt='' />
            <div className='text-white flex flex-col gap-1'>
                <span className='lg:text-[12px] text-[10px]'>{title}</span>
                <span className={`${style} lg:text-[12px] text-[10px] font-bold`}>{content}</span>
            </div>
        </div>
    )
}


interface GradientContainerProps {
    title?: String;
    children?: any;
    icon?: any;
    g_style?: String;
    style?: String
}

const GradientContainer = ({children, title, icon, g_style, style}: GradientContainerProps)=>{
    return (
        <div className={`relative border-[2px] overflow-hidden h-[400px] border-[#bdbdbd] my-14 ${style} rounded-[14px]`}>
            <div className='flex items-center gap-2 p-4'>
                <Image src={icon} className='bg-[rgba(0,0,0,0.5)] p-3 rounded-[8px] w-[80px] h-[80px]' alt='' />
                <span className="text-white lg:text-[30px] text-[20px] font-bold font-lustra">{title}</span>
            </div>
            <div className="grid place-items-center md:h-[50%] h-[50%]">{children}</div>
            <Image src={gradient_bg} className={`absolute top-0 object-cover h-[100%] -z-10 ${g_style} w-full`} alt="" />           
        </div>
    )
}


interface BuyNowProps {
    onCloseFunc?: ()=> void;
}


const BuyPopUp: React.FC<BuyNowProps> = ({onCloseFunc}: BuyNowProps)=>{
    return (
        <>
            <div className="p-10 gradient_md md:w-[620px] w-full bg-[#626377] rounded-[12px]">
                <div className="flex items-center">
                    <div className='flex-[4] text-right'>
                        <OutlineText>BUY LAND</OutlineText>
                    </div>
                    <div className="flex-[1.5] flex text-white justify-end">
                        <MdClose onClick={onCloseFunc} fontSize={'2.5rem'} />
                    </div>
                </div>
                <div className="mt-6 flex flex-col divide-y divide-[#bdbdbd]">
                    <div className="flex gap-6">
                        <div className="flex items-center gap-3">
                            <Image src={ListingBg} className='rounded-[8px] w-[120px] h-[120px]' alt='' />
                            <div className="">
                                <span className="text-white lg:text-[30px] text-[20px] font-bold font-lustra">PIONEER LAND</span>
                                <div className="flex items-center gap-2">
                                    <Image src={Dollar_icon} alt='' />
                                    <span className="text-white md:text-[18px] text-[15px]">Price</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end">
                            <span className="text-white md:text-[30px] text-[20px] font-bold">1,200 $</span>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-4 pt-4">
                        <div className="flex items-center justify-between">
                            <span className="text-md:text-[18px] text-[14px] text-[#bdbdbd]">Subtotal</span>
                            <span className="font-bold text-md:text-[18px] text-white text-[14px]">1,200 $</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-md:text-[18px] text-[14px] text-[#bdbdbd]">Platform fee (10%)</span>
                            <span className="font-bold text-md:text-[18px] text-white text-[14px]">120 $</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-md:text-[18px] text-[14px] text-[#bdbdbd]">Tax</span>
                            <span className="font-bold text-md:text-[18px] text-white text-[14px]">60 $</span>
                        </div>
                    </div>
                    <div className="mt-4 pt-4">
                        <span className="text-md:text-[30px] text-[20px] text-[#fff]">Total</span>
                        <span className="font-bold text-md:text-[35px] text-white text-[20px]">1,380 $</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-8">
                    <input checked id="checked-checkbox" type="checkbox" value="" className="w-8 h-8 text-green-600 bg-gray-100 border-gray-300 rounded  focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />      
                    <span className="text-white md:text-[18px] text-[14px]">I agree to the terms of Astrality purchase agreement</span>
                </div>
                <div className="m-auto m-[0px] md:w-[80%] w-full md:px-0 px-6 mt-6">
                    <Button text="Buy Land" btnStyle={"p-3 md:text-[30px] text-white w-full"} />
                </div>
            </div>
        </>
    )
}