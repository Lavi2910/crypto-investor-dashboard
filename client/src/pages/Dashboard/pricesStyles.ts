import { type CSSProperties } from "react";
import { alpha } from "@mui/material/styles";
import { theme } from "../../theme";

export const grid = (): CSSProperties => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(11rem, 1fr))",
  gap: "0.75rem",
  marginTop: "0.5rem",
});

export const row = (): CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  padding: "0.75rem",
  borderRadius: "0.75rem",
  border: `0.0625rem solid ${theme.palette.divider}`,
  backgroundColor: alpha(theme.palette.common.white, 0.02),
});

export const left = (): CSSProperties => ({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
});

export const avatar = (): CSSProperties => ({
  width: "2rem",
  height: "2rem",
  borderRadius: "50%",
});

export const name = (): CSSProperties => ({
  fontSize: "0.9375rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
});

export const symbol = (): CSSProperties => ({
  fontSize: "0.8125rem",
  color: theme.palette.text.secondary,
});

export const right = (): CSSProperties => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const price = (): CSSProperties => ({
  fontSize: "0.9375rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
});

export const change = (): CSSProperties => ({
  fontSize: "0.8125rem",
  fontWeight: 500,
});

export const muted = (): CSSProperties => ({
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
});

export const error = (): CSSProperties => ({
  color: theme.palette.error.main,
  fontSize: "0.875rem",
});
