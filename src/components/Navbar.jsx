import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BUSINESS, NAV_LINKS, SECTION_IDS } from '../data/constants'
import { useScrollSpy } from '../hooks/useScrollSpy'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const navLinkClass = (id) => {
    const isActive = activeSection === id
    return `relative text-sm font-medium tracking-wide transition-colors focus-ring ${
      isActive ? 'text-gold-400' : 'text-champagne/75 hover:text-gold-300'
    } after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-gradient-to-r after:from-gold-500 after:to-gold-300 after:transition-all ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled
            ? 'glass-strong glow-luxury rounded-2xl border-gold-400/20 py-3'
            : 'border border-transparent py-2'
        }`}
      >
        <a href="#inicio" className="group flex flex-col focus-ring">
          <span className="font-display text-xl tracking-wide text-ivory sm:text-2xl">
            House Of <span className="text-gradient-gold italic">Vasti</span>
          </span>
          <span className="text-[10px] tracking-[0.25em] text-gold-400/70 uppercase">
            Luxury Nail Studio
          </span>
        </a>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={navLinkClass(link.id)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={BUSINESS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold hidden px-5 py-2.5 text-sm lg:inline-flex focus-ring"
        >
          Reservar
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg focus-ring lg:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-gold-400 transition-all ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-gold-400 transition-all ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-gold-400 transition-all ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-md lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 right-0 flex h-full w-[min(100%,320px)] flex-col gap-4 overflow-y-auto border-l border-gold-400/20 bg-gradient-to-b from-emerald-900/95 to-ink/98 p-8 pt-24 shadow-2xl backdrop-blur-xl"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMenuOpen(false)}
                  className={`font-display text-xl focus-ring ${
                    activeSection === link.id ? 'text-gold-400' : 'text-ivory'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-4 py-3 text-center focus-ring"
              >
                Reservar Cita
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
