import { FC } from "react";
import { ICircularProgressProps } from "./type";
import { IProgressLabel } from "../type";
import { CircularProgress, Box, Typography } from "@mui/material";
import { circularProgressClasses } from "@mui/material/CircularProgress";

const CustomCircularProgress: FC<ICircularProgressProps> = ({
  label,
  value,
  thickness,
  rounded,
  color,
}) => {
  const size: number = ((label && (label as IProgressLabel).fontSize) || 0) * 4;
  const renderProgress = () => {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
      
        <CircularProgress
          variant="determinate"
         
          {...(size !== 0 && { size: size })}
          thickness={thickness}
          value={100}
        />
  
        <CircularProgress
          
          {...(size !== 0 && { size: size })}
          {...(value !== undefined && { variant: "determinate" })}
          value={value}
          thickness={thickness}
        />
      </Box>
    );
  };

  const renderLabel = () => (
    <Typography
      variant="caption"
      component="div"
    >
    {`${Math.round(value || 0)}%`}{" "}
    </Typography>
  );

  return label ? (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
     {renderProgress()}
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      {label && renderLabel()}
      </Box>
    {" "}
    </Box>
  ) : (
    renderProgress()
  );
};

export default CustomCircularProgress;
