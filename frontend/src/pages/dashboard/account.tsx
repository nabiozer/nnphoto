import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from '../../lib/components/App/Dashboard/layouts/dashboard/layout'

import { AccountProfileDetails } from '../../lib/components/App/Dashboard/sections/account/account-profile-details';


const Page = () => (
  <DashboardLayout>
    <Head>
      <title>
        Account | NNPHOTOFILM
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 12,
       
      }}
      style={{height:'calc(100vh - 325px - 56px)'}}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">
              Account
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
                lg={4}
              >
           
              </Grid>
              <Grid
                xs={12}
                md={6}
                lg={8}
              >
                <AccountProfileDetails />
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </DashboardLayout>
);

export default Page;
