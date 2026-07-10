import { Info } from 'lucide-react'
import heroImage from '../../assets/hero.png'
import { hero, uiText } from '../../data/content'

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[90vh] overflow-hidden bg-warm-white pt-24">
      <div className="absolute inset-0 -z-10">
        {/* HERO IMAGE PLACEHOLDER */}
        <img src={heroImage} alt={uiText.impactAlt} className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-warm-white via-warm-white/90 to-light-sand/80" />
      </div>

      <div className="container mx-auto flex min-h-[calc(90vh-6rem)] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-secondary shadow-md">
            <Info aria-hidden="true" size={16} />
            {hero.caption}
          </p>
          <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-normal text-ink sm:text-5xl lg:text-7xl">
            {hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{hero.subhead}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#donate"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 text-base font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#impact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-secondary/20 bg-white px-7 py-3 text-base font-bold text-secondary shadow-md transition hover:-translate-y-0.5 hover:border-secondary/40"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
