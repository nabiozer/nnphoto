import { FC } from "react";
import ThemeWrapper from "../../App/ThemeWrapper";
import { ITooltipProps } from "./type";
import { Tooltip as MuiTooltip } from "@mui/material";
import { isBoolean, isUndefined, omit } from "lodash";

const Tooltip: FC<ITooltipProps> = ({
  children,
  show,
  title,
  arrow = true,
  keepMounted,
  componentsProps,
  className,
  ...rest
}) => {
  return (
    <ThemeWrapper>
      <MuiTooltip
        className={`tooltip-child-wrapper ${className}`}
        arrow={arrow}
        PopperProps={{ keepMounted }}
        title={title}
        {...(!isUndefined(show) && isBoolean(show) && { open: show })}
        componentsProps={{
          tooltip: {
            className: `${componentsProps?.tooltip?.className}`,
            ...omit(componentsProps?.tooltip, "className"),
          },
          ...omit(componentsProps?.tooltip, "tooltip"),
        }}
        {...rest}
      >
        <div>{children}</div>
      </MuiTooltip>
    </ThemeWrapper>
  );
};

export default Tooltip;
