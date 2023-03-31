import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';
import { SettingsNotifications } from '../../lib/components/App/Dashboard/sections/settings/settings-notifications';
import { SettingsPassword } from '../../lib/components/App/Dashboard/sections/settings/settings-password';
import { Layout as DashboardLayout } from '../../lib/components/App/Dashboard/layouts/dashboard/layout';

const Page = () => (
  <DashboardLayout>
    <Head>
      <title>
        Settings | Devias Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4">
            Settings
          </Typography>
          <SettingsNotifications />
          <SettingsPassword />
        </Stack>
      </Container>
    </Box>
    </DashboardLayout>
);



export default Page;
