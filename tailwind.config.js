/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "robustica-background": "#ede1d1",
        "robustica-logo": "#6a704c",
        background: "#FFFFF0",
        coklat: "#674636",
        hijau: "#AAB396",
        "hijau-tua": "#626F47",
        "coklat-tua": "#3d3333",
        "coklat-normal": "#503C3C",
        "coklat-muda": "#7E6363",
        "bg-coklat": "#141514",
      },
    },
  },
  plugins: [],
};
