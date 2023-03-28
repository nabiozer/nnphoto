import { FC, forwardRef, useEffect, useState } from 'react';
import { Dialog, IconButton } from '@mui/material';
import { IModalProps, ModalCloseReasonEnum, ModalCloseReasonType } from './type';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ThemeWrapper from '../../App/ThemeWrapper';
import useIsFirstRender from '../../../_hooks/useIsFirstRender';
import { manageClassNames } from '../../../_utility/utiliy';
import View from '../View';
const Modal: FC<IModalProps> = forwardRef((
    {
        fullWidth,
        fullScreen,
        maxWidth,
        disableEscapeKeyDown,
        disableBackdropClick,
        onBackdropClick,
        onClose,
        scroll,
        show,
        children,
        closeIcon = true,
        allowClose,
        loading,
    }: IModalProps,
    ref,
) => {
    const [isShow, setIsShow] = useState<boolean>(show || false);
    const isFirstRender = useIsFirstRender();
    /* istanbul ignore next */
    const handleClose = (reason: ModalCloseReasonType) => {
        if (
            allowClose && (reason === ModalCloseReasonEnum.CloseIconClick || (reason === ModalCloseReasonEnum.EscapeKeyDownDown && !disableEscapeKeyDown) || (reason === ModalCloseReasonEnum.BackdropClick && !disableBackdropClick))
        ) {
            setIsShow(false);
        }
        reason === ModalCloseReasonEnum.BackdropClick && onBackdropClick && onBackdropClick();
    };
    useEffect(() => {
        !isFirstRender && !show && isShow && onClose && onClose();
        setIsShow(show);
        //eslint-disable-next-line 
    }, [show]);

    useEffect(() => {
        !isFirstRender && show && !isShow && onClose && onClose();
        //eslint-disable-next-line 
    }, [isShow]);
    return (
        <ThemeWrapper>
            <Dialog ref={ref}
                PaperProps={{
                    className: manageClassNames({ 'close-icon': closeIcon }),
                }}
                fullWidth={maxWidth ? true : fullWidth || false}
                fullScreen={fullScreen}
                maxWidth={maxWidth}
                open={isShow}
                scroll={scroll}
                onClose={
                    /* istanbul ignore next */
                    (e, reason) => {
                        handleClose(reason);
                    }
                }
                disableEnforceFocus disableEscapeKeyDown={disableEscapeKeyDown}>
                <View show={closeIcon}>
                    <IconButton
                        disabled={loading}
                        className="custom modal-close-icon"
                        onClick={() => handleClose(ModalCloseReasonEnum.CloseIconClick)}>
                        <CloseRoundedIcon />
                    </IconButton>
                </View>
                {children}
            </Dialog>
        </ThemeWrapper>);
},
);
Modal.defaultProps = {
    fullWidth: false,
    fullScreen: false,
    maxWidth: false,
    disableEscapeKeyDown: true,
    disableBackdropClick: true,
    scroll: 'paper',
    allowClose: true,
    loading: false,
};
export default Modal;