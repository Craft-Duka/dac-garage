import { BUSINESS } from '@/lib/constants'

interface MapEmbedProps {
  className?: string
  height?: string
}

/**
 * Google Maps embed for the DAC Auto Clinic location.
 * No API key required — uses the standard embed URL format.
 * TEMP: For a production deployment, replace with Google Maps Embed API (requires API key)
 *       for better performance, analytics, and customisation.
 */
export function MapEmbed({ className = '', height = '400px' }: MapEmbedProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-divider ${className}`}>
      <iframe
        src={BUSINESS.googleMapsEmbed}
        width="100%"
        height={height}
        style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="DAC Auto Clinic location"
        aria-label="Map showing the DAC Auto Clinic location"
      />
    </div>
  )
}
