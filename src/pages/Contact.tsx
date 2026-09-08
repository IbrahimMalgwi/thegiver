import { Mail, MapPin, Phone, Send, UserRound } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { contactIntro, footer } from '../data/content'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = `Message from ${name} via website`
    const body = `${message}\n\n— ${name} (${email})`
    const mailto = `mailto:${footer.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  const phoneHref = `tel:${footer.contact.phone.replaceAll(' ', '')}`

  return (
    <section className="bg-surface-warm pb-20 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold tracking-normal text-brand-purple sm:text-4xl">
            {contactIntro.headline}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{contactIntro.text}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          <div className="flex flex-col rounded-lg bg-white p-8 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
              <MapPin aria-hidden="true" size={24} />
            </div>
            <h2 className="mt-5 text-xl font-bold tracking-normal text-brand-purple">Address</h2>
            <p className="mt-3 leading-relaxed text-muted">
              {footer.contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col rounded-lg bg-white p-8 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold-dark">
              <Phone aria-hidden="true" size={24} />
            </div>
            <h2 className="mt-5 text-xl font-bold tracking-normal text-brand-purple">Phone</h2>
            <p className="mt-3 leading-relaxed text-muted">Call or message us during business hours.</p>
            <a
              href={phoneHref}
              className="mt-4 font-semibold text-brand-green transition hover:text-brand-green-dark"
            >
              {footer.contact.phone}
            </a>
          </div>

          <div className="flex flex-col rounded-lg bg-white p-8 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
              <Mail aria-hidden="true" size={24} />
            </div>
            <h2 className="mt-5 text-xl font-bold tracking-normal text-brand-purple">Email</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Write to us directly and our team will respond as soon as possible.
            </p>
            <a
              href={`mailto:${footer.contact.email}`}
              className="mt-4 break-all font-semibold text-brand-green transition hover:text-brand-green-dark"
            >
              {footer.contact.email}
            </a>
          </div>

          <div className="flex flex-col rounded-lg bg-white p-8 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
              <UserRound aria-hidden="true" size={24} />
            </div>
            <h2 className="mt-5 text-xl font-bold tracking-normal text-brand-purple">Founder</h2>
            <p className="mt-3 leading-relaxed text-muted">{footer.contact.founder}</p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-lg bg-white p-8 shadow-md">
          <h2 className="text-xl font-bold tracking-normal text-brand-purple">Send Us a Message</h2>
          <p className="mt-2 leading-relaxed text-muted">
            Fill in the form below — submitting opens your email app with the message ready to send to{' '}
            {footer.contact.email}.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="text-sm font-semibold text-brand-purple">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-2 block w-full rounded-lg border-brand-purple/20 text-ink focus:border-brand-purple focus:ring-brand-purple/30"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-semibold text-brand-purple">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-2 block w-full rounded-lg border-brand-purple/20 text-ink focus:border-brand-purple focus:ring-brand-purple/30"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="text-sm font-semibold text-brand-purple">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                maxLength={1500}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="mt-2 block w-full rounded-lg border-brand-purple/20 text-ink focus:border-brand-purple focus:ring-brand-purple/30"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-3 text-base font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-brand-gold-dark"
              >
                Send Message
                <Send aria-hidden="true" size={18} />
              </button>
              <p className="text-sm text-muted">
                Nothing happened? Email us directly at{' '}
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="font-semibold text-brand-green transition hover:text-brand-green-dark"
                >
                  {footer.contact.email}
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
