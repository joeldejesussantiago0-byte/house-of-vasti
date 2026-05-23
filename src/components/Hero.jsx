import { motion } from 'framer-motion'
import { BUSINESS } from '../data/constants'
import { useReducedMotion } from '../hooks/useReducedMotion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="inicio"
      className="section-glow relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-orb-emerald absolute -top-32 -right-32 h-[520px] w-[520px] opacity-80" />
        <div className="ambient-orb-gold absolute top-1/2 -left-40 h-[420px] w-[420px]" />
        <div className="absolute right-1/4 bottom-0 h-[280px] w-[280px] rounded-full bg-emerald-700/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,10,9,0.4)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 inline-block rounded-full border border-gold-400/30 bg-emerald-900/40 px-4 py-1.5 text-xs tracking-[0.2em] text-gold-300 uppercase backdrop-blur-sm"
          >
            {BUSINESS.tagline}
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl leading-[1.12] font-light text-ivory sm:text-5xl lg:text-6xl"
          >
            Belleza, elegancia y{' '}
            <span className="text-gradient-gold italic">perfección</span> en cada
            detalle
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-champagne/85 lg:mx-0"
          >
            Transformamos tus uñas en arte con estilo y elegancia.
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-3 text-sm text-cream/70"
          >
            Por {BUSINESS.owner}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href={BUSINESS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full px-8 py-4 text-center focus-ring sm:w-auto"
            >
              Reservar Cita
            </a>
            <a href="#galeria" className="btn-outline w-full px-8 py-4 text-center focus-ring sm:w-auto">
              Ver Diseños
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="glass-strong glow-luxury relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold-400/25 p-2">
            <div className="absolute inset-2 z-10 rounded-[1.6rem] ring-1 ring-gold-400/20 ring-inset" />
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=85"
              alt="Manicure premium en House Of Vasti"
              className="h-full w-full rounded-[1.6rem] object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-t from-ink/80 via-emerald-950/20 to-transparent" />
            <div className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-br from-gold-400/5 via-transparent to-emerald-600/10" />
          </div>

          <motion.div
            animate={reducedMotion ? false : { y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="glass glow-gold absolute -bottom-4 -left-4 rounded-2xl px-5 py-4 sm:-left-8"
          >
            <p className="font-display text-2xl text-gradient-gold">100%</p>
            <p className="text-xs text-champagne/70">Dedicación boutique</p>
          </motion.div>

          <motion.div
            animate={reducedMotion ? false : { y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="glass absolute -top-2 -right-2 rounded-2xl border border-gold-400/40 px-4 py-3 sm:-right-6"
          >
            <p className="text-xs tracking-widest text-gold-400 uppercase">Luxury</p>
            <p className="font-display text-lg text-ivory">Nail Studio</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
