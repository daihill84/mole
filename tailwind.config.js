/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#1a3c34',
        'mid-green': '#2e5b52',
        'light-green': '#3d7c72',
        'cream': '#f5e9c4',
        'light-gray': '#e5e7eb',
      },
    },
  },
  plugins: [],
};