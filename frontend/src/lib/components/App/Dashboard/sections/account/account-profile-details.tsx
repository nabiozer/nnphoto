import {
  Box, Button, Card, CardActions, CardContent,
  CardHeader,
  Divider, Grid, Switch, Typography
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useAppDispatch } from '../../../../../../store';
import { getUserById, updateUserByAdmin } from '../../../../../../store/user/userActions';
import { StatusType } from './type';


export const AccountProfileDetails = ({ userDetails }: any) => {

  const { reservationInfo: { date, place, packagePrice, packageDetails, advancePayment, album, photos, video }, _id } = userDetails;
  const [uploadPhotoPercent, setUploadPhotoPercent] = useState(0)
  const [uploading, setUploading] = useState(false);
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<any>()
console.log(file,_id)

  const onChangeStatus = async (status: string) => {
    const data = {
      status: status
    }
    const res = await dispatch(updateUserByAdmin({ id: _id, data }));
    if (res.meta.requestStatus === 'fulfilled') {

      dispatch(getUserById(_id));
    }

  }


  const submit = async (event:any) => {
    event.preventDefault()

    const formData = new FormData();
    formData.append("file", file)
  
    await axios.put("http://localhost:5000/api/photoupdate/" + _id, formData, { headers: {'Content-Type': 'multipart/form-data'}})
  
  }

  const fileSelected = (event:any) => {
    const file = event.target.files[0]
		setFile(file)
	}


  // const uploadPhotoHandler = async (e: any) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("_id", _id)
  //   setUploading(true);

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     };

  //     const { data } = await axios.post("http://localhost:5000/api/uploadfile", formData, config);


  //     setUploadPhotoPercent(100)
  //     setUploading(false);
  //     console.log(data)
  //     setTimeout(() => {
  //       setUploadPhotoPercent(0)
  //     }, 5000)


  //     setUploading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setUploading(false);
  //   }
  // };


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
                  {userDetails?.name}
                </Typography>
                <Typography
                  color="text.secondary"
                  component="p"
                >
                  {userDetails?.email}
                </Typography>
                <Typography
                  color="text.secondary"
                  component="p"
                >
                  {userDetails?.phoneNumber}
                </Typography>
                <Typography
                  color="text.secondary"
                  component="p"
                >
                  {userDetails?.address}
                </Typography>
                <Typography
                  color="text.secondary"
                  component="p"
                  sx={{ marginTop: '0.5rem' }}
                >
                  {userDetails?.status} {userDetails?.status === StatusType.Send ? '' : 'Aşamasında'}
                </Typography>


              </Box>
            </CardContent>
            <Divider />
            <Typography
              color="text.secondary"
              component="p"
              sx={{ marginTop: '0.5rem' }}
            >

            </Typography>
            <CardActions>

              <Box component="div" sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: '1rem' }} >
                <Box component="div" sx={{ display: 'flex', justify: 'center', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography
                    color="text.secondary"
                    component="p"
                  >
                    {StatusType.Shooting}
                  </Typography>
                  <Switch
                    checked={userDetails?.status === StatusType.Shooting}
                    disabled={userDetails?.status === StatusType.Shooting}
                    color={StatusType.Shooting === userDetails?.status ? 'secondary' : 'default'}
                    onChange={async (e) => {
                      onChangeStatus(StatusType.Shooting)
                    }}
                  ></Switch>

                </Box>
                <Box component="div" sx={{ display: 'flex', justify: 'center', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography
                    color="text.secondary"
                    component="p"
                  >
                    {StatusType.Choice}
                  </Typography>
                  <Switch
                    checked={userDetails?.status === StatusType.Choice}
                    disabled={userDetails?.status === StatusType.Choice}
                    color={StatusType.Choice === userDetails?.status ? 'secondary' : 'default'}
                    onChange={async (e) => {
                      onChangeStatus(StatusType.Choice)
                    }}

                  ></Switch>
                </Box>

                <Box component="div" sx={{ display: 'flex', justify: 'center', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography
                    color="text.secondary"
                    component="p"
                  >
                    {StatusType.Progress}
                  </Typography>
                  <Switch
                    checked={userDetails?.status === StatusType.Progress}
                    disabled={userDetails?.status === StatusType.Progress}
                    color={StatusType.Progress === userDetails?.status ? 'secondary' : 'default'}
                    onChange={async (e) => {
                      onChangeStatus(StatusType.Progress)
                    }}
                  ></Switch>
                </Box>
                <Box component="div" sx={{ display: 'flex', justify: 'center', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography
                    color="text.secondary"
                    component="p"
                  >
                    {StatusType.Album}
                  </Typography>
                  <Switch
                    checked={userDetails?.status === StatusType.Album}
                    disabled={userDetails?.status === StatusType.Album}
                    color={StatusType.Album === userDetails?.status ? 'secondary' : 'default'}
                    onChange={async (e) => {
                      onChangeStatus(StatusType.Album)
                    }}
                  ></Switch>

                </Box>
                <Box component="div" sx={{ display: 'flex', justify: 'center', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography
                    color="text.secondary"
                    component="p"
                  >
                    {StatusType.Send}
                  </Typography>
                  <Switch
                    checked={userDetails?.status === StatusType.Send}
                    disabled={userDetails?.status === StatusType.Send}
                    onChange={async (e) => {
                      onChangeStatus(StatusType.Send)
                    }}
                    color={StatusType.Send === userDetails?.status ? 'secondary' : 'default'}
                  ></Switch>
                </Box>
              </Box>
            </CardActions>
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
                    <Typography component="p" sx={{ borderBottom: '1px solid grey' }}>Ödenen</Typography>
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
                    <Typography component="p" sx={{ borderBottom: '1px solid grey' }}>Kalan</Typography>
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



                    <form onSubmit={submit}>
                    <input type="file" id="image-file" onChange={fileSelected} />
                    <Button type="submit">Kaydet</Button>
                    </form>
                  


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

