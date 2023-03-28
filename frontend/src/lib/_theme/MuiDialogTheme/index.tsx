import { Components } from "@mui/material";
import { Theme } from "@mui/system";


export const MuiDialogTheme : Components = {
    MuiDialogTitle:{
        styleOverrides:{
            root:({theme}) => ({
                textAlign:'center',
                borderBottom:'var(--border-style)',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                fontWeight:'bold',
                position:'sticky',
                top:0,
                zIndex: 2,
                background:(theme as Theme).palette.common.white,
                padding:'.5rem 1rem',
                fontSize:`calc(var(--field-label-font-size) + 1px)`
            })
        },
    },
    MuiDialogActions:{
        styleOverrides:{
            root:({theme}) => ({
                position:'sticky',
                bottom:0,
                zIndex: 2,
                background:(theme as Theme).palette.common.white,
                borderTop:'var(--border-style)'
            })
        },
    },
    MuiDialogContent:{
        styleOverrides:{
            root:{padding:0}
        },
    },
    MuiDialog:{
        styleOverrides:{
            root:{
                boxShadow:'var(--box-shadow-2)',
                '& .modal-close-icon':{
                    position:'absolute',
                    right: 9,
                    top: 9 ,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent:'center',
                    cursor:'pointer',
                    zIndex:3,

                    svg:{
                        width:`calc(var(--field-height - 4px) !important)`,
                        height:`calc(var(--field-height - 4px) !important)`,
                    }
                },
                '& form':{
                    width: '100%',
                    maxHeight:'calc(100vh - 64px)',
                    display:'flex',
                    flexDirection:'column',
                }
            }
        },
    },
    MuiDrawer:{
        styleOverrides:{},
        defaultProps:{
            PaperProps:{
                sx: {
                    backgroundColor:(theme) => theme.palette.grey[50]
                }
            }
        }
    }
    
}