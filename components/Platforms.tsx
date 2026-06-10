'use client'

import { Package, Grid3X3, Play } from 'lucide-react'

export function Platforms() {
  const platforms = [
    { name: 'Steam', icon: Package },
    { name: 'itch.io', icon: Grid3X3 },
    { name: 'Google Play', icon: Play },
  ]

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-yellow-100 px-6 py-5 sm:px-10 sm:py-7 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.15)]">
          <h3 className="text-xs uppercase tracking-[0.32em] font-semibold text-yellow-700 mb-4">Available On</h3>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {platforms.map((platform) => {
              const IconComponent = platform.icon
              return (
                <span key={platform.name} className="inline-flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <IconComponent size={20} className="text-slate-700" />
                  {platform.name}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
