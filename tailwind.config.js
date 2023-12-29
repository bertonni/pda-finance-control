/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#345ca8',
        'primary-container': '#d9e2ff',
        'on-primary-container': '#001a43',
        'secondary': '#805600',
        'secondary-container': '#ffddb0',
        'on-secondary-container': '#281800',
        'tertiary': '#725573',
        'tertiary-container': '#fcd7fb',
        'on-tertiary-container': '#2a132d',
        'surface': '#fefbff',
        'on-surface': '#1b1b1f',
        'outline': '#757780',
        'surface-variant': '#e1e2ec',
        'on-surface-variant': '#44474f',
        'error': '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error-container': '#410002',
      }
    },
  },
  plugins: [],
}

