import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import React, { ReactNode } from "react";
import { CarouselNavProps } from "react-material-ui-carousel/dist/components/types";


export enum ContentPositionEnum {
    topStart = 'top-start',
    topCenter='top-center',
    topEnd = 'top-end',
    centerStart = 'center-start',
    center ='center',
    centerEnd='center-end',
    bottomStart ='bottom-start',
    bottomCenter ='bottom-center',
    bottomEnd = 'bottom-end'
}

export type ContentPositionType = 
    | 'top-start' | 'top-center' | 'top-end' | 'center-start' | 'center' |'center-end'|'bottom-start' | 'bottom-center' | 'bottom-end';

export type IndicatorsPositionType = 'in' | 'out';

export interface ICarouselProps {
    indicatorsPosition? : IndicatorsPositionType;
    children: ReactNode;
    //define sx willl be inster into element
    sx :SxProps<Theme>;
    className?:string;
    height:string | number;
    index?:number;
    strictIndexing?:boolean;
    autoPlay?:boolean;
    stopAutoPlayOnHover?:boolean;
    interval?:number;
    animation?:'fade' | 'slide';
    duration?:number;
    swipe?:boolean;
    indicators?:boolean;
    navButtonsAlwaysVisible?:boolean;
    navButtonsAlwaysInvisible?:boolean;
    cycleNavigation?:boolean;
    fullHeightHover?:boolean;
    navButtonsWrapperProps?:CarouselNavProps;
    navButtonsProps?:CarouselNavProps;
    nextNav?:ReactNode;
    prevNav?:ReactNode;
    NavButton?:({onClick,next,className,style,prev}:{onClick:Function;className:string,style:React.CSSProperties,next:boolean,prev:boolean}) => ReactNode;
    indicatorContainerProps?:CarouselNavProps;
    indicatorIconButtonProps?:CarouselNavProps;
    activeIndicatorIconButtonProps?:CarouselNavProps;
    onChange?:(now?:number,previous?:number) =>any;
    changeOnFirstRender?:boolean;
    next?:(now?:number,previous?:number) =>any;
    prev?:(now?:number,previous?:number) =>any;
    indicatorIcon?:ReactNode;
}

export interface ICarouselItemProps {
    content?:ReactNode;
    image?:string;
    sx?:SxProps<Theme>;
    imageStyle?:SxProps<Theme>;
    contentPosition?:ContentPositionType;
}
