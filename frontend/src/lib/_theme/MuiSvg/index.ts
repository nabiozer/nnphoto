import { Components, Theme } from "@mui/material";
export const MuiSvgIconTheme: Components = {
  MuiSvgIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        "&.select-svg": {
          ".select-input-base &": {
            position: "absolute",
            right: 31,
            cursor: "pointer",
            color: (theme as Theme).palette.common.white,
            width: "1.2em",
            height: "1.2em",
            padding: "5px",
            ":hover": {
              backgroundColor: (theme as Theme).palette.grey[50],
              color: (theme as Theme).palette.primary.light,
              borderRadius: "50%",
            },
          },
          ".Mui-focused &": { color: (theme as Theme).palette.primary.light },
        },
      }),
    },
  },
};
