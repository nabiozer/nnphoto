import NavContainer from "../../Nav/NavContainer";
import NavItem from "../../Nav/NavItem";
import NavRow from "../../Nav/NavRow";
import NavTitle from "../../Nav/NavTitle";
import { IGridItemTitleProps } from "../type";
import {FC} from 'react'



const GridItemTitle: FC<IGridItemTitleProps> = ({title,small,...rest}) => {
    return (
        <NavContainer small={small}>
            <NavRow>
                <NavItem>
                <NavTitle title={title} {...rest}/>
                </NavItem>
            </NavRow>
        </NavContainer>
    )
}

export default GridItemTitle;