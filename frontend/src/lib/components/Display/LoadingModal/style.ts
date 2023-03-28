import { alpha, SxProps, Theme } from "@mui/material";




export const MuiLoadingModalSxProps = () : SxProps<Theme> => ({
    '&.loading-modal' : {
        '&:not([hidden])' : {
            top:0,
            left:0,
            right:0,
            bottom:0,
            display: 'flex',
            zIndex : (theme) => theme.zIndex.snackbar,
            position:'fixed',
            alignItems:'cemter',
            touchAction:'none',
            justifyContent:'center',
            color: (theme) => theme.palette.common.white,
            bgcolor:(theme) => alpha(theme.palette.common.black,0.5),
            WebkitTapHighlightColor:'transparent',
            flexDirection:'column',

            '.loading-modal__progress' :{
                height:57,
                backgroundColor:(theme) => alpha(theme.palette.common.black,0.3),
                borderRadius:'50%',
                p: 1,
                display:'flex',
                alignItems:'center',
            },
            '.loading-modal__text' : {
                p1:1
            }
        }
    }
})