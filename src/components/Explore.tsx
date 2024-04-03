/* eslint-disable no-unused-vars */
import React from 'react'
import GradientText from './elements/GradientText'
import { ExploreImg } from '../../public/assets/Images'
import Button from './elements/Button';
import ReactPlayer from 'react-player'

const Explore = () => {
  return (
    <div className='grid place-items-center mt-24'>
        <div className='flex md:flex-row flex-col w-[90%] gap-12'>
            <div className='flex-[1]'>
                <div className='flex justify-end mb-4'>
                    <GradientText style={"md:text-[35px] text-[20px]"}>WHAT IS ASTRALITY?</GradientText>
                </div>
                <p className='text-white text-justify md:text-[18px] text-[16px]'>Step into Astrality, the frontier of the metaverse where infinite astral expanse meet tangible reality. Our platform reimagines digital commerce, fusing real-world brands and NFTs into an interactive marketplace. At Astrality, own and personalize virtual land, immerse in vibrant social encounters, and experience the future of the digital universe, enhanced by AI. Embrace Astrality’s limitless potential and experience where reality converges with the metaverse.</p>
                <div className='flex justify-end mt-10'>
                    <Button
                        type={""}
                        text={'Explore Now'}
                        btnStyle={"text-white font-bold md:w-[331px] w-full p-4 md:text-[20px] text-[16px]"}
                    />
                </div>
            </div>
            <div className='flex-[1]'>
                <div className="w-full flex overflow-hidden rounded-[12px]">
                    <ReactPlayer 
                        url={"../assets/videos/astrality_city.mp4"}
                        controls={true}
                        width='100%'
                        className="md:h-[593px] h-[350px]"
                    />
                </div>                    
            </div>
        </div>
    </div>
  )
}

export default Explore