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
import { getExpensesPagination } from '../../../store/expense/expenseActions';
import { ExpensesSearch } from '../../../lib/components/App/Dashboard/sections/expenses/expense-search';
import { ExpensesTable } from '../../../lib/components/App/Dashboard/sections/expenses/expense-table';


const now = new Date();


const Page = () => {

  const dispatch = useAppDispatch()
  const router = useRouter();
  const params = router.query;


  const expenseList = useSelector((state: any) => state?.expense?.expenseListPagination?.data)
  console.log(expenseList)

  useEffect(() => {
    dispatch(getExpensesPagination(jsonToQueryString({ ...params, PageNumber: params.PageNumber || 1, PageSize: params.PageSize || 20 })));
  }, [dispatch, params]);

  // const sum = expenseList?.Data?.reduce((accumulator:any, object:any) => {
  //   return accumulator + object.fee;
  // }, 0);


  const handleRowsPerPageChange = (event: any) => { onSubmit({ ...params, PageSize: event.target.value }) };

  const onSubmit = (data: any) => {
    const newData = { ...data };

    const q = jsonToQueryString(cleanNullProperty(newData));

    if (q) {
      router.push(`/dashboard/expenses?${q}`)
    } else {
      router.push(`/dashboard/expenses`)
    }
  }

  return (
    <DashboardLayout>
      <Head>
        <title>
          Expense | NNPHOTOFILM
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

              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  onClick={() => router.push('/dashboard/expenses/form/new')}
                >
                  Harcama Ekle
                </Button>
              </div>
           
            </Stack>
            <ExpensesSearch />
            <ExpensesTable
              count={expenseList?.TotalCount}
              items={expenseList?.Data}
              page={expenseList?.PageNumber - 1}
              rowsPerPage={expenseList?.PageSize}
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
