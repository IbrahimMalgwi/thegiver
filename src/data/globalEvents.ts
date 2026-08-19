import type { GlobalEvent } from '../types'

/**
 * Curated international observance days relevant to QSSDI's mission areas
 * (health, education, humanitarian response, women & youth empowerment).
 * `monthDay` drives which one is shown as "today's" event; see
 * `globalEventsService.getEventOfTheDay`.
 *
 * This is the single source of truth for global events — no other file
 * should define a `GlobalEvent`. To add a new observance day, add an entry
 * to the array below; `validateGlobalEvents` checks its shape at import
 * time and throws immediately if something's wrong (duplicate id,
 * malformed date, empty title/description).
 */
const MONTH_DAY_PATTERN = /^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/

function validateGlobalEvents(events: GlobalEvent[]): GlobalEvent[] {
  const seenIds = new Set<string>()

  for (const event of events) {
    if (!event.id.trim()) {
      throw new Error('globalEvents: every event needs a non-empty id.')
    }
    if (seenIds.has(event.id)) {
      throw new Error(`globalEvents: duplicate id "${event.id}" — ids must be unique.`)
    }
    seenIds.add(event.id)

    if (!event.title.trim()) {
      throw new Error(`globalEvents: event "${event.id}" needs a non-empty title.`)
    }
    if (!event.description.trim()) {
      throw new Error(`globalEvents: event "${event.id}" needs a non-empty description.`)
    }
    if (!MONTH_DAY_PATTERN.test(event.monthDay)) {
      throw new Error(
        `globalEvents: event "${event.id}" has an invalid monthDay "${event.monthDay}" — expected "MM-DD".`,
      )
    }
  }

  return events
}

export const globalEvents: GlobalEvent[] = validateGlobalEvents([
  {
    id: 'world-humanitarian-day',
    title: 'World Humanitarian Day',
    monthDay: '08-19',
    description:
      'Honoring aid workers and communities who respond to crisis, and renewing the call to protect and support people affected by conflict and disaster.',
    image: 'images/Humanitarian.jpeg',
  }
])
