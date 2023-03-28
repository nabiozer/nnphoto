import {ISelectProps} from '../Select/type'

export interface IMultiSelectFieldProps extends Omit<ISelectProps, 'defaultValue' | 'setValue'> {
    defaultValue: any[];
 
    
}
