import { CSSProperties, FC, useEffect, useState } from "react";
import { IPaperProps } from "./type";
import { Paper as MuiPaper } from "@mui/material";


const Paper:FC<IPaperProps> =({children,borderBox=false,style,...rest}:IPaperProps) =>{
    const [paperStyle,setStyle] = useState<CSSProperties>({...style})

    useEffect(() => {
        let newStyle= {...paperStyle};
        if(borderBox) {
            newStyle ={
            ...newStyle,
            border:'1px solid #E0E3E7',
            background:'none',
        }
    }

    setStyle(newStyle)
    },[borderBox])

    return (<MuiPaper style={paperStyle} {...rest}>{children}</MuiPaper>)
}


export default Paper;