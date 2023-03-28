import { Components, /* Theme */ 
Theme} from "@mui/material";
export const MuiTableTheme: Components = {
  MuiTableContainer: {
    styleOverrides: {
      root: {
        borderRadius: "max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px",
      },
    },
  },
  MuiTable: {
    styleOverrides: {
      root: {
        "& caption": {
          captionSide: "top",
          padding: 0,
          "& .MuiPaper-root": {
            boxShadow: "none",
            borderRadius: 0,
          },
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        fontSize: 12,
        lineHeight: 1.2,
        fontWeight: 600,
        whiteSpace: "pre-line",
        overflow: "hidden",
        textOverflow: "ellipsis",
        padding: "20px 1.5rem",
      },
      root: ({ theme }) => ({
        fontWeight: 400,
        fontSize: 13,
        lineHeight: 1,
        padding: "10px 1.5rem",
        borderBottom: `1px solid ${(theme as Theme).palette.dark[50]}`,
        "& b": {
          display: "flex",
        },
        "&:last-child": {
          position: "sticky",
          right: 0,
          background: "white",
        },
      }),
      alignRight: {
        whiteSpace: "nowrap",
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        "&:last-child": {
          "& .MuiTableCell-root": {
            border: "none",
          },
        },
      },
      head: ({ theme }) => ({
        borderBottom: `1px solid ${(theme as Theme).palette.common.white}`,
      }),
    },
  },
};
