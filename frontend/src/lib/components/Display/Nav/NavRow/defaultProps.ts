import { INavItemProps } from "../type"


export const getDefaultProps =():Pick<INavItemProps, 'px'>  => {
    return {
        px:3
    }
}