import useWidth, { WidthSize } from "./useWidth";

export type UseDeviceReturn = {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  isMobile: boolean | null;
  isTablet: boolean | null;
  isDesktop: boolean | null;
};

 const useDevice = (): UseDeviceReturn => {
  const width: WidthSize = useWidth();

  const xs = width === "xs";
  const sm = width === "sm";
  const md = width === "md";
  const lg = width === "lg";
  
  const xl = width === "xl";
  const isMobile = width && ["xs", "sm"].indexOf(width) > -1;
  const isTablet = width && ["md"].indexOf(width) > -1;
  const isDesktop = width && ["xl", "lg"].indexOf(width) > -1;

  return {
    xs,
    sm,
    md,
    lg,
    xl,
    isDesktop,
    isTablet,
    isMobile,
  };
};


export default useDevice

