import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { LOCATION, POLICIES } from '../data/constants'

export default function Location() {
  return (
    <section id="ubicacion" className="section-padding section-glow">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          tag="Ubicación"
          title="Visítanos"
          subtitle="Encuéntranos en Puerto Rico. Confirma tu cita por WhatsApp antes de visitarnos."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong glow-luxury overflow-hidden rounded-3xl border border-gold-400/20"
          >
            <iframe
              title="Ubicación de House Of Vasti en mapa"
              src={LOCATION.mapEmbedUrl}
              className="h-64 w-full border-0 sm:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="p-6">
              <p className="font-display text-xl text-ivory">{LOCATION.address}</p>
              <p className="mt-1 text-sm text-champagne/70">{LOCATION.area}</p>
              <p className="mt-3 text-xs text-cream/55">{LOCATION.note}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={LOCATION.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-5 py-2.5 text-sm focus-ring"
                >
                  Cómo llegar — Google Maps
                </a>
                <a
                  href={LOCATION.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-5 py-2.5 text-sm focus-ring"
                >
                  Abrir en Waze
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="card-luxury p-6 sm:p-8">
              <h3 className="font-display text-2xl text-ivory">Horario</h3>
              <ul className="mt-4 space-y-3">
                {LOCATION.hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between border-b border-emerald-700/50 pb-3 text-sm last:border-0 last:pb-0"
                  >
                    <span className="text-champagne/75">{row.day}</span>
                    <span className="font-medium text-gold-300">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-luxury p-6 sm:p-8">
              <h3 className="font-display text-2xl text-ivory">Políticas del salón</h3>
              <ul className="mt-4 space-y-4">
                {POLICIES.map((policy) => (
                  <li key={policy.title}>
                    <p className="text-sm font-medium text-gold-300">{policy.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-champagne/70">
                      {policy.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
