"use client";


import Image from 'next/image';
import React from 'react'
import { UnderlineImg } from '../../../../public/assets/Images';
import Button from '@/components/elements/Button';
import { MdAdd } from 'react-icons/md';
import { Metamask } from '@/assets/Images';

const Page = () => {
  return (
    <div className='inventory_gradient object-cover p-8 rounded-[20px]'>
        <div className="flex md:flex-row flex-col gap-4 justify-between items-center">
            <div className="md:text-[30px] flex-[4] font-bold flex flex-col text-[20px] text-white">
                <h1 className='font-lustra'>CONNECTED WALLETS</h1>
                <Image src={UnderlineImg} className='md:w-[55%] w-full' alt='' />
            </div>
            <Button text={"Add Wallet"} iconName={<MdAdd fontSize={"1.2rem"} />} btnStyle={"text-white flex-[1] p-3 w-full"} />
        </div>

        <div className="md:mt-4 mt-4 w-full">
            <table className='w-full tbl'>
                <thead className='text-white text-left md:text-[14px] text-[12px] font-bold'>
                    <th>Wallet ID</th>
                    <th>Cryptocurrency</th>
                    <th></th>
                </thead>
                <tbody className='text-white md:text-[13px] text-[10px]'>
                    {[1,2,3].map((_, i)=>(
                    <tr key={i} className='py-3 cursor-pointer'>
                        <td className='py-2'>1X05542.215.1854vqs564</td>
                        <td className='py-2'>
                            <div className="flex items-center gap-2">
                                <Image src={Metamask} alt='' />
                                <span className="font-bold text-white">Metamask</span>
                            </div>
                        </td>
                        <td className='flex justify-end py-3'>
                            <Button text={"Unbind"} btnStyle={'p-2 border-white md:text-[13px] text-[10px] text-white w-full'} type={"outline"} />
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Page