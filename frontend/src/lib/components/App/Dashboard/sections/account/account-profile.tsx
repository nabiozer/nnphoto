import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@mui/material';

const user = {
  avatar: '/assets/avatars/avatar-anika-visser.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Anika Visser',
  timezone: 'GTM-7'
};

export const AccountProfile = ({userDetails}:any) => (
  <Card>
     <CardHeader
          title="Kullanıcı Bilgileri"
        />
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
   
        <Typography
          gutterBottom
          variant="h5"
        >
          {userDetails.name}
        </Typography>
        <Typography
          color="text.secondary"
          variant="h6"
        >
          {userDetails.email}
        </Typography>
        <Typography
          color="text.secondary"
          variant="h6"
        >
          {userDetails.phoneNumber}
        </Typography>
        <Typography
          color="text.secondary"
          variant="h6"
        >
          {userDetails.address}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    {/* <CardActions>
      <Button
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>
    </CardActions> */}
  </Card>
);
