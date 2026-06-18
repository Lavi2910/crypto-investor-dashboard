import { createTheme } from "@mui/material/styles";

export const coinColors: Record<string, string> = {
  BTC: "#f7931a",
  ETH: "#627eea",
  SOL: "#3ee68f",
  XRP: "#3aa1c9",
  ADA: "#3457d5",
  DOGE: "#c2a633",
  LINK: "#375bd2",
  AVAX: "#e84142",
};

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
