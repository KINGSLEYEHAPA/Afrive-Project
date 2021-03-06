module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: {
        10: "#FEEAE7",
        20: "#FCD6CF",
        30: "#FFA599",
        40: "#F78978",
        50: "#F45C45",
        60: "#E74932",
        70: "#D84818",
        80: "#A13612",
        100: "#F67A6A",
        120: "#F89386",
      },
      accent: {
        rating: " #FDCC0D",
      },
      neutral: {
        white: "#FFFFFF",
        20: "#E7E7E7",
        30: "#C3C3C3",
        40: "#909090",
        50: "#767676",
        60: "#525252",
        70: "#3D3D3D",
        80: "#202020",
        black: "#000000",
      },
    },
    fontSize: {
      h1: ["40px", { lineHeight: "48px" }],
      h2: ["32px", { lineHeight: "40px" }],
      h3: ["24px", { lineHeight: "32px" }],
      h4: ["20px", { lineHeight: "32px" }],
      bodyL: ["18px", { lineHeight: "24px" }],
      bodyN: ["16px", { lineHeight: "24px" }],
      bodyS: ["14px", { lineHeight: "18px" }],
      buttonT: ["18px", { lineHeight: "18px" }],
      buttonT2: ["18px", { lineHeight: "32px" }],
      buttonL: ["16px", { lineHeight: "32px" }],
      sub: ["12px", { lineHeight: "16px" }],
    },
    fontWeight: {
      reg: "450",
      medium: "500",
    },

    screens: {
      mobm: "340px",
      // => @media (min-width: 640px) { ... }
      mob: "375px",
      // => @media (min-width: 640px) { ... }
      mobx: "540px",
      // => @media (min-width: 640px) { ... }

      moby: "740px",
      // => @media (min-width: 640px) { ... }

      mtab: "860px",
      // => @media (min-width: 640px) { ... }

      tab: "1024px",
      // => @media (min-width: 640px) { ... }
      ltab: "1100px",
      // => @media (min-width: 640px) { ... }
      l2tab: "1225px",
      // => @media (min-width: 640px) { ... }

      lap: "1366px",
      // => @media (min-width: 1024px) { ... }

      desk: "1440px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {},
  },

  plugins: [require("tailwind-scrollbar-hide")],
};
