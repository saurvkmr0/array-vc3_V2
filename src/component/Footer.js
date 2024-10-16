import React from 'react'
import { TiArrowRightThick } from "react-icons/ti";
import Logo from '../Header/Logo';
import { FaSquareTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=' py-12 bg-gray-300 dark:bg-gray-900 dark:text-white flex flex-col gap-10'>
        <h1 className='text-2xl flex items-center justify-center gap-4 font-bold hover:text-highlight md:text-5xl'>What makes us different<TiArrowRightThick /></h1>
        <div className="mx-4 lg:mx-40 flex flex-col items-center md:items-start">
            <Logo/>
            <div className=" w-full flex flex-col-reverse md:flex-row md:justify-between gap-6 mt-6">
                <div className="text-center">© 2024 Array Venture Capital. All Rights Reserved</div>
                <div className="flex gap-4 items-center justify-center  ">
                    <p className=''>Follow Us</p>
                    <FaSquareTwitter className='hover:text-highlight text-2xl'/>
                    <BsLinkedin className='hover:text-highlight text-xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer