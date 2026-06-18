import type { CSSProperties } from "react";
import { theme } from "../../theme";

export const containerStyle = () : CSSProperties => {
    return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        width: '100vw',
        height: '100vh',
        gap: '1.5rem',

    }
}

export const textFieldStyle = (): CSSProperties => {
    return {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.secondary,
        width: '20rem',

    };
}

export const buttonStyle = (): CSSProperties => {
    return {
        width: '20rem'
    }
}

export const innerContainer = (): CSSProperties => {
    return {
        display: 'flex',
        flexDirection: 'column',
        width: '20rem'
    }
}

export const alertStyle = () => ({
  marginTop: 12,
  marginBottom: 12,
});

export const formStyle = (): CSSProperties => {
    return {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '20rem',
    }
}