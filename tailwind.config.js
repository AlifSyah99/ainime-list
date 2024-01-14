/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        color: {
          accent: "#312E81",
          primary: "#ffffff",
          dark: "#000000",
          darkSecondary: "#272727",
          secondary: "#E5E7EB",
          borderColor: "#333333"
        }
      }

    }
    // colors: {
    //   color: {
    //     primary: "rgb(229 231 235)",
    //     bgPrimary: " rgb(229 231 235)",
    //     accent:"",

    //   }
    // }
  },
  plugins: [],
}
