import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid } from "@mui/material";
import { useRouter } from "next/router";

import { useEffect } from 'react';
import { useSelector } from "react-redux";
import * as yup from 'yup';
import { RootState, useAppDispatch } from "../../../../../../store";
import { getUserById, updateUserByAdmin } from "../../../../../../store/user/userActions";
import useForm from "../../../../../_hooks/useForm";
import useWatch from "../../../../../_hooks/useWatch";
import Input from "../../../../Form/Input";
import { PhotoProperty } from "../../../../../../types/photo";
import AlbumForm from "./album-form";
import { pdf } from "@react-pdf/renderer";
import { getDownloadFile } from "../../../../../_helpers/utility";



const AlbumChoice = ({ userDetails }: any) => {

  const { chosen: { album: { colorCode, albumName }, poster, cover, isChoiced, coverText }, reservationInfo: { album:{albumPack,pvc,box,wood,posterDetail,canvasDetail} }, _id,address,phoneNumber,name } = userDetails;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userId = router.query.id;
  
  const photoList = useSelector((state: RootState) => state.photo.photoList.data)

  const { control, errors, handleSubmit, setValue } = useForm({
    defaultValues: {
      colorCode: colorCode,
      albumName: albumName,
      poster: poster,
      cover: cover,
      coverText: coverText,
    },
    validationSchema: {
      colorCode: yup.string().required('Bu alanın doldurulması zorunludur.'),
      albumName: yup.string().required('Bu alanın doldurulması zorunludur.'),
      cover: yup.string().required('Bu alanın doldurulması zorunludur.'),
      coverText: yup.string().required('Bu alanın doldurulması zorunludur.'),
      ...(posterDetail && { poster: yup.string().required('Bu alanın doldurulması zorunludur.') }),
    }
  })

  useEffect(() => {

    setValue('colorCode', colorCode);
    setValue('albumName', albumName);
    setValue('poster', poster);
    setValue('cover', cover);
    setValue('coverText', coverText);

  }, [colorCode, albumName, poster, cover, coverText]);

  const AlbumNameVal = useWatch({ control, fieldName: 'albumName' })

  
  const onAlbumSave = async (dataNew: any) => {

    const res = await dispatch(updateUserByAdmin({ id: _id, data: dataNew }));
    if (res.meta.requestStatus === 'fulfilled') {
      dispatch(getUserById(userId));
    }

  }

  const renderPdf = async () => {
    const component = (<AlbumForm colorCode={colorCode} albumName={albumName} coverText={coverText} albumDetail={albumPack}  address={address} phoneNumber={phoneNumber} name={name} box={box} canvasDetail={canvasDetail} posterDetail={posterDetail} pvc={pvc} wood={wood} />)
    const blob = await pdf(component).toBlob();

    getDownloadFile(
      blob,'Album.pdf'
    )
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
            <Button  onClick={renderPdf}>Render</Button>
            <Box >
              <Grid
                container
                spacing={5}
                padding={1}

              >
              <Grid
                xs={12}
                sm={12}
                lg={12}
                md={12}
                item
                sx={{ justify: 'center', alignItems: 'center', width: '100%' }}
              >
                  {<Box component='img' src={photoList.filter(photo => photo?.property === PhotoProperty.Album).find(photo => photo?.description === AlbumNameVal)?.imageURL} sx={{ width: '100%' }}></Box>}
                </Grid>
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
                {posterDetail && <Grid
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

export default AlbumChoice