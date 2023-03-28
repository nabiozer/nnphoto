import { Components } from "@mui/material";
import { Theme } from "@mui/system";


export const MuiAvatarTheme : Components = {
    MuiAvatar:{
        styleOverrides:{
            root: ({
                theme
            }) => ({
                '&.with-header':{
                    width:30,
                    height:30,
                    backgroundColor:(theme as Theme).palette.grey[50],
                    color:'black',
                    marginRight:10,
                },
                '&.with-header-popup':{
                    width:60,
                    height:60,
                    backgroundColor:(theme as Theme).palette.grey[500],
                    color:'black',
                    border: `1px solid ${(theme as Theme).palette.grey[200]}`
                }
            })
        },
    },
    
}