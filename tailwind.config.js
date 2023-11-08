/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Lato",
    },
    container: {
      padding: {
        DEFAULT: "10px",
        // lg: '0',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        body: "#e5e5e5",
        dark: "#0a0909",
        grey: {
          DEFAULT: "#777876",
          100: "#e4e4e3",
        },
        accent: {
          DEFAULT: "#fe7634",
          hover: "#F55304",
        },
      },
      backgroundImage: {
        pattern: "url('/images/body-bg-pattern.png')",
        hero: "url('/images/hero/bg.png')",
        menu: "url('/images/menu/bg.png')",
        testimonial: "url('/images/testimonial/bg.png')",
        newsletter: "url('/images/newsletter/bg.png')",
        footer: "url('/images/footer/bg.png')",
      },
    },
  },
  plugins: [],
};
