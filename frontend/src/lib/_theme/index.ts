import { createTheme } from "@mui/material/styles";
import { palette } from "./_palette";
import { GlobalFont } from "./_css_global";
import { Mui_CssBaseline } from "./MuiCssBaseLine";
import { MuiAppBarTheme } from "./MuiAppBar";
import { MuiAvatarTheme } from "./MuiAvatar";
import { MuiAutocompleteTheme } from "./MuiAutocomplete";
import { MuiBottomNavTheme } from "./MuiBottomNav";
import { trTR as coreTrTR } from "@mui/material/locale";
import { trTR as dataGridTrTR } from "@mui/material/locale";
import { trTR as pickersTrTR } from "@mui/material/locale";

const muiTheme = createTheme(
  {
    palette: {
      ...palette,
    },
    typography: {
      fontFamily: GlobalFont,
    },
    components: {
      ...Mui_CssBaseline,
      ...MuiAppBarTheme,
      ...MuiAvatarTheme,
      ...MuiAutocompleteTheme,
      ...MuiBottomNavTheme,
    },
  },
  pickersTrTR,
  dataGridTrTR,
  coreTrTR
);

export { muiTheme };
