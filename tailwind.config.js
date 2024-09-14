/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'media560': '560px'
      },
      backgroundImage: {
        'testimonial-section': "url('images/testimonial-section-background.png')"
      }
    },
  },
  plugins: [],
}

