import { CheckCircle2, Sparkles } from 'lucide-react'
import { flagship } from '../../data/content'
import { DonateButton } from '../ui/DonateButton'

export function Flagship() {
  return (
    <section id="projects" className="bg-surface-gold py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-gold/15 px-4 py-2 text-sm font-bold uppercase tracking-normal text-brand-gold-dark">
              <Sparkles aria-hidden="true" size={16} />
              {flagship.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-normal text-brand-purple sm:text-4xl">{flagship.headline}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{flagship.text}</p>

            <ul className="mt-8 grid gap-3">
              {flagship.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-base text-ink">
                  <CheckCircle2 aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-brand-green" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-brand-purple p-8 text-white shadow-xl">
            <h3 className="text-2xl font-extrabold tracking-normal text-brand-gold">Stand for dignity</h3>
            <p className="mt-4 leading-relaxed text-white/85">{flagship.note}</p>
            <DonateButton
              variant="primary"
              label="Support This Program"
              className="mt-6 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
