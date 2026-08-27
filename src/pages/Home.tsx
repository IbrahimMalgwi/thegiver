import { About } from '../components/sections/About'
import { Donate } from '../components/sections/Donate'
import { FAQ } from '../components/sections/FAQ'
import { Gallery } from '../components/sections/Gallery'
import { GetInvolved } from '../components/sections/GetInvolved'
import { Hero } from '../components/sections/Hero'
import { Intro } from '../components/sections/Intro'
import { Leadership } from '../components/sections/Leadership'
import { Programs } from '../components/sections/Programs'

export function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <About />
      <Programs />
      <GetInvolved />
      <Gallery />
      <Leadership />
      <FAQ />
      <Donate />
    </>
  )
}
