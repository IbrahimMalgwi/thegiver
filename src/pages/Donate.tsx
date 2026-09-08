import { Building2, HandHeart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { bankTransferDetails } from '../data/content'

function BankDetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <dt className="font-semibold text-muted">{label}</dt>
      <dd className="font-bold text-brand-purple sm:text-right">{value}</dd>
    </div>
  )
}

export function Donate() {
  return (
    <section className="bg-surface-warm pb-20 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold tracking-normal text-brand-purple sm:text-4xl">Ways to Give</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Choose the path that works best for you — partner with us directly, or give via bank transfer.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="flex flex-col rounded-lg bg-white p-8 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
              <HandHeart aria-hidden="true" size={24} />
            </div>
            <h2 className="mt-5 text-xl font-bold tracking-normal text-brand-purple">Partner With Us</h2>
            <p className="mt-3 flex-1 leading-relaxed text-muted">
              Organizations, schools, and institutions can partner with us to expand our reach and deepen our
              impact. Reach out and our team will follow up with you directly.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-purple px-7 py-3 text-base font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-brand-purple-dark"
            >
              Contact Us to Partner
            </Link>
          </div>

          <div className="flex flex-col rounded-lg bg-white p-8 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
              <Building2 aria-hidden="true" size={24} />
            </div>
            <h2 className="mt-5 text-xl font-bold tracking-normal text-brand-purple">Donate via Bank Transfer</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Prefer to give directly? Use the account details below to send your donation.
            </p>
            <dl className="mt-5 grid gap-3 border-t border-brand-green/15 pt-5 text-sm">
              <BankDetailRow label="Account Name" value={bankTransferDetails.accountName} />
              <BankDetailRow label="Account Number" value={bankTransferDetails.accountNumber} />
              <BankDetailRow label="Bank Name" value={bankTransferDetails.bankName} />
              <BankDetailRow label="Reference" value={bankTransferDetails.reference} />
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
