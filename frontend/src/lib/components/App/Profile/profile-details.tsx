import {
  Box, Card, CardContent,
  CardHeader,
  Divider, Grid, Typography
} from '@mui/material';



export const ProfileDetails = ({ userDetails }: any) => {

  const { reservationInfo: { date, place, packagePrice, packageDetails, advancePayment, album, photos, video } } = userDetails;

  return (
    <>
      <Grid container spacing={2} padding={3} >
        <Grid
          xs={12}
          md={6}
          lg={6}
          xl={4}
          item

        >
          <Card sx={{ height: '100%' }}>
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
                  component="p"
                >
                  {userDetails.email}
                </Typography>
                <Typography
                  color="text.secondary"
                  component="p"
                >
                  {userDetails.phoneNumber}
                </Typography>
                <Typography
                  color="text.secondary"
                  component="p"
                >
                  {userDetails.address}
                </Typography>

                <Typography
                  color="text.primary" 
                  component="p"
                  sx={{marginTop:'0.5rem'}}
                >
                  {userDetails?.status} Aşamasında
                </Typography>
              </Box>
            </CardContent>

            {/* <CardActions>
      <Button
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>
    </CardActions> */}
          </Card>
        </Grid>
        <Grid
          xs={12}
          md={6}
          lg={6}
          xl={4}
          item
        >
          <Card sx={{ height: '100%' }}>
            <CardHeader
              title="Rezervasyon Bilgileri"
            />
            <CardContent sx={{ pt: 2 }}>
              <Box>
                <Grid
                  container
                  spacing={5}
                  padding={2}
                >
                  <Grid
                    xs={12}
                    sm={6}
                    lg={6}
                    md={6}
                    item
                    sx={{ justify: 'center', textAlign: 'center', alignItems: 'center' }}
                  >
                    <Typography component="p" sx={{ borderBottom: '1px solid grey' }}>Çekim Mekanı</Typography>
                    <Typography component="p" >{place}</Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={6}
                    lg={6}
                    md={6}
                    item
                    sx={{ justify: 'center', textAlign: 'center', alignItems: 'center' }}
                  >
                    <Typography component="p" sx={{ borderBottom: '1px solid grey' }}>Tarih</Typography>
                    <Typography component="p" >{date}</Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={6}
                    lg={6}
                    md={6}
                    item
                    sx={{ justify: 'center', textAlign: 'center', alignItems: 'center' }}
                  >
                    <Typography component="p" sx={{ borderBottom: '1px solid grey' }}>Paket İçeriği</Typography>
                    <Typography component="p" >{packageDetails}</Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={6}
                    lg={6}
                    md={6}
                    item
                    sx={{ justify: 'center', textAlign: 'center', alignItems: 'center' }}
                  >
                    <Typography component="p" sx={{ borderBottom: '1px solid grey' }}>Albüm</Typography>
                    <Typography component="p" >{album}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
            <Divider />


          </Card>

        </Grid>
        <Grid
          xs={12}
          md={6}
          lg={6}
          xl={4}
          item
        >
          <Card sx={{ height: '100%' }}>
            <CardHeader
              title="Ödeme Bilgileri"
            />
            <CardContent sx={{ pt: 2 }}>
              <Box>
                <Grid
                  container
                  spacing={5}
                  padding={1}
                >

                  <Grid
                    xs={12}
                    sm={4}
                    lg={4}
                    md={4}
                    item
                    sx={{ justify: 'center', textAlign: 'center', alignItems: 'center' }}
                  >
                    <Typography component="p" sx={{ borderBottom: '1px solid grey' }}>Paket Fiyatı</Typography>
                    <Typography component="p" >{packagePrice} TL</Typography>

                  </Grid>
                  <Grid
                    xs={12}
                    sm={4}
                    lg={4}
                    md={4}
                    item
                    sx={{ justify: 'center', textAlign: 'center', alignItems: 'center' }}
                  >
                    <Typography component="p" sx={{ borderBottom: '1px solid grey' }}>Ödenen Tutar</Typography>
                    <Typography component="p" >{advancePayment} TL</Typography>

                  </Grid>

                  <Grid
                    xs={12}
                    sm={4}
                    lg={4}
                    md={4}
                    item
                    sx={{ justify: 'center', textAlign: 'center', alignItems: 'center' }}
                  >
                    <Typography component="p" sx={{ borderBottom: '1px solid grey' }}>Kalan Ödeme</Typography>
                    <Typography component="p" >{packagePrice - advancePayment} TL</Typography>

                  </Grid>



                </Grid>
              </Box>
            </CardContent>
            <Divider />


          </Card>

        </Grid>
        <Grid
          xs={12}
          md={6}
          lg={6}
          xl={12}
          item
        >
          <Card sx={{ height: '100%' }}>
            <CardHeader
              title="Video Klip ve Fotoğraflar"
            />
            <CardContent sx={{ pt: 2 }}>
              <Box>
                <Grid
                  container
                  spacing={5}
                  padding={1}
                >

                  <Grid
                    xs={12}
                    sm={6}
                    lg={6}
                    md={6}
                    item
                    sx={{ justify: 'center', textAlign: 'center', alignItems: 'center' }}
                  >
                    <Typography component="p" sx={{ borderBottom: '1px solid grey' }}>Fotoğraflar</Typography>
                    <Typography component="p" >{photos ? 'İndir' : 'Yükleme aşamasında'}</Typography>

                  </Grid>


                  <Grid
                    xs={12}
                    sm={6}
                    lg={6}
                    md={6}
                    item
                    sx={{ justify: 'center', textAlign: 'center', alignItems: 'center' }}
                  >
                    <Typography component="p" sx={{ borderBottom: '1px solid grey' }}>Video</Typography>
                    <Typography component="p" >{video ? 'İndir' : 'Hazırlanıyor'} </Typography>

                  </Grid>
                </Grid>
              </Box>
            </CardContent>
            <Divider />
          </Card>

        </Grid>
      </Grid>
      
    </>
  );
};

