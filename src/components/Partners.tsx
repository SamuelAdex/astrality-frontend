"use client";

import Image from 'next/image';
import React from 'react'
import Master from '../../public/assets/img/master.png';
import Klarna from '../../public/assets/img/Klarna.png';
import ShopPay from '../../public/assets/img/shop-pay.png';
import AmericaExpress from '../../public/assets/img/express.png';
import Opensea from '../../public/assets/img/opensea.png';
import Paypal from '../../public/assets/img/paypal.png';
import Square from '../../public/assets/img/square.png';
import Eth from '../../public/assets/img/eth.png';
import Alipay from '../../public/assets/img/alipay.png';
import Metamask from '../../public/assets/img/metamask.png';
import UnderlineImg from '../../public/assets/img/Vector 4.png'


const Partners = () => {
  return (
    <div className='grid place-items-center md:gap-14 gap-8'>
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