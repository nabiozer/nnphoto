import { Components, Theme } from "@mui/material";


export const MuiCheckboxTheme:Components ={
    MuiCheckbox:{
        styleOverrides:{
            root:({theme}) => ({
                color:(theme as Theme).palette.primary.main,
            })
           
            
        }
    }

}