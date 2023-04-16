import {
  Box, Card, CardActions, CardContent,
  CardHeader,
  CircularProgress,
  Divider, Grid, IconButton, Input as MuiInput, Switch, Typography
} from '@mui/material';
import axios from 'axios';

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';
import { useEffect, useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import { useAppDispatch } from '../../../../../../store';
import { getUserById, updateUserByAdmin } from '../../../../../../store/user/userActions';
import useS3Download from '../../../../../_hooks/useDownload';
import useForm from '../../../../../_hooks/useForm';
import Button from '../../../../Form/Button';
import Input from '../../../../Form/Input';
import { StatusType } from './type';
import DownloadIcon from '@mui/icons-material/Download';
import CircularProgressWithLabel from '../../../../Display/Progress/WithLabel';

registerPlugin(FilePondPluginImagePreview);
export const AccountProfileDetails = ({ userDetails }: any) => {

  const { reservationInfo: { date, place, packagePrice, packageDetails, advancePayment, album, }, _id, photos, video, photosURL, videoURL } = userDetails;

  const [progress, setProgress] = useState<any>(null);
  const [downloadObject, loading, error] = useS3Download(setProgress);
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<any>([])
  const [videoFile, setVideo] = useState<any>([])
  const [downloadObj, setDownloadObj] = useState<string>('')


  const defaulValues = {
    photos: '',
    video: '',

  }

  const { control, errors, handleSubmit, setValue } = useForm({
    defaultValues: defaulValues,
    validationSchema: {

    }
  })

  const handleProcessFile = (error:any, file:any,property:'photos' | 'video') => {
    if (!error && file.serverId) {
        console.log
        setValue(property, file?.file?.name)
    }
  };

  const onChangeStatus = async (status: string) => {
    const data = {
      status: status
    }
    const res = await dispatch(updateUserByAdmin({ id: _id, data }));
    if (res.meta.requestStatus === 'fulfilled') {

      dispatch(getUserById(_id));
    }

  }

  const onSubmit = async (data: any) => {
    const res = await dispatch(updateUserByAdmin({ id: _id, data }));

    if (res.meta.requestStatus === 'fulfilled') {
      dispatch(getUserById(_id));
    }

  }
  useEffect(() => {
    console.log(progress)
  }, [progress])



  useEffect(() => {
    setValue('photos', photos);
    setValue('video', video)
  }, [photos, video])


  const uploadHandler = async (event: any, property: string) => {
    event.preventDefault()
    const formData = new FormData();

    if (property === 'video') {
      formData.append("file", videoFile[0])
    }
    for (let i = 0; i < file.length; i++) {
      formData.append("file", file[i]);

    }

    const result = await axios.post("http://localhost:5000/api/photoupdate/user/" + _id, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    if (result.status === 200) {
      console.log(result)
      if (property === 'video') {
        setValue('video', String(result.data))
      } if (property === 'photos') {
        setValue('photos', String(result.data))
      }


    }

  }

  const fileSelected = (event: any, property: string) => {
    const files = event.target.files
    if (property === 'video') {
      setVideo(files)
    }
    if (property === 'photos') {
      setFile(files)
    }

  }





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
                    {progress && downloadObj === 'photos' ? 
                    <CircularProgressWithLabel value={progress} /> : 
                    <Typography component="p" >{photos && photosURL ? <IconButton disabled={progress} onClick={() => { setDownloadObj('photo'); downloadObject(photosURL, photos) }} ><DownloadIcon /></IconButton> : 'Yükleme aşamasında'}</Typography>}

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
                    {progress && downloadObj === 'video' ? <CircularProgressWithLabel value={progress} /> : <Typography component="p" >{video && videoURL ? <IconButton disabled={progress} onClick={() => { setDownloadObj('video'); downloadObject(videoURL, video) }}><DownloadIcon /></IconButton> : 'Yükleme aşamasında'}</Typography>}
                  </Grid>
                  <Grid
                    xs={12}
                    sm={12}
                    lg={12}
                    md={12}
                    item
                    sx={{ justify: 'center', textAlign: 'center', alignItems: 'center' }}
                  >
                    <Grid container spacing={5}
                    >
                      <Grid item xs={6} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="video" name="video" placeholder="Video" label="Video" control={control} errors={errors} /></Grid>

                      <Grid item xs={6} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="photos" name="photos" placeholder="Photo" label="Photo" control={control} errors={errors} /></Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
            <CardActions>
            <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }}>   <Box component='div'>
                    <FilePond
                        files={file}
                        onupdatefiles={() => setFile}
                        maxFiles={3}
                        instantUpload={false}
                        allowProcess
                        onprocessfile={(error,file) => handleProcessFile(error,file,'video')}
                        server={"http://localhost:5000/api/photoupdate/user/" + _id}
                        onremovefile={(file) => {
                       
                            // set the value you want to set here
                            video ? setValue('video', video)  : setValue('video', '')
                          }}
                        name="file" /* sets the file input name, it's filepond by default */
                        labelIdle='Drag & Drop your Video or <span class="filepond--label-action">Browse</span>'
                    />
                </Box></Grid>
              <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }}>   <Box component='div'>

                    
                    <FilePond
                        files={file}
                        onupdatefiles={() => setFile}
                        maxFiles={3}
                        instantUpload={false}
                        allowProcess
                        onprocessfile={(error,file) => handleProcessFile(error,file,'photos')}
                        server={"http://localhost:5000/api/photoupdate/user/" + _id}
                        onremovefile={(file) => {
                       
                            // set the value you want to set here
                            photos ? setValue('photos', photos)  : setValue('photos', '')
                          }}
                        name="file" /* sets the file input name, it's filepond by default */
                        labelIdle='Drag & Drop your Photos or <span class="filepond--label-action">Browse</span>'
                    />
                </Box></Grid>
              
            </CardActions>
            <CardActions>

              <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Button type="submit" text="Fotoğraf ve Videoları Kaydet" />
              </Box>
            </CardActions>
            <Divider />

          </Card>

        </Grid>
      </Grid>
    </>
  );
};

