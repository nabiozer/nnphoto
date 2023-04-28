import { alpha, Components, Theme } from "@mui/material";


export const MuiFieldTheme:Components ={
    
    MuiInputLabel:{
        styleOverrides:{
            root:{
       
               fontSize: "18px"
            },        
        }
    },

    MuiInputBase:{
        styleOverrides:{
            root:({theme,ownerState}) => ({
                color:(theme as Theme).palette.common.black,
                ...(ownerState.readOnly && {color:alpha((theme as Theme).palette.common.black,0.38)}),
                '&.select-input-base':{
                    paddingRight: '0px !important',
                },
                ':hover' : {
                    '& > .select-svg' : {
                        color: `${(theme as Theme).palette.common.black} !important`
                    }
                },
                height:'40px'
            }) ,
            input:({ownerState,theme}) => ({
                ...(ownerState?.inputProps?.readOnly && {
                    color: alpha((theme as Theme).palette.common.black,0.38)
                }),
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