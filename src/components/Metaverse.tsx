/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './elements/Button'
import GradientText from './elements/GradientText'

const Metaverse = () => {
  return (
    <div className='relative w-full mt-[12rem] overflow-hidden'>
        <div className='metaverse lg:w-[1040px] w-full h-[600px] flex flex-col items-end justify-end lg:p-2 p-8 bg-[30%]'>
            <div className='w-[100%] h-[100%] absolute top-0 overflow-hidden -z-5 md:-left-40 right-0'>
                <video autoPlay muted loop className="video min-w-[100%] min-h-[100%] object-cover">
                    <source src={"../assets/videos/AST_Brain_v1.mp4"} type="video/mp4" />
                </video>
            </div>
            <div className='md:w-[40%] z-10 w-full md:absolute md:right-[50px]'>
                <div className='mb-4'>
                    <GradientText style={"md:text-[35px] text-[20px]"}>AI POWERED METAVERSE</GradientText>
                </div>
                <p className='text-white text-justify md:text-[18px] text-[16px]'>Discover Astrality, the future of AI powered metaverses. Our advanced AI underpins the Astrality experience, offering personalized, seamless, and immersive digital journeys. Unleash the potential of AI enhanced metaverse interactions, commerce, and security with Astrality. Your future begins here.</p>
                <Button
                    text={"Explore Now"}
                    btnStyle={"text-white font-bold md:w-[331px] w-full p-4 md:text-[20px] text-[16px] mt-12"}
                />
            </div>
        </div>
    </div>
  )
}

export default Metaverse