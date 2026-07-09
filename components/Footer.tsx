'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  FaInstagram,
  FaDiscord,
  FaItchIo,
  FaLinkedin
} from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-[#14110f] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="py-20 text-center">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/feline-logo.png"
              alt="Feline Studios"
              width={180}
              height={80}
              className="h-20 w-auto"
            />
          </div>

          {/* Tagline */}
          <p className="text-slate-300 text-lg max-w-xl mx-auto leading-relaxed">
            Crafting cozy, memorable and meaningful
            indie game experiences for players around
            the world.
          </p>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <Link
              href="#home"
              className="text-slate-300 hover:text-yellow-300 transition"
            >
              Home
            </Link>

            <Link
              href="#games"
              className="text-slate-300 hover:text-yellow-300 transition"
            >
              Games
            </Link>

            <Link
              href="#about"
              className="text-slate-300 hover:text-yellow-300 transition"
            >
              About
            </Link>

            <Link
              href="#contact"
              className="text-slate-300 hover:text-yellow-300 transition"
            >
              Contact
            </Link>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-4 mt-10">

            <a
              href="https://discord.gg/M6aCf4sXm"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12 h-12
                rounded-full
                bg-white/10
                backdrop-blur
                flex items-center justify-center
                hover:bg-yellow-400
                hover:text-black
                transition
              "
            >
              <FaDiscord size={20} />
            </a>

            <a
              href="https://www.instagram.com/felinestudios_/"
              className="
                w-12 h-12
                rounded-full
                bg-white/10
                backdrop-blur
                flex items-center justify-center
                hover:bg-yellow-400
                hover:text-black
                transition
              "
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://felinestudios.itch.io/"
              className="
                w-12 h-12
                rounded-full
                bg-white/10
                backdrop-blur
                flex items-center justify-center
                hover:bg-yellow-400
                hover:text-black
                transition
              "
            >
              <FaItchIo size={20} />
            </a>

            <a
              href="https://www.linkedin.com/company/feline-studios"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12 h-12
                rounded-full
                bg-white/10
                backdrop-blur
                flex items-center justify-center
                hover:bg-yellow-400
                hover:text-black
                transition
              "
            >
              <FaLinkedin size={20} />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-slate-400 text-sm">
              © 2026 Feline Studios. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-slate-400">
              <Link
                href="/privacy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-white transition"
              >
                Terms of Service
              </Link>
            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}