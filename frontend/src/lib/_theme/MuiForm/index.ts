import { Components } from "@mui/material";
export const MuiFormTheme: Components = {
  MuiFormControl: {
    styleOverrides: {
      root: {
        "&.upload-form-control": {
          width: "100%",
        },
        "&.checkbox-form-control, &.switch-form-control": {
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        },
        "&.radio-group-labelPlacement-start": {
          flexDirection: "initial",
          flexWrap: "wrap",
        },
      },
    },
  },
  MuiFormGroup: {
    styleOverrides: {
      root: {
        ".radio-group-labelPlacement-start &": {
          marginTop: "-7.5px !important",
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        "&.custom-helper-text": {
          "&:not(.radio-group):not(.select):not(.switch):not(.slider):not(.upload)":
            {
              paddingLeft: 17,
              marginTop: -5,
            },
          "&.radio-group": {
            flex: "0 0 100%",
          },
          "&.slider": {
            marginLeft: 5,
            marginTop: -2,
            ...(ownerState.size === "small" && {
              fontSize: "calc(var(--field-label-font-size) - 4px)",
            }),
            ...(ownerState.size === "medium" && {
              fontSize: "var(--field-label-font-size)",
            }),
          },
          "&.upload": {
            paddingLeft: 4,
            marginTop: 3,
          },
          "&.radio, &.checkbox": {
            ...(ownerState.size === "small" && {
              paddingLeft: "15.2px !important",
            }),
            ...(ownerState.size === "medium" && {
              paddingLeft: "19px !important",
            }),
          },
          ".checbox-labelPlacement-start &, .checbox-labelPlacement-top &, .checbox-labelPlacement-bottom &, .switch-labelPlacement-start &":
            {
              paddingLeft: 0,
              marginLeft: 0,
              "&.small, &.medium": {
                paddingLeft: "0 !important",
              },
            },
          ".checbox-labelPlacement-top &, .checbox-labelPlacement-bottom &, .switch-labelPlacement-top &, .switch-labelPlacement-bottom &":
            {
              textAlign: "center",
              marginLeft: 0,
            },
          ".switch-labelPlacement-end &": {
            marginLeft: 47,
          },
        },
      }),
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        "&.custom-checkbox-label": {
          marginBottom: 9,
        },
        "&.custom-switch-label": {
          padding: "1px",
          marginBottom: "1px",
          ".switch-labelPlacement-start &, .switch-labelPlacement-end &": {
            marginLeft: 0,
            height: "40px !important",
          },
        },
        "&.custom-checkbox-label, &.custom-switch-label": {
          ...(ownerState.labelPlacement === "start" && {
            display: "flex",
            justifyContent: "left",
            marginLeft: 0,
          }),
          ...((ownerState.labelPlacement === "top" ||
            ownerState.labelPlacement === "bottom") && {
            marginLeft: 0,
          }),
        },
        "&.custom-slider-label": {
          marginLeft: "0px",
          ...(ownerState.labelPlacement === "top" && {
            alignItems: "flex-start",
          }),
          "& > .MuiFormControlLabel-label": {
            marginRight: "20px",
            ...(ownerState.labelPlacement === "top" &&
              ownerState.control.props.orientation === "vertical" && {
                marginBottom: "10px !important",
              }),
            ...(ownerState.control.props.size === "small" && {
              fontSize: "calc(var(--field-label-font-size) - 1px)",
            }),
            ...(ownerState.control.props.size === "medium" && {
              fontSize: "var(--field-label-font-size)",
            }),
          },
        },
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        "&.custom-radio-group-label": {
          ".radio-group-labelPlacement-start &": {
            paddingRight: "8px",
          },
        },
      },
    },
  },
};
