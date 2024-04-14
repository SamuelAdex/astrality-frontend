'use client';


import Image from "next/image";
import React, { useState } from "react";

interface AssetTypes {
    title?: String;
    content?: String;
    icon?: any;
    style?: String;
}

const AssetProps = ({title, content, icon, style}: AssetTypes)=>{
    return (
        <div className='flex gap-2 items-center cursor-pointer'>
            <Image src={icon} alt='' />
            <div className='text-white flex flex-col gap-1'>
                <span className='lg:text-[12px] text-[10px]'>{title}</span>
                <span className={`${style} lg:text-[12px] text-[10px] font-bold`}>{content}</span>
            </div>
        </div>
    )
}

export default AssetProps;