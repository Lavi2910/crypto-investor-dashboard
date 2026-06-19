import { type CSSProperties } from "react";
import { alpha } from "@mui/material/styles";
import { theme } from "../../theme";

export const card = (): CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  boxSizing: "border-box",
  background: theme.palette.background.paper,
  border: `0.0625rem solid ${theme.palette.divider}`,
  borderRadius: "1rem",
  padding: "1.25rem 1.5rem",
  marginBottom: "1.25rem",
});

export const header = (): CSSProperties => ({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  paddingBottom: "1rem",
  borderBottom: `0.0625rem solid ${theme.palette.divider}`,
});

export const iconWrap = (): CSSProperties => ({
  width: "2.75rem",
  height: "2.75rem",
  borderRadius: "0.75rem",
  background: alpha(theme.palette.primary.main, 0.15),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const title = (): CSSProperties => ({
  margin: 0,
  fontSize: "1.125rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
});

export const subtitle = (): CSSProperties => ({
  margin: 0,
  fontSize: "0.8125rem",
  color: theme.palette.text.secondary,
});

export const body = (): CSSProperties => ({
  flex: 1,
  paddingTop: "0.5rem",
  overflow: "auto",
});

export const footer = (): CSSProperties => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: "1rem",
  marginTop: "0.5rem",
  borderTop: `0.0625rem solid ${theme.palette.divider}`,
});
