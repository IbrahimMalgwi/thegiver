import { Clock, HeartHandshake } from 'lucide-react'
import { donate } from '../../data/content'
import { getDonationConfig } from '../../services/donationService'

export function Donate() {
  const config = getDonationConfig()

  return (
    <section id="donate" className="bg-brand-purple py-20 text-white">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
          <HeartHandshake aria-hidden="true" size={28} className="text-brand-gold" />
        </div>
        <p className="mt-6 text-sm font-bold uppercase tracking-normal text-brand-gold">{donate.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-normal sm:text-4xl">{donate.headline}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{donate.text}</p>

        {!config.enabled ? (
          <p className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white">
            <Clock aria-hidden="true" size={16} className="text-brand-gold" />
            {config.comingSoonMessage}
          </p>
        ) : null}

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-gold px-7 py-3 font-bold text-white shadow-xl transition hover:bg-brand-gold-dark"
          >
            {donate.ctaPrimary}
          </a>
          <a
            href="#programs"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 py-3 font-bold text-white transition hover:bg-white/10"
          >
            {donate.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
