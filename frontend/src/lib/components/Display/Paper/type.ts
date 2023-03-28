import { PaperProps } from "@mui/material";


export interface IPaperProps extends Omit<PaperProps,'classes' | 'elevation'> {
    borderBox?:boolean;
}