/* eslint-disable no-unused-vars */
import React from 'react'

const Hero = () => {
  return (
    <div className="hero md:h-[100vh] h-[100vh] flex flex-col mb-[12rem] items-center justify-center relative">
        <div className='w-[100%] h-[100%] absolute top-0 left-0 overflow-hidden'>
          <video autoPlay muted loop className="video min-w-[100%] min-h-[100%] object-cover">
              <source src={"../assets/videos/AST_City with Words_v1.mp4"} type="video/mp4" />
          </video>
        </div>
    </div>
  )
}

export default Hero