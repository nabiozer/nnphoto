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
import DownloadIcon from '@mui/icons-material/Download';
import PropTypes from 'prop-types';
import { useAppDispatch } from '../../../../../../store';
import { deleteUser, fetchUsers } from '../../../../../../store/user/userActions';
import { IUser } from '../../../../../../types/user';
import { useRouter } from 'next/router';
import InfoIcon from '@mui/icons-material/Info';
import { getDate } from '../../../../../_helpers';
import Tooltip from '../../../../Display/Tooltip';
import { getDownloadFile } from '../../../../../_helpers/utility';
import ContractPdf from './contract-pdf';
import { pdf } from '@react-pdf/renderer';


export const CustomersTable = (props: any) => {
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

  const renderPdf = async (userDetails:any) => {
    const component = (<ContractPdf userDetails={userDetails} />)
    const blob = await pdf(component).toBlob();

    getDownloadFile(
      blob, 'Album.pdf'
    )
  }
  return (
    <Card sx={{ overflowX: 'auto' }}>
      <Box sx={{ minWidth: 800 }}>
        <Table sx={{ overflowX: 'auto' }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedAll}
                  indeterminate={selectedSome}
                  onChange={(event) => {
                    if (event.target.checked) {
                      onSelectAll?.();
                    } else {
                      onDeselectAll?.();
                    }
                  }}
                />
              </TableCell>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Email
              </TableCell>
              <TableCell>
                Phone
              </TableCell>
              <TableCell>
                Date
              </TableCell>
              <TableCell>
                Place
              </TableCell>
              <TableCell>
                Package
              </TableCell>
              <TableCell>
                Price
              </TableCell>
              <TableCell>
                Deposit
              </TableCell>
              <TableCell>
                Durum
              </TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((customer: IUser) => {
              const isSelected = selected?.includes(customer._id);
              // const createdAt = format(customer?.createdAt, 'dd/MM/yyyy');

              return (
                <TableRow
                  hover
                  key={customer._id}
                  selected={isSelected}
                >
                  <TableCell padding="checkbox">
                    {/* <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(customer._id);
                          } else {
                            onDeselectOne?.(customer._id);
                          }
                        }}
                      /> */}
                  </TableCell>
                  <TableCell>
                    <Stack
                      alignItems="center"
                      direction="row"
                      spacing={2}
                    >
                      {/* <Avatar src={customer.avatar}>
                          {getInitials(customer.name)}
                        </Avatar> */}
                      <Typography variant="subtitle2">
                        {customer.name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    {customer.email}
                  </TableCell>
                  <TableCell>
                    {customer.phoneNumber}
                  </TableCell>
                  <TableCell>
                    {getDate(customer.reservationInfo.date, 'Ppp')}
                  </TableCell>
                  <TableCell>
                    {customer.reservationInfo.place}
                  </TableCell>
                  <TableCell>
                    {customer.reservationInfo.packageDetails}
                  </TableCell>
                  <TableCell>
                    {customer.reservationInfo.packagePrice}
                  </TableCell>
                  <TableCell>
                    {customer.reservationInfo.advancePayment}
                  </TableCell>
                  <TableCell>
                    {customer.status}
                  </TableCell>
                  <TableCell>
                    {/* {createdAt} */}
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Edit">
                      <IconButton onClick={async () => router.push(`/dashboard/customers/form/edit/${customer._id}`)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Details">
                      <IconButton onClick={async () => router.push(`/dashboard/customers/details/${customer._id}`)}>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={async () => {
                        const res = await dispatch(deleteUser(
                          customer._id,
                        ));

                        if (res.meta.requestStatus === 'fulfilled') {
                          dispatch(fetchUsers(''));
                        }
                      }

                      }>
                        <DeleteForeverIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Excel Export">
                      <IconButton onClick={() => renderPdf(customer)
                      }>
                        <DownloadIcon />
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

CustomersTable.propTypes = {
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
