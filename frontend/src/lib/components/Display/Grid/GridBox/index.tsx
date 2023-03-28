import { Box, BoxProps, Typography } from '@mui/material';
import { FC, forwardRef } from 'react';
export interface IGridBoxProps extends BoxProps {
    children: any;
    fullHeight?: boolean;
    title?: string;
}
const GridBox: FC<IGridBoxProps> = forwardRef(({ children, fullHeight, sx, title, ...rest }: IGridBoxProps, ref) => {
    return (
        <Box component="fieldset" sx={{
            border: '1px solid #E0E3E7',
            display: 'flex',
            borderRadius: '5px',
            my: 0.5,
            flexDirection: 'column',
            width: '100%',
            height: fullHeight ? '100%' : 'auto',
            position: 'relative',
            '& > legend': {
                margin: '0 3px',
                fontSize: '9px',
                padding: '0 5px',
                fontWeight: 800,
            },
            ...sx,
        }}
            ref={ref}
            {...rest}>
            {title && <Typography component="legend">{title}</Typography>}
            {children}
        </Box>);
});
export default GridBox;