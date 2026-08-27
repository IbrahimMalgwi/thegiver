import { ArrowRight, Info } from 'lucide-react'
import { hero } from '../../data/content'
import { CtaLink } from '../ui/CtaLink'

export function Hero() {
  return (
    <section id="home" className="bg-surface-warm pt-24">
      <div className="container mx-auto px-4 py-16 pb-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-brand-purple shadow-md">
            <Info aria-hidden="true" size={16} />
            {hero.caption}
          </p>
          <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-normal text-brand-purple sm:text-5xl lg:text-7xl">
            {hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{hero.subhead}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaLink
              to="/projects-events"
              variant="accent"
              icon={<ArrowRight aria-hidden="true" size={18} />}
            >
              {hero.ctaPrimary}
            </CtaLink>
            <CtaLink to="/#get-involved" variant="outline">
              {hero.ctaSecondary}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
