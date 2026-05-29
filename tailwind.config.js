/* eslint-env node */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.25)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        lg: '4px 4px 6px rgba(0, 0, 0, 0.5)',
        glow: '0 0 10px #facc15, 0 0 20px #facc15',
      },
      colors: {
        backgroundStart: 'var(--bg)',
        backgroundEnd: 'var(--bg)',
        foreground: 'var(--text)',
        muted: 'rgba(255,255,255,0.6)',
        accent: 'var(--accent)',
        accentHover: 'var(--accent)',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
