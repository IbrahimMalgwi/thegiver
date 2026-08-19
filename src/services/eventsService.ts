import type { EventItem } from '../types'

/**
 * Static event data source.
 *
 * There are no real events to show yet, so this is intentionally empty and the
 * UI renders a friendly empty state. When Supabase is added, replace the body
 * of `getEvents` with a query (e.g. `supabase.from('events').select()`) — the
 * `EventItem` shape and the async signature already match, so no UI changes are
 * required.
 */
const events: EventItem[] = []

export async function getEvents(): Promise<EventItem[]> {
  return events
}

export async function getUpcomingEvents(): Promise<EventItem[]> {
  const all = await getEvents()
  return all.filter((event) => event.status === 'upcoming')
}

export async function getPastEvents(): Promise<EventItem[]> {
  const all = await getEvents()
  return all.filter((event) => event.status === 'past')
}
