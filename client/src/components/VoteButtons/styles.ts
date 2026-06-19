import { type CSSProperties } from "react";
import { alpha } from "@mui/material/styles";
import { theme } from "../../theme";

export const container = (): CSSProperties => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const label = (): CSSProperties => ({
  fontSize: "0.8125rem",
  color: theme.palette.text.secondary,
});

export const voteBtn = (active: boolean, activeColor: string): CSSProperties => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "0.625rem",
  cursor: "pointer",
  fontSize: "1rem",
  background: active ? alpha(activeColor, 0.13) : "transparent",
  border: `0.0625rem solid ${active ? activeColor : theme.palette.divider}`,
});
