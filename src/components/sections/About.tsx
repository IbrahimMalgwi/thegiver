import { about } from '../../data/content'

export function About() {
  return (
    <section id="about" className="bg-warm-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div className="rounded-lg bg-light-sand p-8 shadow-md">
            <p className="text-sm font-bold uppercase tracking-normal text-primary">{about.founderTitle}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-secondary">{about.founder}</h2>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold tracking-normal text-ink sm:text-4xl">{about.headline}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{about.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
