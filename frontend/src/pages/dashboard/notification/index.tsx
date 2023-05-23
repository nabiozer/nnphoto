import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { jsonToQueryString } from '../../../lib';
import { cleanNullProperty } from '../../../lib/_utility/utiliy';
import { Layout as DashboardLayout } from '../../../lib/components/App/Dashboard/layouts/dashboard/layout';
import { useAppDispatch } from '../../../store';
import { getNotificationsPagination } from '../../../store/notification/notificationActions';
import { NotificationsSearch } from '../../../lib/components/App/Dashboard/sections/notifications/notification-search';
import { NotificationsTable } from '../../../lib/components/App/Dashboard/sections/notifications/notification-table';


const now = new Date();


const Page = () => {

  const dispatch = useAppDispatch()
  const router = useRouter();
  const params = router.query;


  const notificationList = useSelector((state: any) => state?.notification?.notificationListPagination?.data)

  useEffect(() => {
    dispatch(getNotificationsPagination(jsonToQueryString({ ...params, PageNumber: params.PageNumber || 1, PageSize: params.PageSize || 20 })));
  }, [dispatch, params]);



  const handleRowsPerPageChange = (event: any) => { onSubmit({ ...params, PageSize: event.target.value }) };

  const onSubmit = (data: any) => {
    const newData = { ...data };

    const q = jsonToQueryString(cleanNullProperty(newData));

    if (q) {
      router.push(`/dashboard/notifications?${q}`)
    } else {
      router.push(`/dashboard/notifications`)
    }
  }

  return (
    <DashboardLayout>
      <Head>
        <title>
          Notification | NNPHOTOFILM
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
            </Stack>
            <NotificationsSearch />
            <NotificationsTable
              count={notificationList?.TotalCount}
              items={notificationList?.Data}
              page={notificationList?.PageNumber - 1}
              rowsPerPage={notificationList?.PageSize}
              onPageChange={(_:any, page: any) => {
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
