import { Calendar, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { eventsIntro } from '../../data/content'
import { getEvents } from '../../services/eventsService'
import type { EventItem } from '../../types'

function EventCard({ event }: { event: EventItem }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
    >
      <div className="flex aspect-video items-center justify-center bg-surface-green text-brand-green/40">
        {event.image ? (
          <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
        ) : (
          <Calendar aria-hidden="true" size={32} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit rounded-full bg-brand-green/10 px-3 py-1 text-xs font-bold uppercase tracking-normal text-brand-green">
          {event.programArea}
        </span>
        <h4 className="mt-4 text-xl font-bold tracking-normal text-brand-purple">{event.title}</h4>
        <div className="mt-3 grid gap-2 text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <Calendar aria-hidden="true" size={16} className="text-brand-green" />
            {event.date}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden="true" size={16} className="text-brand-green" />
            {event.location}
          </span>
        </div>
        <p className="mt-4 leading-relaxed text-muted">{event.description}</p>
      </div>
    </motion.article>
  )
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-brand-purple/20 bg-white/60 px-6 py-14 text-center">
      <Calendar aria-hidden="true" size={32} className="text-brand-green/60" />
      <p className="mt-4 max-w-md leading-relaxed text-muted">{message}</p>
    </div>
  )
}

export function Events() {
  const [events, setEvents] = useState<EventItem[]>([])

  useEffect(() => {
    let active = true
    getEvents().then((data) => {
      if (active) setEvents(data)
    })
    return () => {
      active = false
    }
  }, [])

  const upcoming = events.filter((event) => event.status === 'upcoming')
  const past = events.filter((event) => event.status === 'past')

  return (
    <section id="events" className="bg-surface-warm py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-normal text-brand-purple sm:text-4xl">{eventsIntro.headline}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{eventsIntro.text}</p>
        </div>

        <div className="mt-12 space-y-12">
          <div>
            <h3 className="text-xl font-bold tracking-normal text-brand-purple">Upcoming Events</h3>
            {upcoming.length > 0 ? (
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {upcoming.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="mt-6">
                <EmptyState message="No upcoming events at the moment. Follow us for updates on our next community initiative." />
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold tracking-normal text-brand-purple">Past Events</h3>
            {past.length > 0 ? (
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {past.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="mt-6">
                <EmptyState message="Our past events will be shared here as our work grows. Stay tuned." />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
