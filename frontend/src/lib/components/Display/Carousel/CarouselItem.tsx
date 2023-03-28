import { FC } from "react";
import Box from "../Box";
import { MuiCarouselItemSxProps } from "./style";
import { ICarouselItemProps } from "./type";





const CarouselItem: FC<ICarouselItemProps> = ({contentPosition,image,content,imageStyle,sx}: ICarouselItemProps) => {
    return <Box sx={{
        ...(MuiCarouselItemSxProps(contentPosition,imageStyle,image) as any ),
        ...sx
    }}>
        {image && <Box className='carousel-image' sx={{backgroundImage: `url(${image})`}} />}
        <Box className='content'>{content}</Box>
    </Box>
}

export default CarouselItem;