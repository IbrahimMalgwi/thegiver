import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../../assets/logo.png'
import { footer, navLinks, uiText } from '../../data/content'
import { DonateButton } from '../ui/DonateButton'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-surface-warm/80 shadow-md backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={closeMenu}
          aria-label={`${footer.brand} — home`}
        >
          <img src={logo} alt={`${footer.brand} logo`} className="h-11 w-auto shrink-0 sm:h-12" />
          <span className="max-w-[11rem] text-sm font-extrabold leading-tight tracking-normal text-brand-purple sm:max-w-none sm:text-base lg:text-lg">
            {footer.brandShort}
            <span className="block text-[0.65rem] font-semibold uppercase tracking-wide text-brand-green sm:text-xs">
              Sustainable Development Initiative
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted transition hover:text-brand-purple"
            >
              {link.label}
            </a>
          ))}
          <DonateButton variant="nav" />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-purple/10 bg-white text-brand-purple shadow-md xl:hidden"
          aria-label={isOpen ? uiText.mobileMenuClose : uiText.mobileMenuOpen}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-brand-purple/10 bg-surface-warm/95 px-4 pb-5 shadow-xl xl:hidden">
          <div className="container mx-auto grid gap-2 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-base font-semibold text-brand-purple transition hover:bg-surface-purple"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <DonateButton variant="primary" className="mt-2 w-full" />
          </div>
        </div>
      ) : null}
    </header>
  )
}
