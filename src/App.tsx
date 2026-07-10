import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { CurrentProject } from './components/sections/CurrentProject'
import { FAQ } from './components/sections/FAQ'
import { FinalCTA } from './components/sections/FinalCTA'
import { Hero } from './components/sections/Hero'
import { HowItWorks } from './components/sections/HowItWorks'
import { Impact } from './components/sections/Impact'
import { Problem } from './components/sections/Problem'
import { uiText } from './data/content'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <CurrentProject />
        <HowItWorks />
        <About />
        <Impact />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />

      {showBackToTop ? (
        <a
          href="#home"
          className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-xl transition hover:-translate-y-0.5"
          aria-label={uiText.backToTop}
        >
          <ArrowUp aria-hidden="true" size={22} />
        </a>
      ) : null}
    </>
  )
}

export default App
