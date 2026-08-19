import type { GalleryCategory, GalleryItem } from '../types'

/** Categories the gallery can be filtered/grouped by. */
export const galleryCategories: GalleryCategory[] = [
  'Health & Hygiene',
  'Education',
  'Community Outreach',
  'Humanitarian Response',
  'Economic Empowerment',
  'Youth & Leadership',
]

/**
 * Static gallery data source.
 *
 * No real photographs have been added yet, so this is intentionally empty and
 * the UI shows an empty state. When Supabase is added, replace the body of
 * `getGalleryItems` with a query — the `GalleryItem` shape already matches.
 */
const galleryItems: GalleryItem[] = []

export async function getGalleryItems(): Promise<GalleryItem[]> {
  return galleryItems
}
