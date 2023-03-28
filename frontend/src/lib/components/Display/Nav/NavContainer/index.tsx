import { Grid } from "@mui/material";
import { FC } from "react";
import { manageClassNames } from "../../../../_utility/utiliy";
import ThemeWrapper from "../../../App/ThemeWrapper";
import { INavContainerProps } from "../type";



const NavContainer : FC<INavContainerProps> = ({children,stickyTop,stickyBottom,className,small,...rest}) => {
    return(
        <ThemeWrapper>
            <Grid container className={manageClassNames('nav-container','x',{
                'sticky-top':stickyTop,
                'sticky-bottom':stickyBottom,
                small:small,
                [`${className}`]:Boolean(className),

            })}{...rest}>
                {children}
            </Grid>
        </ThemeWrapper>
    )
    
}

export default NavContainer;