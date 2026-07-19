/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#030306",
        "bg-alt": "#0a0a12",
        primary: "#6d28d9",
        "primary-glow": "rgba(109, 40, 217, 0.4)",
        secondary: "#ff6b35",
        "secondary-glow": "rgba(255, 107, 53, 0.3)",
        teal: "#14b8a6",
        "teal-glow": "rgba(20, 184, 166, 0.3)",
        text: "#f8fafc",
        "text-muted": "#94a3b8",
        "text-dark": "#475569",
        border: "rgba(255, 255, 255, 0.08)",
        "glass-bg": "rgba(10, 10, 18, 0.45)",
        "glass-border": "rgba(255, 255, 255, 0.07)",
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
