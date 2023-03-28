import { Components } from "@mui/material";
export const MuiPaperTheme: Components = {
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: "0 1px 2px var(--shadow-2)",
        color: "var(--color-text)",
      },
    },
  },
};
