import { buildWhatsAppUrl, WHATSAPP_DEFAULT_URL } from '../utils/whatsapp'

export const SITE_URL = 'https://houseofvasti.com'
export const OG_IMAGE =
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85'

export const SECTION_IDS = [
  'inicio',
  'nosotros',
  'servicios',
  'galeria',
  'precios',
  'testimonios',
  'ubicacion',
  'contacto',
]

export const BUSINESS = {
  name: 'House Of Vasti',
  owner: 'Adnilibeth Velásquez Ortiz',
  tagline: 'Salón de uñas boutique · Puerto Rico',
  whatsapp: '(787) 500-1835',
  whatsappUrl: WHATSAPP_DEFAULT_URL,
  instagram: '@houseofvastipr',
  instagramUrl: 'https://www.instagram.com/houseofvastipr/',
  facebook: 'Adnilibeth Velázquez',
  facebookUrl: 'https://www.facebook.com/search/top?q=Adnilibeth%20Vel%C3%A1zquez%20Ortiz',
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=House+Of+Vasti+Puerto+Rico',
}

export const LOCATION = {
  address: 'Puerto Rico',
  area: 'Actualiza tu dirección en src/data/constants.js',
  mapQuery: 'House Of Vasti Puerto Rico',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=House+Of+Vasti+Puerto+Rico',
  wazeUrl: 'https://waze.com/ul?q=House+Of+Vasti+Puerto+Rico&navigate=yes',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=House+Of+Vasti+Puerto+Rico&hl=es&z=14&output=embed',
  hours: [
    { day: 'Lunes – Viernes', time: '9:00 AM – 6:00 PM' },
    { day: 'Sábado', time: '9:00 AM – 4:00 PM' },
    { day: 'Domingo', time: 'Cerrado' },
  ],
  note: 'Citas únicamente con reservación previa por WhatsApp.',
}

export const ABOUT = {
  image:
    'https://images.unsplash.com/photo-1522337660859-02fbefca970c?w=800&q=80',
  imageAlt: 'Adnilibeth Velásquez Ortiz en su estudio de uñas',
  highlights: [
    { label: 'Especialidad', value: 'Nail Art & Gel' },
    { label: 'Enfoque', value: 'Detalle boutique' },
    { label: 'Reservas', value: 'Por WhatsApp' },
  ],
  paragraphs: [
    'Soy Adnilibeth Velásquez Ortiz, fundadora de House Of Vasti. Mi pasión es transformar cada cita en una experiencia de autocuidado donde la elegancia y la creatividad se encuentran.',
    'Cada diseño es pensado para realzar tu estilo personal, con técnicas profesionales, productos de calidad y un ambiente cálido donde te sentirás consentida desde el primer momento.',
  ],
}

export const POLICIES = [
  {
    title: 'Reservaciones',
    text: 'Todas las citas se confirman por WhatsApp. Te recomendamos reservar con al menos 24–48 horas de anticipación.',
  },
  {
    title: 'Cancelaciones',
    text: 'Si necesitas cancelar o reprogramar, avísanos con mínimo 12 horas de anticipación para ofrecer el espacio a otra clienta.',
  },
  {
    title: 'Puntualidad',
    text: 'Por respeto al tiempo de todas, contamos con una tolerancia de 10 minutos. Después, la cita podría reprogramarse.',
  },
  {
    title: 'Depósito',
    text: 'Para diseños elaborados o sets largos puede solicitarse un depósito. Se confirma al momento de reservar por WhatsApp.',
  },
]

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio', id: 'inicio' },
  { label: 'Nosotros', href: '#nosotros', id: 'nosotros' },
  { label: 'Servicios', href: '#servicios', id: 'servicios' },
  { label: 'Galería', href: '#galeria', id: 'galeria' },
  { label: 'Precios', href: '#precios', id: 'precios' },
  { label: 'Testimonios', href: '#testimonios', id: 'testimonios' },
  { label: 'Ubicación', href: '#ubicacion', id: 'ubicacion' },
  { label: 'Contacto', href: '#contacto', id: 'contacto' },
]

export const GALLERY_FILTERS = [
  { id: 'todos', label: 'Todos' },
  { id: 'acrilicas', label: 'Acrílicas' },
  { id: 'gel', label: 'Gel' },
  { id: 'nail-art', label: 'Nail Art' },
  { id: 'pedicure', label: 'Pedicure' },
]

