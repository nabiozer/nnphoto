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
          sx={{
            color: (theme) => theme.palette.grey[50],
          }}
          {...(size !== 0 && { size: size })}
          thickness={thickness}
          value={100}
        />
  
        <CircularProgress
          sx={{
            color: color,
            ...(rounded && {
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: "round",
              },
            }),
            position: "absolute",
            left: 0,
          }}
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
      color={(label as IProgressLabel).color}
      {...((label as IProgressLabel).fontSize && {
        fontSize: (label as IProgressLabel).fontSize,
      })}
      {...((label as IProgressLabel).fontWeight && {
        fontWeight: (label as IProgressLabel).fontWeight,
      })}
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
