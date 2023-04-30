import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { cleanNullProperty, jsonToQueryString, queryStringToJson } from '../../../lib';
import { Layout as DashboardLayout } from '../../../lib/components/App/Dashboard/layouts/dashboard/layout';
import { PhotosTable } from '../../../lib/components/App/Dashboard/sections/photos/photos-table';

import { useAppDispatch } from '../../../store';
import { getPhotosPagination } from '../../../store/photo/photoActions';
import { PhotosSearch } from '../../../lib/components/App/Dashboard/sections/photos/photos-search';


const now = new Date();


// const useCustomers = (page: any, rowsPerPage: any) => {
//   return useMemo(
//     () => {
//       return applyPagination(data, page, rowsPerPage);
//     },
//     [page, rowsPerPage]
//   );
// };

const useCustomerIds = (customers: any) => {
  return useMemo(
    () => {
      return customers.map((customer: any) => customer.id);
    },
    [customers]
  );
};

const Page = () => {


  const dispatch = useAppDispatch();
  const router = useRouter();
  const params = router.query;
  // const customers = useCustomers(page, rowsPerPage);
  // const customersIds = useCustomerIds(customers);
  // const customersSelection = useSelection(customersIds);


  const photoList = useSelector((state: any) => state.photo.photoListPagination.data)


 
  useEffect(() => {

    dispatch(getPhotosPagination(jsonToQueryString({...params,PageNumber: params.PageNumber || 1,PageSize: params.PageSize || 20})));
  }, [dispatch, params]);





  const handleRowsPerPageChange = useCallback(
    (event: any) => {
  
  
      onSubmit({
        ...queryStringToJson(cleanNullProperty(params)),
        PageSize: event.target.value

      })
    },
    []
  );

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
    <DashboardLayout>
      <Head>
        <title>
          Photos | NNPHOTOFILM
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Customers
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  onClick={() => router.push('/dashboard/photos/form/new')}
                >
                  Add
                </Button>
              </div>
            </Stack>
            <PhotosSearch />
            <PhotosTable
              count={photoList?.TotalCount}
              items={photoList?.Data}
              page={photoList?.PageNumber - 1}
              rowsPerPage={photoList?.PageSize}
              onPageChange={(_, page: any) => {
                onSubmit({
                  ...params,
                  PageNumber: page + 1

                })
              }}
              onRowsPerPageChange={handleRowsPerPageChange}
            // onSelectAll={customersSelection.handleSelectAll}
            // onSelectOne={customersSelection.handleSelectOne}
            // onDeselectAll={customersSelection.handleDeselectAll}
            // onDeselectOne={customersSelection.handleDeselectOne}

            // selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </DashboardLayout>
  );
};



export default Page;
