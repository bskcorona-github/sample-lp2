/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ocean-blue": {
          50: "#f0f7ff",
          100: "#e0eefe",
          200: "#baddfd",
          300: "#7dc1fc",
          400: "#38a5f8",
          500: "#0e86ea",
          600: "#0169c9",
          700: "#0253a3",
          800: "#064986",
          900: "#0b3e6f",
          950: "#082b4e",
        },
      },
    },
  },
  plugins: [],
};
