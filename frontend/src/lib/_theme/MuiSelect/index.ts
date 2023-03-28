import { KeyboardArrowDown } from "@mui/icons-material";
import { Components } from "@mui/material";
export const MuiSelectTheme: Components = {
  MuiSelect: {
    styleOverrides: {
      select: ({ ownerState }) => {
        return {
          ...((ownerState?.value as string) &&
            !ownerState?.displayEmpty &&
            !ownerState?.disabled &&
            !ownerState?.readOnly && { paddingRight: "64px !important" }),
        };
      },
      icon: { borderRadius: "50%" },
    },
    defaultProps: {
      IconComponent: KeyboardArrowDown,
      classes: { icon: "arrow-icon" },
      MenuProps: { anchorOrigin: { vertical: "bottom", horizontal: "left" } },
    },
  },
  MuiNativeSelect: {
    styleOverrides: {
      select: {
        marginTop: "1px !important",
        padding: "8.5px 0px 4.5px 14px !important",
        option: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          ":disabled": { opacity: 0.38 },
        },
      },
    },
  },
};
