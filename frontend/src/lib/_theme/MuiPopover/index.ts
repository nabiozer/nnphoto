import { Components } from "@mui/material";


export const MuiPopoverTheme:Components ={
    MuiPopover:{
        styleOverrides:{
            paper:{
                boxShadow: '0 12px 28px 0 var(--shadow-2),0 2px 4px var(--shadow-1),inset 0 0 0 1px var(--shadow-inset)',
                borderRadius:'max(0px, min(8px , ((100vw - 4px) - 100%) * 9999)) / 8px ',
                padding:0
            }
        }
    },

}