"use client";

import React from 'react'


interface outlineProps {
    children?: any;
    style?: String;
}

const OutlineText = ({children, style}: outlineProps) => {
  return (
    <h1 className={`text-gradient-outline md:text-[40px] line-text text-[28px] text-white font-extrabold ${style}`}>{children}</h1>
  )
}

export default OutlineText