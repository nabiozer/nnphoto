import { Divider as MuiDivider } from "@mui/material";
import { FC } from "react";
import ThemeWrapper from "../../App/ThemeWrapper";
import { IDividerProps } from "./type";

const Divider: FC<IDividerProps> = ({ children, ...rest }) => {
  return (
    <ThemeWrapper>
      <MuiDivider className="x" {...rest}>
        {children}
      </MuiDivider>
    </ThemeWrapper>
  );
};


export default Divider