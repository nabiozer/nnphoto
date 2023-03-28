import { Tabs } from '@mui/material';
import { FC, memo, SyntheticEvent, useEffect, useState } from 'react';
import { ITabProps } from './type';

const TabMenu: FC<ITabProps> = ({ value, children, onChange, small, ...rest }) => {
    const [tabValue, setValue] = useState(value);

    const handleChange = (event: SyntheticEvent, newValue: string | number) => {
        setValue(newValue);
        onChange && onChange(newValue);
    };

    useEffect(() => {
        tabValue !== value && setValue(value);
    }, [value]);

    return (
        <Tabs value={tabValue} onChange={handleChange} variant="scrollable" className={small ? 'is-small' : ''} {...rest}>
            {children}
        </Tabs>
    );
};

export default memo(TabMenu);
