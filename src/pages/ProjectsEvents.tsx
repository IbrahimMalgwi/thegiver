import { Events } from '../components/sections/Events'
import { Flagship } from '../components/sections/Flagship'
import { projectsEventsIntro } from '../data/content'

export function ProjectsEvents() {
  return (
    <>
      <section className="bg-surface-warm pb-4 pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-normal text-brand-purple sm:text-4xl">
              {projectsEventsIntro.headline}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{projectsEventsIntro.text}</p>
          </div>
        </div>
      </section>
      <Flagship />
      <Events />
    </>
  )
}
