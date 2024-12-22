import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { HeroSection } from '@/app/components/HeroSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}

