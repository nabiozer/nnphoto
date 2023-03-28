import { ReactNode } from 'react';

export interface IProps {
    className?: string;
    headerSearchOpen?: boolean;
    children?: ReactNode;
    title?: ReactNode | string;
    titleView?: boolean;
    showBack?: boolean;
    backLink?: string;
    callApprovallCount?: boolean;
}

export interface IOtherMenu {
    text: string;
    link: string;
    role?: number;
    onClick?: () => void;
}

export interface IBaseMenu {
    text: string;
    icon?: string;
    link: string;
    img?: string;
    role?: number;
    onClick?: (e?: any) => void;
    children?: IBaseMenu[];
}

export interface IMenuData {
    baseMenu?: IBaseMenu[];
    otherMenu?: IOtherMenu[];
}
