"use client";

import Register from '@/components/auth/Register';
import Footer from '@/components/globalComponents/Footer';
import Header from '@/components/globalComponents/Header';
import React from 'react'

const page = () => {
  return (
    <div className="">
        <Header />
        <Register />
        <Footer />
    </div>
  )
}

export default page