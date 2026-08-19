import { Camera, ImageIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { galleryIntro } from '../../data/content'
import { galleryCategories, getGalleryItems } from '../../services/galleryService'
import type { GalleryItem } from '../../types'

export function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([])

  useEffect(() => {
    let active = true
    getGalleryItems().then((data) => {
      if (active) setItems(data)
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <section id="gallery" className="bg-surface-green py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-normal text-brand-purple sm:text-4xl">{galleryIntro.headline}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{galleryIntro.text}</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-brand-green/20 bg-white px-4 py-2 text-sm font-semibold text-brand-green shadow-sm"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-10">
          {items.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {items.map((item) => (
                <figure key={item.id} className="overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="flex aspect-square items-center justify-center overflow-hidden bg-surface-warm text-brand-green/40">
                    {item.image ? (
                      <motion.img
                        src={item.image}
                        alt={item.alt}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Camera aria-hidden="true" size={28} />
                    )}
                  </div>
                  <figcaption className="px-3 py-3 text-xs font-semibold text-muted">
                    <span className="block text-brand-green">{item.category}</span>
                    {item.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-brand-purple/20 bg-white/60 px-6 py-16 text-center">
              <ImageIcon aria-hidden="true" size={36} className="text-brand-green/60" />
              <p className="mt-4 max-w-md leading-relaxed text-muted">
                Photos from our programs and community work will appear here soon. Follow us to see our impact as it unfolds.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
