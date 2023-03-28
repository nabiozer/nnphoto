import { alpha, Components, Theme } from "@mui/material";


export const MuiAutocompleteTheme:Components ={
    MuiAutocomplete:{
        styleOverrides:{
            root:{
                '& .MuiChip-root' :{
                    height:'22px',
                },
            },
            input:({ownerState,theme}) =>({
                ...(ownerState.readOnly && {color: alpha((theme as Theme).palette.common.black,0.38),
                })
            })
            
        }
    }

}