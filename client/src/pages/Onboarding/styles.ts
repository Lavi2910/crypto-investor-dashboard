import { type CSSProperties } from "react";
import { alpha } from "@mui/material/styles";
import { theme } from "../../theme";


export const containerStyle = (): CSSProperties => {
    return {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100vh',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '3rem 1rem',
        gap: '2rem'
    }
}

export const sectionContainer = (): CSSProperties => {
    return {
        display: 'flex',
        flexDirection: 'column',
        width: 'min(60rem, 100%)',
        justifyContent: 'center',
    }
}

export const optionGrid = (): CSSProperties => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 14.2rem)',
    gap: '1rem',
    marginTop: '1.5rem',
});

export const optionCard = (selected: boolean): CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    border: '1px solid',
    borderColor: selected ? theme.palette.success.main : theme.palette.divider,
    backgroundColor: selected ? alpha(theme.palette.success.main, 0.08) : theme.palette.secondary.main,
    cursor: 'pointer',
    justifyContent: 'center'
});

export const optionDescription = (): CSSProperties => ({
    color: theme.palette.text.secondary,
});

export const optionLabel = (): CSSProperties => ({
    fontWeight: 700,
});

export const continueButtonContainer = (): CSSProperties => ({
    display: 'flex',
    justifyContent: 'center',
});

export const buttonStyle = (): CSSProperties => {
    return {
        width: '20rem'
    }
}

export const coinAvatar = (color: string): CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    backgroundColor: color,
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: '0.7rem',
});
