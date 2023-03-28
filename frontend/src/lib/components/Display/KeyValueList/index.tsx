import { FC } from 'react';
import { IKeyValueListProps } from './type';
import { List, ListItem, ListItemText } from '@mui/material';
import ThemeWrapper from '../../App/ThemeWrapper';
import { manageClassNames } from '../../../_utility/utiliy';

const KeyValueList: FC<IKeyValueListProps> = ({ data, wrap, ...rest }) => {
    const renderList = () => {
        if (data?.length) {
            return data.map((item, i: number) => {
                return (
                    <ListItem className="key-value-list-item" key={`kv_list_${String(i)}`}>
                        <ListItemText
                            className={manageClassNames('key-value-list-item-text', { wrap: wrap || item.wrap })}
                            primary={item.text}
                            secondary={item.value}
                            primaryTypographyProps={{
                                component: 'div',
                                className: 'key-value-list-item-text-primary',
                            }}
                            secondaryTypographyProps={{
                                component: 'div',
                                className: 'key-value-list-item-text-secondary',
                            }}
                        />      </ListItem>);
            });
        }
        return null;
    };
    return (
        <ThemeWrapper>            <List className="key-value-list" {...rest}>  {renderList()}
        </List>        </ThemeWrapper>);
};
KeyValueList.defaultProps = {
    wrap: false,
};
export default KeyValueList;