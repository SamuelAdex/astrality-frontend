"use client";

import React, {useState} from 'react';
import Button from '../elements/Button';
import Image from 'next/image';
import OutlineText from '../elements/OutlineText';
import {
    Metamask,
    Coinbase,
    Connect,
    Ledger,
    Phantom,
    Glow,
    operaTouch,
} from '@/assets/Images'
import { MdClose } from 'react-icons/md';

interface ConnectWalletProps {
    onCloseFunc?: any;
}

const ConnectWallet: React.FC = ({onCloseFunc}: ConnectWalletProps)=>{
    const walletProvider = [
        {
            id: 1,
            title: "Metamask",
            icon: Metamask,
        },
        {
            id: 2,
            title: "Coinbase",
            icon: Coinbase,
        },
        {
            id: 3,
            title: "Connect",
            icon: Connect,
        },
        {
            id: 4,
            title: "Ledger",
            icon: Ledger,
        },
        {
            id: 5,
            title: "Phantom",
            icon: Phantom,
        },
        {
            id: 6,
            title: "Glow",
            icon: Glow,
        },
        {
            id: 7,
            title: "Operatouch",
            icon: operaTouch,
        },
    ]
    return (
        <div className="p-10 gradient_md md:w-[620px] w-full bg-[#626377] rounded-[12px]">
            <div className="">
                <div className="flex text-white justify-end">
                    <MdClose onClick={onCloseFunc} fontSize={'2.5rem'} />
                </div>
                <div className='text-center'>
                    <span className="text-white lg:text-[30px] text-[20px] font-bold font-lustra">CONNECT WALLET</span>
                    <p className='text-white md:text-[18px] text-[16px]'>{"If you don't have a wallet, you can select a provider and create one now."}</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
                {walletProvider.map((wallet, i)=>(
                    <button key={i} className='flex p-3 border-gradient-btn text-white hover:bg-white hover:text-black gap-2 items-center'>
                        <Image src={wallet.icon} alt='' />
                        <span className="md:text-[18px] text-[14px] font-semibold">{wallet.title}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ConnectWallet;