import { Compass, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { about, coreValues } from '../../data/content'

export function About() {
  return (
    <section id="about" className="bg-surface-warm py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-normal text-brand-green">{about.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-brand-purple sm:text-4xl">{about.headline}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{about.text}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.article
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="rounded-lg bg-surface-green p-8 shadow-md transition-shadow hover:shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-white">
              <Target aria-hidden="true" size={24} />
            </div>
            <h3 className="mt-5 text-xl font-bold tracking-normal text-brand-purple">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-muted">{about.mission}</p>
          </motion.article>

          <motion.article
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="rounded-lg bg-surface-purple p-8 shadow-md transition-shadow hover:shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple text-white">
              <Compass aria-hidden="true" size={24} />
            </div>
            <h3 className="mt-5 text-xl font-bold tracking-normal text-brand-purple">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-muted">{about.vision}</p>
          </motion.article>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-2xl font-extrabold uppercase tracking-normal text-brand-purple sm:text-3xl">
            Our Core Values
          </h3>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => {
              const Icon = value.icon

              return (
                <motion.article
                  key={value.id}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex flex-col rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                    <Icon aria-hidden="true" size={24} />
                  </div>
                  <h4 className="mt-5 text-xl font-bold tracking-normal text-brand-purple">{value.title}</h4>
                  <p className="mt-3 leading-relaxed text-muted">{value.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="text-center text-2xl font-extrabold uppercase tracking-normal text-brand-purple sm:text-3xl">
            Meet the Founder
          </h3>

          <div className="mt-8 flex flex-col items-center gap-8 rounded-lg bg-white p-8 shadow-md sm:flex-row sm:items-start sm:text-left">
            <img
              src={about.founderImage}
              alt={about.founder}
              className="h-32 w-32 shrink-0 rounded-full object-cover ring-4 ring-brand-purple/10"
            />

            <div className="text-center sm:text-left">
              <p className="text-2xl font-extrabold tracking-normal text-brand-purple">{about.founder}</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-wide text-brand-green">{about.founderTitle}</p>
              <p className="mt-1 text-sm font-medium tracking-wide text-brand-purple/60">{about.founderCredentials}</p>
              <p className="mt-4 leading-relaxed text-muted">{about.founderBio}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
