import React from 'react'
import { BsChevronDown } from "react-icons/bs";

const HeroText = () => {
  return (
    <>
        <div className="text-center dark:text-white text-customBlack mx-4 lg:mx-40 py-20 md:py-8 flex flex-col gap-6 md:gap-14">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black">
            We’re called First Round 
            <br/>
            for a reason.
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl font-bold">Vision Needs Liquidity</p>
          <p className="text-lg font-[500] px-10 lg:px-40">Your first money in is one thing. But so are your first hires, your first product and your first customers. We’ve helped Notion, Roblox, Uber, Square, Verkada, Together and 500 others tackle these firsts and more.</p>
          <div className="flex justify-center text-2xl md:text-4xl"><BsChevronDown /></div>
        </div>
    </>
  )
}

export default HeroText