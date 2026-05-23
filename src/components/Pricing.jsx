import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { PRICING, getPricingWhatsAppUrl } from '../data/constants'

export default function Pricing() {
  return (
    <section id="precios" className="section-padding">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-700/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          tag="Precios"
          title="Inversión en tu belleza"
          subtitle="Tarifas transparentes para experiencias de lujo. Los precios pueden variar según diseño y largo."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING.map((plan, i) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.35 } }}
              className={
                plan.featured
                  ? 'card-featured glow-gold relative overflow-hidden p-8'
                  : 'card-luxury p-8'
              }
            >
              {plan.featured && (
                <span className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-3 py-1 text-[10px] font-semibold tracking-widest text-ink uppercase shadow-lg">
                  Popular
                </span>
              )}

              <h3 className="font-display text-2xl text-ivory">{plan.name}</h3>
              <p className="mt-1 text-xs text-gold-400/80">{plan.duration}</p>

              <div className="mt-4 flex items-baseline gap-1">
                {plan.priceLabel ? (
                  <span className="font-display text-4xl text-gradient-gold">
                    {plan.priceLabel}
                  </span>
                ) : (
                  <>
                    <span className="text-sm text-champagne/60">desde $</span>
                    <span className="font-display text-4xl text-gradient-gold">
                      {plan.price}
                    </span>
                    <span className="text-sm text-champagne/60">USD</span>
                  </>
                )}
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-champagne/80"
                  >
                    <span className="mt-0.5 text-gold-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={getPricingWhatsAppUrl(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-medium transition-all duration-300 focus-ring ${
                  plan.featured
                    ? 'btn-gold shadow-gold-500/25'
                    : 'btn-outline hover:bg-emerald-800/50'
                }`}
              >
                Reservar {plan.name}
              </a>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-cream/55">
          * Precios orientativos. Consulta disponibilidad y diseños personalizados por WhatsApp.
        </p>
      </div>
    </section>
  )
}
