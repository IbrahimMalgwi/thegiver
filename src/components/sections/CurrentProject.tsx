import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { currentProject, uiText } from '../../data/content'

export function CurrentProject() {
  const progress = Math.round((currentProject.raised / currentProject.goal) * 100)

  return (
    <section id="projects" className="bg-warm-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-normal text-ink sm:text-4xl">
              {currentProject.headline}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{currentProject.text}</p>

            <div className="mt-8 rounded-lg bg-white p-5 shadow-xl">
              <div className="flex items-center justify-between text-sm font-semibold text-secondary">
                <span>
                  {uiText.raisedLabel}: ${currentProject.raised.toLocaleString()}
                </span>
                <span>
                  {uiText.goalLabel}: ${currentProject.goal.toLocaleString()}
                </span>
              </div>
              <div className="mt-4 h-4 overflow-hidden rounded-full bg-light-sand">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${progress}%` }}
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={currentProject.goal}
                  aria-valuenow={currentProject.raised}
                  aria-label={uiText.progressLabel}
                />
              </div>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-muted">
                <CheckCircle2 aria-hidden="true" size={17} className="text-primary" />
                {currentProject.trustNote}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-secondary p-6 text-white shadow-xl">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {currentProject.breakdown.map((item) => (
                <div key={item.amount} className="rounded-lg bg-white/10 p-5">
                  <p className="text-3xl font-extrabold tracking-normal text-accent">${item.amount}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{item.description}</p>
                </div>
              ))}
            </div>
            <a
              href={uiText.donationLink}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-center font-bold text-white shadow-md transition hover:bg-primary/90"
            >
              {currentProject.buttonText}
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
