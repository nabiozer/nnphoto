import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid } from "@mui/material";
import { useRouter } from "next/router";

import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import * as yup from 'yup';
import { RootState, useAppDispatch } from "../../../../store";
import { getPhotos } from "../../../../store/photo/photoActions";
import { getProfile, getUserById, updateProfile, updateUserByAdmin } from "../../../../store/user/userActions";
import { PhotoProperty } from "../../../../types/photo";
import useForm from "../../../_hooks/useForm";
import useWatch from "../../../_hooks/useWatch";
import Input from "../../Form/Input";
import Select from "../../Form/Select";



const ProfileAlbumChoice = ({ userDetails }: any) => {

  const { chosen: { album: { colorCode, albumName }, poster, cover, isChoiced, coverText }, reservationInfo: { isPoster }, _id } = userDetails;
  const dispatch = useAppDispatch();
  const photoList = useSelector((state: RootState) => state.photo.photoList.data)


  const defaultValues = {
    colorCode: colorCode || '',
    albumName: albumName || '',
    poster: poster || '',
    cover: cover || '',
    coverText: coverText || '',
  }

  const { control, errors, handleSubmit, setValue } = useForm({
    defaultValues: defaultValues,
    validationSchema: {
      colorCode: yup.string().required('Bu alanın doldurulması zorunludur.'),
      albumName: yup.string().required('Bu alanın doldurulması zorunludur.'),
      cover: yup.string().required('Bu alanın doldurulması zorunludur.'),
      coverText: yup.string().required('Bu alanın doldurulması zorunludur.'),
      ...(isPoster && { poster: yup.string().required('Bu alanın doldurulması zorunludur.') }),
    }
  })


  const AlbumNameVal = useWatch({ control, fieldName: 'albumName' })


  useEffect(() => {
    !photoList.length && dispatch(getPhotos());
  }, [dispatch]);

  useEffect(() => {
    setValue('colorCode', colorCode);
    setValue('poster', poster);
    setValue('cover', cover);
    setValue('coverText', coverText);
  }, [colorCode, poster, cover, coverText]);

  useEffect(() => {
    setValue('albumName', albumName);
  }, [photoList, albumName])





  useEffect(() => {
    setValue('colorCode', photoList?.filter(photo => photo.property === PhotoProperty.Album)?.find((item) => item.description === AlbumNameVal)?.colorCodes[0])
  }, [AlbumNameVal])


  const onAlbumSave = async (dataNew: any) => {
    const res = await dispatch(updateProfile({ id: _id, data: dataNew }));
    if (res.meta.requestStatus === 'fulfilled') {
      dispatch(getProfile());
    }

  }
  return (

    <Grid container spacing={2} padding={3} >
      <Grid
        xs={12}
        md={12}
        lg={12}
        xl={12}
        item
      >
        <Card sx={{ height: '100%', width: '100%' }} component='form' onSubmit={handleSubmit(onAlbumSave)}>
          <CardHeader
            title="Albüm Seçimleri"

          />
          <CardContent sx={{ pt: 2 }}>
            <Box >
              <Grid
                container
                spacing={5}
                padding={1}

              ><Grid
                xs={12}
                sm={12}
                lg={12}
                md={12}
                item
                sx={{ justify: 'center', alignItems: 'center', width: '100%' }}
              >
                  <Box component='img' src={`/images/albums/${AlbumNameVal.split('-')[1]}.jpeg`} sx={{ width: '100%' }}></Box>
                </Grid>

                <Grid
                  xs={12}
                  sm={6}
                  lg={6}
                  md={6}
                  item
                  sx={{ justify: 'center', alignItems: 'center', width: '100%' }}
                >
                  <Select disabled={isChoiced} options={{ data: photoList?.filter(photo => photo.property === PhotoProperty.Album) || [], displayField: 'description', displayValue: 'description' }} id="albumName" name="albumName" label="Albüm Adı" control={control} errors={errors} setValue={setValue} defaultValue={defaultValues.albumName} fullWidth />
                </Grid>
                {AlbumNameVal && <Grid
                  xs={12}
                  sm={6}
                  lg={6}
                  md={6}
                  item
                  sx={{ justify: 'center', alignItems: 'center', width: '100%' }}
                >

                  <Select
                    disabled={isChoiced}
                    options={{ data: photoList?.filter(photo => photo.property === PhotoProperty.Album)?.find((item) => item.description === AlbumNameVal)?.colorCodes?.map(item => { return ({ ColorCode: item }) }) || [], displayField: 'ColorCode', displayValue: 'ColorCode' }} id="colorCode" name="colorCode" label="Renk Kodu" control={control} errors={errors} setValue={setValue} defaultValue={defaultValues.albumName} fullWidth />

                </Grid>}
                <Grid
                  xs={12}
                  sm={6}
                  lg={6}
                  md={6}
                  item
                  sx={{ justify: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}
                >

                  <Input id="cover" name="cover" placeholder="Kapak Fotoğraf Kodu" label="Kapak Fotoğraf Kodu" control={control} errors={errors} disabled={isChoiced} />

                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  lg={6}
                  md={6}
                  item
                  sx={{ justify: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}
                >

                  <Input id="coverText" name="coverText" placeholder="Kapak Yazısı" label="Kapak Yazısı" control={control} errors={errors} disabled={isChoiced} />

                </Grid>
                {isPoster && <Grid
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                  item
                  sx={{ justify: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}
                >

                  <Input id="poster" name="poster" placeholder="Poster Fotoğraf Kodu" label="Poster Fotoğraf Kodu" control={control} errors={errors} disabled={isChoiced} />

                </Grid>}
                <Grid
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                  item
                  sx={{ justify: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}
                >
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          <Divider />
          {!isChoiced && <CardActions>
            <Button
              type='submit'
              fullWidth
              variant="contained"
              color="secondary"

            >
              Albüm Seçimlerini Kaydet
            </Button>
          </CardActions>}
        </Card>


      </Grid>


    </Grid>
  )
}

export default ProfileAlbumChoice