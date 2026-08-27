import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getInvolved } from '../../data/content'

const MotionLink = motion.create(Link)

export function GetInvolved() {
  return (
    <section id="get-involved" className="bg-surface-purple py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-normal text-brand-green">{getInvolved.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-brand-purple sm:text-4xl">
            {getInvolved.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{getInvolved.text}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {getInvolved.steps.map((step) => (
            <MotionLink
              key={step.step}
              to={step.href}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="block rounded-lg border border-transparent bg-white p-6 shadow-md transition-[box-shadow,border-color] hover:border-brand-purple/30 hover:shadow-xl focus-visible:border-brand-purple/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple text-lg font-extrabold text-white">
                {step.step}
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-normal text-brand-purple">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{step.description}</p>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  )
}
