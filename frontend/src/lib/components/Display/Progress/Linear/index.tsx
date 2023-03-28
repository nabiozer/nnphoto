import { FC } from "react";
import { ILinearProgressProps } from "./type";
import { IProgressLabel } from "../type";
import { LinearProgress, Typography, Box } from "@mui/material";
import { linearProgressClasses } from "@mui/material/LinearProgress";

const CustomLinearProgress: FC<ILinearProgressProps> = ({
  label,
  value,
  thickness,
  rounded,
  color,
}) => {
  const renderProgress = () => {
    return (
      <LinearProgress
        sx={{
          ...(rounded && { borderRadius: 5 }),
          height: thickness,
          backgroundColor: (theme) => theme.palette.grey[50],
          [`& .${linearProgressClasses.bar}`]: {
            ...(rounded && { borderRadius: 5 }),
            backgroundColor: color,
          },
        }}
        {...(value !== undefined && { variant: "determinate" })}
        value={value}
      />
    );
  };

  return label ? (
    <Box sx={{ display: "flex", alignItems: "center" }}>
   <Box sx={{ width: "100%", mr: 1 }}>{renderProgress()}</Box> 
      <Box sx={{ minWidth: 35 }}>
     
        <Typography
          variant="body2"
          color={(label as IProgressLabel).color}
          {...((label as IProgressLabel).fontSize && {
            fontSize: (label as IProgressLabel).fontSize,
          })}
          {...((label as IProgressLabel).fontWeight && {
            fontWeight: (label as IProgressLabel).fontWeight,
          })}
        >
      {`${Math.round(value || 0)}%`}
        </Typography>    
      </Box>
    </Box>
  ) : (
    renderProgress()
  );
};

export default CustomLinearProgress;
