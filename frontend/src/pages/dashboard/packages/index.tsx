import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { jsonToQueryString } from '../../../lib';
import { cleanNullProperty } from '../../../lib/_utility/utiliy';
import { Layout as DashboardLayout } from '../../../lib/components/App/Dashboard/layouts/dashboard/layout';
import { PackagesTable } from '../../../lib/components/App/Dashboard/sections/packages/package-table';
import { useAppDispatch } from '../../../store';
import { getPackagesPagination } from '../../../store/package/packageActions';


const now = new Date();


const Page = () => {

  const dispatch = useAppDispatch()
  const router = useRouter();
  const params = router.query;


  const packageList = useSelector((state: any) => state?.package?.packageListPagination?.data)
  console.log(packageList)

  useEffect(() => {
    dispatch(getPackagesPagination(jsonToQueryString({ ...params, PageNumber: params.PageNumber || 1, PageSize: params.PageSize || 20 })));
  }, [dispatch, params]);


  const handleRowsPerPageChange = (event: any) => { onSubmit({ ...params, PageSize: event.target.value }) };

  const onSubmit = (data: any) => {
    const newData = { ...data };

    const q = jsonToQueryString(cleanNullProperty(newData));

    if (q) {
      router.push(`/dashboard/packages?${q}`)
    } else {
      router.push(`/dashboard/packages`)
    }
  }

  return (
    <DashboardLayout>
      <Head>
        <title>
          Package | NNPHOTOFILM
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
                  onClick={() => router.push('/dashboard/packages/form/new')}
                >
                  Paket Ekle
                </Button>
              </div>
            </Stack>
            {/* <PackagesSearch /> */}
            <PackagesTable
              count={packageList?.TotalCount}
              items={packageList?.Data}
              page={packageList?.PageNumber - 1}
              rowsPerPage={packageList?.PageSize}
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
