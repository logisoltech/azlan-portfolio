import React from 'react'
import Nav from './Nav'
import { font } from './font/font'
import { AuroraBackground } from './ui/aurora-background'

const Hero = () => {
  return (
    <AuroraBackground className="bg-black">
      <div className={`${font.className} min-h-screen relative w-[100%]`}>
        <Nav/>
        <div className='flex items-center justify-between px-20 text-white h-[40rem] pt-20'>
        <div className='flex flex-col gap-4'>
          <p className='text-5xl font-bold'><span className='text-fuchsia-400'>Hello,</span> I'm Azlan Khan</p>
            <p>Full Stack Engineer. Blockchain Developer. AI Engineer</p>
            <p className='max-w-xl'>I'm a full stack engineer with over 9+ years of experience in the industry with a passion for building web and mobile applications. I'm also a blockchain developer and an AI engineer.</p>
            <div className='flex space-x-4'>

            <button className='bg-gradient-to-r from-white via-fuchsia-300/90 to-indigo-300/90
                bg-[length:200%_200%] bg-[position:0%_50%]
                transition-all duration-500 ease-out
                hover:bg-[position:100%_50%]
                shadow-md hover:shadow-xl w-fit text-black px-4 py-2 rounded-2xl'>
                Contact Me
            </button>
            
            </div>
        </div>
        <div>
            <img src='/mainIconsdark.svg' className='w-full h-[26rem]'/>
        </div>
      </div>
    </div>
    </AuroraBackground>
  )
}

export default Hero