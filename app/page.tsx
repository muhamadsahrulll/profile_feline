import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Platforms } from '@/components/Platforms'
import { Stats } from '@/components/Stats'
import { FeaturedGames } from '@/components/FeaturedGames'
import { About } from '@/components/About'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { BackgroundWrapper } from '@/components/BackgroundWrapper'

export default function Page() {
  return (
    <main className="bg-[#fbf5df] text-slate-900 pt-28">
      <BackgroundWrapper>
        <Header />
        <Hero />
        <Platforms />
        <Stats />
        <FeaturedGames />
        <About />
        <CTA />
      </BackgroundWrapper>
      <Footer />
    </main>
  )
}
