import type { ReactNode } from 'react'
import { WaitlistForm } from './WaitlistForm'

type WaitlistCardProps = {
  id?: string
  autoFocus?: boolean
  showSocialProof?: boolean
  children?: ReactNode
}

export function WaitlistCard({
  id,
  autoFocus,
  showSocialProof,
  children,
}: WaitlistCardProps) {
  return (
    <div id={id} className="mx-auto w-full max-w-lg">
      <div className="dashboard-card rounded-2xl p-6 sm:p-8">
        {children ?? (
          <WaitlistForm autoFocus={autoFocus} showSocialProof={showSocialProof} />
        )}
      </div>
    </div>
  )
}
