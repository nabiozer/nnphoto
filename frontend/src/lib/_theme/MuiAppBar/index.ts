import { Components } from "@mui/material";
import { Theme } from "@mui/system";


export const MuiAppBarTheme : Components = {
    MuiAppBar:{
        styleOverrides:{
            positionFixed:({theme}) => ({
               
                boxShadow:'none',
                padding:0,
                width:'100%',
                flexShrink:0,
             

                '&before':{
                    content:'""',
                    left:0,
                    position:'absolute',
                    backgroundRepeat:'repeat-x',
                    backgroundSize:'1px 7px',
                    height:7,
                    width:'100%',
                    zIndex:33,
                },
            }),
        },
    },
    MuiToolbar:{
        styleOverrides:{
            root: {
                padding : '0 0 0 0 !important'
            }
        }
    }
}