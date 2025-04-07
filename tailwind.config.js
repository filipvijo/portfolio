/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(92, 36, 255, 0.5)',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 40px rgba(92, 36, 255, 0.8)',
          },
        },
      },
    },
  },
  plugins: [],
}
