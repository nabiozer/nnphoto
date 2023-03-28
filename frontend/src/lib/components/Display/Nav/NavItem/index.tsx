import { FC } from 'react';
import { Grid } from '@mui/material';
import { INavItemProps } from '../type';
import { getDefaultProps } from './defaultProps';
import { manageClassNames } from '../../../../_utility/utiliy';

const NavItem: FC<INavItemProps> = ({ children, className, sx, ...rest }) => {    
    return (        
    <Grid className={manageClassNames('nav-item', { [`${className}`]: Boolean(className) })} 
    container 
    item 
    xs="auto" 
    direction="column" 
    {...getDefaultProps({ sx})} 
    {...rest}> {children}        
    </Grid>    
    );};
    
    
    
export default NavItem;