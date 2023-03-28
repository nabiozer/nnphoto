

import { Popover, Tooltip } from '@mui/material';
import { bindPopover, bindTrigger, usePopupState } from 'material-ui-popup-state/hooks';
import { cloneElement, FC, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import ThemeWrapper from '../../App/ThemeWrapper';
import { defaultAnchorPosition, IPopUpProps } from './type';
const id = uuidv4();


const Popup: FC<IPopUpProps> = ({
    children,
    anchorEl,
    sx,
    popupPosition = defaultAnchorPosition,
    onClose,
    onOpen,
    tooltip,
    tooltipPosition = 'bottom',


}) => {
    const popupState = usePopupState({variant:'popover',popupId:id});

    useEffect(() => {
        if(popupState.isOpen) {
            onOpen && onOpen();
        } else {
            onClose && onClose();
        }
    },[popupState.isOpen])

    const renderButtonDiv = () => {
        return cloneElement(anchorEl,{...bindTrigger(popupState)})
    }

    const renderElement = () => {
        if(tooltip) {
            return (
                <Tooltip title={tooltip} placement={tooltipPosition} >{renderButtonDiv()}</Tooltip>
            )
        }

        return renderButtonDiv()
    }

    return (
        <ThemeWrapper>
            {renderElement()}
            <Popover
            {...bindPopover(popupState)}
            {...popupPosition}
            PaperProps={{sx}}>{children}</Popover>

        </ThemeWrapper>
    )
}

export default Popup