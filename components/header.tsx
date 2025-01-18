'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const phoneNumber = "98653 43636";

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.ico?height=40&width=40"
            alt="Aaruthra Interiors Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold">Aaruthra Interiors</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-gray-900">
            Services
          </Link>
          <Link href="/works" className="text-gray-700 hover:text-gray-900">
            Works
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => window.open(`https://wa.me/${phoneNumber.replace(/\s/g, '')}`, '_blank')}
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
          <Button
            variant="default"
            className="flex items-center gap-2"
            onClick={() => window.open(`tel:${phoneNumber}`, '_blank')}
          >
            <Phone className="h-4 w-4" />
            Call {phoneNumber}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-4 px-2 pb-3 pt-2">
            <Link
              href="/"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/works"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Works
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                className="flex items-center gap-2 w-full"
                onClick={() => {
                  window.open(`https://wa.me/${phoneNumber.replace(/\s/g, '')}`, '_blank');
                  setIsMenuOpen(false);
                }}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button
                variant="default"
                className="flex items-center gap-2 w-full"
                onClick={() => {
                  window.open(`tel:${phoneNumber}`, '_blank');
                  setIsMenuOpen(false);
                }}
              >
                <Phone className="h-4 w-4" />
                Call {phoneNumber}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}