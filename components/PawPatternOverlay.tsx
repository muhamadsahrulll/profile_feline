'use client'

interface PawPatternOverlayProps {
  color?: 'yellow' | 'orange' | 'blue' | 'white'
}

export function PawPatternOverlay({ color = 'yellow' }: PawPatternOverlayProps) {
  const colorMap = {
    yellow: 'rgba(251, 191, 36, 0.2)',
    orange: 'rgba(249, 115, 22, 0.2)',
    blue: 'rgba(59, 130, 246, 0.2)',
    white: 'rgba(255, 255, 255, 0.2)',
  }

  const fillColor = colorMap[color]

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      style={{ zIndex: 0 }}
    >
      <defs>
        <pattern
          id={`pawPattern-${color}`}
          x="0"
          y="0"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          {/* Main pad (center) */}
          <circle cx="100" cy="120" r="20" fill={fillColor} opacity="0.7" />

          {/* Top left toe */}
          <circle cx="60" cy="60" r="12" fill={fillColor} opacity="0.6" />

          {/* Top center-left toe */}
          <circle cx="85" cy="40" r="12" fill={fillColor} opacity="0.6" />

          {/* Top center-right toe */}
          <circle cx="115" cy="40" r="12" fill={fillColor} opacity="0.6" />

          {/* Top right toe */}
          <circle cx="140" cy="60" r="12" fill={fillColor} opacity="0.6" />
        </pattern>
      </defs>

      {/* Apply the pattern */}
      <rect width="200" height="200" fill={`url(#pawPattern-${color})`} />
    </svg>
  )
}
