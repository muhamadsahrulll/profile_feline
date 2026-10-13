'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  Calendar,
  Users,
  Gamepad2,
  ExternalLink,
  Copy,
  Check,
  Printer,
  ChevronRight,
  ArrowLeft,
  Mail,
  Sparkles,
  Info,
  CheckCircle2,
  XCircle,
  Share2,
  Lock,
  Globe,
  Radio,
  FileText,
  Search,
} from 'lucide-react'

const SECTIONS = [
  { id: 'section-1', title: '1. Introduction', short: 'Introduction' },
  { id: 'section-2', title: '2. Information We Collect', short: 'Data Collected' },
  { id: 'section-3', title: '3. Advertising & Third-Party Services', short: 'Advertising SDKs' },
  { id: 'section-4', title: '4. How Information Is Used', short: 'Data Usage' },
  { id: 'section-5', title: '5. Data Sharing', short: 'Data Sharing' },
  { id: 'section-6', title: '6. Data Storage & Retention', short: 'Storage & Retention' },
  { id: 'section-7', title: "7. Children's Privacy & Age Requirements", short: "Children's Privacy" },
  { id: 'section-8', title: '8. Game Content & Intellectual Property', short: 'Content & IP' },
  { id: 'section-9', title: '9. International Data Processing', short: 'International' },
  { id: 'section-10', title: '10. Security', short: 'Security' },
  { id: 'section-11', title: '11. Future Updates', short: 'Updates' },
  { id: 'section-12', title: '12. Changes to This Privacy Policy', short: 'Policy Changes' },
  { id: 'section-13', title: '13. Contact Us', short: 'Contact Us' },
]

