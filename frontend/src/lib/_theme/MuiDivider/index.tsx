import {Components,Theme} from '@mui/material';

const config = {
    fontSize : 'var(--field-labe-font-size)',
    borderWidth :1,
}


export const MuiDividerTheme: Components ={
    MuiDivider : {
        styleOverrides :{
            root:({theme}) => ({
                borderColor:(theme as Theme).palette.grey[50],
                borderBottomWidth: config.borderWidth,
                fontSize: config.fontSize,
                color: (theme as Theme).palette.primary.main,
            }),
            vertical:{
                borderRightWidth: config.borderWidth,
            },
            withChildren:({theme}) => ({
                ':before, :after' :{
                    borderColor:(theme as Theme).palette.grey[50],
                    borderTopWidth:config.borderWidth
                }
            }),
            withChildrenVertical:({theme}) => ({
                ':before, :after' :{
                    borderColor:(theme as Theme).palette.grey[50],
                    borderLeftWidth:config.borderWidth
                }
            })
        }
    }
}