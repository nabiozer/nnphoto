import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC, ReactNode } from "react";


import GlobalStyles from '@mui/material/GlobalStyles';
import { SnackbarProvider, SnackbarProviderProps } from "notistack";
import { muiTheme } from "../../../_theme";

import { getCssGlobal } from "../../../_theme/_css_global";
import { getHelpers } from "../../../_theme/_css_helper";
import { omit } from "lodash";
import LoadingModal from "../../Display/LoadingModal";
import View from "../../Display/View";
import { getRootStyle } from "../../../_theme/_css_root";

interface IProviderProps {
    children:ReactNode;
    messageProviderProps?:SnackbarProviderProps;
    loadingProps?:any
}


const Provider:FC<IProviderProps> = ({children,loadingProps,messageProviderProps}) => {
    return(
        <ThemeProvider theme={muiTheme}>
            <CssBaseline/>
            <GlobalStyles styles={{...getRootStyle(),...getCssGlobal(),...getHelpers()}}/>
            <SnackbarProvider maxSnack={Infinity} {...messageProviderProps}> 
            <View show={Boolean(loadingProps?.keepMounted)}>
                <LoadingModal id={'x'} hidden {...omit(loadingProps,['keepMounted'])}/>
            </View>{children}</SnackbarProvider>
        </ThemeProvider>
    )
}


export default Provider;