import { Control, useWatch as useHookWatch } from 'react-hook-form';

interface IProps {
    control: Control;
    defaultValue?: any;
    fieldName: string;
}

const useWatch = ({ control, fieldName, defaultValue }: IProps) => {
    return useHookWatch({ control, name: fieldName, defaultValue });
};

export default useWatch;
