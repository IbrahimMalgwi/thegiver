import { Compass, Target } from 'lucide-react'
import { about } from '../../data/content'

export function About() {
  return (
    <section id="about" className="bg-surface-warm py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-normal text-brand-green">{about.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-brand-purple sm:text-4xl">{about.headline}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{about.text}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg bg-surface-green p-8 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-white">
              <Target aria-hidden="true" size={24} />
            </div>
            <h3 className="mt-5 text-xl font-bold tracking-normal text-brand-purple">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-muted">{about.mission}</p>
          </article>

          <article className="rounded-lg bg-surface-purple p-8 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple text-white">
              <Compass aria-hidden="true" size={24} />
            </div>
            <h3 className="mt-5 text-xl font-bold tracking-normal text-brand-purple">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-muted">{about.vision}</p>
          </article>
        </div>

        <div className="mx-auto mt-6 max-w-3xl rounded-lg border border-brand-purple/10 bg-white p-6 text-center shadow-md">
          <p className="text-sm font-bold uppercase tracking-normal text-brand-green">{about.founderTitle}</p>
          <p className="mt-2 text-2xl font-extrabold tracking-normal text-brand-purple">{about.founder}</p>
        </div>
      </div>
    </section>
  )
}
