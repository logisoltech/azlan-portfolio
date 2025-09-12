"use client";

import React, { useState } from 'react'
import { font } from './font/font'
import { WavyBackground } from './ui/wavy-background'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiry: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div id="contact">
      <WavyBackground containerClassName="min-h-screen" className="">
      <div className={`${font.className} w-full max-w-2xl mx-auto px-8`}>
        <div className="text-center mb-12">
          <div className="text-sm text-gray-300 mb-4">Get In Touch</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact <span className="text-fuchsia-400">Me</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent backdrop-blur-sm"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent backdrop-blur-sm"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent backdrop-blur-sm"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="inquiry" className="block text-sm font-medium text-gray-300 mb-2">
              Inquiry
            </label>
            <textarea
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent backdrop-blur-sm resize-none"
              placeholder="Tell me about your project or inquiry..."
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </WavyBackground>
    </div>
  )
}

export default Contact