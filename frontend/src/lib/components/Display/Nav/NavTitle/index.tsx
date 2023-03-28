import { FC, useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { INavTitleProps, IBackButtonProps } from '../type';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import Tooltip from '../../Tooltip';
import { Button } from '../../../..';


const NavTitle: FC<INavTitleProps> = ({ title, subTitle, backButtonProps, label, isView, sx }) => {

    const initBackProps: IBackButtonProps = {
        disabled: false,
        show: false,
        iconButton: true,
    };

    const [backProps, setBackProps] = useState<IBackButtonProps>(initBackProps);
    const renderButton = () => {
        const { onClick, variant, text, iconLeft, iconRight, color, icon, className, tooltipTitle, show, ...rest } = backProps;
        return (
            <Button
                {...rest}
                text={text}
                iconLeft={iconLeft}
                iconRight={iconRight}
                icon={!iconLeft && !iconRight && !text && (icon || <KeyboardBackspaceRoundedIcon />)}
                variant={variant || 'text'}
                color={color || 'primary'}
                className={'custom' || className}
                onClick={() => onClick && onClick()}
            />);
    };

    const renderBackButton = () => {
        const { tooltipTitle } = backProps;
        return (
            <Box className="nav-back-button-box">
                {tooltipTitle ? (
                    <Tooltip title={tooltipTitle}>{renderButton()}
                    </Tooltip>) : (
                    renderButton()
                )}
            </Box>);
    };

    useEffect(() => {
        setBackProps({ ...initBackProps, ...backButtonProps });
        // eslint-disable-next-line    
    }, [backButtonProps]);

    const renderTitle = () => {
        return (
            <Box className="nav-title-box" sx={{
                ...sx,
            }}>
                {backProps && backProps.show && renderBackButton()}
                <Box sx={{
                    flexShrink: 1,
                }}>
                    {label && (
                        <Typography className="nav-label" variant="overline">{label}
                        </Typography>)}
                    <Typography className="nav-title" variant="h4">          {title}
                    </Typography> {subTitle && (<Typography className="nav-sub-title" variant="subtitle1">{subTitle}</Typography>)}
                </Box>
            </Box>);
    };
    return isView ? renderTitle() : null;


}

NavTitle.defaultProps = {
    subTitle: '',
    label: '',
    isView: true,
};
export default NavTitle;