import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundWrapper } from '@/components/BackgroundWrapper'
import { PrivacyPolicyDreamMemories } from '@/components/PrivacyPolicyDreamMemories'

export const metadata: Metadata = {
  title: 'Privacy Policy — Dream Memories | Feline Studios',
  description:
    'Official Privacy Policy for the mobile game Dream Memories developed by Feline Studios. Explains how information is handled, advertising SDK disclosures (Unity Ads, ironSource), and age requirements.',
  keywords: [
    'Dream Memories',
    'Feline Studios',
    'Privacy Policy',
    'Dream Memories Privacy Policy',
    'Mobile Game',
    'Roguelike Card Game',
    'Unity Ads',
    'ironSource',
  ],
  openGraph: {
    title: 'Privacy Policy — Dream Memories | Feline Studios',
    description:
      'Official Privacy Policy for Dream Memories by Feline Studios. Transparent privacy practices, advertising service disclosures, and safety commitments.',
    type: 'website',
    images: [
      {
        url: '/sigma.jpg',
        width: 1200,
        height: 630,
        alt: 'Dream Memories Privacy Policy',
      },
    ],
  },
}

export default function DreamMemoriesPrivacyPolicyPage() {
  return (
    <main className="bg-[#fbf5df] text-slate-900 min-h-screen pt-28">
      <BackgroundWrapper>
        <Header />
        <PrivacyPolicyDreamMemories />
      </BackgroundWrapper>
      <Footer />
    </main>
  )
}
