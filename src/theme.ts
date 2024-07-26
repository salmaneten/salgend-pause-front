import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    dark0: "#061111",
    dark1: "#0c1e1d",
    dark2: "#1a2a29",
    dark4: "#333937",
    dark5: "#1a2a29",
    yellow: "#FED053",
    vividYellow: "#F4B300",
    light: "#F5F7F8",
    grayy: "#211c1b",
  },
  sizes: {
    xs: "50px",
  },
  font: {
    ArialSansSerif: "Arial, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
});

export default theme;
