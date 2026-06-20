import { type CSSProperties } from "react";
import { theme } from "../../theme";

export const containerStyle = (): CSSProperties => ({
    width: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "2rem",
});

export const headerStyle = (): CSSProperties => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
});

export const titleStyle = (): CSSProperties => ({
    margin: 0,
    fontSize: "1.75rem",
    fontWeight: 600,
    color: theme.palette.text.primary,
});

export const pageStyle = (): CSSProperties => ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 30rem), 1fr))",
    gridAutoRows: "1fr",
    gap: "1.5rem",
    width: "100%",
});

export const sectionStyle = (): CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    height: "100%",
});
