import { Button as MuiButton, CircularProgress } from "@mui/material";
import ThemeWrapper from "../../App/ThemeWrapper";
import { IButtonProps } from "./type";
import { FC ,memo} from 'react';

const Button: FC<IButtonProps> = ({
  id,
  name,
  className,
  iconLeft,
  iconRight,
  icon,
  iconButton,
  text,
  loading = false,
  color = 'secondary',
  variant = 'contained',
  rounded = false,
  leftRounded = false,
  rightRounded = false,
  ...rest
}: IButtonProps) => {
  return (
    <ThemeWrapper>
      <MuiButton
        id={id}
        name={name}
        className={`${'x'} ${color} ${icon ? 'btn-no-text' : ''} ${iconButton ? 'icon-button' : ''} ${className || ''} ${rounded ? 'rounded' : ''}${leftRounded ? 'left-rounded' : ''}${rightRounded ? 'right-rounded' : ''}`}
        endIcon={!loading && iconRight}
        startIcon={!loading && iconLeft}
        variant={variant}
        disableRipple
        color={color}
        disableElevation
        {...rest}>
        {loading ? <CircularProgress className={'btn-loading'} /> : icon || text}
      </MuiButton>
    </ThemeWrapper>
  )
}

export default memo(Button)