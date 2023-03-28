import { AccordionProps } from "@mui/material";
import { ReactNode } from "react";
import { ICommonFieldProps } from "../../../_constants/commonTypes";

export interface IAccordionProps
  extends ICommonFieldProps,
    Pick<
      AccordionProps,
      "expanded" | "onChange" | "disabled" | "sx" | "defaultExpanded"
    > {
  title?: ReactNode;
  content?: ReactNode;
  icon?: ReactNode;
}
