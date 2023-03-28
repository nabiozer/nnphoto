import { DividerProps } from "@mui/material";

import { ICommonFieldProps } from "../../../_constants/commonTypes";

export interface IDividerProps
  extends ICommonFieldProps,
    Pick<
      DividerProps,
      | "absolute"
      | "children"
      | "flexItem"
      | "sx"
      | "orientation"
      | "textAlign"
      | "variant"
    > {}
