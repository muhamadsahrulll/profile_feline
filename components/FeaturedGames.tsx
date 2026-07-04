'use client'

import { Gamepad2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function FeaturedGames() {
  const games = [
    {
      title: 'Dream Memories',
      description:
        'An adult who has lost connection with their childhood enters a dream world shaped by forgotten memories, imagination, and old traumas. To recover his lost Inner Child, player must climb a magical Snakes and Ladders board toward the Peak of Dreams.',
      image: '/sigma.jpg',
      link: 'https://felinestudios.itch.io/dream-memories',
      platform: 'HTML5',
      tags: ['2D Board Game', '2D Roguelike Card Game'],
    },
    {
      title: 'Just five more minutes, Mom!',
      description:
        'A sentence every child has said at least once. Happily playing with your favorite toys when your mom walks into your room and tells you it\'s time to clean up. You beg for just a little longer, but she\'s had enough. In the imagination of a stubborn child, a simple scolding turns into an all-out battle. Your bedroom becomes a battlefield.',
      image: '/alpha.jpg',
      link: 'https://himemaru.itch.io/just-five-minute-mom',
      platform: 'HTML5',
      tags: ['2D Strategy', 'Cozy'],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                className="
                  relative
                  h-64
                  bg-gray-200
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                "
              >
                {game.image && (
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                )}
                
                {/* Feline Logo Overlay */}
                <div className="relative w-32 h-32 z-10">
                  <Image
                    src="/Feline_PNG_white.png"
                    alt="Feline Studios"
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    bg-blue-50
                    px-3
                    py-1
                    text-[10px]
                    font-bold
                    tracking-wider
                    uppercase
                    text-blue-600
                    mb-4
                  "
                >
                  {game.platform}
                </span>

                <h3 className="text-[2rem] font-bold text-[#2c2c2c] mb-3">
                  {game.title}
                </h3>

                <p className="text-gray-500 leading-8 mb-6 line-clamp-4">
                  {game.description}
                </p>

                <div className="flex gap-2 flex-wrap mb-6">
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

                <Link
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block
                    px-6
                    py-2
                    bg-gradient-to-r
                    from-orange-400
                    to-orange-500
                    text-white
                    rounded-full
                    font-semibold
                    hover:shadow-lg
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Play Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}