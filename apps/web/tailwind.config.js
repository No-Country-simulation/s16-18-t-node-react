/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary: '#034363',
        secondary:  '#6E7191',
        tertiary: '#652BB3'
      },
      borderColor: {
        primary: '#D3D3D3',
        secondary: '#939393'
      },
      backgroundColor: {
        primary: '#D9DBE9',
        secondary: '#BAADDB'
      }
    },
  },
  plugins: [],
}
