import { IGridProps } from "../type";
import { Grid as MuiGrid } from '@mui/material';
import { FC, forwardRef } from 'react'


const Grid: FC<IGridProps> = forwardRef(({ children, ...rest }: IGridProps, ref: any) => {
    return (
        <MuiGrid container columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} ref={ref} {...rest}></MuiGrid>
    )
})

export default Grid;