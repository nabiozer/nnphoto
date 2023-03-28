
import { FC } from "react";
import CustomCircularProgress from "./Circular";
import CustomLinearProgress from "./Linear";
import { IProgressProps, ProgressTypeEnum } from "./type";


const Progress: FC<IProgressProps> = ({type,...rest}) => {
    return (<>
    {type === ProgressTypeEnum.circular && <CustomCircularProgress {...rest}/>}
    {type === ProgressTypeEnum.linear && <CustomLinearProgress {...rest}/>}
   
    </>);

   
}

Progress.defaultProps = {
    thickness :3.6
}

export default Progress;