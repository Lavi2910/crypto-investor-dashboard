import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0A0E14",
      paper: "#0A0E14",
    },
    secondary: {
      main: "#0E131B",
    },
    success: {
      main: "#2ecc71",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#979EAE",
    },
  },
});
