import { problem } from '../../data/content'

export function Problem() {
  return (
    <section className="bg-light-sand py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-normal text-ink sm:text-4xl">{problem.headline}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">{problem.text}</p>
        </div>
      </div>
    </section>
  )
}
