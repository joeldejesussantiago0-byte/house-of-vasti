import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { ABOUT, BUSINESS } from '../data/constants'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function About() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="nosotros" className="section-padding section-glow">
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-emerald-600/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          tag="Nosotros"
          title="Conoce a House Of Vasti"
          subtitle="Pasión por el detalle, arte en cada uña y un trato exclusivo que te hace sentir única."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong glow-luxury relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold-400/20 p-2"
          >
            <img
              src={ABOUT.image}
              alt={ABOUT.imageAlt}
              loading="lazy"
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
            <div className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-t from-ink/70 via-transparent to-gold-400/5" />
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-xs tracking-[0.2em] text-gold-400 uppercase">
              {BUSINESS.owner}
            </p>
            <h3 className="mt-2 font-display text-3xl text-ivory sm:text-4xl">
              Arte, elegancia y dedicación
            </h3>

            {ABOUT.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-4 text-sm leading-relaxed text-champagne/80 sm:text-base"
              >
                {p}
              </p>
            ))}

            <div className="mt-8 grid grid-cols-3 gap-3">
              {ABOUT.highlights.map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-2xl px-3 py-4 text-center transition-colors hover:border-gold-400/30"
                >
                  <p className="text-[10px] tracking-widest text-gold-400/70 uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs font-medium text-ivory sm:text-sm">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
