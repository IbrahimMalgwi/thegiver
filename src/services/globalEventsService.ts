import { globalEvents } from '../data/globalEvents'
import type { GlobalEvent } from '../types'

function parseMonthDay(monthDay: string): [month: number, day: number] {
  const parts = monthDay.split('-').map(Number)
  return [parts[0] ?? 1, parts[1] ?? 1]
}

/**
 * Static list of curated observance days. Async signature already matches a
 * future backend query, so no UI changes are required when this is wired up
 * (e.g. to Supabase) to support organization-submitted global events.
 */
export async function getGlobalEvents(): Promise<GlobalEvent[]> {
  return globalEvents
}

export function formatMonthDay(monthDay: string): string {
  const [month, day] = parseMonthDay(monthDay)
  const date = new Date(2000, month - 1, day)
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
}
