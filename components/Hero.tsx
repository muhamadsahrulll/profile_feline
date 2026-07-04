
'use client'

import Image from 'next/image'
import { PawPatternOverlay } from './PawPatternOverlay'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#fafafa] pt-14 pb-24 sm:pt-24 sm:pb-32">
      {/* Top Right Circle */}
      <div
        className="
          absolute
          -top-40
          right-0
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#f7efc9]
          opacity-80
          -z-10
        "
      />

      {/* Bottom Left Circle */}
      <div
        className="
          absolute
          -bottom-24
          -left-24
          w-[260px]
          h-[260px]
          rounded-full
          bg-[#f3ead5]
          opacity-80
          -z-10
        "
      />

      {/* Bottom Curve */}
      <div
        className="
          absolute
          left-1/2
          -bottom-56
          -translate-x-1/2
          w-[140%]
          h-[420px]
          rounded-[100%]
          bg-[#f3ead5]
          -z-10
        "
      />

      <div className="absolute inset-x-0 top-0 h-72 bg-yellow-100/40 blur-3xl -z-10"></div>
      <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-yellow-200/60 blur-3xl -z-10"></div>
      <div className="absolute -left-24 top-60 h-80 w-80 rounded-full bg-yellow-100/80 blur-3xl -z-10"></div>
      <div className="absolute left-1/2 bottom-0 h-64 w-64 -translate-x-1/2 rounded-full bg-yellow-200/60 blur-3xl -z-10"></div>

      {/* Top Right Paw Pattern */}
      <div
        className="
          absolute
          right-10
          top-0
          w-48
          h-48
          opacity-40
          pointer-events-none
          -z-10
        "
      >
        <PawPatternOverlay color="yellow" />
      </div>

      {/* Bottom Left Paw Pattern */}
      <div
        className="
          absolute
          left-0
          bottom-0
          w-56
          h-56
          opacity-30
          pointer-events-none
          -z-10
        "
      >
        <PawPatternOverlay color="yellow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-6
                py-4
                shadow-sm
                border
                border-gray-100
                text-sm
                font-medium
                text-slate-600
              "
            >
              <span className="text-lg">🎮</span>
              <span>Small-fresh indie game developer from Indonesia</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-black leading-[0.95]">
                Crafting Cozy & Memorable Indie Game Experiences
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed">
                We build fun and charming indie games filled with personality, adventure, and unforgettable experiences for players around the world.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#games" className="bg-yellow-400 text-slate-950 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition shadow-sm inline-block">
                Explore Games
              </a>
              <a href="#about" className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-800 transition shadow-sm inline-block">
                About Us
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[30rem] aspect-square rounded-[3rem] bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 shadow-[0_80px_140px_-60px_rgba(245,158,11,0.85)] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-x-8 inset-y-10 rounded-full bg-yellow-200/70" />
              <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-yellow-200/90 opacity-90" />
              <div className="absolute bottom-12 right-10 h-24 w-24 rounded-full bg-yellow-100/90 opacity-90" />
              <div className="absolute inset-0 rounded-[3rem] border border-white/10" />
              
              {/* Feline White Logo */}
              <div className="relative z-50 w-100 h-100">
                <Image
                  src="/Feline_PNG_white.png"
                  alt="Feline Studios"
                  fill
                  className="object-contain"
                  sizes="160px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
