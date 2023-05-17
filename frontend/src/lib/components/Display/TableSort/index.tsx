import { TableSortLabel } from '@mui/material';

interface ITableSort {
    field: string;
    name: string;
    sortData: any;
    onClick: (e: string) => void;
}
 //eslint-disable-next-line 
export default (props: ITableSort) => {
    const { field, name, sortData, onClick } = props;
    return (
        <TableSortLabel
            active={!!sortData && sortData.split('-')[0] === field}
            direction={!!sortData && sortData.split('-')[0] === field && sortData.split('-')[1] === 'asc' ? 'desc' : 'asc'}
            onClick={() => {
                if (sortData) {
                    onClick(sortData && sortData.split('-')[1] === 'asc' ? `${field}-desc` : `${field}-asc`);
                } else {
                    onClick(`${field}-asc`);
                }
            }}>
            {name}
        </TableSortLabel>
    );
};
