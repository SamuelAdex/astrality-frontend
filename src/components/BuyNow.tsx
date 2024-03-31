/* eslint-disable no-unused-vars */
import React from 'react'
import GradientText from './elements/GradientText'
import Button from './elements/Button'

const BuyNow = () => {
  return (
    <div className='relative w-full mt-28'>
        <div className='buy-now lg:w-[1040px] w-full h-[600px] flex flex-col items-end justify-end lg:p-2 p-8 bg-[30%]'>
            <div className='md:w-[35%] w-full md:absolute md:right-[50px]'>
                <div className='mb-4'>
                    <GradientText style={"md:text-[35px] text-[20px]"}>DIGITAL LAND</GradientText>
                </div>
                <p className='text-white text-justify md:text-[18px] text-[16px]'>Experience ultimate ownership in Astrality, your gateway to a metaverse where you can buy, sell, rent, or trade digital land. Customize your unique space using our easy to use Astrality SDK, no coding skills required. Become a part of Astrality, the next generation metaverse, where you can craft your digital domain.</p>
                <Button
                    text={"Buy Now"}
                    btnStyle={"text-white font-bold md:w-[331px] w-full p-4 md:text-[20px] text-[16px] mt-12"}
                />
            </div>
        </div>
    </div>
  )
}

export default BuyNow