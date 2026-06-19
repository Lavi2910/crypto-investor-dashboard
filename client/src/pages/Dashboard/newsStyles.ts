import { type CSSProperties } from "react";
import { alpha } from "@mui/material/styles";
import { theme } from "../../theme";

export const muted = (): CSSProperties => ({
  color: theme.palette.text.secondary,
});

export const error = (): CSSProperties => ({
  color: theme.palette.error.main,
});

export const item = (isLast: boolean, isHovered: boolean): CSSProperties => ({
  display: "block",
  padding: "0.75rem 0.75rem 0.75rem 1.25rem",
  margin: "0 -0.75rem",
  borderRadius: "0.5rem",
  borderBottom: isLast ? "none" : `0.0625rem solid ${theme.palette.divider}`,
  backgroundColor: isHovered ? alpha(theme.palette.common.white, 0.04) : "transparent",
  textDecoration: "none",
  transition: "background-color 0.15s ease",
});

export const title = (): CSSProperties => ({
  fontSize: "0.9375rem",
  color: theme.palette.text.primary,
  marginBottom: "0.25rem",
});

export const meta = (): CSSProperties => ({
  fontSize: "0.8125rem",
  color: theme.palette.text.secondary,
});
