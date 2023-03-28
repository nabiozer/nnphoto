import { isNumber } from "lodash";
export const calculateEditorContentHeight = (
  height: string | number,
  froalaRef: any,
  charCounterCount: boolean
): string => {
  const heightTypeControl = isNumber(height) ? `${height}px` : height;
  return `calc(        ${heightTypeControl} - ${
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (froalaRef?.current?.editor?.$tb
      ? froalaRef?.current?.editor?.$tb[0]?.offsetHeight
      : 0) +
    (charCounterCount
      ? froalaRef?.current?.editor?.$second_tb
        ? Number(froalaRef?.current?.editor?.$second_tb[0]?.offsetHeight) + 2
        : 0
      : 0) +
    30
  }px)`;
};
