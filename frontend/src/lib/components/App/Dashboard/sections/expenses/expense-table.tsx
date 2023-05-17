import {
  Box,
  Card,
  Checkbox,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useAppDispatch } from '../../../../../../store';
import { deleteExpense, getExpensesPagination } from '../../../../../../store/expense/expenseActions';
import Tooltip from '../../../../Display/Tooltip';
import { getDate } from '../../../../../_helpers';
import { jsonToQueryString } from '../../../../../_helpers/query';
import { cleanNullProperty } from '../../../../../_helpers/utility';
import TableSort from '../../../../Display/TableSort';




export const ExpensesTable = (props: any) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onPageChange = () => { },
    onRowsPerPageChange,
    onSelectAll,
    page = 0,
    rowsPerPage = 0,
    selected = [],
  } = props;

  const selectedSome = (selected?.length > 0) && (selected?.length < items?.length);
  const selectedAll = (items?.length > 0) && (selected?.length === items?.length);

  const dispatch = useAppDispatch();
  const router = useRouter()
  const params = router.query;

  const onSubmit = (data: any) => {
    const newData = { ...data };

    const q = jsonToQueryString(cleanNullProperty(newData));

    if (q) {
      router.push(`/dashboard/expenses?${q}`)
    } else {
      router.push(`/dashboard/expenses`)
    }
  }

  return (
    <Card sx={{ overflowX: 'auto' }}>
      <Box sx={{ minWidth: 800 }}>
        <Table sx={{ overflowX: 'auto' }}>
          <TableHead>
            <TableRow>
              <TableCell>
                Harcama Tutarı
              </TableCell>
              <TableCell>

              <TableSort field="date" name="Tarih" sortData={params?.Sort}
                  onClick={(val) => {
                    console.log(params?.Sort)
                    onSubmit({
                      ...params,
                      Sort: val
                    })
                  }}

                />
              </TableCell>
              <TableCell>
                Açıklama
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((expenseDetail: any) => {
              const isSelected = selected?.includes(expenseDetail._id);
              // const createdAt = format(expenseDetail?.createdAt, 'dd/MM/yyyy');

              return (
                <TableRow
                  hover
                  key={expenseDetail._id}
                  selected={isSelected}
                >
                 
                  <TableCell>
                    <Stack
                      alignItems="center"
                      direction="row"
                      spacing={2}
                    >
                      {/* <Avatar src={expenseDetail.avatar}>
                          {getInitials(expenseDetail.name)}
                        </Avatar> */}
                      <Typography variant="subtitle2">
                        {expenseDetail.fee}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    {getDate(expenseDetail.date, 'P')}
                  </TableCell>
                  <TableCell>
                    {expenseDetail.description}
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Edit">
                      <IconButton onClick={async () => router.push(`/dashboard/expenses/form/edit/${expenseDetail._id}`)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={async () => {
                        const res = await dispatch(deleteExpense(
                          expenseDetail._id,
                        ));

                        if (res.meta.requestStatus === 'fulfilled') {
                          dispatch(getExpensesPagination(jsonToQueryString(params)));
                        }
                      }

                      }>
                        <DeleteForeverIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ExpensesTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
