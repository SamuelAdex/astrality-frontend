"use client";

import React from 'react'
import OutlineText from '../elements/OutlineText';
import {
    Stat1,
    Stat2,
    Stat3,
    Stat4,
    Stat5,
} from '../../../public/assets/Images'

const Analytics = () => {
    let stats = [
        {
            id: 1,
            title: 'Total Sales',
            value: "2,411",
            bg: Stat1
        },
        {
            id: 2,
            title: 'Land Sold',
            value: "835",
            bg: Stat2
        },
        {
            id: 3,
            title: 'Total Rented out',
            value: "2,354",
            bg: Stat3
        },
        {
            id: 4,
            title: 'Looking For Rent',
            value: "1,521",
            bg: Stat4
        },
        {
            id: 5,
            title: 'Available',
            value: "2,101",
            bg: Stat5
        }
    ]
  return (
    <div className="md:px-12 px-3 pt-[8rem] analytic h-[30vh] bg-red-500">
        <div className="">
            <OutlineText>Analytics</OutlineText>
            <div className="">

            </div>
        </div>
        <div className=''>

        </div>
    </div>
  )
}

export default Analytics