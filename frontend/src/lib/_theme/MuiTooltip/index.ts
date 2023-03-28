import { Components } from "@mui/material";
import { GlobalFont } from "../_css_global";

export const MuiTooltipTheme: Components = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: ({ theme }: any) => ({
        "&.keyboard-tooltip-control": {
          maxWidth: "none !important",
          color: `${theme.palette.common.black}`,
          padding: "0",
          borderRadius: "10px",
          ".MuiTooltip-arrow": { width: "3em", height: "1.3em" },
          ".MuiTooltip-arrow::before": {
            backgroundColor: `${theme.palette.grey[50]}`,
            boxShadow: "0 2px 5px var(--shadow-2)",
          },
          "& .hg-theme-default": {
            backgroundColor: `${theme.palette.grey[50]}`,
            fontFamily: GlobalFont,
            boxShadow: "0 2px 5px 0 var(--shadow-2)",
            fontSize: `var(--field-label-font-size)`,
            ".hg-button": { backgroundColor: `${theme.palette.common.white}` },
            ".hg-activeButton": {
              backgroundColor: `${theme.palette.grey[100]}`,
            },
          },
          "& .vr-keyboard-btn": { fontWeight: 600 },
        },
        padding: 10,
      }),
      popper: ({ ownerState }: any) => ({
        '&[data-popper-placement="bottom"], &[data-popper-placement="bottom-end"], &[data-popper-placement="bottom-start"]':
          {
            top: "10px !important",
            ".MuiTooltip-tooltip": { marginTop: "8px !important" },
          },
        '&[data-popper-placement="top"], &[data-popper-placement="top-end"], &[data-popper-placement="top-start"]':
          { ".MuiTooltip-tooltip": { marginBottom: "15px !important" } },
        '&[data-popper-placement="left"], &[data-popper-placement="left-end"], &[data-popper-placement="left-start"]':
          { ".MuiTooltip-tooltip": { marginRight: "8px !important" } },
        '&[data-popper-placement="right"], &[data-popper-placement="right-end"], &[data-popper-placement="right-start"]':
          { ".MuiTooltip-tooltip": { marginLeft: "10px !important" } },
        ...(ownerState?.componentsProps?.popper?.className ===
          "keyboard-popper-control" && {
          '&[data-popper-placement="right-start"], &[data-popper-placement="right-end"], &[data-popper-placement="right"], &[data-popper-placement="left-start"], &[data-popper-placement="left-end"], &[data-popper-placement="left"]':
            {
              ".MuiTooltip-arrow": {
                width: "1.3em !important",
                height: "2em !important",
                marginTop: "1px",
              },
            },
          '&[data-popper-placement="left-start"], &[data-popper-placement="left-end"], &[data-popper-placement="left"]':
            { ".MuiTooltip-arrow": { marginRight: "-14px" } },
          '&[data-popper-placement="right-start"], &[data-popper-placement="right-end"], &[data-popper-placement="right"]':
            { ".MuiTooltip-arrow": { marginLeft: "-14px" } },
          '&[data-popper-placement="bottom"]': {
            ".MuiTooltip-arrow": { marginTop: "-14px", marginLeft: "6px" },
          },
          '&[data-popper-placement="bottom-start"]': {
            ".MuiTooltip-arrow": {
              marginTop: "-14px",
              left: "50px !important",
              transform: "translate(-30%, 0px) !important",
            },
          },
          '&[data-popper-placement="bottom-end"]': {
            ".MuiTooltip-arrow": {
              marginTop: "-14px",
              left: "auto !important",
              right: "50px !important",
              transform: "translate(100%, 0px) !important",
            },
          },
          '&[data-popper-placement="top"]': {
            ".MuiTooltip-arrow": { marginBottom: "-14px", marginLeft: "-6px" },
          },
          '&[data-popper-placement="top-start"]': {
            ".MuiTooltip-arrow": {
              marginBottom: "-14px",
              left: "20px !important",
              transform: "translate(-30%, 0px) !important",
            },
          },
          '&[data-popper-placement="top-end"]': {
            ".MuiTooltip-arrow": {
              marginBottom: "-14px",
              left: "auto !important",
              right: "50px !important",
              transform: "translate(100%, 0px) !important",
            },
          },
        }),
      }),
    },
  },
};
