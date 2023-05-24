import DownloadIcon from '@mui/icons-material/Download';
import {
  Box, Card, CardContent,
  CardHeader,
  Divider, Grid, IconButton, Typography
} from '@mui/material';
import { useState } from 'react';
import { getDate } from '../../../_helpers';
import useS3Download from '../../../_hooks/useDownload';
import Loader from '../../Display/Loader';
import CircularProgressWithLabel from '../../Display/Progress/WithLabel';
import { useAppDispatch } from '../../../../store';
import { createNotification } from '../../../../store/notification/notificationActions';
import { onAddNotification } from '../../../_helpers/notification';
import Tooltip from '../../Display/Tooltip';


export const ProfileDetails = ({ userDetails }: any) => {

  const { reservationInfo: { extras,date, place, packagePrice, packageDetails, advancePayment, album: { albumDetail, familyDetail, posterDetail, canvasDetail, } }, photos, video, photosURL, videoURL } = userDetails;
  const [progress, setProgress] = useState<any>(null);
  const [downloadObject, loading, error] = useS3Download(setProgress);
  const [downloadObj, setDownloadObj] = useState<string>('')

  const dispatch = useAppDispatch()


  console.log(progress)
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
                  sx={{ marginTop: '0.5rem' }}
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
                    <Typography component="p" >{getDate(date,'Ppp')}</Typography>
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
                    <Typography component="p" >{albumDetail} Panoramik Albüm- {familyDetail && `${familyDetail} Aile Albüm`} - {posterDetail && `${posterDetail} poster`} {canvasDetail && `${canvasDetail} poster`}</Typography>
                  </Grid>
                  {extras && <Grid
                    xs={12}
                    sm={6}
                    lg={6}
                    md={6}
                    item
                    sx={{ justify: 'center', textAlign: 'center', alignItems: 'center' }}
                  >
                    <Typography component="p" sx={{ borderBottom: '1px solid grey' }}>Ekstralar</Typography>
                    <Typography component="p" >{extras}</Typography>
                  </Grid>}




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
                    <Typography component="p" sx={{ borderBottom: '1px solid grey' }}>Ödenen </Typography>
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
                    <Typography component="p" sx={{ borderBottom: '1px solid grey' }}>Kalan </Typography>
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
                    {progress && downloadObj === 'photos' ?
                      <CircularProgressWithLabel value={progress} /> :
                      <Typography component="p" >{photos && photosURL ? <IconButton disabled={progress} onClick={async() => { await setDownloadObj('photo'); await downloadObject(photosURL, photos) ;await onAddNotification(dispatch,{action:'Fotoğraflar İndirildi'}) }} ><DownloadIcon /></IconButton> : 'Yükleme aşamasında'}</Typography>}

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
                    {progress && downloadObj === 'video' ? <CircularProgressWithLabel value={progress} /> : <Typography component="p" >{video && videoURL ?  <Tooltip title="İndir"><IconButton disabled={progress} onClick={async() => { await setDownloadObj('video'); await downloadObject(videoURL, video);await onAddNotification(dispatch,{action:'Video Klip İndirildi'})  }}><DownloadIcon /></IconButton></Tooltip> : 'Yükleme aşamasında'}</Typography>}

                  </Grid>
                </Grid>
              </Box>
            </CardContent>
            <Divider />
          </Card>

        </Grid>
      </Grid>
      {loading && <Loader value={progress} />}

    </>
  );
};

