"use client";

import Image from 'next/image';
import React from 'react'
import {
  Master,
    Klarna,
    ShopPay,
    AmericaExpress,
    Opensea,
    Paypal,
    Square,
    Eth,
    Alipay,
    Metamask,
    UnderlineImg,
} from '../../public/assets/Images';


const Partners = () => {
  return (
    <div className='grid place-items-center md:gap-14 gap-8 mb-[4rem]'>
        <div className="text- md:text-[44px] font-bold flex flex-col items-center text-[30px] text-white">
            <h1>PARTNERS</h1>
            <Image src={UnderlineImg} alt='' />
        </div>
        <div className="grid md:grid-cols-5 md:w-[95%] w-full md:p-0 p-5 gap-y-8 grid-cols-2">
            <Image src={Master} alt='' />
            <Image src={Klarna} alt='' />
            <Image src={ShopPay} alt='' />
            <Image src={AmericaExpress} alt='' />
            <Image src={Opensea} alt='' />
            <Image src={Paypal} alt='' />
            <Image src={Square} alt='' />
            <Image src={Eth} alt='' />
            <Image src={Alipay} alt='' />
            <Image src={Metamask} alt='' />
        </div>
    </div>
  )
}

export default Partners