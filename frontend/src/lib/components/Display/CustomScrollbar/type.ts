import { ReactNode } from 'react';
import { positionValues, ScrollbarProps } from 'react-custom-scrollbars-2';
import { IBoxProps } from '../Box/type';

export interface ICustomScrollValues extends positionValues {}
export interface ICustomScrollbarProps  extends Pick<            ScrollbarProps,
            'autoHide' | 'autoHideTimeout' | 'autoHideDuration' | 'className' | 'height' | 'style' | 'width'        >,
        Pick<IBoxProps, 'borderRadius' | 'ref'> {
    thickness?: number;
    thumbProps?: Pick<IBoxProps, 'sx'>;
    trackProps?: Pick<IBoxProps, 'sx'>;
    viewProps?: Pick<IBoxProps, 'sx'>;
    children: ReactNode | JSX.Element;
    onScroll?: (e: React.UIEvent<any, UIEvent>, values: ICustomScrollValues) => void;
    onScrollFrame?: (values: ICustomScrollValues) => void;
    onScrollStart?: (values: ICustomScrollValues) => void;
    onScrollStop?: (values: ICustomScrollValues) => void;
    onUpdate?: (values: ICustomScrollValues) => void;
}