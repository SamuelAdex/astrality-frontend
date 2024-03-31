/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './elements/Button'

const Join = () => {
  return (
    <div className='my-20 grid place-items-center'>
        <div className='flex md:flex-row flex-col items-center gap-10 w-[90%] join p-8 h-[280px]'>
            <p className='text-white md:flex-[3] md:text-[18px] text-[16px]'>Pioneering the metaverse with a blend of commerce, creativity and community, enriched by AI-enhanced interactions. Experience our unique digital marketplace and vibrant social platform today. Embark on the future with Astrality.</p>
            <div className='flex items-center gap-4 md:flex-[2.5] w-full'>
                <span className='p-[2px] bg-gradient-to-r w-full from-[#C406EE] to-[#4E299B] rounded-[8px]'>
                    <Button
                        text={"Join Now"}
                        btnStyle={"rounded-[8px] p-4 text-white md:text-[20px] text-[16px] w-full"}
                    />
                </span>
                <Button
                    text={"Learn More"}
                    type={'outline'}
                    btnStyle={"rounded-[8px] w-full p-4 border-white md:text-[20px] text-[16px] rounded-[8px] text-white"}
                />
            </div>
        </div>
    </div>
  )
}

export default Join