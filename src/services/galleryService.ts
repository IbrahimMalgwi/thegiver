import { galleryItems } from '../data/gallery'
import type { GalleryItem } from '../types'

export async function getGalleryItems(): Promise<GalleryItem[]> {
  return galleryItems
}
