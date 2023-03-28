import { INavItemProps } from "../type"


export const getDefaultProps =({sx}: Pick<INavItemProps,'sx'>):Pick<INavItemProps, 'py' | 'sx'>  => {
    return {
        py:2,
        sx:{
            '.small &' : {
                py:1,
            },
            ...sx
        }
    }
}