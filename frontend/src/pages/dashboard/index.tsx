import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from '../../lib/components/App/Dashboard/layouts/dashboard/layout'
import { OverviewBudget } from '../../lib/components/App/Dashboard/sections/overview/overview-budget';
import { OverviewLatestProducts } from '../../lib/components/App/Dashboard/sections/overview/overview-latest-products';
import { OverviewSales } from '../../lib/components/App/Dashboard/sections/overview/overview-sales';
import { OverviewTasksProgress } from '../../lib/components/App/Dashboard/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from '../../lib/components/App/Dashboard/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from '../../lib/components/App/Dashboard/sections/overview/overview-total-profit';
import { OverviewTraffic } from '../../lib/components/App/Dashboard/sections/overview/overview-traffic';
import { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { getOverview } from '../../store/overview/overviewActions';
import { useSelector } from 'react-redux';
import { OverviewExpense } from '../../lib/components/App/Dashboard/sections/overview/overview-expense';
import { OverviewAlbum } from '../../lib/components/App/Dashboard/sections/overview/overview-album';

const now = new Date();

const Page = () => {
  const dispatch = useAppDispatch();

  const overViewData = useSelector((state:RootState) => state.overview.overview.data)
 
  useEffect(() => {
    !overViewData &&
    dispatch(getOverview());
  }, [dispatch,overViewData]);


  return (<DashboardLayout>
    <Head>
      <title>
        NNPhotofilm | Dashboard
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
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={4}
          >
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value={`₺${(overViewData?.totalIncome || 0)/1000 || '' }k`}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={4}
          >
            <OverviewExpense
              difference={12}
              positive
              sx={{ height: '100%' }}
              value={`₺${(overViewData?.totalExpense || 0)/1000 || '' }k`}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={4}
          >
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value={overViewData?.totalUsers!! || 0}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={4}
          >
            <OverviewTasksProgress
              sx={{ height: '100%' }}
              value={(overViewData?.done!! / overViewData?.totalUsers!!) * 100}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={4}
          >
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              value={`₺${(overViewData?.totalIncome!! - overViewData?.totalExpense!! || 0)/1000 || '' }k`}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={4}
          >
            <OverviewAlbum
              sx={{ height: '100%' }}
              value={overViewData?.progressingAlbum}
            />
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            <OverviewSales
              chartSeries={[
                {
                  name: 'Toplam',
                  data: [ overViewData?.monthsAllUsers?.January, overViewData?.monthsAllUsers?.February,overViewData?.monthsAllUsers?.March,overViewData?.monthsAllUsers?.April,overViewData?.monthsAllUsers?.May,overViewData?.monthsAllUsers?.June,overViewData?.monthsAllUsers?.July,overViewData?.monthsAllUsers?.August,overViewData?.monthsAllUsers?.September,overViewData?.monthsAllUsers?.October,overViewData?.monthsAllUsers?.November,overViewData?.monthsAllUsers?.December]
                },
                {
                  name: 'Tamamlanan',
                  data: [ overViewData?.monthsDoneUsers?.January, overViewData?.monthsDoneUsers?.February,overViewData?.monthsDoneUsers?.March,overViewData?.monthsDoneUsers?.April,overViewData?.monthsDoneUsers?.May,overViewData?.monthsDoneUsers?.June,overViewData?.monthsDoneUsers?.July,overViewData?.monthsDoneUsers?.August,overViewData?.monthsDoneUsers?.September,overViewData?.monthsDoneUsers?.October,overViewData?.monthsDoneUsers?.November,overViewData?.monthsDoneUsers?.December]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewTraffic
              chartSeries={[63, 15, 22]}
              labels={['Desktop', 'Tablet', 'Phone']}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewLatestProducts
              products={[
                {
                  id: '5ece2c077e39da27658aa8a9',
                  image: '/assets/products/product-1.png',
                  name: 'Healthcare Erbology',
                  updatedAt: subHours(now, 6).getTime()
                },
                {
                  id: '5ece2c0d16f70bff2cf86cd8',
                  image: '/assets/products/product-2.png',
                  name: 'Makeup Lancome Rouge',
                  updatedAt: subDays(subHours(now, 8), 2).getTime()
                },
                {
                  id: 'b393ce1b09c1254c3a92c827',
                  image: '/assets/products/product-5.png',
                  name: 'Skincare Soja CO',
                  updatedAt: subDays(subHours(now, 1), 1).getTime()
                },
                {
                  id: 'a6ede15670da63f49f752c89',
                  image: '/assets/products/product-6.png',
                  name: 'Makeup Lipstick',
                  updatedAt: subDays(subHours(now, 3), 3).getTime()
                },
                {
                  id: 'bcad5524fe3a2f8f8620ceda',
                  image: '/assets/products/product-7.png',
                  name: 'Healthcare Ritual',
                  updatedAt: subDays(subHours(now, 5), 6).getTime()
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </DashboardLayout>
  )
};



export default Page;