export function PrivacyPolicyDreamMemories() {
  const [activeSection, setActiveSection] = useState('section-1')
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedUrl, setCopiedUrl] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href)
    }
  }, [])

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id)
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact.felinestudios@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleCopyUrl = () => {
    const url = currentUrl || 'https://felinestudios.com/privacy-policy/dream-memories'
    navigator.clipboard.writeText(url)
    setCopiedUrl(true)
    setTimeout(() => setCopiedUrl(false), 2000)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="relative pb-24">
      {/* Top Banner / Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 px-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-sm text-sm">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-500 font-medium flex-wrap">
            <Link href="/" className="hover:text-amber-600 transition flex items-center gap-1.5">
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <Link href="/#games" className="hover:text-amber-600 transition">
              Games
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-800 font-semibold">Dream Memories</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-amber-600 font-semibold">Privacy Policy</span>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopyUrl}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition shadow-xs"
              title="Copy Policy Link for Google Play or sharing"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition shadow-xs print:hidden"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1e1b18] via-[#2a2421] to-[#1a1715] text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-amber-900/30">
          {/* Subtle Ambient Background Glow */}
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-orange-600/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Official Legal Document
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/10">
                  <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
                  Mobile Game
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Google Play Policy Ready
                </span>
              </div>

              <div>
                <p className="text-sm font-semibold tracking-widest uppercase text-amber-400 mb-2">
                  Feline Studios • Dream Memories
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  Privacy Policy — Dream Memories
                </h1>
                <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  Transparency and respect for your personal privacy. Learn how information is handled when playing Dream Memories.
                </p>
              </div>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <span className="text-slate-400 block mb-1">Developer</span>
                  <span className="font-semibold text-white text-sm">Feline Studios</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <span className="text-slate-400 block mb-1">Game Title</span>
                  <span className="font-semibold text-white text-sm">Dream Memories</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <span className="text-slate-400 block mb-1">Effective Date</span>
                  <span className="font-semibold text-amber-300 text-sm">October 13, 2026</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <span className="text-slate-400 block mb-1">Target Audience</span>
                  <span className="font-semibold text-white text-sm">Ages 13 and above</span>
                </div>
              </div>
            </div>

            {/* Game Key Art Thumbnail */}
            <div className="hidden lg:flex flex-col items-center justify-center">
              <div className="relative w-56 h-72 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group">
                <Image
                  src="/sigma.jpg"
                  alt="Dream Memories Key Art"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Dream Memories</p>
                  <p className="text-[11px] text-slate-300">2D Roguelike Card Game</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Grid (Executive Summary for Players & Reviewers) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 shadow-xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">No Account Needed</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No registration, login, or personal account creation required to play the core game.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 shadow-xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Zero Sensitive Data</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No collection of names, emails, phone numbers, banking details, or government IDs.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 shadow-xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
              <Radio className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Ad Transparency</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Transparent disclosure of third-party ad services (Unity Ads & ironSource) for technical metrics.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 shadow-xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">100% Original Artwork</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Original 2D visual assets created directly by Feline Studios without generative AI tools.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Layout with Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
          {/* Sticky Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block sticky top-28 self-start space-y-4">
            <div className="p-5 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <FileText className="w-4 h-4 text-amber-600" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">Table of Contents</h2>
              </div>

              {/* Quick Search in TOC */}
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-amber-400 focus:bg-white transition"
                />
              </div>

              <nav className="space-y-1 max-h-[calc(100vh-320px)] overflow-y-auto pr-1 text-xs">
                {SECTIONS.filter((s) => s.title.toLowerCase().includes(searchQuery.toLowerCase())).map((section) => {
                  const isActive = activeSection === section.id
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`
                        flex items-center justify-between px-3 py-2 rounded-xl transition-all duration-200
                        ${
                          isActive
                            ? 'bg-amber-400 text-slate-950 font-bold shadow-xs translate-x-1'
                            : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70 font-medium'
                        }
                      `}
                    >
                      <span className="truncate">{section.title}</span>
                      {isActive && <ChevronRight className="w-3.5 h-3.5 shrink-0" />}
                    </a>
                  )
                })}
              </nav>

              {/* Quick Contact Card */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="text-[11px] text-slate-500 mb-2 font-medium">Need clarifications?</p>
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Studio Email'}</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Legal Document Content */}
          <article className="space-y-8 text-slate-800 leading-relaxed">
            {/* Document Header Card */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.04)]">
              <div className="border-b border-slate-100 pb-6 mb-6">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                  Legal Documentation
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                  PRIVACY POLICY — DREAM MEMORIES
                </h2>
                <div className="mt-4 flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-600">
                  <div>
                    <span className="text-slate-400 font-medium">Developer: </span>
                    <span className="font-semibold text-slate-900">Feline Studios</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Game Title: </span>
                    <span className="font-semibold text-slate-900">Dream Memories</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Effective Date: </span>
                    <span className="font-semibold text-slate-900">October 13, 2026</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Target Audience: </span>
                    <span className="font-semibold text-slate-900">Players aged 13 and above</span>
                  </div>
                </div>
              </div>

              {/* SECTION 1 */}
              <section id="section-1" className="scroll-mt-32 pt-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm shrink-0">
                    1
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950">1. Introduction</h3>
                </div>
                <div className="space-y-4 text-slate-700 pl-0 sm:pl-11 text-base">
                  <p>
                    Welcome to <strong className="text-slate-950">Dream Memories</strong>, an independent game developed and published by <strong className="text-slate-950">Feline Studios</strong>.
                  </p>
                  <p>
                    <strong>Dream Memories</strong> is a 2D roguelike card game inspired by the theme of inner-child memories, personal reflection, and fictional storytelling. The game is designed to provide an enjoyable gaming experience through card-based gameplay, original 2D artwork, and narrative elements.
                  </p>
                  <p>
                    This Privacy Policy explains how information may be handled when you download, install, or play Dream Memories.
                  </p>
                  <p>
                    Feline Studios respects user privacy and is committed to being transparent about the information associated with the game, including information that may be processed by third-party advertising services.
                  </p>
                  <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/70 text-amber-950 text-sm font-medium">
                    By using Dream Memories, you acknowledge this Privacy Policy.
                  </div>
                </div>
              </section>
            </div>

            {/* SECTION 2 */}
            <section
              id="section-2"
              className="scroll-mt-32 p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm shrink-0">
                  2
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">2. Information We Collect</h3>
              </div>
              <div className="space-y-4 text-slate-700 pl-0 sm:pl-11 text-base">
                <p>
                  Dream Memories does not require users to create an account, register personal information, or provide sensitive personal details to play the game.
                </p>
                <p>
                  Feline Studios does not intentionally collect personal information directly from players through the game&apos;s core gameplay.
                </p>

                {/* Explicit Non-Collection Callout */}
                <div className="my-5 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-500" />
                    The game does not request or collect personal information such as:
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 pl-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      <span>Full name, home address, or telephone number.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      <span>Personal email address or account credentials.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      <span>Government identification or official government records.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      <span>Financial information, banking details, or payment card information.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      <span>Health information or medical records.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      <span>Personal photographs, contacts, or private messages.</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Dream Memories is a game focused on gameplay and fictional storytelling. It does not provide government, financial, or healthcare services.
                </p>
                <p className="text-slate-600 text-sm">
                  However, third-party advertising services integrated into the game may automatically process certain technical or advertising-related information, as described in Section 3.
                </p>
              </div>
            </section>

            {/* SECTION 3 */}
            <section
              id="section-3"
              className="scroll-mt-32 p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm shrink-0">
                  3
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                  3. Advertising and Third-Party Services
                </h3>
              </div>
              <div className="space-y-4 text-slate-700 pl-0 sm:pl-11 text-base">
                <p>
                  Dream Memories uses third-party advertising services to support the development and maintenance of the game as an independent game project.
                </p>

                <div>
                  <p className="font-semibold text-slate-900 mb-2">The advertising services integrated into the game include:</p>
                  <div className="grid sm:grid-cols-2 gap-3 my-3">
                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center font-bold text-slate-900 text-sm">
                        UA
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">Unity Ads</p>
                        <p className="text-xs text-slate-500">Video & Interstitial Ads</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200/60 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center font-bold text-slate-900 text-sm">
                        iS
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">ironSource</p>
                        <p className="text-xs text-slate-500">Advertising Platform & Mediation</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p>
                  Depending on the SDK versions, integrations, and configurations used in the game, these services may process information such as:
                </p>
                <ul className="space-y-2 text-sm text-slate-600 pl-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>Advertising identifiers, including the device&apos;s advertising ID where available and permitted.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>IP address and general device or network information.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>Device model, operating system, and technical identifiers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>Advertising impressions, clicks, and interactions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>Advertising performance, fraud prevention, and diagnostic information.</span>
                  </li>
                </ul>

                <p>
                  This information may be processed to deliver advertisements, measure advertising performance, prevent fraudulent activity, and maintain the advertising services.
                </p>
                <p>
                  Feline Studios does not directly collect this information for its own user database through the game&apos;s core gameplay. However, third-party advertising providers may process data independently or on behalf of their partners in accordance with their own privacy policies and applicable requirements.
                </p>

                {/* Third-party links card */}
                <div className="mt-6 p-5 rounded-2xl bg-slate-900 text-white">
                  <p className="text-sm font-semibold text-amber-400 mb-3 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    For more information, please review the relevant policies:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <a
                      href="https://unity.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition border border-white/10 flex items-center justify-between group"
                    >
                      <span className="text-xs font-medium text-slate-200 group-hover:text-white">Unity Privacy Policy</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 shrink-0 ml-2" />
                    </a>
                    <a
                      href="https://unity.com/products/unity-ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition border border-white/10 flex items-center justify-between group"
                    >
                      <span className="text-xs font-medium text-slate-200 group-hover:text-white">Unity Ads</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 shrink-0 ml-2" />
                    </a>
                    <a
                      href="https://unity.com/products/levelplay"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition border border-white/10 flex items-center justify-between group"
                    >
                      <span className="text-xs font-medium text-slate-200 group-hover:text-white">Unity LevelPlay</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 shrink-0 ml-2" />
                    </a>
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic">
                  The exact information processed depends on the advertising SDKs and settings included in the released version of Dream Memories.
                </p>
              </div>
            </section>

            {/* SECTION 4 */}
            <section
              id="section-4"
              className="scroll-mt-32 p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm shrink-0">
                  4
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">4. How Information Is Used</h3>
              </div>
              <div className="space-y-4 text-slate-700 pl-0 sm:pl-11 text-base">
                <p>
                  Feline Studios does not use the game&apos;s core gameplay to collect personal information for profiling players or building personal user databases.
                </p>
                <p>
                  Information that may be processed by integrated third-party services can be used for purposes such as:
                </p>
                <ul className="space-y-2 text-sm text-slate-600 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>Displaying advertisements within the game.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>Measuring advertisement impressions and performance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>Preventing advertising fraud and abuse.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>Maintaining the reliability and functionality of advertising services.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>Meeting applicable legal, security, and compliance requirements.</span>
                  </li>
                </ul>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Feline Studios does not sell players&apos; personal information directly.</span>
                </div>
              </div>
            </section>

            {/* SECTION 5 */}
            <section
              id="section-5"
              className="scroll-mt-32 p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm shrink-0">
                  5
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">5. Data Sharing</h3>
              </div>
              <div className="space-y-4 text-slate-700 pl-0 sm:pl-11 text-base">
                <p>
                  Feline Studios does not operate a personal user database for Dream Memories as part of its core gameplay.
                </p>
                <p>
                  Nevertheless, technical and advertising-related information may be transmitted to or processed by third-party service providers integrated into the game, particularly Unity Ads and ironSource.
                </p>
                <p>
                  These providers may process information according to their own policies and applicable legal requirements.
                </p>
                <p className="text-slate-600 text-sm">
                  We encourage players to review the privacy policies of the relevant third-party services to understand how their information may be handled.
                </p>
              </div>
            </section>

            {/* SECTION 6 */}
            <section
              id="section-6"
              className="scroll-mt-32 p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm shrink-0">
                  6
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">6. Data Storage and Retention</h3>
              </div>
              <div className="space-y-4 text-slate-700 pl-0 sm:pl-11 text-base">
                <p>
                  Dream Memories does not require a personal user account or direct submission of personal information to play.
                </p>
                <p>
                  Feline Studios does not intentionally store players&apos; personal information in its own game servers through the core gameplay.
                </p>
                <p>
                  Certain game settings or progress may be stored locally on the player&apos;s device, depending on the implemented game features.
                </p>
                <p>
                  Information processed by third-party advertising services is subject to the respective providers&apos; data retention and deletion practices.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-600 text-sm">
                  <strong className="text-slate-800">Uninstalling the game:</strong> Uninstalling the game may remove locally stored game data, but it may not delete information previously processed by third-party service providers.
                </div>
              </div>
            </section>

            {/* SECTION 7 */}
            <section
              id="section-7"
              className="scroll-mt-32 p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm shrink-0">
                  7
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                  7. Children&apos;s Privacy and Age Requirements
                </h3>
              </div>
              <div className="space-y-4 text-slate-700 pl-0 sm:pl-11 text-base">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-200">
                  <Users className="w-5 h-5 text-amber-700 shrink-0" />
                  <p className="font-semibold text-amber-950 text-sm">
                    Dream Memories is intended for players aged 13 and above.
                  </p>
                </div>
                <p>
                  The game is not intentionally designed to collect personal information from children under the age of 13.
                </p>
                <p>
                  Because the game includes third-party advertising services, the advertising SDK configuration and advertising content must be appropriate for the game&apos;s declared audience and comply with applicable privacy laws and Google Play policies.
                </p>
                <p>
                  If you believe that personal information has been collected from a child in a manner inconsistent with this Privacy Policy, please contact Feline Studios so that the matter can be reviewed.
                </p>
              </div>
            </section>

            {/* SECTION 8 */}
            <section
              id="section-8"
              className="scroll-mt-32 p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm shrink-0">
                  8
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                  8. Game Content and Intellectual Property
                </h3>
              </div>
              <div className="space-y-4 text-slate-700 pl-0 sm:pl-11 text-base">
                <p>
                  Dream Memories is a fictional entertainment product.
                </p>
                <p>
                  Its story, characters, environments, and narrative events are created for the purposes of gameplay and storytelling. The game does not provide official government information, financial advice, medical advice, or other professional services.
                </p>
                <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-purple-950 text-sm">Human-Crafted Artistry</p>
                    <p className="text-xs text-purple-900 mt-0.5">
                      The original 2D visual assets used in Dream Memories are created by Feline Studios without the use of generative AI tools.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  This section describes the nature of the game&apos;s content and does not change the data practices described elsewhere in this Privacy Policy.
                </p>
              </div>
            </section>

            {/* SECTION 9 */}
            <section
              id="section-9"
              className="scroll-mt-32 p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm shrink-0">
                  9
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                  9. International Data Processing
                </h3>
              </div>
              <div className="space-y-4 text-slate-700 pl-0 sm:pl-11 text-base">
                <p>
                  Third-party advertising providers may process technical or advertising-related information on servers located in different countries, depending on their infrastructure and service arrangements.
                </p>
                <p>
                  Where applicable, these providers are responsible for handling such information in accordance with their privacy policies and applicable data protection requirements.
                </p>
              </div>
            </section>

            {/* SECTION 10 */}
            <section
              id="section-10"
              className="scroll-mt-32 p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm shrink-0">
                  10
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">10. Security</h3>
              </div>
              <div className="space-y-4 text-slate-700 pl-0 sm:pl-11 text-base">
                <p>
                  Feline Studios aims to minimize the collection of personal information through the game&apos;s core gameplay.
                </p>
                <p>
                  Although reasonable measures may be taken to protect the game and its development systems, no method of electronic transmission or storage can be guaranteed to be completely secure.
                </p>
                <p>
                  The security practices and protections applied to information processed by third-party advertising services are also governed by the respective providers&apos; policies.
                </p>
              </div>
            </section>

            {/* SECTION 11 */}
            <section
              id="section-11"
              className="scroll-mt-32 p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm shrink-0">
                  11
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">11. Future Updates</h3>
              </div>
              <div className="space-y-4 text-slate-700 pl-0 sm:pl-11 text-base">
                <p>
                  Dream Memories may receive future updates that introduce new gameplay mechanics, features, languages, content, or technical improvements.
                </p>
                <p className="font-medium text-slate-900">
                  The game initially supports Indonesian and English.
                </p>
                <p>
                  If a future update materially changes the game&apos;s data collection practices, introduces account functionality, or adds new third-party services that affect privacy, this Privacy Policy will be updated as appropriate.
                </p>
                <p>
                  The latest version of this policy will be made available through the designated Privacy Policy webpage.
                </p>
              </div>
            </section>

            {/* SECTION 12 */}
            <section
              id="section-12"
              className="scroll-mt-32 p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm shrink-0">
                  12
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                  12. Changes to This Privacy Policy
                </h3>
              </div>
              <div className="space-y-4 text-slate-700 pl-0 sm:pl-11 text-base">
                <p>
                  Feline Studios may revise this Privacy Policy when necessary to reflect changes to the game, advertising integrations, legal requirements, or platform policies.
                </p>
                <p>
                  Any revisions will be published on the Privacy Policy webpage, together with an updated effective date.
                </p>
                <p className="text-slate-600 text-sm">
                  Players are encouraged to review this page periodically.
                </p>
              </div>
            </section>

            {/* SECTION 13 */}
            <section
              id="section-13"
              className="scroll-mt-32 p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm shrink-0">
                  13
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">13. Contact Us</h3>
              </div>
              <div className="space-y-5 text-slate-700 pl-0 sm:pl-11 text-base">
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or the privacy practices of Dream Memories, please contact:
                </p>

                {/* Contact Card */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                        Developer / Studio
                      </p>
                      <p className="font-bold text-slate-900 text-base">Feline Studios</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">Game</p>
                      <p className="font-bold text-slate-900 text-base">Dream Memories</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-amber-200/60">
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                      Contact Email
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="mailto:contact.felinestudios@gmail.com"
                        className="font-semibold text-slate-900 hover:text-amber-700 transition underline underline-offset-4"
                      >
                        contact.felinestudios@gmail.com
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white text-slate-700 border border-amber-200 hover:bg-amber-100/50 transition"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-500" />
                            <span>Copy Email</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-amber-200/60">
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                      Privacy Policy URL (Official Webpage)
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <code className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs sm:text-sm font-mono text-slate-800 select-all break-all">
                        {currentUrl || 'https://felinestudios.com/privacy-policy/dream-memories'}
                      </code>
                      <button
                        onClick={handleCopyUrl}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-400 text-slate-950 hover:bg-yellow-400 transition shadow-xs"
                      >
                        {copiedUrl ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-slate-950" />
                            <span>Copied URL!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-950" />
                            <span>Copy URL</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-2">
                      💡 Use this URL when setting the &ldquo;Privacy Policy&rdquo; field in Google Play Console.
                    </p>
                  </div>
                </div>

                {/* Closing Gratitude Note */}
                <div className="pt-6 border-t border-slate-100 text-center sm:text-left space-y-2">
                  <p className="text-slate-700">
                    Thank you for playing Dream Memories and supporting independent game development.
                  </p>
                  <p className="font-bold text-slate-950">Feline Studios</p>
                  <p className="italic text-amber-700 font-serif text-sm">
                    Dream Memories — A journey through inner-child memories.
                  </p>
                </div>
              </div>
            </section>

            {/* Back to Home & Top Bar */}
            <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-md border border-white/60 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/#games"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Games</span>
              </Link>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xs font-semibold text-slate-600 hover:text-amber-600 transition"
              >
                ↑ Back to Top
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
