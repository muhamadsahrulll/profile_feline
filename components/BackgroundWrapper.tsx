'use client'

import { ReactNode } from 'react'
import { PawPattern } from './PawPattern'

interface BackgroundWrapperProps {
  children: ReactNode
  className?: string
}

export function BackgroundWrapper({
  children,
  className = '',
}: BackgroundWrapperProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Paw pattern background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <PawPattern />
      </div>

      {/* Content on top */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}
