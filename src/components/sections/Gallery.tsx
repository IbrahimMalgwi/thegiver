import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { galleryIntro } from '../../data/content'
import { GalleryViewer } from '../ui/GalleryViewer'
import { getGalleryItems } from '../../services/galleryService'
import type { GalleryItem } from '../../types'

export function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([])

  const [viewer, setViewer] = useState<{ item: GalleryItem; index: number } | null>(null)

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

        <div className="mt-10 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-lg bg-white shadow-md">
              {item.images[0] && <button type="button" onClick={() => setViewer({ item, index: 0 })} aria-label={`View photos from ${item.title}`} className="block w-full cursor-pointer overflow-hidden bg-surface-warm">
                <motion.img
                  src={item.images[0].src}
                  alt={item.images[0].alt}
                  loading="lazy"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="aspect-[4/3] w-full object-cover"
                />
              </button>}
              <div className="space-y-3 p-5">
                <span className="text-xs font-semibold text-brand-green">{item.category}</span>
                <h3 className="text-xl font-bold text-brand-purple">{item.title}</h3>
                <div className="space-y-2 text-sm leading-relaxed text-muted">
                  {item.event && <p>{item.event}</p>}
                  {item.location && <p>{item.location}</p>}
                  {item.date && <p>{item.date}</p>}
                  {item.theme && <p><span className="font-semibold">Theme:</span> {item.theme}</p>}
                </div>
                {item.images.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setViewer({ item, index: 0 })}
                    className="cursor-pointer rounded border border-brand-green/30 px-4 py-2 text-sm font-semibold text-brand-green hover:bg-surface-green focus-visible:outline-2 focus-visible:outline-brand-purple"
                  >
                    View {item.images.length === 1 ? 'photo' : `all ${item.images.length} photos`}
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      {viewer && (
        <GalleryViewer
          item={viewer.item}
          initialIndex={viewer.index}
          onClose={() => setViewer(null)}
        />
      )}
    </section>
  )
}
