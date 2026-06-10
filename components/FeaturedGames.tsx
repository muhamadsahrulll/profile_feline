'use client'

import { Gamepad2 } from 'lucide-react'

export function FeaturedGames() {
  const games = [
    {
      title: 'Project Meow',
      description:
        'A cozy and charming indie adventure game full of exploration and memorable moments.',
      bg: 'bg-[#efd538]',
      overlay: 'bg-[#d8bf2a]',
      tags: ['Adventure', 'Cozy', 'Puzzle'],
    },
    {
      title: 'Catventure',
      description:
        'A cozy and charming indie adventure game full of exploration and memorable moments.',
      bg: 'bg-[#f1a331]',
      overlay: 'bg-[#db9226]',
      tags: ['Adventure', 'Cozy', 'Puzzle'],
    },
    {
      title: 'Paw Legends',
      description:
        'A cozy and charming indie adventure game full of exploration and memorable moments.',
      bg: 'bg-[#8c6b45]',
      overlay: 'bg-[#735537]',
      tags: ['Adventure', 'Cozy', 'Puzzle'],
    },
  ]

  return (
    <section
      id="games"
      className="relative py-24 overflow-hidden"
    >
      {/* Background curve */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[#f3ead5] rounded-t-[100%]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-5xl font-bold text-[#232323] mb-3">
            Featured Games
          </h2>

          <p className="text-lg text-gray-500">
            Some projects we are currently working on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <article
              key={game.title}
              className="
                bg-[#f8f8f8]
                rounded-[32px]
                overflow-hidden
                shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              {/* Image Area */}
              <div
                className={`
                  relative
                  h-44
                  ${game.bg}
                  overflow-hidden
                `}
              >
                {/* Decorative Shape */}
                <div className="absolute -left-6 -top-6 w-32 h-32 bg-white/10 rotate-[15deg]" />

                {/* Bottom Overlay */}
                <div
                  className={`
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-14
                    ${game.overlay}
                    opacity-60
                  `}
                />

                {/* Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                    <Gamepad2
                      size={42}
                      className="text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    bg-orange-50
                    px-3
                    py-1
                    text-[10px]
                    font-bold
                    tracking-wider
                    uppercase
                    text-orange-500
                    mb-4
                  "
                >
                  Coming Soon
                </span>

                <h3 className="text-[2rem] font-bold text-[#2c2c2c] mb-3">
                  {game.title}
                </h3>

                <p className="text-gray-500 leading-8 mb-6">
                  {game.description}
                </p>

                <div className="flex gap-2 flex-wrap">
                  {game.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        bg-[#f4ebcf]
                        text-[#8b6b2c]
                        text-xs
                        font-medium
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}