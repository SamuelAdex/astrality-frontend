/* eslint-disable no-unused-vars */
import React from 'react'
import { AboutInfo, AstralityLogo, AstralityLogo2, AstralityLogoSVG, Globe, Home, HomeActive, Map, Marketplace, User } from '../../../public/assets/Images'
import Link from 'next/link';
import Button from '../elements/Button';
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Header = () => {
    const router = useRouter();

    const navLinks = [
        {
            id: 1,
            name: 'Home',
            icon: Home,
            activeIcon: HomeActive,
        },
        {
            id: 2,
            name: 'Map',
            icon: Map,
            activeIcon: Map,
        },
        {
            id: 3,
            name: 'Marketplace',
            icon: Marketplace,
            activeIcon: Marketplace,
        },
        {
            id: 4,
            name: 'Profile',
            icon: User,
            activeIcon: User,
        },
        {
            id: 5,
            name: 'About us',
            icon: AboutInfo,
            activeIcon: AboutInfo,
        },
    ]
  return (
    <header className='grid place-items-center absolute w-full p-5'>
        <nav className='flex items-center md:gap-10 justify-between md:w-[98%] w-full md:px-0 px-4'>
            <div className=''>
                <Image src={AstralityLogo2} className='' alt="" />
            </div>
            <div className="menu lg:flex hidden items-center gap-10">
                {navLinks.map((link, i)=>{
                    return (
                        <Link key={i} href="#" className='text-[#CECECE] flex items-center gap-2 lg:text-[16px] text-[14px] font-bold'>
                            <Image src={link.icon} className='w-[24px] h-[24px]' alt="" />
                            <span>{link.name}</span>
                        </Link>
                    )
                })}
            </div>
            <div className="menu-btn flex items-center gap-5">
                <div className='flex items-center text-[#fff] gap-1 cursor-pointer'>
                    <Image src={Globe} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[16px] font-bold'>EN</span>
                    <IoIosArrowDown fontSize={'1.4rem'} />
                </div>
                <span className='p-[2px] bg-gradient-to-r from-[#C406EE] md:flex hidden to-[#4E299B] rounded-[8px]'>
                    <Button 
                        text={"Sign In"}
                        btnStyle={'text-white font-bold md:text-[16px] p-4 text-[14px] w-[167px] rounded-[8px]'}
                        onBtnClick={()=> router.push('/login')}
                    />
                </span>
                <Button 
                    text={"Create Account"}
                    btnStyle={'text-white font-bold md:text-[16px] md:flex hidden p-4 text-[14px] border-white rounded-[8px] w-[229px]'}
                    type={'outline'}
                    onBtnClick={()=> router.push('/register')}
                />
            </div>
        </nav>
    </header>
  )
}

export default Header