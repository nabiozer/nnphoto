import { FC } from "react";
import { ILoadingModalProps } from "./type";
import {default as manageClassNames} from 'classnames'
import { Box, Typography } from "@mui/material";
import { MuiLoadingModalSxProps } from "./style";
import Progress from "../Progress";


const LoadingModal: FC<ILoadingModalProps> = ({text,sx,className,...rest}) => {
    return <Box 
    className={manageClassNames('loading-modal',{[`${className}`]:Boolean(className)})}
    sx={{...(MuiLoadingModalSxProps() as any),...sx}}
    component="div"
    {...rest}>
        <Box className='loading-modal__progress'>
            <Progress type="circular" rounded></Progress>
        </Box>
        <Typography className="loading-modal__text" variant="caption">{text}</Typography>
    </Box>

}


export default LoadingModal;