import { useState } from 'react'
import { ORG_NAME_ABBR, leadershipIntro, leadershipRoles } from '../../data/content'
import { FlipMemberCard } from '../ui/FlipMemberCard'

export function Leadership() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  return (
    <section id="leadership" className="bg-surface-warm py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-normal text-brand-purple sm:text-4xl">{leadershipIntro.headline}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{leadershipIntro.text}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {leadershipRoles.map((leader, index) => (
            <FlipMemberCard
              key={`${leader.role}-${leader.name ?? 'tba'}`}
              photo={leader.image}
              name={leader.name ?? 'To be announced'}
              role={leader.role}
              organization={ORG_NAME_ABBR}
              bio={leader.bio ?? leader.description ?? ''}
              socials={leader.socials}
              isFlipped={flippedIndex === index}
              onHoverFlip={(flip) =>
                setFlippedIndex((prev) => {
                  if (flip) return index
                  return prev === index ? null : prev
                })
              }
              onTapToggle={() => setFlippedIndex((prev) => (prev === index ? null : index))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
