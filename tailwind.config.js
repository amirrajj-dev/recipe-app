/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      daisyui : {
        themes: ["light", "dark", "cupcake"]
      },
      fontFamily: {
        'dana-demi' : 'dana-demi',
        'dana-medium' : 'dana-medium',
        'dana-regular' : 'dana-regular',
      }
    },
  },
  plugins: [daisyui],
}