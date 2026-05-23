import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { TESTIMONIALS, BUSINESS } from '../data/constants'
import { useReducedMotion } from '../hooks/useReducedMotion'

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-gold-400" aria-label={`${count} estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

function TestimonialCard({ item }) {
  return (
    <blockquote className="card-luxury relative h-full p-8">
      <span
        className="font-display absolute -top-2 left-6 text-6xl leading-none text-gold-400/20"
        aria-hidden
      >
        "
      </span>
      <Stars count={item.rating} />
      <p className="mt-4 text-sm leading-relaxed text-champagne/85 italic">{item.text}</p>
      <footer className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 bg-gradient-to-br from-emerald-800 to-gold-400/20 font-display text-lg text-ivory">
          {item.name.charAt(0)}
        </div>
        <cite className="not-italic">
          <span className="block text-sm font-medium text-ivory">{item.name}</span>
          <span className="text-xs text-cream/60">Cliente verificada</span>
        </cite>
      </footer>
    </blockquote>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || typeof window === 'undefined') return
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (!isMobile) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [reducedMotion])

  return (
    <section id="testimonios" className="section-padding overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          tag="Testimonios"
          title="Lo que dicen nuestras clientas"
          subtitle="La confianza y el cariño de quienes nos eligen es nuestro mayor orgullo."
        />

        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <TestimonialCard item={item} />
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={reducedMotion ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reducedMotion ? false : { opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
              >
                <TestimonialCard item={TESTIMONIALS[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ver testimonio ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all focus-ring ${
                  i === current ? 'w-8 bg-gold-400' : 'w-2 bg-emerald-700'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href={BUSINESS.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex rounded-full px-6 py-3 text-sm focus-ring"
          >
            Ver más reseñas en Google →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
