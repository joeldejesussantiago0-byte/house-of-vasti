import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds, offset = 140) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const updateActive = () => {
      const scrollPos = window.scrollY + offset
      let current = sectionIds[0] ?? ''

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }

      setActiveSection(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [sectionIds, offset])

  return activeSection
}
