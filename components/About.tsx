'use client'

import Image from 'next/image'
import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'


export function About() {
  type TeamMember = {
  name: string
  role: string
  image: string
  color: string
  featured?: boolean
}
  const team: TeamMember[] = [
  {
    name: 'Abdul Aziz',
    role: 'Co-Founder',
    image: '/team/member-1.png',
    color: '#8DD3D5',
  },
  {
    name: 'Idham Malik',
    role: 'CEO',
    image: '/team/member-2.png',
    color: '#D48A2C',
  },
  {
    name: 'Sahrul',
    role: 'Co-Founder',
    image: '/team/member-3.png',
    color: '#88BE4D',
  },
  {
    name: 'Janice',
    role: 'Programmer & Artist',
    image: '/team/member-4.png',
    color: '#E33D9A',
  },
  {
    name: 'Ven',
    role: 'Artist & Copywriter',
    image: '/team/member-5.png',
    color: '#4C7EFF',
  },
  {
    name: 'Alen',
    role: 'Artist & Animator',
    image: '/team/member-6.png',
    color: '#F2B134',
  },
  {
    name: 'Dania',
    role: 'Artist',
    image: '/team/member-7.png',
    color: '#6A4C93',
  },
]

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ]
  )

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ABOUT US */}
        <div
          className="
            rounded-[40px]
            bg-[#faf7ea]
            border border-yellow-100
            overflow-hidden
            shadow-sm
          "
        >
          <div className="grid lg:grid-cols-2 items-center">

            {/* IMAGE */}
            <div className="p-10 lg:p-16">
              <div
                className="
                  aspect-square
                  rounded-[36px]
                  overflow-hidden
                  bg-gradient-to-br
                  from-orange-400
                  via-orange-300
                  to-yellow-400
                  shadow-[0_40px_80px_-30px_rgba(249,115,22,0.45)]
                "
              >
                <div className="w-full h-full flex items-center justify-center text-8xl">
                  🐾
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-10 lg:p-16">
              <p className="uppercase tracking-[0.3em] text-orange-500 text-sm font-semibold mb-6">
                About Us
              </p>

              <h2 className="text-5xl font-bold leading-tight text-slate-950 mb-8">
                Passionate About Building
                <br />
                Memorable Games
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Feline Studios is an indie game studio focused on
                creating cozy, unique, and memorable experiences
                for players worldwide. We combine creativity,
                storytelling, and fun gameplay into every project
                we build.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-slate-950">
                    3
                  </div>
                  <div className="text-sm text-slate-500">
                    Team Members
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-bold text-slate-950">
                    2
                  </div>
                  <div className="text-sm text-slate-500">
                    Games
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-bold text-slate-950">
                    2025
                  </div>
                  <div className="text-sm text-slate-500">
                    Founded
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* OUR TEAM */}

        <div className="mt-28 relative">

          {/* Background Glow */}

          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div
              className="
                absolute
                left-1/2
                top-40
                -translate-x-1/2
                w-[600px]
                h-[600px]
                rounded-full
                bg-orange-100
                opacity-60
                blur-[140px]
              "
            />
          </div>

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-orange-500 text-sm font-semibold mb-4">
              Our Team
            </p>

            <h2 className="text-5xl font-bold text-slate-950 mb-4">
              Meet The Team
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto">
              The passionate people behind Feline Studios who
              transform ideas into memorable gaming experiences.
            </p>

          </div>

          <div
            className="overflow-hidden"
            ref={emblaRef}
          >
            <div className="flex items-end">

              {team.map((member) => (

                <div
                  key={member.name}
                  className="
                    flex-[0_0_100%]
                    md:flex-[0_0_50%]
                    lg:flex-[0_0_33.333%]
                    px-4
                  "
                >

                  <div
                    className={`
                      text-center
                      transition-all
                      duration-500
                      ${member.featured ? 'lg:-translate-y-8' : ''}
                    `}
                  >

                    <div
                      className={`
                        mx-auto
                        overflow-hidden
                        rounded-[32px]
                        bg-gradient-to-br
                        from-yellow-200
                        to-orange-200
                        shadow-lg

                        ${
                          member.featured
                            ? 'w-80 h-96'
                            : 'w-72 h-80'
                        }
                      `}
                    >

                      <Image
                        src={member.image}
                        alt={member.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />

                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-slate-950">
                      {member.name}
                    </h3>

                    <p className="text-orange-500 font-medium">
                      {member.role}
                    </p>

                  </div>

                </div>

              ))}

            </div>
          </div>

          {/* Navigation */}

          <div className="flex justify-center gap-4 mt-12">

            <button
              onClick={scrollPrev}
              className="
                w-12
                h-12
                rounded-full
                bg-white
                shadow-md
                hover:shadow-lg
                transition-all
                flex
                items-center
                justify-center
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={scrollNext}
              className="
                w-12
                h-12
                rounded-full
                bg-white
                shadow-md
                hover:shadow-lg
                transition-all
                flex
                items-center
                justify-center
              "
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}