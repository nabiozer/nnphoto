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
import { getMessagesPagination } from '../../../store/message/messageActions';
import { MessagesSearch } from '../../../lib/components/App/Dashboard/sections/messages/message-search';
import { MessagesTable } from '../../../lib/components/App/Dashboard/sections/messages/message-table';


const now = new Date();


const Page = () => {

  const dispatch = useAppDispatch()
  const router = useRouter();
  const params = router.query;


  const messageList = useSelector((state: any) => state?.message?.messageListPagination?.data)

  useEffect(() => {
    dispatch(getMessagesPagination(jsonToQueryString({ ...params, PageNumber: params.PageNumber || 1, PageSize: params.PageSize || 20 })));
  }, [dispatch, params]);



  const handleRowsPerPageChange = (event: any) => { onSubmit({ ...params, PageSize: event.target.value }) };

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
    <DashboardLayout>
      <Head>
        <title>
          Message | NNPHOTOFILM
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
            <MessagesSearch />
            <MessagesTable
              count={messageList?.TotalCount}
              items={messageList?.Data}
              page={messageList?.PageNumber - 1}
              rowsPerPage={messageList?.PageSize}
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
