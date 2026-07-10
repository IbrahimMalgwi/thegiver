import { Camera, Play } from 'lucide-react'
import { impact, uiText } from '../../data/content'

const galleryItems = [0, 1, 2, 3, 4, 5] as const

export function Impact() {
  return (
    <section id="impact" className="bg-light-sand py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-normal text-primary">{impact.date}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-ink sm:text-4xl">{impact.headline}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{impact.text}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item}
                className="flex aspect-square flex-col items-center justify-center rounded-lg bg-gray-300 text-secondary shadow-md"
                role="img"
                aria-label={uiText.galleryAlt}
              >
                <Camera aria-hidden="true" size={28} />
                <span className="mt-2 px-2 text-center text-xs font-semibold">{impact.galleryPlaceholder}</span>
              </div>
            ))}
          </div>

          <div
            className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-secondary shadow-xl"
            role="img"
            aria-label={uiText.videoAlt}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F4A261_0%,transparent_58%)] opacity-25" />
            <button
              type="button"
              className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-xl transition hover:scale-105"
              aria-label={uiText.playVideo}
            >
              <Play aria-hidden="true" size={28} fill="currentColor" />
            </button>
            <p className="absolute bottom-5 left-5 right-5 text-center text-sm font-semibold text-white">
              {impact.videoPlaceholder}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
