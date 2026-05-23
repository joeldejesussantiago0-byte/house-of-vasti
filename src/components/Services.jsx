import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { SERVICES, getServiceWhatsAppUrl } from '../data/constants'

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Services() {
  return (
    <section id="servicios" className="section-padding">
      <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-emerald-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          tag="Servicios"
          title="Experiencias de belleza"
          subtitle="Cada servicio está diseñado para realzar tu estilo con técnicas profesionales y productos de alta calidad."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -8, transition: { duration: 0.35 } }}
              className="card-luxury group relative overflow-hidden p-8"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-600/20 to-gold-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-400/25 bg-gradient-to-br from-emerald-800/80 to-gold-400/15 text-xl text-gold-400">
                {service.icon}
              </span>

              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-2xl text-ivory">{service.title}</h3>
                <span className="shrink-0 rounded-full border border-gold-400/20 bg-emerald-950/60 px-2.5 py-1 text-[10px] font-medium text-gold-300/90">
                  {service.duration}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-champagne/75">
                {service.description}
              </p>

              <div className="divider-gold mt-6" />

              <a
                href={getServiceWhatsAppUrl(service)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-xs tracking-widest text-gold-400 uppercase transition-all opacity-80 group-hover:gap-2 group-hover:opacity-100 focus-ring"
              >
                Reservar {service.title} →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
