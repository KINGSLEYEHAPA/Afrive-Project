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
      },
    },
    fontSize: {
      h1: ["40px", { lineHeight: "48px", letterSpacing: "4px" }],
      h2: ["32px", { lineHeight: "40px", letterSpacing: "4px" }],
      h3: ["24px", { lineHeight: "32px", letterSpacing: "4px" }],
      h4: ["20px", { lineHeight: "32px", letterSpacing: "4px" }],
      bodyL: ["18px", { lineHeight: "24px", letterSpacing: "4px" }],
      bodyN: ["16px", { lineHeight: "24px", letterSpacing: "4px" }],
      bodyS: ["14px", { lineHeight: "18px", letterSpacing: "4px" }],
      buttonT: ["18px", { lineHeight: "18px", letterSpacing: "4px" }],
      sub: ["12px", { lineHeight: "16px", letterSpacing: "4px" }],
    },
    fontWeight: {
      reg: "450",
      mediumB: "500",
    },

    extend: {},
  },

  plugins: [],
};
