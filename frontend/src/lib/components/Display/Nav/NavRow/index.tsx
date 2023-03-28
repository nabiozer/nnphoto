import { FC } from 'react'
import { Grid } from '@mui/material'
import { INavRowProps } from '../type'
import { getDefaultProps } from './defaultProps'
import { manageClassNames } from '../../../../_utility/utiliy';

const NavRow: FC<INavRowProps> = ({ children, className, ...rest }) => {
    return (<Grid className={manageClassNames('nav-row', { [`${className}`]: Boolean(className) })}
        item
        container
        alignItems="center"
        justifyContent="space-between"
        wrap="nowrap"
        zeroMinWidth
        {...getDefaultProps()}
        {...rest}>
        {children}
    </Grid>)
};

export default NavRow;