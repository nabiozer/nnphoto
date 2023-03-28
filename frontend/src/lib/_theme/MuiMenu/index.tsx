import { Components } from '@mui/material';
export const MuiMenuTheme: Components = {
    MuiMenuItem: {
        styleOverrides:
            { root: {}, },
    }, MuiMenu: {
        styleOverrides:
            { root: { '& .breadcrumbs-select': { padding: '2px 10px 2px 10px !important', fontSize: 'var(--field-label-font-size)', }, }, },
    },
};