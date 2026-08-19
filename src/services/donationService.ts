import { donationConfig } from '../data/content'
import type { DonationConfig } from '../types'

export interface DonationRequest {
  amount: number
  currency: string
  donorName?: string
  donorEmail?: string
}

export interface DonationResult {
  status: 'redirect' | 'success' | 'unavailable'
  message: string
  redirectUrl?: string
}

/**
 * Donation abstraction.
 *
 * No payment provider is connected yet. `getDonationConfig` tells the UI whether
 * online giving is available and what message to show. `startDonation` is the
 * single seam a future provider (Paystack, Flutterwave, Stripe, ...) plugs into:
 * implement it to create a checkout/redirect and return a `DonationResult`. The
 * donation UI already calls through here, so wiring a provider needs no UI redesign.
 */
export function getDonationConfig(): DonationConfig {
  return donationConfig
}

export async function startDonation(_request: DonationRequest): Promise<DonationResult> {
  if (!donationConfig.enabled) {
    return {
      status: 'unavailable',
      message: donationConfig.comingSoonMessage,
    }
  }

  // Future: create a payment session with the chosen provider and return a redirect URL.
  return {
    status: 'unavailable',
    message: donationConfig.comingSoonMessage,
  }
}
