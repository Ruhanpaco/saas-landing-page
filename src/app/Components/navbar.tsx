"use client"

import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            MyBrand
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/foundation" className="text-gray-300 hover:text-white transition-colors">
              Foundation
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              >
                Home
              </Link>
              <Link 
                href="/foundation" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              >
                Foundation
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              >
                Contact
              </Link>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
