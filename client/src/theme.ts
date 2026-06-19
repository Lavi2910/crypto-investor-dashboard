import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0A0E14",
      paper: "#121821",
    },
    primary: {
      main: "#6366f1",
    },
    secondary: {
      main: "#0E131B",
    },
    success: {
      main: "#2ecc71",
    },
    error: {
      main: "#e0484a",
    },
    divider: "rgba(255,255,255,0.06)",
    text: {
      primary: "#FFFFFF",
      secondary: "#979EAE",
    },
  },
});
