import { finalCta } from '../../data/content'

export function FinalCTA() {
  return (
    <section id="donate" className="bg-secondary py-20 text-white">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-normal sm:text-4xl">{finalCta.headline}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{finalCta.text}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 font-bold text-white shadow-xl transition hover:bg-primary/90"
          >
            {finalCta.ctaPrimary}
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 py-3 font-bold text-white transition hover:bg-white/10"
          >
            {finalCta.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
