/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Interface Colors
        interface: {
          '010E0E': '#010E0E',
          '1A2626': '#1A2626',
          '343E3E': '#343E3E',
          '414A4A': '#414A4A',
          '676E6E': '#676E6E',
          'base': '#8D9393',
          'AEB2B2': '#AEB2B2',
          'C0C3C3': '#C0C3C3',
          'D4D6D6': '#D4D6D6',
          'E6E7E7': '#E6E7E7',
          'FFFFFF': '#FFFFFF',
          'footer-bg' : '#DDDFDF',
          'neutral-50': '#F7F8F8'
        },
        primary: {
          '0A2038': '#0A2038',
          '0F2E52': '#0F2E52',
          'base': '#143F70',
          '194E8A': '#194E8A',
          '2470C7': '#2470C7',
          '4E92DF': '#4E92DF',
          '8AB7EA': '#8AB7EA',
        },
        secondary: {
          '614600': '#614600',
          '946A00': '#946A00',
          'base': '#C78F00',
          'F6B100': '#F6B100',
          'FFC42E': '#FFC42E',
          'FFD361': '#FFD361',
          'FFE194': '#FFE194',
        },
        accent: {
          '27BE69': '#27BE69',
          'F2415A': '#F2415A',
          '295BFF': '#295BFF',
          'FFBF0F': '#FFBF0F',
        },
      },
      fontFamily: {
        zodiak: ['Zodiak', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': '64px',
        'h2': '48px',
        'h3': '32px',
        'h4': '24px',
        'h5': '20px',
        'p1': '18px',
        'p2': '16px',
        'p3': '14px',
        'p4': '13px',
        'p5': '12px',
      },
      fontWeight: {
        'normal': 400,
        'bold': 700,
        'semibold': 600,
        'medium': 540,
      },
      padding: {
        'side-padding': '100px',
        'padding-56': '56px',
      },
    },
  },
  plugins: [],
}

