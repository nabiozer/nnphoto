import { Components, Theme } from "@mui/material";


export const MuiProgressTheme:Components ={
    MuiLinearProgress:{
        styleOverrides:{
            bar: ({theme}) => ({
                backgroundColor:(theme as Theme).palette.green.main
            })
        }
    },
    MuiCircularProgress:{
        styleOverrides:{
            root :({theme}) => ({
                color:(theme as Theme).palette.green.main
            })
        }
    }

}