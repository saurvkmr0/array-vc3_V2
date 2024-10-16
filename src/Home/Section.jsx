import React from 'react'

const Timing = [
    "Is it ever too early to approach First Round about investing?",
    "What if I’ve already raised some money from angels — is it too late to talk to you?",
    "I’m raising my Series B or Series C — should I contact you?",
]

const Decisions = [
    "Does First Round only invest in particular areas or industries?",
    "How do you weigh different criteria in your decision-making process?",
    "What does First Round look for in an idea?",
    "What do you look for in a founding team?",
    "Do you invest in companies located outside of San Francisco and New York?",
]


const Section = () => {
  return (
    <div className=' bg-white dark:bg-black'>
        <div className=" dark:text-white text-customBlack mx-4 lg:mx-40 py-2 flex flex-col gap-6 md:gap-14">
            
            <div className="">
                <h1 className="text-3xl font-bold md:text-5xl ">Timing</h1>
            </div>
            <div className="">
                {Timing.map((item)=>(
                    <div className="hover:text-highlight border-2 border-black border-r-0 border-l-0 py-4 md:py-8 text-xl md:text-2xl dark:border-white">{item}</div>
                ))}
            </div>

            <div className="py-4">
                <h1 className="text-3xl font-bold md:text-5xl ">How We Make Decisions</h1>
            </div>
            <div className="">
                {Timing.map((item)=>(
                    <div className="hover:text-highlight border-2 border-black border-r-0 border-l-0 py-4 md:py-8 text-xl md:text-2xl dark:border-white">{item}</div>
                ))}
            </div>



        </div>
    </div>
  )
}

export default Section