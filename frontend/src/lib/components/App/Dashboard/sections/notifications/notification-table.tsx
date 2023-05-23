import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  Box,
  Card,
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
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useAppDispatch } from '../../../../../../store';
import { deleteNotification, getNotificationsPagination } from '../../../../../../store/notification/notificationActions';
import { jsonToQueryString } from '../../../../../_helpers/query';
import { cleanNullProperty } from '../../../../../_helpers/utility';
import TableSort from '../../../../Display/TableSort';
import Tooltip from '../../../../Display/Tooltip';




export const NotificationsTable = (props: any) => {
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
      router.push(`/dashboard/notification?${q}`)
    } else {
      router.push(`/dashboard/notification`)
    }
  }

  return (
    <Card sx={{ overflowX: 'auto' }}>
      <Box sx={{ minWidth: 800 }}>
        <Table sx={{ overflowX: 'auto' }}>
          <TableHead>
            <TableRow>
              <TableCell>
              Name
              </TableCell>
              <TableCell>

              <TableSort field="createdAt" name="Tarih" sortData={params?.Sort}
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
                Action
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((notificationDetail: any) => {
              const isSelected = selected?.includes(notificationDetail._id);
              // const createdAt = format(notificationDetail?.createdAt, 'dd/MM/yyyy');

              return (
                <TableRow
                  hover
                  key={notificationDetail._id}
                  selected={isSelected}
                >
                 
                  <TableCell>
                    <Stack
                      alignItems="center"
                      direction="row"
                      spacing={2}
                    >
                      {/* <Avatar src={notificationDetail.avatar}>
                          {getInitials(notificationDetail.name)}
                        </Avatar> */}
                      <Typography variant="subtitle2">
                        {notificationDetail?.user?.name}
                      </Typography> 
                    </Stack>
                  </TableCell>
                  <TableCell>
                    {notificationDetail?.createdAt}
                  </TableCell>
                  <TableCell>
                    {notificationDetail?.action}
                  </TableCell>
                  <TableCell>                 
                    <Tooltip title="Delete">
                      <IconButton onClick={async () => {
                        const res = await dispatch(deleteNotification(
                          notificationDetail._id,
                        ));

                        if (res.meta.requestStatus === 'fulfilled') {
                          dispatch(getNotificationsPagination(jsonToQueryString(params)));
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

NotificationsTable.propTypes = {
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
