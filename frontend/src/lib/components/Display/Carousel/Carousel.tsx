import  Slider  from "react-material-ui-carousel";
import { FC } from "react";
import { ICarouselProps } from "./type";



const Carousel: FC<ICarouselProps> = ({
    children,
    prevNav,
    nextNav,
    indicators= false,
    indicatorIcon,
    indicatorsPosition = 'in',
    indicatorContainerProps,
    navButtonsAlwaysVisible = false,
    navButtonsAlwaysInvisible = true,
    sx,
    height,
    animation ='slide',
    autoPlay = false,
    ...rest
} : ICarouselProps) => {
    return (
        <Slider
        NextIcon={nextNav}
        PrevIcon={prevNav}
        indicators={indicators}
        IndicatorIcon={indicatorIcon}
        navButtonsAlwaysVisible={navButtonsAlwaysVisible}
        navButtonsAlwaysInvisible={navButtonsAlwaysInvisible ? false : navButtonsAlwaysInvisible}
        indicatorContainerProps={{
            style:{
                ...(indicatorsPosition === 'in' ? {padding:'10px',position:'absolute',bottom:'0',zIndex:'1500',...indicatorContainerProps?.style} : {...indicatorContainerProps?.style})
            },
            className:indicatorContainerProps?.className
        }}
        // sx={{
        //     '.carousel-image': {
        //         height: height
        //     },
        //     ...sx,
        // }}
        height={height}
        animation={animation}
        autoPlay={autoPlay}
        {...rest}>{children}</Slider>
    )
}

export default Carousel;