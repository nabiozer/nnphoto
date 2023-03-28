import { FC } from "react";
import ThemeWrapper from "../../App/ThemeWrapper";
import { IRatingProps } from "./type";
import { Rating as MuiRating } from "@mui/material";

const Rating: FC<IRatingProps> = ({
  name,
  defaultValue,
  value,
  precision,
  emptyIcon,
  max,
  icon,
  color,
  size,
  sx,
  readOnly = true,
  ...rest
}: IRatingProps) => {
  return (
    <ThemeWrapper>
      <MuiRating
        value={value}
        defaultValue={defaultValue}
        precision={precision}
        icon={icon}
        emptyIcon={emptyIcon}
        max={max}
        size={size}
        readOnly={readOnly}
        sx={{ color, ...sx }}
        {...rest}
      />
    </ThemeWrapper>
  );
};

export default Rating;
