//set

import {useFieldArray,Control} from 'react-hook-form';

export interface IUseArrayFieldProps {
    control:Control;
    name:any;
    key?:any;
}

const useArrayField = ({control,name,key}: IUseArrayFieldProps):any => {
    const {fields,append,insert,move,prepend,remove,replace,swap,update} = useFieldArray({control,name,keyName:key})

    return {fields,append,insert,move,prepend,remove,replace,swap,update};
}


export default useArrayField;