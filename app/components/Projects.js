import React from 'react'
import { font } from './font/font'
import { HeroParallax } from './ui/hero-parallax'

const Projects = () => {
  // Real project data
  const projects = [
    {
      title: "Ecommerce Store",
      link: "#",
      thumbnail: "/certifurb.png"
    },
    {
      title: "WordPress Business Website",
      link: "#",
      thumbnail: "/ba.png"
    },
    {
      title: "Shopify Ecommerce Store",
      link: "#",
      thumbnail: "/certifurb.png"
    },
    {
      title: "Youtube Clone",
      link: "#", 
      thumbnail: "/yt-clone.png"
    },
    {
      title: "BASoftech's Website",
      link: "#",
      thumbnail: "/ba.png"
    },
    {
      title: "Ebook Store",
      link: "#",
      thumbnail: "/ebooks.png"
    },
    {
      title: "Dafnia LLC's ERP",
      link: "#",
      thumbnail: "/dafnia.png"
    },
    {
      title: "Mont Fort Group's Website",
      link: "#",
      thumbnail: "/mont-fort.png"
    }
  ];

  return (
    <div id="projects" className={`${font.className} relative bg-black`}>
      <HeroParallax products={projects} />
    </div>
  )
}

export default Projects