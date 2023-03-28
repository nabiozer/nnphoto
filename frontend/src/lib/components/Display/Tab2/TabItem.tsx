import { Tab } from '@mui/material';
import { FC, memo } from 'react';
import { ITabItemProps } from './type';

const TabItem: FC<ITabItemProps> = ({ text, ...rest }: ITabItemProps) => {
    return <Tab label={text} disableFocusRipple disableRipple {...rest} />;
};

export default memo(TabItem);
