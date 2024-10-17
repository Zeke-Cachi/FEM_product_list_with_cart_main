/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      project_red: "hsl(14, 86%, 42%)",
      project_green: "hsl(159, 69%, 38%)",
      project_rose_50: "hsl(20, 50%, 98%)",
      project_rose_100: "hsl(13, 31%, 94%)",
      project_rose_300: "hsl(14, 25%, 72%)",
      project_rose_400: "hsl(7, 20%, 60%)",
      project_rose_500: "hsl(12, 20%, 44%)",
      project_rose_900: "hsl(14, 65%, 9%)",
    },
    extend: {
      fontFamily: {
        red_hat: ["RedHatText", "sans-serif"],
      },
    },
  },
  plugins: [],
};
