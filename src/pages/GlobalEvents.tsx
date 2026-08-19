import { Calendar, PartyPopper } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { globalEventsIntro } from '../data/content'
import { formatMonthDay, getGlobalEvents } from '../services/globalEventsService'
import type { GlobalEvent } from '../types'

function GlobalEventCard({ event }: { event: GlobalEvent }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
    >
      <div className="flex aspect-video items-center justify-center bg-surface-purple text-brand-purple/40">
        {event.image ? (
          <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
        ) : (
          <PartyPopper aria-hidden="true" size={32} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-normal text-brand-purple">{event.title}</h3>
        <span className="mt-3 inline-flex w-fit items-center gap-2 text-sm font-semibold text-muted">
          <Calendar aria-hidden="true" size={16} className="text-brand-green" />
          {formatMonthDay(event.monthDay)}
        </span>
        <p className="mt-4 leading-relaxed text-muted">{event.description}</p>
      </div>
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <GlobalEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
