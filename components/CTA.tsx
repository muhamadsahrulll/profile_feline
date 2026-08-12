'use client'

import { Mail, Send, User, MessageSquare } from 'lucide-react'

export function CTA() {
  return (
    <section
      id="contact"
      className="
        py-24
        bg-gradient-to-b
        from-[#faf7ea]
        via-[#fffaf0]
        to-[#faf7ea]
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            rounded-[24px] lg:rounded-[40px]
            overflow-hidden

            bg-gradient-to-br
            from-yellow-200
            via-yellow-100
            to-orange-100

            border border-yellow-200

            shadow-[0_20px_60px_rgba(0,0,0,0.05)]
          "
        >
          <div className="grid lg:grid-cols-2">

            {/* LEFT */}
            <div className="p-6 sm:p-8 lg:p-16">
              <p className="uppercase tracking-[0.3em] text-orange-500 text-sm font-semibold mb-4">
                Contact Us
              </p>

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-bold
                  text-slate-950
                  leading-tight
                  mb-6
                "
              >
                Let&apos;s Build Something Amazing Together
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Whether you're interested in collaborations,
                publishing opportunities, freelance work,
                or just want to say hello, we'd love to hear from you.
              </p>

              <div
                className="
                  bg-white/60
                  backdrop-blur-sm
                  rounded-3xl
                  p-5
                  border
                  border-white/50
                "
              >

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Email
                    </p>

                    <p
                    className="
                      font-medium
                      break-all
                      text-sm
                      sm:text-base
                    "
                  >
                    contact.felinestudios@gmail.com
                  </p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div className="p-10 lg:p-16 bg-white/70 backdrop-blur-sm">

              <form className="space-y-5">

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      placeholder="Your name"
                      className="
                        w-full
                        h-12 sm:h-14
                        pl-12
                        rounded-2xl
                        border
                        border-white/50
                        bg-white
                        outline-none
                        focus:ring-2
                        focus:ring-yellow-400
                      "
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="
                        w-full
                        h-12 sm:h-14
                        pl-12
                        rounded-2xl
                        border
                        border-white/50
                        bg-white
                        outline-none
                        focus:ring-2
                        focus:ring-yellow-400
                      "
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="
                      w-full
                      h-12 sm:h-14
                      px-5
                      rounded-2xl
                      border
                      border-white/50
                      bg-white
                      outline-none
                      focus:ring-2
                      focus:ring-yellow-400
                    "
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Message
                  </label>

                  <div className="relative">
                    <MessageSquare
                      size={18}
                      className="absolute left-4 top-5 text-slate-400"
                    />

                    <textarea
                      rows={5}
                      placeholder="Tell us about your idea..."
                      className="
                        w-full
                        pl-12
                        p-4
                        rounded-2xl
                        border
                        border-white/50
                        bg-white
                        outline-none
                        resize-none
                        focus:ring-2
                        focus:ring-yellow-400
                      "
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="
                    w-full
                    h-12 sm:h-14

                    rounded-2xl

                    bg-slate-950
                    text-white

                    font-semibold

                    flex
                    items-center
                    justify-center
                    gap-2

                    hover:bg-slate-800
                    transition
                  "
                >
                  <Send size={18} />
                  Send Message
                </button>

              </form>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}