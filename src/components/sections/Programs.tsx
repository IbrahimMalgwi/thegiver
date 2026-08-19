import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { programs, programsIntro } from '../../data/content'

export function Programs() {
  return (
    <section id="programs" className="bg-surface-green py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-normal text-brand-purple sm:text-4xl">{programsIntro.headline}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{programsIntro.text}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon

            return (
              <motion.article
                key={program.id}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex flex-col rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <Icon aria-hidden="true" size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-normal text-brand-purple">{program.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{program.description}</p>
                <ul className="mt-5 grid gap-2 border-t border-brand-green/15 pt-5">
                  {program.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <Check aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-brand-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
