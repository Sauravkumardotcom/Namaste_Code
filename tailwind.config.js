// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.25)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        lg: '4px 4px 6px rgba(0, 0, 0, 0.5)',
        glow: '0 0 10px #facc15, 0 0 20px #facc15',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ]
}
module.exports = {
  darkMode: 'class', // required for manual toggle
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundStart: 'var(--bg)',
        backgroundEnd: 'var(--bg)',
        foreground: 'var(--text)',
        muted: 'rgba(255,255,255,0.6)',
        accent: 'var(--accent)',
        accentHover: 'var(--accent)', // Or define a hover version in CSS
      },
    },
  },
  darkMode: false, // You’ll manage it via classes like .light-theme and .dark-theme
};
