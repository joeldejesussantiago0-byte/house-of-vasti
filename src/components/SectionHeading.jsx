import { motion } from 'framer-motion'

export default function SectionHeading({ tag, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      {tag && (
        <span className="mb-3 inline-block rounded-full border border-gold-400/35 bg-gold-400/10 px-4 py-1 text-xs font-medium tracking-[0.2em] text-gold-300 uppercase">
          {tag}
        </span>
      )}
      <h2 className="font-display text-4xl leading-tight font-light tracking-tight text-ivory sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-champagne/80 sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className="divider-gold mx-auto mt-6 w-24" />
    </motion.div>
  )
}
