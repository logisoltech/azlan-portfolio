"use client";
import React, { useState, useEffect } from 'react'
import { font } from './font/font'
import { BackgroundBeams } from './ui/background-beams'
import { DraggableCardContainer, DraggableCardBody } from './ui/draggable-card'

const Work = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const workExperience = [
    {
      company: "Pluton",
      position: "WordPress Developer",
      duration: "Feb 17 - May 18",
      description: "Built and customized WordPress themes and plugins, configured WooCommerce stores, and optimized sites for performance, SEO, and responsive layouts."
    },
    {
      company: "Decrypted Labs", 
      position: "Shopify Developer",
      duration: "June 18 - July 20",
      description: "Developed Shopify storefronts with custom Liquid themes, product catalogs, checkout flows, and third-party app integrations for ecommerce clients."
    },
    {
      company: "Logisol Technologies",
      position: "Tech Lead · Full Stack & CMS Developer",
      duration: "May 25 - Present",
      description: "Lead full-stack and CMS delivery across WordPress, Shopify, and custom CMS builds—plus ERPs, ecommerce sites, and mobile apps—while collaborating with cross-functional teams."
    },
    {
      company: "i-MSConsulting",
      position: "Full Stack & CMS Developer", 
      duration: "July 20 - Dec 23",
      description: "Built ERP and HRM platforms with CMS-backed admin portals and dashboards; developed ML/AI integrations on the backend with React frontends for client-facing web apps."
    },
    {
      company: "Tech Haven Pvt. Ltd.",
      position: "Full Stack & CMS Developer",
      duration: "Dec 23 - May 25", 
      description: "Delivered client sites on WordPress and Shopify alongside React and TypeScript UIs, with reliable backends in SQL Server, MySQL, and ExpressJS."
    },
  ]

  return (
    <div id="work" className={`${font.className} relative min-h-screen bg-black overflow-hidden`}>
      <BackgroundBeams />
      <div className="relative z-10 pt-12 px-20 text-white">
        <div>
            Employment History
        </div>
        <div className='text-5xl font-bold mt-2 mb-2'>
            Places Where I've Worked
        </div>
        <div className='mb-12'>
            Hint: drag the cards 😉
        </div>
        
                <div className="relative w-full min-h-[80vh] mt-20 flex justify-center items-center pb-20">
          {isClient && (
            <DraggableCardContainer className="relative w-[800px] h-[600px]">
              {workExperience.map((work, index) => {
                const scatteredPositions = [
                  { top: '50px', left: '0px', rotate: '-25deg', zIndex: 5 },
                  { top: '80px', left: '150px', rotate: '-12deg', zIndex: 3 },
                  { top: '60px', left: '300px', rotate: '0deg', zIndex: 4 },
                  { top: '100px', left: '450px', rotate: '12deg', zIndex: 2 },
                  { top: '40px', left: '600px', rotate: '25deg', zIndex: 1 }
                ];
                
                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      top: scatteredPositions[index].top,
                      left: scatteredPositions[index].left,
                      transform: `rotate(${scatteredPositions[index].rotate})`,
                      zIndex: scatteredPositions[index].zIndex
                    }}
                  >
                    <DraggableCardBody 
                      className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 w-[250px]"
                    >
                      <div className="text-white">
                        <h3 className="text-xl font-bold text-fuchsia-400 mb-2">{work.company}</h3>
                        <h4 className="text-lg font-semibold mb-2">{work.position}</h4>
                        <p className="text-sm text-gray-400 mb-4">{work.duration}</p>
                        <p className="text-sm leading-relaxed">{work.description}</p>
                      </div>
                    </DraggableCardBody>
                  </div>
                );
              })}
            </DraggableCardContainer>
          )}
        </div>
      </div>
    </div>
  )
}

export default Work