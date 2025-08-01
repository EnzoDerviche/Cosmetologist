export const openWhatsApp = () => {
  const phoneNumber = "5491123456789" // Cambia por tu número real
  const message = "Hola! Me gustaría agendar una cita en Milenas Nails"
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  window.open(whatsappUrl, "_blank")
}
