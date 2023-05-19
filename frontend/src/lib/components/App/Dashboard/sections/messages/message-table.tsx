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
import { deleteMessage, getMessagesPagination } from '../../../../../../store/message/messageActions';
import Tooltip from '../../../../Display/Tooltip';
import { getDate } from '../../../../../_helpers';
import { jsonToQueryString } from '../../../../../_helpers/query';
import { cleanNullProperty } from '../../../../../_helpers/utility';
import TableSort from '../../../../Display/TableSort';




export const MessagesTable = (props: any) => {
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
      router.push(`/dashboard/messages?${q}`)
    } else {
      router.push(`/dashboard/messages`)
    }
  }

  return (
    <Card sx={{ overflowX: 'auto' }}>
      <Box sx={{ minWidth: 800 }}>
        <Table sx={{ overflowX: 'auto' }}>
          <TableHead>
            <TableRow>
              <TableCell>
               E-Mail
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
                Name
              </TableCell>
              <TableCell>
                Phone
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((messageDetail: any) => {
              const isSelected = selected?.includes(messageDetail._id);
              // const createdAt = format(messageDetail?.createdAt, 'dd/MM/yyyy');

              return (
                <TableRow
                  hover
                  key={messageDetail._id}
                  selected={isSelected}
                >
                 
                  <TableCell>
                    <Stack
                      alignItems="center"
                      direction="row"
                      spacing={2}
                    >
                      {/* <Avatar src={messageDetail.avatar}>
                          {getInitials(messageDetail.name)}
                        </Avatar> */}
                      <Typography variant="subtitle2">
                        {messageDetail.email}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    {messageDetail.createdAt}
                  </TableCell>
                  <TableCell>
                    {messageDetail.name}
                  </TableCell>
                  <TableCell>
                    {messageDetail.phone}
                  </TableCell>
                  <TableCell>                 
                    <Tooltip title="Delete">
                      <IconButton onClick={async () => {
                        const res = await dispatch(deleteMessage(
                          messageDetail._id,
                        ));

                        if (res.meta.requestStatus === 'fulfilled') {
                          dispatch(getMessagesPagination(jsonToQueryString(params)));
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

MessagesTable.propTypes = {
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
