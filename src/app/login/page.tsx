"use client";

import Login from '@/components/auth/Login';
import Footer from '@/components/globalComponents/Footer';
import Header from '@/components/globalComponents/Header';
import React from 'react'

const page = () => {
  return (
    <div className="">
        <Header />
        <Login />
        <Footer />
    </div>
  )
}

export default page