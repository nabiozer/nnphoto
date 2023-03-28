

import { ThemeProvider } from '@mui/material'
import  { FC } from 'react'
import { muiTheme } from '../../../_theme';
import { MuiAccordionTheme } from '../../../_theme/MuiAccordion';
import { MuiAlertTheme } from '../../../_theme/MuiAlert';
import { MuiAppBarTheme } from '../../../_theme/MuiAppBar';
import { MuiAutocompleteTheme } from '../../../_theme/MuiAutocomplete';
import { MuiAvatarTheme } from '../../../_theme/MuiAvatar';
import { MuiBottomNavTheme } from '../../../_theme/MuiBottomNav';
import { MuiBreadcrumbsTheme } from '../../../_theme/MuiBreadcrumbs';
import { MuiButtonTheme } from '../../../_theme/MuiButton';
import { MuiCheckboxTheme } from '../../../_theme/MuiCheckbox';
import { MuiDialogTheme } from '../../../_theme/MuiDialogTheme';
import { MuiDividerTheme } from '../../../_theme/MuiDivider';
import { MuiFieldTheme } from '../../../_theme/MuiField';
import { MuiFormTheme } from '../../../_theme/MuiForm';
import { MuiIconButtonTheme } from '../../../_theme/MuiIconButton';
import { MuiMenuTheme } from '../../../_theme/MuiMenu';
import { MuiProgressTheme } from '../../../_theme/MuiProgress';
import { MuiPaperTheme } from '../../../_theme/MuiPaper';
import { MuiPopoverTheme } from '../../../_theme/MuiPopover';
import { MuiRadioTheme } from '../../../_theme/MuiRadio';
import { MuiRatingTheme } from '../../../_theme/MuiRating';
import { MuiSelectTheme } from '../../../_theme/MuiSelect';
import { MuiSliderTheme } from '../../../_theme/MuiSlider';
import { MuiSvgIconTheme } from '../../../_theme/MuiSvg';
import { MuiTooltipTheme } from '../../../_theme/MuiTooltip';
import { MuiTabTheme } from '../../../_theme/MuiTab';
import { MuiTableTheme } from '../../../_theme/MuiTable';
import { MuiTypographyTheme } from '../../../_theme/MuiTypography';

type IThemeWrapper = {
  children:any;
  design?:any;
  projectTheme?:any
}

const ThemeWrapper:FC<IThemeWrapper> = ({children,design,projectTheme}):any => {
  const ComponentsTheme = {
    ...MuiButtonTheme,
    ...MuiAccordionTheme,
    ...MuiAlertTheme,
    ...MuiAppBarTheme,
    ...MuiAutocompleteTheme,
    ...MuiAvatarTheme,
    ...MuiBottomNavTheme,
    ...MuiBreadcrumbsTheme,
    ...MuiCheckboxTheme,
    ...MuiDialogTheme,
    ...MuiDividerTheme,
    ...MuiFieldTheme,
    ...MuiFormTheme,
    ...MuiIconButtonTheme,
    ...MuiMenuTheme,
    ...MuiProgressTheme,
    ...MuiPaperTheme,
    ...MuiPopoverTheme,
    ...MuiRadioTheme,
    ...MuiRatingTheme,
    ...MuiSelectTheme,
    ...MuiSliderTheme,
    ...MuiSvgIconTheme,
    ...MuiTabTheme,
    ...MuiTooltipTheme,
    ...MuiTableTheme,
    ...MuiTypographyTheme
  


  }

  const getTheme = () => {
    return {...muiTheme,components:{...muiTheme.components,...ComponentsTheme}}
  }
  return (
   <ThemeProvider theme = {getTheme()}>{children}</ThemeProvider>
  )
}

export default ThemeWrapper;