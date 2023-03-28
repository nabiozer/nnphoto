import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'

export type WidthSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | null;


const useWidth = () : WidthSize => {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();

    return (keys.reduce((output:WidthSize, key) =>{
        const matches = useMediaQuery(theme.breakpoints.up(key));
        return !output && matches ? key:output;
    },null) || 'xs')
}

export default useWidth;