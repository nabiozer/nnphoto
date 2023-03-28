import { FC } from 'react';
import { IConfirmModalProps } from './type';
import { Typography } from '@mui/material';
import { omit } from 'lodash';
import Grid from '../Grid/Grid';
import GridItem from '../Grid/GridItem';
import ModalTitle from '../Modal/ModalTitle';
import ModalBody from '../Modal/ModalBody';
import ModalFooter from '../Modal/ModalFooter';
import Button from '../../Form/Button';
import Modal from '../Modal';
const ConfirmModal: FC<IConfirmModalProps> = ({
    onConfirm,
    text,
    onClose,
    show,
    title,
    okText,
    cancelText,
    maxWidth,
    loading,
    actionProps,
    modalTitleProps,
    modalBodyProps,
    modalFooterProps,
}) => {
    return (
        <Modal
            maxWidth={maxWidth}
            show={show}
            onClose={onClose}
            closeIcon={false}>
            <>
                {title && <ModalTitle title={title} {...modalTitleProps} />}
                <ModalBody {...modalBodyProps}>
                    <Grid display="block" textAlign="center" p={2}>
                        <GridItem xs="auto">
                            <Typography variant="body1" className='x'>
                                {text}
                            </Typography>
                        </GridItem>
                    </Grid>
                </ModalBody>
                <ModalFooter {...modalFooterProps}>
                    <Grid spacing={1} justifyContent="center">
                        <GridItem xs="auto">
                            <Button
                                text={cancelText}
                                variant="text"
                                disabled={loading || actionProps?.cancel?.disabled || actionProps?.cancel?.loading}
                                onClick={() => { onConfirm(false); }}
                                {...omit(actionProps?.cancel,
                                    ['disabled', 'loading'])} />
                        </GridItem>
                        <GridItem xs="auto">
                            <Button
                                
                                text={okText}
                                disabled={loading || actionProps?.ok?.disabled || actionProps?.ok?.loading}
                                onClick={() => { onConfirm(true); }}   {...omit(actionProps?.ok, ['disabled', 'loading'])} />
                        </GridItem></Grid>
                </ModalFooter> </>
        </Modal>);
};
ConfirmModal.defaultProps = { okText: 'Tamam', cancelText: 'İptal', maxWidth: 'xs', }; export default ConfirmModal;