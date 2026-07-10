import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { faqs } from '../../data/content'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-warm-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y divide-secondary/10 rounded-lg bg-white shadow-xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div key={faq.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-lg font-bold text-secondary"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp aria-hidden="true" className="shrink-0" size={22} />
                  ) : (
                    <ChevronDown aria-hidden="true" className="shrink-0" size={22} />
                  )}
                </button>
                {isOpen ? <p className="px-5 pb-5 leading-relaxed text-muted">{faq.a}</p> : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
