import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Lightbox from './Lightbox'
import { GALLERY_IMAGES, GALLERY_FILTERS, BUSINESS } from '../data/constants'

export default function Gallery() {
  const [filter, setFilter] = useState('todos')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredImages = useMemo(() => {
    if (filter === 'todos') return GALLERY_IMAGES
    return GALLERY_IMAGES.filter((img) => img.category === filter)
  }, [filter])

  return (
    <section id="galeria" className="section-padding section-glow overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          tag="Galería"
          title="Diseños que inspiran"
          subtitle="Explora nuestra colección de nail art, gel y acrílicas — cada look es una obra de arte."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 focus-ring ${
                filter === f.id
                  ? 'btn-gold px-5 shadow-gold-500/20'
                  : 'glass text-champagne/80 hover:border-gold-400/40 hover:text-ivory'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-4"
        >
          {filteredImages.map((image, i) => (
            <motion.button
              type="button"
              key={`${image.src}-${filter}`}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              onClick={() =>
                setLightboxIndex(
                  GALLERY_IMAGES.findIndex((img) => img.src === image.src),
                )
              }
              className={`group relative cursor-zoom-in overflow-hidden rounded-2xl border border-gold-400/10 text-left sm:rounded-3xl ${image.span} focus-ring`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-emerald-950/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 via-transparent to-emerald-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="translate-y-2 text-sm font-medium text-ivory transition-transform duration-500 group-hover:translate-y-0">
                  {image.alt}
                </p>
              </div>
              <div className="absolute top-3 right-3 rounded-full border border-gold-400/40 bg-ink/50 px-3 py-1 text-[10px] tracking-widest text-gold-300 uppercase opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                Ampliar
              </div>
            </motion.button>
          ))}
        </motion.div>

        {filteredImages.length === 0 && (
          <p className="py-12 text-center text-sm text-cream/60">
            No hay imágenes en esta categoría por ahora.
          </p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 px-6 py-3 text-sm focus-ring"
          >
            <span className="text-gradient-gold">{BUSINESS.instagram}</span>
            <span className="text-champagne/80">— Síguenos en Instagram</span>
          </a>
        </motion.div>
      </div>

      <Lightbox
        images={GALLERY_IMAGES}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  )
}
