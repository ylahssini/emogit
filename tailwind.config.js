/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    'bg-rose-100',
    'bg-red-100',
    'bg-purple-100',
    'bg-lime-100',
    'bg-orange-100',
    'bg-sky-100',
    'bg-green-100',
    'bg-blue-100',
    'bg-amber-100',
    'bg-fuchsia-100',
    'bg-violet-100',
    'hover:bg-rose-200',
    'hover:bg-red-200',
    'hover:bg-purple-200',
    'hover:bg-lime-200',
    'hover:bg-orange-200',
    'hover:bg-sky-200',
    'hover:bg-green-200',
    'hover:bg-blue-200',
    'hover:bg-amber-200',
    'hover:bg-fuchsia-200',
    'hover:bg-violet-200',
  ],
  theme: {
    extend: {
      fontFamily: {
        'emoji': ['OpenMoji', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}

