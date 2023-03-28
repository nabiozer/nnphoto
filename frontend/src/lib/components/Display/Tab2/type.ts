import { TabProps, TabsProps } from '@mui/material';
import { ReactNode } from 'react';

export interface ITabProps extends Pick<TabsProps, 'children' | 'orientation' | 'variant' | 'sx'> {
    value: string | number;
    onChange?: (val: any) => void;
    small?: boolean;
}

export interface ITabItemProps extends Pick<TabProps, 'disabled' | 'disableFocusRipple' | 'value'> {
    text: ReactNode;
}
