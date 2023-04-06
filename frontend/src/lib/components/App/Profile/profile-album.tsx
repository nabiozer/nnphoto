import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid } from "@mui/material";
import { useRouter } from "next/router";

import { useEffect } from 'react';
import * as yup from 'yup';
import { useAppDispatch } from "../../../../store";
import { getProfile, getUserById, updateProfile, updateUserByAdmin } from "../../../../store/user/userActions";
import useForm from "../../../_hooks/useForm";
import Input from "../../Form/Input";



const ProfileAlbumChoice = ({ userDetails }: any) => {

  const { chosen: { album: { colorCode, albumName }, poster, cover, isChoiced ,coverText}, reservationInfo: { isPoster }, _id } = userDetails;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userId = router.query.id;
  console.log(userId);
  const defaultValues = {

  }
  const { control, errors, handleSubmit, setValue } = useForm({
    defaultValues: {
      colorCode: colorCode,
      albumName: albumName,
      poster: poster,
      cover: cover,
      coverText:coverText,
    },
    validationSchema: {
        colorCode:yup.string().required('Bu alanın doldurulması zorunludur.'),
        albumName:yup.string().required('Bu alanın doldurulması zorunludur.'),
        cover:yup.string().required('Bu alanın doldurulması zorunludur.'),
        coverText:yup.string().required('Bu alanın doldurulması zorunludur.'),
        ...(isPoster && {poster:yup.string().required('Bu alanın doldurulması zorunludur.')}),
    }
  })

  useEffect(() => {
    setValue('colorCode', colorCode);
    setValue('albumName', albumName);
    setValue('poster', poster);
    setValue('cover', cover);
    setValue('coverText', coverText);

  }, [colorCode, albumName, poster, cover,coverText]);

  const onAlbumSave = async (dataNew: any) => {
    const res = await dispatch(updateProfile({ id: _id, data:dataNew }));
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

              >

                <Grid
                  xs={12}
                  sm={6}
                  lg={6}
                  md={6}
                  item
                  sx={{ justify: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}
                >

                  <Input id="albumName" name="albumName" placeholder="Albüm Adı" label="Albüm Adı" control={control} errors={errors} disabled={isChoiced} />

                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  lg={6}
                  md={6}
                  item
                  sx={{ justify: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}
                >

                  <Input id="colorCode" name="colorCode" placeholder="Albüm Renk" label="Albüm Renk" control={control} errors={errors} disabled={isChoiced} />

                </Grid>
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