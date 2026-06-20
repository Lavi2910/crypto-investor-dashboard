import { type CSSProperties } from "react";
import { theme } from "../../theme";

export const wrapper = (): CSSProperties => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

export const muted = (): CSSProperties => ({
  color: theme.palette.text.secondary,
});

export const error = (): CSSProperties => ({
  color: theme.palette.error.main,
});

export const text = (): CSSProperties => ({
  fontSize: "0.9375rem",
  color: theme.palette.text.primary,
  lineHeight: 1.6,
  textAlign: "center",
});
