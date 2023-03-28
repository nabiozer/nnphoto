import { alpha, Components, Theme } from "@mui/material";


export const MuiFieldTheme:Components ={
    
    MuiInputLabel:{
        styleOverrides:{
            root:{
               color: "white",
               fontSize: "18px"
            },        
        }
    },

    MuiInputBase:{
        styleOverrides:{
            root:({theme,ownerState}) => ({
                color:(theme as Theme).palette.common.white,
                ...(ownerState.readOnly && {color:alpha((theme as Theme).palette.common.black,0.38)}),
                '&.select-input-base':{
                    paddingRight: '0px !important',
                },
                ':hover' : {
                    '& > .select-svg' : {
                        color: `${(theme as Theme).palette.secondary.main} !important`
                    }
                }
            }) ,
            input:({ownerState,theme}) => ({
                ...(ownerState?.inputProps?.readOnly && {
                    color: alpha((theme as Theme).palette.common.white,0.38)
                })
            })
            
        }
    },
    MuiOutlinedInput:{
        styleOverrides:{
            root:({ownerState}) => ({
                ...(ownerState.type === 'hidden' && {'& >fieldset' :{border : 'none'}})
            }) ,
           
            
        }
    },
    MuiInputAdornment:{
        styleOverrides:{
            
        }
    }

   
    

}