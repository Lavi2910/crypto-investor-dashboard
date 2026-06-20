import { type CSSProperties } from "react";
import { theme } from "../../theme";

export const muted = (): CSSProperties => ({
  color: theme.palette.text.secondary,
});

export const error = (): CSSProperties => ({
  color: theme.palette.error.main,
});

export const wrapper = (): CSSProperties => ({
  textAlign: "center",
});

export const image = (): CSSProperties => ({
  maxWidth: "100%",
  maxHeight: "21rem",
  objectFit: "contain",
  borderRadius: "0.75rem",
  marginBottom: "0.5rem",
});

export const caption = (): CSSProperties => ({
  fontSize: "0.8125rem",
  color: theme.palette.text.secondary,
});
