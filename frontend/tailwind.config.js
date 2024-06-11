/** @type {import('tailwindcss').Config} */
export default {
  //specifies file type we want tailwind to apply to
  content: ["./index,html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      padding : {
        md:"10rem",
      }
    }
  },
  plugins: [],
}

