import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Container, Stack, SvgIcon, Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, jsonToQueryString } from '../../../lib';
import { cleanNullProperty } from '../../../lib/_utility/utiliy';
import { Layout as DashboardLayout } from '../../../lib/components/App/Dashboard/layouts/dashboard/layout';
import { CustomersSearch } from '../../../lib/components/App/Dashboard/sections/customer/customers-search';
import { CustomersTable } from '../../../lib/components/App/Dashboard/sections/customer/customers-table';
import { useAppDispatch } from '../../../store';
import { fetchUsers, fetchUsersExcel } from '../../../store/user/userActions';
import ReactExport from 'react-export-excel-fixed-xlsx';


const now = new Date();

const ExcelFile = ReactExport?.Excelfile;
const ExcelSheet = ReactExport?.Excelfile?.ExcelSheet;
const ExcelColumn = ReactExport?.Excelfile?.ExcelColumn;

const Page = () => {

  const [excelDatas,setExcelDatas] = useState<any[]>([])

  const dispatch = useAppDispatch()
  const router = useRouter();
  const params = router.query;


  const customerList = useSelector((state: any) => state?.user?.userList?.data)
  const customerListExcel = useSelector((state: any) => state?.user?.userListExcel?.data)

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


  const excelKeys = [{
    key:'name',
    text:'Kullanıcı'
  }]


  const excelExport = () => {
    if(excelDatas.length > 0) {
      return (
        <ExcelFile fileName={'users'} hideElement={true}>
          <ExcelSheet data={excelDatas} name="Customers">
            {excelKeys.map((item,i) => {
              return <ExcelColumn key={i} label={item.text} value={item.key} />;
            })}
          </ExcelSheet>
        </ExcelFile>
      )
    }
  }

  const onSubmitExcel = async () => {
    const res = await dispatch(fetchUsersExcel(jsonToQueryString({ ...params, PageNumber: params.PageNumber || 1, PageSize: params.PageSize || -1 })));

    if (res.meta.requestStatus === 'fulfilled') {

      customerListExcel && setExcelDatas(customerListExcel?.Data.map((item:any) => ({...item})))

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

        <Button text="Submit excel" size="small" onClick={() => onSubmitExcel()}/>
        
      </Box>
      {excelExport()}
    </DashboardLayout>
  );
};



export default Page;
