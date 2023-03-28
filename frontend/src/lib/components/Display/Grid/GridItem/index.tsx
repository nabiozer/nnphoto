import { IGridProps } from "../type";
import { Grid as MuiGrid } from '@mui/material';
import { forwardRef, FC } from 'react'



const GridItem: FC<IGridProps> = forwardRef(({ children, xs, ...rest }: IGridProps, ref: any) => {
    return (
        <MuiGrid item xs={xs} ref={ref} {...rest}>
            {children}
        </MuiGrid>
    )
})

GridItem.defaultProps = {
    xs: 12
}

export default GridItem