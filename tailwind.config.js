/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorbg: "#1f1f38",
        colorbgvariant: "#2c2c6c",
        colorprimary: "#4db5ff",
        colorprimaryvariant: "rgba(77, 181, 255, 0.4)",
        colorwhite: "#fff",
        colorlight: "rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
