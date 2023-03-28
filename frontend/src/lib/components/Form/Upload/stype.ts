import { alpha, SxProps, Theme } from "@mui/material";
import { GlobalFont } from "../../../_theme/_css_global";

const MuiUploadSxProps = (design: 'x'): SxProps<Theme> => ({
  position: "relative",
  border: (theme) => `2px dashed ${theme.palette.grey[100]}`,
  borderRadius: "6px",
  margin: 0,
  padding: 0,
  width: "100%",
  "& > legend": (theme) => ({
    ...(design === 'x' && {
      margin: "0 10px",
      padding: "0 5px",
      fontSize: "calc(var(--field-label-font-size) * 0.75)",
    }),
   
    color: theme.palette.grey[500],
  }),
  "& .filepond--wrapper": {
    "& .filepond--root": {
      fontFamily: GlobalFont,
      margin: 0,
      "& .filepond--panel-root": {
        backgroundColor: "transparent !important",
      },
    },
    label: {
      fontFamily: GlobalFont,
      color: (theme) => `${theme.palette.grey[500]} !important`,
      display: "flex",
      alignItems: "center",
      fontSize:
        design === 'x'
          ? "var(--field-label-font-size)"
          : `var(--field-label-font-size-${'x'})`,
      span: {
        fontFamily: GlobalFont,
        border: (theme) => `1px solid ${theme.palette.grey[400]}`,
        marginTop: "1px",
        borderRadius: "5px",
        fontSize:
          design === 'x'
            ? "var(--field-label-font-size)"
            : `var(--field-label-font-size-${'x'})`,
        color: (theme) => theme.palette.grey[500],
        outline: "none",
        marginLeft: "15px",
        padding: "5px 15px",
        "&:hover": {
          backgroundColor: (theme) => alpha(theme.palette.grey[50], 0.3),
        },
      },
    },
  },
  "&.error": {
    "& > legend": {
      color: (theme) => theme.palette.error.main,
    },
    borderColor: (theme) => theme.palette.error.main,
  },
  "& .filepond--credits": {
    display: "none",
  },
});
export default MuiUploadSxProps;
