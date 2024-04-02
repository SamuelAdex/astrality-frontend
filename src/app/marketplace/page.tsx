"use client";

import Analytics from '@/components/MarketPlace/Analytics';
import RecentListing from '@/components/MarketPlace/RecentListing';
import RecentRented from '@/components/MarketPlace/RecentRented';
import RecentSales from '@/components/MarketPlace/RecentSales';
import Footer from '@/components/globalComponents/Footer';
import Header from '@/components/globalComponents/Header';
import Image from 'next/image';
import React from 'react'
import { SaleBottom } from '../../../public/assets/Images';

const Page = () => {
  return (
    <div>
        <Header />
        <Analytics />
        <RecentListing />
        <RecentSales />
        <RecentRented />
        <div className='md:my-12 mb-14'>
          <Image 
            src={SaleBottom}
            alt=''
          />
        </div>
        <Footer />
    </div>
  )
}

export default Page