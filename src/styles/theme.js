import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2c3e50",
      light: "#34495e",
      dark: "#1a252f",
    },
    secondary: {
      main: "#e74c3c",
      light: "#f06292",
      dark: "#c2185b",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "\"Poppins\", \"Inter\", sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "clamp(2.5rem, 8vw, 4rem)",
    },
    h2: {
      fontWeight: 600,
      fontSize: "clamp(2rem, 6vw, 3rem)",
    },
    h3: {
      fontWeight: 600,
      fontSize: "clamp(1.5rem, 4vw, 2rem)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});
