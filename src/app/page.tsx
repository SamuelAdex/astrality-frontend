"use client";
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '@/components/globalComponents/Header'
import Hero from '@/components/Hero'
import Join from '@/components/Join'
import Explore from '@/components/Explore'
import BuyNow from '@/components/BuyNow'
import MarketPlace from '@/components/MarketPlace'
import Metaverse from '@/components/Metaverse'
import { black_gradient } from '../../public/assets/Images'
import Image from 'next/image';
import Advertise from '@/components/Advertise';
import Reward from '@/components/Reward';
import Partners from '@/components/Partners';
import Footer from '@/components/globalComponents/Footer';

const Home = () => {
  return (
    <div className="home-container">
        <Header />
        <Hero />
        <Join />
        <Explore />
        <BuyNow />
        <div className='relative lg:mt-[-6.8rem]'>
          <Image src={black_gradient} className='w-[100%] absolute bg- z-30 rotate-180' alt="" />
        </div>
        <MarketPlace />
        <div className='relative lg:mt-[-8.8rem]'>
          <Image src={black_gradient} className='w-[100%] absolute z-30 rotate-180' alt="" />
        </div>
        <Metaverse />
        <div className='relative lg:mt-[-6.8rem]'>
          <Image src={black_gradient} className='w-[100%] absolute z-30 rotate-180' alt="" />
        </div>
        <Advertise />
        <div className='relative lg:mt-[-8rem]'>
          <Image src={black_gradient} className='w-[100%] absolute z-30 rotate-180' alt="" />
        </div>
        <Reward />
        <Partners />
        <Footer />
    </div>
  )
}

export default Home