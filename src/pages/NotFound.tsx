import { CtaLink } from '../components/ui/CtaLink'

export function NotFound() {
  return (
    <section className="bg-surface-warm pb-20 pt-32">
      <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="font-bold text-brand-purple">404</p>
        <h1 className="mt-4 text-4xl font-extrabold text-brand-purple">Page not found</h1>
        <p className="my-6 text-lg text-muted">The page you’re looking for may have moved or no longer exists.</p>
        <CtaLink to="/" variant="accent">Back to Home</CtaLink>
      </div>
    </section>
  )
}
