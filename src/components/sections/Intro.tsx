import { trustStrip } from '../../data/content'
import { CtaLink } from '../ui/CtaLink'
import { DonateButton } from '../ui/DonateButton'

export function Intro() {
  return (
    <section className="bg-brand-purple py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-normal text-white sm:text-4xl">{trustStrip.headline}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85">{trustStrip.text}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <DonateButton variant="accent" label="Donate Now" />
            <CtaLink to="/contact" variant="outlineInverse">
              Become a Partner
            </CtaLink>
          </div>
        </div>

        <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-10 sm:grid-cols-4">
          {trustStrip.facts.map((fact) => (
            <div key={fact.label} className="flex flex-col-reverse items-center gap-1 text-center">
              <dt className="text-xs font-semibold uppercase tracking-wide text-white/70 sm:text-sm">
                {fact.label}
              </dt>
              <dd className="text-2xl font-extrabold tracking-normal text-brand-gold sm:text-3xl">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
