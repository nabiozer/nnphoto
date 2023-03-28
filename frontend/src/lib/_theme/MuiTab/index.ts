import { Components, Theme } from "@mui/material";
const tabConfig = {
  height: {
    default: "3rem",
    small: "2rem",
  },
  item: { marginRight: 25 },
};

export const MuiTabTheme: Components = {
  MuiTabs: {
    styleOverrides: {
      root: {
        width: "100%",
        minHeight: "auto",
        height: tabConfig.height.default,
        maxHeight: tabConfig.height.default,
        "&.is-small": {
          height: tabConfig.height.small,
          maxHeight: tabConfig.height.small,
        },
      },
      flexContainer: { height: "100%" },
      indicator: ({ theme }) => ({
        backgroundColor: (theme as Theme).palette.green.light,
        height: 3,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
      }),
      scrollButtons: ({ theme }) => ({
        color: (theme as Theme).palette.primary.main,
        transition: "width .3s",
        "&.Mui-disabled": { width: 0 },
      }),
    },
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: 0,
        minWidth: 0,
        marginRight: tabConfig.item.marginRight,
        color: (theme as Theme).palette.grey[300],
        fontWeight: 600,
        textTransform: "none",
        fontSize: "var(--field-label-font-size)",
        minHeight: "auto",
        "&:last-child": { marginRight: 0 },
        "&.Mui-selected": { color: (theme as Theme).palette.secondary.main },
        ".is-small &": {
          height: tabConfig.height.small,
          maxHeight: tabConfig.height.small,
          fontSize: "calc(var(--field-label-font-size) - 1px)",
        },
      }),
    },
  },
};
