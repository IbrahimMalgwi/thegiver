import { Instagram, Mail, Phone } from 'lucide-react'
import { footer, uiText } from '../../data/content'

export function Footer() {
  const whatsappHref = `tel:${footer.whatsapp.replaceAll(' ', '')}`

  return (
    <footer id="contact" className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-bold tracking-normal">{uiText.footerAboutHeading}</h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">{footer.tagline}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold tracking-normal">{uiText.footerContactHeading}</h2>
            <div className="mt-4 grid gap-3 text-sm text-white/80">
              <a className="inline-flex items-center gap-3 transition hover:text-accent" href={`mailto:${footer.email}`}>
                <Mail aria-hidden="true" size={18} />
                {footer.email}
              </a>
              <a className="inline-flex items-center gap-3 transition hover:text-accent" href={whatsappHref}>
                <Phone aria-hidden="true" size={18} />
                {footer.whatsapp}
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold tracking-normal">{uiText.footerSocialHeading}</h2>
            <a
              className="mt-4 inline-flex items-center gap-3 text-sm text-white/80 transition hover:text-accent"
              href={footer.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram aria-hidden="true" size={18} />
              {footer.instagram}
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/60">
          Copyright {footer.year} {footer.brand}
        </p>
      </div>
    </footer>
  )
}
