"use client";
import React from 'react'
import { font } from './font/font'

const Nav = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <div className={`${font.className} flex px-4 py-2 bg-black/30 backdrop-blur-lg rounded-3xl border-gray-600 border justify-between items-center text-white w-[70%] mx-auto absolute top-4 left-1/2 transform -translate-x-1/2 z-10`}>
        <div className='font-bold text-fuchsia-400 flex justify-between items-center text-2xl'>
            Azlan.
        </div>
        <div className='flex space-x-16'>
            <div 
              className='cursor-pointer hover:text-fuchsia-400 transition-colors duration-300'
              onClick={() => scrollToSection('work')}
            >
                Work  
            </div>
            <div 
              className='cursor-pointer hover:text-fuchsia-400 transition-colors duration-300'
              onClick={() => scrollToSection('projects')}
            >
                Portfolio  
            </div>
            <div 
              className='cursor-pointer hover:text-fuchsia-400 transition-colors duration-300'
              onClick={() => scrollToSection('skills')}
            >
                Skills  
            </div>
        </div>
            <div 
              className='bg-gradient-to-r from-white via-fuchsia-300/90 to-indigo-300/90
    bg-[length:200%_200%] bg-[position:0%_50%]
    transition-all duration-500 ease-out
    hover:bg-[position:100%_50%]
    shadow-md hover:shadow-xl text-black px-4 py-2 rounded-2xl cursor-pointer'
              onClick={() => scrollToSection('contact')}
            >
                Contact  
            </div>
    </div>
  )
}

export default Nav