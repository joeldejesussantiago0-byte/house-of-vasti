import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Lightbox({ images, currentIndex, onClose, onNavigate }) {
  const image = images[currentIndex]

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length)
  }, [currentIndex, images.length, onNavigate])

  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length)
  }, [currentIndex, images.length, onNavigate])

  useEffect(() => {
    if (currentIndex === null) return

    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [currentIndex, onClose, goPrev, goNext])

  return (
    <AnimatePresence>
      {currentIndex !== null && image && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de galería"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.figure
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[90vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-2xl border border-gold-400/30 shadow-[0_0_60px_rgba(201,169,98,0.15)]">
              <img
                src={image.src.replace('w=600', 'w=1200').replace('w=800', 'w=1200')}
                alt={image.alt}
                className="max-h-[80vh] w-full object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-ivory/90">
              {image.alt}
              <span className="mt-1 block text-xs text-gold-400/60">
                {currentIndex + 1} / {images.length}
              </span>
            </figcaption>

            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute -top-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/40 bg-emerald-900 text-gold-300 shadow-lg transition hover:bg-emerald-800 focus-ring"
            >
              ✕
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Imagen anterior"
                  className="absolute top-1/2 -left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold-400/30 bg-emerald-900/90 text-gold-300 shadow-lg transition hover:border-gold-400/60 sm:-left-14 focus-ring"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Imagen siguiente"
                  className="absolute top-1/2 -right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold-400/30 bg-emerald-900/90 text-gold-300 shadow-lg transition hover:border-gold-400/60 sm:-right-14 focus-ring"
                >
                  ›
                </button>
              </>
            )}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
