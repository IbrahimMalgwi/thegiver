import { howItWorks } from '../../data/content'

export function HowItWorks() {
  return (
    <section className="bg-light-sand py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-normal text-ink sm:text-4xl">
          {howItWorks.headline}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {howItWorks.steps.map((step) => (
            <article key={step.step} className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-white">
                {step.step}
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-normal text-secondary">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
