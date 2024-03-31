/* eslint-disable no-unused-vars */
import React from 'react'
import GradientText from './elements/GradientText'
import Button from './elements/Button'
import { MarketCart, market_gradient } from '../../public/assets/Images'
import Image from 'next/image'

const MarketPlace = () => {
  return (
    <div className='marketplace grid place-items-center lg:mt-[-15rem] mt-10 h-[800px] relative overflow-hidden'>
        {/* <img src={market_gradient} className='absolute w-full h-[800px]' alt="" /> */}
        <div className='flex md:flex-row flex-col w-[90%] gap-12 h-full '>
            <div className='flex-[1.3] flex flex-col justify-center md:mt-[25rem] mt-10 p-4 md:bg-gradient-to-r from-black shadow-lg drop-shadow-lg md:shadow-[#000] shadow- to-black'>
                <div className=''>
                    <div className='flex justify-end'>
                        <GradientText style={"md:text-[35px] text-[20px]"}>MARKETPLACE</GradientText>
                    </div>
                    <p className='text-white text-justify md:text-[18px] text-[16px]'>Discover the marketplace in Astrality, a fusion of real and virtual commerce. Shop for NFTs from real-world brands and experience a new era of shopping. Astrality sets the stage for Web3 commerce, bridging brands and the metaverse. Embark on a new commerce journey with us.</p>
                    <div className='flex justify-end mt-10'>
                        <Button
                            text={'Shop Now'}
                            btnStyle={"text-white font-bold md:w-[331px] w-full p-4 md:text-[20px] text-[16px]"}
                        />
                    </div>
                </div>
            </div>
            <div className='flex-[2] market_gradient'>
                <Image src={MarketCart} className='absolute md:-right-5 -right-2 top-[9.2rem] h-[900px] md:w-[950px] -z-10' alt="" />
            </div>
        </div>
    </div>
  )
}

export default MarketPlace