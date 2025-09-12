"use client";
import React, { useState, useEffect } from 'react'
import { font } from './font/font'
import { BackgroundBeams } from './ui/background-beams'
import { TextHoverEffect } from './ui/text-hover-effect'

const Skills = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const skills = [
    { name: 'React', color: 'text-blue-400' },
    { name: 'Next.js', color: 'text-white' },
    { name: 'Express', color: 'text-green-400' },
    { name: 'Node.Js', color: 'text-green-500' },
    { name: 'C#', color: 'text-purple-500' },
    { name: '.NET', color: 'text-purple-400' },
    { name: 'Angular', color: 'text-red-500' },
    { name: 'MySQL', color: 'text-blue-600' },
    { name: 'AWS', color: 'text-orange-400' },
    { name: 'Solidity', color: 'text-gray-300' },
    { name: 'R. Native', color: 'text-blue-400' },
    { name: 'Swift', color: 'text-orange-500' },
    { name: 'Rust', color: 'text-orange-600' }
  ]

  return (
    <div id="skills" className={`${font.className} relative min-h-screen bg-black overflow-hidden`}>
      <BackgroundBeams />
      <div className="relative z-10 pt-12 px-20 text-white">
        <div className="text-sm text-gray-400 mb-4">
          Technical Expertise
        </div>
        <div className='text-5xl font-bold mt-2 mb-12'>
          My <span className="text-fuchsia-400">Skills</span>
        </div>
        
        {isClient && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="h-32 w-full flex items-center justify-center">
                <TextHoverEffect text={skill.name} duration={0.5} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Skills