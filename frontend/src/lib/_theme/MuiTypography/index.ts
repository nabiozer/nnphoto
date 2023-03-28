import { Components, Theme } from "@mui/material";


export const MuiTypographyTheme:Components ={
    MuiTypography:{
        styleOverrides:{
            root:({theme,ownerState}) => ({
                textTransform:'none',
                color:(theme as Theme).palette.secondary.light,
                
            }) ,
            overline:{
                lineHeight:1,
                fontSize:'.65em',
                '&.nav-title':{
                    fontSize:'.6em',
                    fontWeight: 800,
                }
            },
            h4:{
                fontSize:'1.3em',
                    fontWeight: 600,
            },
            h5:{
                fontSize:'1.1em',
                    fontWeight: 600,
            },
            h6:{
                fontSize:'0.9em',
                    fontWeight: 600,
                    '&.nav-title':{
                        fontSize:'.7em'
                    }
            }
        }
    },

}