/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        3: "3px;",
        5: "5px;"
      },
      boxShadow: {
        "my": "rgba(92, 245, 115, 0.123) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
      },
    },
  },
  plugins: [],
}

