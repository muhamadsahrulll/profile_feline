'use client'

import Image from 'next/image'

export function About() {
  const team = [
    {
      name: 'Abdul Aziz',
      role: 'Co-Founder',
      image: '/team/member-1.png',
    },
    {
      name: 'Idham Malik',
      role: 'CEO',
      image: '/team/member-2.png',
      featured: true,
    },
    {
      name: 'Sahrul',
      role: 'Co-Founder',
      image: '/team/member-3.png',
    },
  ]

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
        <div className="mt-28">

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

          <div className="grid lg:grid-cols-3 gap-8 items-end">

            {team.map((member) => (
              <div
                key={member.name}
                className={`
                  text-center
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
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}