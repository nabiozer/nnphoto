import { SxProps,Theme } from "@mui/material";

import { ContentPositionEnum, ContentPositionType, IndicatorsPositionType } from "./type";


export const MuiCarouselSxProps =(indicatorsPosition:IndicatorsPositionType) :SxProps<Theme> => ({
    'css-1m9128y' : {
        ...(indicatorsPosition === 'in') ?{
            padding:'10px',
            position:'absolute',
            bottom:'0',
            zIndex: '1500',
        } :''
    }
});


export const MuiCarouselItemSxProps = (position?:ContentPositionType,imageStyle?:any,image?:any) :SxProps<Theme> => ({
    '.content' :{
        position:'absolute',
        width:'100%',
        p:5,
        ...(position === ContentPositionEnum.topStart
            ? {top:0,left:0}
            : position === ContentPositionEnum.topCenter
            ? {top:0, left:'50%',transform:'translate(-50%,0'}
            : position === ContentPositionEnum.topEnd
            ? {top:0, left:0}
            : position === ContentPositionEnum.centerStart
            ? {top:'50%', left:0,transform:'translate(0,-50%'}
            : position === ContentPositionEnum.center
            ? {top:'50%', left:'50%',transform:'translate(-50%,-50%'}
            : position === ContentPositionEnum.centerEnd
            ? {top:'50%', left:0,transform:'translate(0, -50%'}
            : position === ContentPositionEnum.bottomStart
            ? {top:0, left:0}
            : position === ContentPositionEnum.bottomCenter
            ? {top:0, left:'50%',transform:'translate(-50%,0'}
            : position === ContentPositionEnum.bottomEnd
            ? {top:0, left:0}
            : {top:0,left:0})
    },
    '.image':{
        ...imageStyle
    }
})