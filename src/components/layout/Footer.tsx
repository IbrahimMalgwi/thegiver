import { Facebook, Instagram, Mail, MapPin, Phone, UserRound } from 'lucide-react'
import { footer, uiText } from '../../data/content'

export function Footer() {
  const phoneHref = `tel:${footer.contact.phone.replaceAll(' ', '')}`

  return (
    <footer id="contact" className="bg-brand-purple text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-lg font-bold tracking-normal">{footer.brandShort}</h2>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
              Sustainable Development Initiative
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">{footer.tagline}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold tracking-normal">{uiText.footerContactHeading}</h2>
            <div className="mt-4 grid gap-3 text-sm text-white/80">
              <a className="inline-flex items-center gap-3 transition hover:text-brand-gold" href={`mailto:${footer.contact.email}`}>
                <Mail aria-hidden="true" size={18} className="shrink-0" />
                <span className="break-all">{footer.contact.email}</span>
              </a>
              <a className="inline-flex items-center gap-3 transition hover:text-brand-gold" href={phoneHref}>
                <Phone aria-hidden="true" size={18} className="shrink-0" />
                {footer.contact.phone}
              </a>
              <p className="inline-flex items-start gap-3">
                <MapPin aria-hidden="true" size={18} className="mt-0.5 shrink-0" />
                <span>
                  {footer.contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold tracking-normal">Founder</h2>
            <p className="mt-4 inline-flex items-center gap-3 text-sm text-white/80">
              <UserRound aria-hidden="true" size={18} className="shrink-0" />
              {footer.contact.founder}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold tracking-normal">{uiText.footerSocialHeading}</h2>
            <div className="mt-4 grid gap-3 text-sm text-white/80">
              <a
                className="inline-flex items-center gap-3 transition hover:text-brand-gold"
                href={footer.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram aria-hidden="true" size={18} />
                {footer.instagram}
              </a>
              <a
                className="inline-flex items-center gap-3 transition hover:text-brand-gold"
                href={footer.facebookUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Facebook aria-hidden="true" size={18} />
                {footer.facebook}
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/60">
          © {footer.year} {footer.brand}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
