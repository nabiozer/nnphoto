import { Components } from "@mui/material";


export const MuiAlertTheme:Components ={
    MuiAlert:{
        styleOverrides:{
            root:{},
            icon:{
                padding: '8px 0',
                fontSize:'calc(var(--field-label-font-size + 6px) !important'
            },
            message:{
                fontSize:'var(--field-label-font-size',
                '.MuiAlertTitle-root':{
                    margin:0,
                    fontSize:'var(field-label-font-size)',
                    fontWeight:600,
                },
            },
            action:{
                marginRight:0,
                fontSize:'var(field-label-font-size)',
            }
        }
    }

}