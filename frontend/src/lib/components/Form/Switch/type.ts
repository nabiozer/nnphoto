import { ICheckboxProps } from "../Checkbox/type";

export interface ISwitchProps extends Omit<ICheckboxProps,'checkedIcon' | 'icon' | 'children' | 'defaultChecked'> {}