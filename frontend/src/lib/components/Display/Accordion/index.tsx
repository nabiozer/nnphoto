import { Accordion as MuiAccordion,AccordionDetails,AccordionSummary } from "@mui/material"
import ThemeWrapper from "../../App/ThemeWrapper"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { FC } from "react"
import { IAccordionProps } from "./type"

const Accordion :FC<IAccordionProps> = ({title,icon,content,...rest}) => {
    return (
        <ThemeWrapper>
            <MuiAccordion {...rest}>
                <AccordionSummary expandIcon={icon || <ExpandMoreIcon/>}>{title}</AccordionSummary>
                <AccordionDetails>{content}</AccordionDetails>
            </MuiAccordion>
        </ThemeWrapper>
    )
}

export default Accordion;