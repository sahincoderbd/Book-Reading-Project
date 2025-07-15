/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx,css}",
    ],
    theme: {
      extend: {
        colors: {
          primary: 'var(--color-primary)', // Maps to #fff
          secondary: 'var(--color-secondary)', // Maps to #000000
          text: 'var(--color-text)', // Maps to #434343
          accent: 'var(--color-accent)', // Maps to #04d980
          blue: 'var(--color-blue)', // Maps to #50B1C9
        },

        fontFamily: {
          'playfair-display': ["Playfair Display", 'serif'], // Custom font utility
        }
      },
    },
    plugins: [('daisyui')],
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: 'var(--color-primary)', // #fff
            secondary: 'var(--color-secondary)', // #000000
            'text': 'var(--color-text)', // #434343
            accent: 'var(--color-accent)', // #04d980
            blue: 'var(--color-blue)', // #50B1C9
            'base-100': '#ffffff', // Background for DaisyUI components
            'base-200': '#f5f5f5',
            'base-300': '#e5e5e5',
            // Add other DaisyUI theme properties as needed
          },
        },
      ],
    },
  };