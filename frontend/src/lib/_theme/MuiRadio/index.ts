import { Components, Theme } from "@mui/material";
export const MuiRadioTheme: Components = {
  MuiRadio: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: (theme as Theme).palette.primary.main,
        padding: "10px !important",
      }),
    },
  },
};
