import React from 'react'
import { font } from './font/font'

const CR = () => {
  return (
    <div className={`${font.className} bg-black pt-12`}>
        <hr className='border-neutral-700'/>
        <p className='text-neutral-600 pl-4 pt-2 pb-2 text-left'>Copyright 2025 Azlan Khan</p>
    </div>
  )
}

export default CR