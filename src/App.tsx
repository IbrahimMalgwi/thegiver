import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Donate } from './components/sections/Donate'
import { Events } from './components/sections/Events'
import { FAQ } from './components/sections/FAQ'
import { Flagship } from './components/sections/Flagship'
import { Gallery } from './components/sections/Gallery'
import { GetInvolved } from './components/sections/GetInvolved'
import { Hero } from './components/sections/Hero'
import { Intro } from './components/sections/Intro'
import { Leadership } from './components/sections/Leadership'
import { Programs } from './components/sections/Programs'
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
        <Intro />
        <About />
        <Programs />
        <Flagship />
        <Events />
        <Gallery />
        <GetInvolved />
        <Leadership />
        <FAQ />
        <Donate />
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
