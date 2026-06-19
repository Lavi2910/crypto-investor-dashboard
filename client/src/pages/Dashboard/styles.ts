import { type CSSProperties } from "react";

export const pageStyle = (): CSSProperties => ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 30rem), 1fr))",
    gridAutoRows: "1fr",
    gap: "1.5rem",
    width: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "2rem",
});

export const sectionStyle = (): CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    height: "100%",
});
