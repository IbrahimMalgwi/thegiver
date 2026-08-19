import { useEffect, useState, useCallback, useId, memo, type KeyboardEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Info, Linkedin, Mail, Twitter, UserRound, X } from 'lucide-react';
import type { MemberSocials } from '../../types';

export interface FlipMemberCardProps {
  photo?: string;
  name: string;
  role: string;
  organization?: string;
  bio: string;
  socials?: MemberSocials;
  /** Whether this card is the one flipped open. Flip state is owned by the parent grid so only one card is open at a time. */
  isFlipped: boolean;
  /** Desktop hover intent — `true` on hover start, `false` on hover end. */
  onHoverFlip: (flip: boolean) => void;
  /** Touch tap / keyboard activation — toggles this card open/closed. */
  onTapToggle: () => void;
}

/**
 * A 3D flip card for board/team member grids: photo + name/role on the front,
 * bio + socials on the back, with a rotating brand-gradient glow ring behind
 * the card on hover/focus. Flips on hover for pointer devices that support it,
 * on tap for touch devices, and on Enter/Space for keyboard users. Honors
 * prefers-reduced-motion by crossfading instead of rotating.
 */
export const FlipMemberCard = memo(function FlipMemberCard({
                                                             photo,
                                                             name,
                                                             role,
                                                             organization,
                                                             bio,
                                                             socials,
                                                             isFlipped,
                                                             onHoverFlip,
                                                             onTapToggle,
                                                           }: FlipMemberCardProps) {
  const [hoverCapable, setHoverCapable] = useState(
      // safe default for SSR; will update on client
      typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
  );
  const [photoFailed, setPhotoFailed] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const id = useId();

  // Reset photoFailed when photo src changes
  useEffect(() => {
    setPhotoFailed(false);
  }, [photo]);

  // Detect hover capability
  useEffect(() => {
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)');
    setHoverCapable(mql.matches);
    const onChange = (event: MediaQueryListEvent) => setHoverCapable(event.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onTapToggle();
        }
      },
      [onTapToggle]
  );

  const handleClick = useCallback(() => {
    // Always allow click to toggle, even on hover‑capable devices,
    // so users can “pin” the card open to read long bios.
    onTapToggle();
  }, [onTapToggle]);

  const handleHoverStart = useCallback(() => {
    if (hoverCapable) onHoverFlip(true);
  }, [hoverCapable, onHoverFlip]);

  const handleHoverEnd = useCallback(() => {
    if (hoverCapable) onHoverFlip(false);
  }, [hoverCapable, onHoverFlip]);

  const hasSocials = socials && (socials.linkedin || socials.twitter || socials.email);

  // Shared aria label for the button
  const ariaLabel = `${name}, ${role}${organization ? `, ${organization}` : ''}. ${
      isFlipped ? 'Showing biography. Activate to show photo.' : 'Activate to read biography.'
  }`;

  return (
      <div
          className="group relative h-80 w-full"
          style={{ perspective: '1000px' }}
          // Attach a data attribute for reduced motion to control glow ring
          data-reduced-motion={shouldReduceMotion ? 'true' : 'false'}
      >
        {/* Glow ring – rotation disabled when reduced motion is preferred */}
        <div
            className={`
          pointer-events-none absolute inset-0 rounded-lg
          transition duration-700 ease-out
          group-hover:rotate-180 group-hover:opacity-100
          group-focus-within:rotate-180 group-focus-within:opacity-100
          ${
                shouldReduceMotion
                    ? '!rotate-0 !opacity-0'
                    : 'opacity-0'
            }
        `}
            style={{
              background: 'conic-gradient(from 0deg, #42106B, #D99A0B, #2F8734, #42106B)',
              padding: '3px',
            }}
        >
          <div className="h-full w-full rounded-lg bg-surface-warm" />
        </div>

        {/* Flip container */}
        <motion.div
            role="button"
            tabIndex={0}
            aria-expanded={isFlipped}
            aria-label={ariaLabel}
            aria-describedby={`${id}-bio`} // references the bio paragraph on the back
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            className="absolute inset-[3px] cursor-pointer rounded-lg shadow-md outline-none will-change-transform focus-visible:ring-4 focus-visible:ring-brand-gold/60"
            style={{ transformStyle: 'preserve-3d' }}
            animate={shouldReduceMotion ? { opacity: 1 } : { rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, ease: 'easeInOut' }}
        >
          {/* -------- FRONT FACE -------- */}
          <div
              className="absolute inset-0 overflow-hidden rounded-lg bg-surface-purple"
              style={
                shouldReduceMotion
                    ? { opacity: isFlipped ? 0 : 1, transition: 'opacity 0.2s' }
                    : { backfaceVisibility: 'hidden' }
              }
              aria-hidden={isFlipped}
          >
            {photo && !photoFailed ? (
                <img
                    src={photo}
                    alt=""
                    onError={() => setPhotoFailed(true)}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center bg-surface-purple">
                  <UserRound aria-hidden="true" size={64} className="text-brand-purple/30" />
                </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 pt-14">
              <h3 className="text-lg font-extrabold leading-tight text-white">{name}</h3>
              <p className="mt-0.5 text-sm font-semibold uppercase tracking-normal text-brand-gold">
                {role}
              </p>
              {organization && (
                  <p className="mt-0.5 text-xs text-white/70">{organization}</p>
              )}
            </div>

            {/* Touch-only affordance */}
            {!hoverCapable && (
                <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
              <Info aria-hidden="true" size={12} />
              Tap to read bio
            </span>
            )}
          </div>

          {/* -------- BACK FACE -------- */}
          <div
              className="absolute inset-0 flex flex-col overflow-hidden rounded-lg bg-brand-purple p-5"
              style={
                shouldReduceMotion
                    ? { opacity: isFlipped ? 1 : 0, transition: 'opacity 0.2s' }
                    : { backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }
              }
              aria-hidden={!isFlipped}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-extrabold leading-tight text-white">{name}</h3>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-normal text-brand-gold">
                  {role}
                </p>
              </div>
              {/* Close button – always visible when back is shown */}
              <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onTapToggle();
                  }}
                  aria-label="Close biography"
                  className="rounded-full p-1 text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <p id={`${id}-bio`} className="mt-3 flex-1 overflow-y-auto text-sm leading-relaxed text-white/85">
              {bio}
            </p>

            {hasSocials && (
                <div className="mt-3 flex items-center gap-3 border-t border-white/15 pt-3">
                  {socials?.linkedin && (
                      <a
                          href={socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${name} on LinkedIn`}
                          tabIndex={isFlipped ? 0 : -1}
                          className="rounded-full p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
                      >
                        <Linkedin aria-hidden="true" size={18} />
                      </a>
                  )}
                  {socials?.twitter && (
                      <a
                          href={socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${name} on Twitter`}
                          tabIndex={isFlipped ? 0 : -1}
                          className="rounded-full p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
                      >
                        <Twitter aria-hidden="true" size={18} />
                      </a>
                  )}
                  {socials?.email && (
                      <a
                          href={`mailto:${socials.email}`}
                          aria-label={`Email ${name}`}
                          tabIndex={isFlipped ? 0 : -1}
                          className="rounded-full p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
                      >
                        <Mail aria-hidden="true" size={18} />
                      </a>
                  )}
                </div>
            )}
          </div>
        </motion.div>
      </div>
  );
});