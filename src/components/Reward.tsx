"use client";

import React from 'react'
import GradientText from './elements/GradientText';
import Button from './elements/Button';

const Reward = () => {
  return (
    <div className='flex flex-col mt-[10rem] rewards h-[900px]'>
        <div className='flex flex-col md:justify-center lg:p-8 p-8 h-full gap-12'>
            <div className='lg:w-[45%] w-full'>
                <div className='flex md:justify-end mb-8'>
                    <GradientText style={"md:text-[35px] text-[20px]"}>USER REWARDS</GradientText>
                </div>
                <p className='text-white text-justify md:text-[18px] text-[16px]'>Immerse yourself in Astrality, where loyalty is celebrated with rewarding experiences. Regular users are graced with daily rewards and thrilling lucky draws, earning exclusive in-game benefits and real-world perks. Each interaction opens up a gateway to potential rewards, making Astrality’s journey thrilling and fruitful. Step into a realm where the virtual and the real collide, offering a rewarding metaverse experience like never before!</p>
                <div className='flex md:flex-row flex-col items-center gap-10 mt-12'>
                    <Button
                        type={""}
                        text={'Join Now'}
                        btnStyle={"text-white font-bold md:w-[331px] w-full p-4 md:text-[20px] text-[16px]"}
                    />
                    <Button
                        type={"outline"}
                        text={'Explore'}
                        btnStyle={"text-white bg-black border-white rounded-[8px] font-bold md:w-[331px] w-full p-4 md:text-[20px] text-[16px]"}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reward