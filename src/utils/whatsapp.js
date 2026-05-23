const WHATSAPP_NUMBER = '17875001835'

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hola, me gustaría reservar una cita en House Of Vasti.'

export const WHATSAPP_DEFAULT_URL = buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)
