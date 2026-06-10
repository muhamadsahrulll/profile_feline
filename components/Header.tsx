'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <nav
            className="
              flex items-center justify-between
              h-20
              px-8

              rounded-[30px]

              bg-white/55
              backdrop-blur-2xl

              border border-white/60

              shadow-[0_10px_40px_rgba(15,23,42,0.08)]
            "
          >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/feline-logo.png"
              alt="Feline Studios"
              width={140}
              height={90}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12 flex-1 justify-center">
          <Link
            href="#home"
            className="text-[15px] font-medium tracking-wide text-slate-800 hover:text-amber-500 transition-colors"
          >
            HOME
          </Link>

          <Link
            href="#games"
            className="text-[15px] font-medium tracking-wide text-slate-800 hover:text-amber-500 transition-colors"
          >
            GAMES
          </Link>

          <Link
            href="#about"
            className="text-[15px] font-medium tracking-wide text-slate-800 hover:text-amber-500 transition-colors"
          >
            ABOUT US
          </Link>

          <Link
            href="#contact"
            className="text-[15px] font-medium tracking-wide text-slate-800 hover:text-amber-500 transition-colors"
          >
            CONTACT
          </Link>
        </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="
                inline-flex items-center justify-center

                px-8
                h-11

                rounded-full

                bg-[#020826]
                text-white

                text-sm
                font-medium

                hover:scale-105
                hover:shadow-lg

                transition-all
                duration-300
              "
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
              md:hidden
              mt-3
              rounded-3xl

              bg-white/90
              backdrop-blur-xl

              border border-white/50
              shadow-xl
              p-5
            "
          >
            <div className="space-y-4">
              <Link
                href="#home"
                className="block text-slate-700 font-medium"
              >
                HOME
              </Link>

              <Link
                href="#games"
                className="block text-slate-700 font-medium"
              >
                GAMES
              </Link>

              <Link
                href="#about"
                className="block text-slate-700 font-medium"
              >
                ABOUT US
              </Link>

              <Link
                href="#contact"
                className="block text-slate-700 font-medium"
              >
                CONTACT
              </Link>

              <Link
                href="#contact"
                className="
                  block
                  w-full
                  text-center
                  bg-slate-950
                  text-white
                  py-3
                  rounded-full
                  font-medium
                "
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}