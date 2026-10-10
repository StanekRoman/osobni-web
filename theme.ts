import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        background: { value: "#F5F6F8" },

        textPrimary: { value: "#232526" },
        textLight: { value: "#FFFFFF" },
        textSubtle: { value: "#666A73" },
        textSubtleLight: { value: "#D6B8DD" },
        textLightSecondary: { value: "#D6D8DD" },

        surfacePrimary: { value: "#FFFFFF" },
        surfaceSecondary: { value: "#F8F9FA" },
        surfaceDark: { value: "#232526" },
        surfaceDarkSecondary: { value: "#303235" },

        accent: { value: "#7C3AED" },
        accentDark: { value: "#5B21B6" },
        accentLight: { value: "#EDE9FE" },
        accentSurface: { value: "#F5F1FF" },

        green: { value: "#DCFCE7" },
        blue: { value: "#CFFAFE" },

        border: { value: "#E6E7EB" },
      },

      fonts: {
        heading: {
          value: "var(--font-plus-jakarta-sans)",
        },
        body: {
          value: "var(--font-inter)",
        },
        editorial: {
          value: "var(--font-roboto-serif)",
        },
      },

      radii: {
        sm: { value: "14px" },
        icon: { value: "15px" },
        md: { value: "20px" },
        lg: { value: "24px" },
        xl: { value: "28px" },
      },

      spacing: {
        xs: { value: "8px" },
        sm: { value: "12px" },
        md: { value: "16px" },
        lg: { value: "24px" },
        xl: { value: "32px" },
        "2xl": { value: "48px" },
        "3xl": { value: "60px" },
        "4xl": { value: "80px" },
        "5xl": { value: "100px" },
        "6xl": { value: "116px" },
        "7xl": { value: "132px" },
      },

      sizes: {
        container: { value: "1160px" },
      },
    },

    textStyles: {
      bodyLarge: {
        value: {
          fontFamily: "{fonts.body}",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "28px",
        },
      },

      body: {
        value: {
          fontFamily: "{fonts.body}",
          fontSize: "17px",
          fontWeight: "400",
          lineHeight: "27px",
        },
      },

      bodyMedium: {
        value: {
          fontFamily: "{fonts.body}",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "25px",
        },
      },

      bodySmall: {
        value: {
          fontFamily: "{fonts.body}",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "22px",
        },
      },

      eyebrow: {
        value: {
          fontFamily: "{fonts.body}",
          fontSize: "12px",
          fontWeight: "700",
          lineHeight: "12px",
          letterSpacing: "1.2px",
          textTransform: "uppercase",
        },
      },

      eyebrowSmall: {
        value: {
          fontFamily: "{fonts.body}",
          fontSize: "10px",
          fontWeight: "700",
          lineHeight: "10px",
          letterSpacing: "1.4px",
          textTransform: "uppercase",
        },
      },

      button: {
        value: {
          fontFamily: "{fonts.body}",
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "15px",
        },
      },

      nav: {
        value: {
          fontFamily: "{fonts.body}",
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "12px",
        },
      },

      label: {
        value: {
          fontFamily: "{fonts.body}",
          fontSize: "11px",
          fontWeight: "600",
          lineHeight: "11px",
          letterSpacing: "0.3px",
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
