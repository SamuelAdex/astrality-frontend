'use client';

import { Dollar_icon, Info, LandImg, LandImgGradient, MapIcon, Nav, TagGradient, Views, category_type } from '@/assets/Images';
import AssetProps from '@/components/elements/AssetProps';
import Button from '@/components/elements/Button';
import OutlineText from '@/components/elements/OutlineText';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { MdClose, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { ListingBg } from '../../../../../public/assets/Images';
import Modal from '@/components/elements/Modal';

const Page = () => {
    const router = useRouter()
    const [isShow, setIsShow] = useState(false);

  return (
    <div className=''>
        <div className="md:w-[95%] md:px-0 px-2 m-auto m-[0px] relative lg:h-[800px] w-full">
            <div className="w-full flex lg:flex-row flex-col lg:gap-3 gap-3">
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
                        <Image src={LandImgGradient} className='' alt='' />
                    </div>
                    <div className="md:w-[55%] w-full">
                        <div className="w-full">
                            <OutlineText>PIONEER LAND</OutlineText>
                            <div className='grid md:grid-cols-2 gap-2 mt-1 sm:grid-cols-2 grid-cols-2 md:mb-12'>
                                <AssetProps title={"Views"} content={"More than 100"} icon={Views} />
                                <AssetProps title={"Size"} content={"2x2"} icon={category_type} />
                                <AssetProps title={"Land Type"} content={"Pioneer land"} icon={category_type} />
                                <AssetProps title={"Location"} content={"Astra city"} icon={MapIcon} />
                                <AssetProps title={"Coordinates"} content={"15.25.24"} icon={Nav} />
                                {/* <AssetProps title={"Rent demand"} content={"High"} icon={Graph} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:p-10 px-6 md:pt-20 p-6 rounded-[12px] flex-col md:gap-4 asset_gradient gap-6 md:mt-[-3.5rem] mt-4">
                <div className="flex flex-col md:gap-4 md:flex-[3] md:pt-[3.5rem] gap-2">
                    <div className="flex gap-5">
                        <Image src={Info} className='bg-[rgba(0,0,0,0.5)] p-4 rounded-[8px] w-[60px] h-[60px]' alt='' />
                        <span className="text-white font-lustra lg:text-[30px] text-[20px] font-bold">DESCRIPTION</span>
                    </div>
                    <p className="text-white 2xl:text-[24px] border-b-[1px] pb-8 lg:text-[16px] text-[14px]">{"Astra City is the urban hub of the heartbeat of Astrality. Skyscrapers filled with virtual offices, buzzing digital marketplaces, and lively social spaces make it a hotspot for businesses and social butterflies alike. The city is the fusion of modern and futuristic architecture, embodying the spirit of progress and innovation that Astrality stands for."}</p>
                </div>

                <div className="flex flex-col gap-5 md:mt-8 mt-4">
                    <div className="flex gap-5">
                        <Image src={TagGradient} className='bg-[rgba(0,0,0,0.5)] p-4 rounded-[8px] w-[60px] h-[60px]' alt='' />
                        <span className="text-white font-lustra lg:text-[30px] text-[20px] font-bold">RENT OFFERS</span>
                    </div>
                    <div className="md:mt-4 mt-4 w-full">
                        <table className='w-full tbl'>
                            <thead className='text-white text-left md:text-[14px] text-[12px] font-bold'>
                                <th>Offers</th>
                                <th>Offered By</th>
                                <th className='text-right'>Size</th>
                                <th></th>
                            </thead>
                            <tbody className='text-white md:text-[15px] text-[13px]'>
                                {[1,2,3,4,5,6].map((_, i)=>(
                                <tr key={i} className='py-3'>
                                    <td className='py-2'>854 $</td>
                                    <td className='py-2'>Jim Halpert</td>
                                    <td className='py-2 text-right'>1x1</td>
                                    <td className='flex justify-end py-3'>
                                        <Button onBtnClick={()=> setIsShow(true)} text={"Accept Offer"} btnStyle={'p-3 text-white'} />
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        {isShow && (
            <Modal
                isOpen={isShow}
            >
                <RentLandPopUp onCloseFunc={()=> setIsShow(false)} />
            </Modal>
        )}
    </div>
  )
}

export default Page


interface RentLandProps {
    onCloseFunc?: ()=> void;
}


const RentLandPopUp: React.FC = ({onCloseFunc}: RentLandProps)=>{
    return (
        <>
            <div className="p-10 gradient_md md:w-[620px] w-full bg-[#626377] rounded-[12px]">
                <div className="flex items-center">
                    <div className='flex-[4] text-right'>
                        <OutlineText>RENT LAND</OutlineText>
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
                <div className="flex items-center gap-3 w-full md:px-0 px-6 md:mt-8 mt-4">
                    <Button text="Confirm Rent" btnStyle={"p-3 md:text-[20px] text-white w-full"} />
                    <Button text="Cancel" type={"outline"} btnStyle={"p-2 md:text-[20px] border-white text-white w-full"} />
                </div>
            </div>
        </>
    )
}