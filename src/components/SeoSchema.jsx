import { useEffect } from 'react'
import { BUSINESS, LOCATION, OG_IMAGE } from '../data/constants'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: BUSINESS.name,
  description:
    'Salón de uñas premium en Puerto Rico. Acrílicas, gel, nail art, manicure y pedicure de lujo.',
  image: OG_IMAGE,
  telephone: '+1-787-500-1835',
  address: {
    '@type': 'PostalAddress',
    addressLocality: LOCATION.address,
    addressCountry: 'PR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00',
    },
  ],
  sameAs: [BUSINESS.instagramUrl, BUSINESS.facebookUrl],
  founder: {
    '@type': 'Person',
    name: BUSINESS.owner,
  },
}

export default function SeoSchema() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    script.id = 'house-of-vasti-schema'
    document.head.appendChild(script)

    return () => {
      document.getElementById('house-of-vasti-schema')?.remove()
    }
  }, [])

  return null
}
