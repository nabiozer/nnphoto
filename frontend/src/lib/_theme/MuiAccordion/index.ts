import { Components, Theme } from "@mui/material";


export const MuiAccordionTheme:Components ={
    MuiAccordion:{
        styleOverrides:{
            root:({theme}) => ({
                boxShadow:'none',
                borderBottom:`1px solid ${(theme as Theme).palette.grey[100]}`,

                '&:before':{
                    display:'none',
                },
                '&:first-of-type':{
                    borderRadius : 0,
                },
                '&:nth-of-type(n)':{
                    margin:0,
                },
                '&last-child':{
                    borderRadius:0,
                },
                '&Mui-expanded':{
                    margin: 0,
                    marginBottom: -1,
                    zIndex:1,
                }
            })
        }
    },
    MuiAccordionSummary:{
        styleOverrides:{
            root:{
                fontSize: 'var(--field-label-font-size)',
                fontWeight:600,
                padding: '0 1rem',
                minHeight: '48px !important',
                '.MuiAccordionSummary-contet':{
                    margin:'0 !important',
                }
            },
            expandIconWrapper:({theme}) => ({
                color:(theme as Theme).palette.grey[400]
            })
        }
    },

    MuiAccordionDetails:{
        styleOverrides:{
            root:{
                padding:'0 1rem 1rem'
            }
        }
    }

}