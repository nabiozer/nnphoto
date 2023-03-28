import { Components } from '@mui/material';
export const MuiRatingTheme: Components = {
    MuiRating: {
        defaultProps: { color: 'secondary', }, styleOverrides: { root: ({ ownerState, theme }: any) => ({ color: theme.palette[ownerState.sx.color || theme.components.MuiRating.defaultProps.color].main, }), },
    },
};