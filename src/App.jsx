import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import SeoSchema from './components/SeoSchema'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="ambient-orb-emerald absolute -top-40 right-0 h-[500px] w-[500px]" />
        <div className="ambient-orb-gold absolute top-1/3 -left-32 h-[400px] w-[400px]" />
        <div className="ambient-orb-emerald absolute right-1/4 bottom-0 h-[350px] w-[350px] opacity-60" />
      </div>

      <div className="relative z-10">
        <SeoSchema />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Pricing />
          <Testimonials />
          <Location />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  )
}
