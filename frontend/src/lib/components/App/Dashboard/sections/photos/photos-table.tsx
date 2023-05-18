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

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useAppDispatch } from '../../../../../../store';
import { deletePhoto, getPhotosPagination } from '../../../../../../store/photo/photoActions';
import { jsonToQueryString, queryStringToJson } from '../../../../../_helpers/query';
import TableSort from '../../../../Display/TableSort';
import { cleanNullProperty } from '../../../../../_helpers/utility';

export const PhotosTable = (props: any) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => { },
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

  const dispatch = useAppDispatch();
  const router = useRouter()
  const params = router.query


  const onSubmit = (data: any) => {
    const newData = { ...data };
    const q = jsonToQueryString(cleanNullProperty(newData));

    if (q) {
      router.push(`/dashboard/photos?${q}`)
    } else {
      router.push(`/dashboard/photos`)
    }
  }

  return (
    <Card sx={{ overflowX: 'auto' }}>
      <Box sx={{ minWidth: 800 }}>
        <Table sx={{ overflowX: 'auto' }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSort field="image" name="Image Kaynak" sortData={params?.Sort}
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
                <TableSort field="property" name="Özellik" sortData={params?.Sort}
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
                Description
              </TableCell>
              <TableCell>
                Video Source
              </TableCell>
              <TableCell>
                <TableSort field="order" name="Sıra" sortData={params?.Sort}
                  onClick={(val) => {
                    console.log(params?.Sort)
                    onSubmit({
                      ...params,
                      Sort: val
                    })
                  }}
                />
              </TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((photo: any) => {
              const isSelected = selected?.includes(photo._id);
              // const createdAt = format(customer?.createdAt, 'dd/MM/yyyy');

              return (
                <TableRow
                  hover
                  key={photo._id}
                  selected={isSelected}
                >
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
                        <a
                          href={photo.image}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {photo.image}
                        </a>
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    {photo.property}
                  </TableCell>
                  <TableCell>

                    {photo.description}
                  </TableCell>
                  <TableCell>
                    <a
                      href={photo.src}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {photo.src}
                    </a>

                  </TableCell>
                  <TableCell>

                    {photo.order}
                  </TableCell>
                  <TableCell>
                    <Avatar alt={photo.description} src={`${photo.imageURL}`} />
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={async () => router.push(`/dashboard/photos/form/edit/${photo._id}`)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={async () => router.push(`/dashboard/photos/details/${photo._id}`)}>
                      <InfoIcon />
                    </IconButton>
                    <IconButton onClick={async () => {
                      const res = await dispatch(deletePhoto(
                        photo._id,
                      ));

                      if (res.meta.requestStatus === 'fulfilled') {
                        dispatch(getPhotosPagination(jsonToQueryString(params)))
                      }
                    }

                    }>
                      <DeleteForeverIcon />
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
        rowsPerPageOptions={[5, 10, 20]}
      />
    </Card>
  );
};

PhotosTable.propTypes = {
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
