/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'


interface TextProps{
  children: any;
  style?: String;
}

const GradientText = ({children, style}: TextProps) => {
  return (
    <div className={`gradient-text ${style} bg-gradient-to-r from-[#22A1FE] font-bold to-[#FD18EF] gradient-text inline-block text-transparent bg-clip-text`}>{children}</div>
  )
}

export default GradientText