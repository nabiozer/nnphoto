import { Components } from "@mui/material";
export const MuiSliderTheme: Components = {
  MuiSlider: {
    defaultProps: { color: "secondary" },
    styleOverrides: {
      root: {},
      vertical: {
        '& input[type="range"]': { WebkitAppearance: "slider-vertical" },
      },
      valueLabel: ({ ownerState, theme }: any) => ({
        backgroundColor:
          theme?.palette[
            ownerState.color || theme.components.MuiSlider.defaultProps.color
          ].main,
      }),
    },
  },
};
