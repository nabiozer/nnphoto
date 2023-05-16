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
import { deletePackage, getPackagesPagination } from '../../../../../../store/package/packageActions';
import Tooltip from '../../../../Display/Tooltip';


export const PackagesTable = (props: any) => {
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


  return (
    <Card sx={{ overflowX: 'auto' }}>
      <Box sx={{ minWidth: 800 }}>
        <Table sx={{ overflowX: 'auto' }}>
          <TableHead>
            <TableRow>
              {/* <TableCell padding="checkbox">
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
              </TableCell> */}
              <TableCell>
                Paket Adı
              </TableCell>
              <TableCell>
                Paket Fiyatı
              </TableCell>
              <TableCell>
                Albüm Detayı
              </TableCell>
              <TableCell>
                Aile Albümü Sayısı
              </TableCell>
              <TableCell>
                Poster Detayı
              </TableCell>
              <TableCell>
                Kanvas Detayı
              </TableCell>
              <TableCell>
                Video Klip
              </TableCell>
              <TableCell>
                Drone
              </TableCell>
              <TableCell>
                Mekan
              </TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((packageDetail: any) => {
              const isSelected = selected?.includes(packageDetail._id);
              // const createdAt = format(packageDetail?.createdAt, 'dd/MM/yyyy');
              return (
                <TableRow
                  hover
                  key={packageDetail._id}
                  selected={isSelected}
                >
                  <TableCell padding="checkbox">
                    {/* <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(packageDetail._id);
                          } else {
                            onDeselectOne?.(packageDetail._id);
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
                      {/* <Avatar src={packageDetail.avatar}>
                          {getInitials(packageDetail.name)}
                        </Avatar> */}
                      <Typography variant="subtitle2">
                        {packageDetail.packageName}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    {packageDetail.packagePrice}
                  </TableCell>
                  <TableCell>
                    {packageDetail.albumDetail}
                  </TableCell>
                  <TableCell>
                    {packageDetail.familyDetail}
                  </TableCell>
                  <TableCell>
                    {packageDetail.posterDetail}
                  </TableCell>
                  <TableCell>
                    {packageDetail.canvasDetail}
                  </TableCell>
                  <TableCell>
                    {packageDetail.videoKlip}
                  </TableCell>
                  <TableCell>
                    {packageDetail.isDrone ? 'Var' : 'Yok'}
                  </TableCell>
                  <TableCell>
                  {packageDetail.isPlaceInc ? 'Var' : 'Yok'}
                  </TableCell>
                  
                  <TableCell>
                    {/* {createdAt} */}
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Edit">
                      <IconButton onClick={async () => router.push(`/dashboard/packages/form/edit/${packageDetail._id}`)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>                  
                    <Tooltip title="Delete">
                      <IconButton onClick={async () => {
                        const res = await dispatch(deletePackage(
                          packageDetail._id,
                        ));

                        if (res.meta.requestStatus === 'fulfilled') {
                          dispatch(getPackagesPagination(''));
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

PackagesTable.propTypes = {
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
