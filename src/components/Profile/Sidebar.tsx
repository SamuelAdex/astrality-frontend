"use client";

import React from 'react';
import {
    Overview,
    Inventory,
    Assets,
    Wallet,
    Settings,
} from '@/assets/Images'
import Link from 'next/link';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';

const Sidebar = () => {
    const activeSegment = useSelectedLayoutSegment();

    const links = [
        {
            id: 1,
            name: 'Overview',
            icon: Overview,
            path: '/profile/',
            targetSegment: null
        },
        {
            id: 2,
            name: 'Inventory',
            icon: Inventory,
            path: '/profile/inventory',
            targetSegment: 'inventory'
        },
        {
            id: 3,
            name: 'Assets',
            icon: Assets,
            path: '/profile/assets',
            targetSegment: 'assets'
        },
        {
            id: 4,
            name: 'Wallet',
            icon: Wallet,
            path: '/profile/wallet',
            targetSegment: 'wallet'
        },
        {
            id: 5,
            name: 'Settings',
            icon: Settings,
            path: '/profile/settings',
            targetSegment: 'settings'
        },
    ]
  return (
    <div className='w-[25%] fixed top-[15%] h-[100vh] gradient_sidebar object-cover lg:flex hidden flex-col gap-4 p-8'>
        {links.map((link, i)=>(
            <Link href={link.path} className={`flex border-gradient gap-2 px-3 py-2 ${activeSegment == link.targetSegment && 'border-active'} items-center border-[2px] border-white rounded-[8px] text-white`} key={i}>
                <Image src={link.icon} className={`rounded-[5px] ${activeSegment === link.targetSegment && 'active-icon'} w-[45px] h-[45px]`} alt='' />
                <span className=''>{link.name}</span>
            </Link>
        ))}
    </div>
  )
}

export default Sidebar