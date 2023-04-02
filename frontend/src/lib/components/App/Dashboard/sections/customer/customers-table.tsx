import {
  Avatar,
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

import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IUser } from '../../../../../../types/user';
import { getLocalStorageItem } from '../../../../../_helpers/storage';
import useAxios from 'axios-hooks';

export const CustomersTable = (props:any) => {
  const {
    count = 0,
    items =[],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
    reloadCustomers = () => null,
  } = props;

  const selectedSome = (selected?.length > 0) && (selected?.length < items?.length);
  const selectedAll = (items?.length > 0) && (selected?.length === items?.length);
  const userLoginInfo: IUser | any = getLocalStorageItem('userInfo')


  const [{ loading: loadingCustomer}, deleteCustomer] = useAxios(
    {
      headers: {
        Authorization: `Bearer ${userLoginInfo?.token}`
      },
      method: 'DELETE'
    },
    { manual:  true }
  )

  
  return (
    <Card sx={{overflowX:'auto'}}>
    
        <Box sx={{ minWidth: 800 }}>
          <Table sx={{overflowX:'auto'}}>
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
                <TableCell/>
              </TableRow>
            </TableHead>
            <TableBody>
              {items?.map((customer:IUser) => {
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
                      {customer.deliveryInfo.phoneNumber}
                    </TableCell>
                    <TableCell>
                      {customer.reservationInfo.date}
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
                      {/* {createdAt} */}
                    </TableCell>
                    <TableCell>
                        <IconButton onClick={async() => console.log('edit')}>
                          <EditIcon/>
                        </IconButton>
                        <IconButton onClick={async() => 
                        {
                        const result = await deleteCustomer({url: `http://localhost:5000/api/users/${customer?._id}`});
                         if(result.status === 200) {
                          reloadCustomers();
                         }
                        }
                      
                      }>
                          <DeleteForeverIcon/>
                        </IconButton>
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
