import { useState } from 'react'
import { ORG_NAME_ABBR, teamIntro, teamMembers } from '../data/content'
import { FlipMemberCard } from '../components/ui/FlipMemberCard'

export function Team() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  return (
    <section id="team" className="bg-surface-warm pb-20 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold tracking-normal text-brand-purple sm:text-4xl">{teamIntro.headline}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{teamIntro.text}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <FlipMemberCard
              key={`${member.role}-${member.name}`}
              photo={member.image}
              name={member.name}
              role={member.role}
              organization={ORG_NAME_ABBR}
              bio={member.bio ?? member.description ?? ''}
              socials={member.socials}
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
