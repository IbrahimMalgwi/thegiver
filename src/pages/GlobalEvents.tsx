import { Calendar, PartyPopper } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { GalleryViewer } from '../components/ui/GalleryViewer'
import { globalEventsIntro } from '../data/content'
import { formatMonthDay, getGlobalEvents } from '../services/globalEventsService'
import type { GlobalEvent } from '../types'

function GlobalEventCard({ event }: { event: GlobalEvent }) {
  const [viewerOpen, setViewerOpen] = useState(false)

  return (
    <motion.article
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
    >
      <div className="flex aspect-video items-center justify-center bg-surface-purple text-brand-purple/40">
        {event.image ? (
          <img src={event.image} alt={event.images?.[0]?.alt ?? event.title} className="h-full w-full object-cover" />
        ) : (
          <PartyPopper aria-hidden="true" size={32} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-normal text-brand-purple">{event.title}</h3>
        {event.monthDay && <span className="mt-3 inline-flex w-fit items-center gap-2 text-sm font-semibold text-muted">
          <Calendar aria-hidden="true" size={16} className="text-brand-green" />
          {formatMonthDay(event.monthDay)}
        </span>}
        <p className="mt-4 leading-relaxed text-muted">{event.description}</p>
        {event.images && event.images.length > 0 && (
          <button type="button" onClick={() => setViewerOpen(true)} className="mt-4 w-fit cursor-pointer rounded border border-brand-green/30 px-4 py-2 text-sm font-semibold text-brand-green hover:bg-surface-green">
            View more
          </button>
        )}
      </div>
      {viewerOpen && event.images && (
        <GalleryViewer startWithGrid item={{ title: event.title, images: event.images }} initialIndex={0} onClose={() => setViewerOpen(false)} />
      )}
    </motion.article>
  )
}

export function GlobalEvents() {
  const [events, setEvents] = useState<GlobalEvent[]>([])

  useEffect(() => {
    let active = true
    getGlobalEvents().then((data) => {
      if (active) setEvents(data)
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <section id="global-events" className="bg-surface-warm pb-20 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold tracking-normal text-brand-purple sm:text-4xl">
            {globalEventsIntro.headline}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{globalEventsIntro.text}</p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {events.map((event) => (
            <GlobalEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
