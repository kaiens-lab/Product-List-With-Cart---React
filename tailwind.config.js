/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Red: "hsl(14, 86%, 42%)",
        Green: "hsl(159, 69%, 38%)",
        Rose50: "hsl(20, 50%, 98%)",
        Rose100: "hsl(13, 31%, 94%)",
        Rose300: "hsl(14, 25%, 72%)",
        Rose400: "hsl(7, 20%, 60%)",
        Rose500: "hsl(12, 20%, 44%)",
        Rose900: "hsl(14, 65%, 9%)",
      },
      fontFamily: {
        redhat: ["RedHat", "sans-serif"],
      },
      fontSize: {
        textPreset1: [
          "56px",
          {
            lineHeight: "120%",
            letterSpacing: "0px",
            fontWeight: "700",
          },
        ],
        textPreset2: [
          "24px",
          {
            lineHeight: "125%",
            letterSpacing: "0px",
            fontWeight: "700",
          },
        ],
        textPreset3: [
          "16px",
          {
            lineHeight: "150%",
            letterSpacing: "0px",
            fontWeight: "600",
          },
        ],
        textPreset4: [
          "14px",
          {
            lineHeight: "150%",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
        textPreset4Bold: [
          "14px",
          {
            lineHeight: "150%",
            letterSpacing: "0px",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [],
};
