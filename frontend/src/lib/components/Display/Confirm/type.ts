
import { IButtonProps } from '../../Form/Button/type';
import { IModalBodyProps, IModalFooterProps, IModalProps, IModalTitleProps } from '../Modal/type';


export interface IConfirmModalActionProps<T = Omit<IButtonProps, 'design' | 'href' | 'onClick' | 'text' | 'type'>> 
{ ok?: T; cancel?: T;}export interface IConfirmModalProps extends  Partial<Pick<IModalTitleProps, 'title'>>, Pick<IModalProps, 'show' | 'maxWidth' | 'onClose' | 'loading'> { text: string; okText?: string; cancelText?: string; actionProps?: IConfirmModalActionProps; onConfirm: (status: boolean) => void; modalTitleProps?: Partial<Omit<IModalTitleProps, 'title'>>; modalBodyProps?: Partial<Omit<IModalBodyProps, 'children'>>;
modalFooterProps?: Partial<Omit<IModalFooterProps, 'children'>>;}