export const SERVICES = [
  {
    title: 'Uñas Acrílicas',
    duration: '90–120 min',
    description:
      'Extensiones resistentes con acabado impecable, larga duración y forma personalizada.',
    icon: '✦',
    whatsappMessage:
      'Hola, me gustaría reservar Uñas Acrílicas en House Of Vasti.',
  },
  {
    title: 'Gel',
    duration: '60–75 min',
    description:
      'Brillo espejo, color intenso y acabado natural con máxima durabilidad.',
    icon: '◇',
    whatsappMessage: 'Hola, me gustaría reservar Gel en House Of Vasti.',
  },
  {
    title: 'Nail Art',
    duration: '75–150 min',
    description:
      'Diseños exclusivos, pedrería, degradados y arte a medida para tu estilo.',
    icon: '❋',
    whatsappMessage:
      'Hola, me gustaría consultar sobre Nail Art en House Of Vasti.',
  },
  {
    title: 'Pedicure',
    duration: '60–90 min',
    description:
      'Cuidado completo de pies con exfoliación, hidratación y esmaltado premium.',
    icon: '◈',
    whatsappMessage: 'Hola, me gustaría reservar Pedicure en House Of Vasti.',
  },
  {
    title: 'Manicure Premium',
    duration: '45–60 min',
    description:
      'Experiencia de lujo con cutículas, masaje y acabado de salón boutique.',
    icon: '♡',
    whatsappMessage:
      'Hola, me gustaría reservar Manicure Premium en House Of Vasti.',
  },
]

export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    alt: 'Diseño de uñas con nail art elegante',
    span: 'col-span-2 row-span-2',
    category: 'nail-art',
  },
  {
    src: 'https://images.unsplash.com/photo-1632345031435-8727f6897c53?w=600&q=80',
    alt: 'Manicure gel en tonos nude',
    span: 'col-span-1 row-span-1',
    category: 'gel',
  },
  {
    src: 'https://images.unsplash.com/photo-1610991161171-b33107375249?w=600&q=80',
    alt: 'Uñas acrílicas con decoración dorada',
    span: 'col-span-1 row-span-1',
    category: 'acrilicas',
  },
  {
    src: 'https://images.unsplash.com/photo-1522337660859-02fbefca970c?w=600&q=80',
    alt: 'Manicure premium en salón',
    span: 'col-span-1 row-span-1',
    category: 'gel',
  },
  {
    src: 'https://images.unsplash.com/photo-1519014817756-b6bc05dabfbc?w=600&q=80',
    alt: 'Nail art creativo y moderno',
    span: 'col-span-1 row-span-1',
    category: 'nail-art',
  },
  {
    src: 'https://images.unsplash.com/photo-1560750588-73207b1dca9a?w=800&q=80',
    alt: 'Pedicure spa de lujo',
    span: 'col-span-2 row-span-1',
    category: 'pedicure',
  },
]

export const PRICING = [
  {
    name: 'Manicure Clásica',
    price: '35',
    duration: '45 min',
    features: ['Limpieza de cutículas', 'Forma y limado', 'Esmalte tradicional', 'Masaje ligero'],
    featured: false,
    whatsappMessage:
      'Hola, me gustaría reservar Manicure Clásica en House Of Vasti.',
  },
  {
    name: 'Gel Premium',
    price: '45',
    duration: '60 min',
    features: ['Preparación profesional', 'Color gel a elección', 'Brillo duradero', 'Hidratación'],
    featured: true,
    whatsappMessage: 'Hola, me gustaría reservar Gel Premium en House Of Vasti.',
  },
  {
    name: 'Acrílicas Full Set',
    price: '65',
    duration: '90 min',
    features: ['Extensiones completas', 'Forma personalizada', 'Color o french', 'Retoque en 2 sem'],
    featured: false,
    whatsappMessage:
      'Hola, me gustaría reservar Acrílicas Full Set en House Of Vasti.',
  },
  {
    name: 'Nail Art Deluxe',
    price: '75',
    priceLabel: 'Desde $75',
    duration: '90+ min',
    features: ['Diseño personalizado', 'Pedrería y detalles', 'Consulta de estilo', 'Acabado boutique'],
    featured: false,
    whatsappMessage:
      'Hola, me gustaría consultar Nail Art Deluxe en House Of Vasti.',
  },
  {
    name: 'Pedicure Spa',
    price: '50',
    duration: '75 min',
    features: ['Exfoliación', 'Tratamiento hidratante', 'Masaje relajante', 'Esmaltado gel'],
    featured: false,
    whatsappMessage: 'Hola, me gustaría reservar Pedicure Spa en House Of Vasti.',
  },
  {
    name: 'Combo Reina',
    price: '95',
    duration: '2.5 hrs',
    features: ['Manicure + Pedicure gel', 'Tratamiento spa', 'Nail art básico', 'Experiencia VIP'],
    featured: false,
    whatsappMessage: 'Hola, me gustaría reservar el Combo Reina en House Of Vasti.',
  },
]

export function getServiceWhatsAppUrl(service) {
  return buildWhatsAppUrl(service.whatsappMessage)
}

export function getPricingWhatsAppUrl(plan) {
  return buildWhatsAppUrl(plan.whatsappMessage)
}

export const TESTIMONIALS = [
  {
    name: 'María G.',
    text: 'Las mejores uñas que he tenido. Adnilibeth es una artista — cada detalle perfecto y el ambiente del salón es pura elegancia.',
    rating: 5,
  },
  {
    name: 'Karla R.',
    text: 'Llevo años viniendo a House Of Vasti. Siempre salgo feliz, con diseños únicos que recibo cumplidos toda la semana.',
    rating: 5,
  },
  {
    name: 'Valeria S.',
    text: 'Servicio impecable, puntualidad y resultados de revista. Mi lugar favorito para mimarme en Puerto Rico.',
    rating: 5,
  },
]
