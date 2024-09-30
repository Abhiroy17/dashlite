import { indigo, purple } from "@mui/material/colors";
import { createContext, useState, useMemo } from "react";

// theme settings
const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            // primary values for component
            primary: {
              main: "rgba(28,28,28,1)",
              light: "rgba(28,28,28, 0.05)",
              medium: "rgba(28,28,28,0.4)",
              blue: "rgba(227, 245, 255, 1)",
              purple: "rgba(229, 236, 246, 1)",
            },
            secondary: {
              main: "#F7F9FB",
              medium: "rgba(28,28,28,0.1)",
              cyan: "rgba(168, 197, 218, 1)",
              indigo: "rgba(149, 164, 252, 1)",
              blue: "rgba(177, 227, 255, 1)",
              mint: "rgba(186, 237, 189, 1)",
            },
            // neutral colors for typography
            neutral: {
              dark: "rgba(28, 28, 28, 1)",
              main: "rgba(28, 28, 28, 0.5)",

              light: "rgba(28, 28, 28, 0.2)",
            },
            background: {
              default: "white",
            },
            text: {
              main: "rgba(28,28,28,1)",
              light: "rgba(28,28,28,0.05)",
              mediumDark: "rgba(28,28,28,0.8)",
              medium: "rgba(28,28,28,0.4)",
              mediumLight: "rgba(28,28,28,0.2)",
              blue: "rgba(227, 245, 255, 1)",
              purple: "rgba(229, 236, 246, 1)",
            },
          }
        : {
            primary: {
              main: "rgba(255, 255, 255, 1)",
              light: "rgba(255, 255, 255, 0.05)",
              medium: "rgba(255,255,255,0.4)",
              blue: "rgba(227, 245, 255, 1)",
              purple: "rgba(229, 236, 246, 1)",
            },
            secondary: {
              main: "rgba(168, 197, 218, 1)",
              medium: "255, 255, 255, 0.1",
              cyan: "rgba(168, 197, 218, 1)",
            },
            neutral: {
              dark: "rgba(255, 255, 255, 1)",
              main: "rgba(255,255,255, 0.2)",
              light: "rgba(255, 255, 255, 0.05)",
            },
            background: {
              default: "black",
            },
          text: {
              main: "rgba(255, 255, 255, 1)",
              light: "rgba(255, 255, 255,0.05)",
              mediumLight: "rgba(255, 255, 255,0.2)",
              medium: "rgba(255, 255, 255,0.4)",
              mediumDark: "rgba(255,255,255,0.8)",
              blue: "rgba(227, 245, 255, 1)",
              purple: "rgba(229, 236, 246, 1)",
            },
          }),
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      fontSize: 12,
      h1: {
        fontFamily: "Inter, sans-serif",
        fontSize: 40,
      },
      h2: {
        fontFamily: "Inter, sans-serif",
        fontSize: 32,
      },
      h3: {
        fontFamily: "Inter, sans-serif",
        fontSize: 24,
      },
      h4: {
        fontFamily: "Inter, sans-serif",
        fontSize: 20,
      },
      h5: {
        fontFamily: "Inter, sans-serif",
        fontSize: 16,
      },
      bold_h6: {
        fontFamily: "Inter, sans-serif",
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "20px",
        fontFeatureSettings: "'ss01' on, 'cv01' on, 'cv11' on",
        fontStyle: "normal",
      },
      h6: {
        fontFamily: "Inter, sans-serif",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "20px",
        fontFeatureSettings: "'ss01' on, 'cv01' on, 'cv11' on",
        fontStyle: "normal",
      },
      caption: {
        fontFamily: "Inter, sans-serif",
        fontSize: "12px",
        lineHeight: "18px",
        fontWeight: "400",
        fontFeatureSettings: "'ss01' on, 'cv01' on, 'cv11' on",
        fontStyle: "normal",
      },
    },
  };
};

export default themeSettings;
