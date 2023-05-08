import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { subDays, subHours } from 'date-fns';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSelection } from '../../../lib/components/App/Dashboard/hooks/use-selection';
import { Layout as DashboardLayout } from '../../../lib/components/App/Dashboard/layouts/dashboard/layout';
import { CustomersSearch } from '../../../lib/components/App/Dashboard/sections/customer/customers-search';
import { CustomersTable } from '../../../lib/components/App/Dashboard/sections/customer/customers-table';
import { applyPagination } from '../../../lib/components/App/Dashboard/utils/apply-pagination';
import { useAppDispatch } from '../../../store';
import { fetchUsers } from '../../../store/user/userActions';
import { jsonToQueryString, queryStringToJson } from '../../../lib';
import { cleanNullProperty } from '../../../lib/_utility/utiliy';


const now = new Date();


const Page = () => {

  const dispatch = useAppDispatch()
  const router = useRouter();
  const params = router.query;


  const customerList = useSelector((state: any) => state?.user?.userList?.data)

  useEffect(() => {
    dispatch(fetchUsers(jsonToQueryString({ ...params, PageNumber: params.PageNumber || 1, PageSize: params.PageSize || 20 })));
  }, [dispatch, params]);


  const handleRowsPerPageChange = (event: any) => { onSubmit({ ...params, PageSize: event.target.value }) };

  const onSubmit = (data: any) => {
    const newData = { ...data };

    const q = jsonToQueryString(cleanNullProperty(newData));

    if (q) {
      router.push(`/dashboard/customers?${q}`)
    } else {
      router.push(`/dashboard/customers`)
    }
  }

  return (
    <DashboardLayout>
      <Head>
        <title>
          Müşteriler | NNPHOTOFILM
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
                  Müşteriler
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
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Excele Aktar
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
                  onClick={() => router.push('/dashboard/customers/form/new')}
                >
                  Add
                </Button>
              </div>
            </Stack>
            <CustomersSearch />
            <CustomersTable
              count={customerList?.TotalCount}
              items={customerList?.Data}
              page={customerList?.PageNumber - 1}
              rowsPerPage={customerList?.PageSize}
              onPageChange={(_, page: any) => {
                onSubmit({
                  ...params,
                  PageNumber: page + 1

                })
              }}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </Stack>
        </Container>
      </Box>
    </DashboardLayout>
  );
};



export default Page;
