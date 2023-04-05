import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

import * as yup from 'yup';
import { useAppDispatch } from "../../../../store";
import { getUserById, updateUserByAdmin } from "../../../../store/user/userActions";
import useForm from "../../../_hooks/useForm";
import Input from "../../Form/Input";





const ProfilePhotoChoice = ({ userDetails }: any) => {

  const { chosen: { album: { colorCode, albumName }, poster, cover, photosChosen, isChoiced }, reservationInfo: { isPoster }, _id } = userDetails;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userId = router.query.id;
  console.log(userId);

  const { control, errors, handleSubmit, setValue } = useForm({
    defaultValues: {
      photosChosen: '',
    },
    validationSchema: {
      photosChosen:yup.string().required('Bu alanın doldurulması zorunludur.').max(5,'5 karakterli kodu giriniz').min(5,'5 karakterli kodu giriniz')

    }
  })

  


  const onAddPhoto = async (dataNew: any) => {
    const data = {
      photosChosen: [...photosChosen,
      dataNew.photosChosen,
      ]
    }
    const res = await dispatch(updateUserByAdmin({ id: _id, data }));
    if (res.meta.requestStatus === 'fulfilled') {
      dispatch(getUserById(userId));
      setValue('photosChosen','')
    }

  }


  const onDeletePhoto = async (i: number) => {
    const data = {
      photosChosen: photosChosen.filter((photo: string, index: number) => index !== i),

    }
    const res = await dispatch(updateUserByAdmin({ id: _id, data }));
    if (res.meta.requestStatus === 'fulfilled') {
      dispatch(getUserById(userId));
    }

  }

  const onChoiceEnd = async () => {
    const data = {
      isChoiced: true
    }
    const res = await dispatch(updateUserByAdmin({ id: _id, data }));
    if (res.meta.requestStatus === 'fulfilled') {
     
      dispatch(getUserById(userId));
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
        <Card sx={{ height: '100%', width: '100%' }}>
          <CardHeader
            title="Fotoğraf Seçimleri"
          />
          <CardContent >
            <Box>
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
                  sx={{ justify: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}
                >
                </Grid>
                {!isChoiced && <Grid
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                  item
                  sx={{ justify: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}
                >
                  <Box component='h5' sx={{ textAlign: 'left', mb: '0.8rem' }}>Fotoğraf Seçimleri</Box>
                  <Box component='form' noValidate sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onSubmit={handleSubmit(onAddPhoto)} >
                    <Input id="photosChosen" name="photosChosen" placeholder="Fotoğraf Kodu" label="Fotoğraf Kodu" control={control} errors={errors} disabled={isChoiced} maxLength={5} />
                    <Button
                      type="submit"
                      sx={{ ml: '0.5rem' }}
                      variant="contained"

                    >
                      ekle

                    </Button>
                  </Box>
                </Grid>}

                {photosChosen.map((photo: any, index: any) => {
                  return (<Grid
                    key={index}
                    xs={6}
                    sm={6}
                    lg={6}
                    md={6}
                    item
                    sx={{ justify: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                      <Typography component="p" >{index + 1}. NN_{photo}</Typography>
                      {!isChoiced && <Button
                        sx={{ ml: '0.5rem' }}
                        variant="contained"
                        color='secondary'
                        onClick={() => onDeletePhoto(index)}
                      >
                        Sil
                      </Button>} </Box>
                  </Grid>)
                })
                }

              </Grid>
            </Box>
          </CardContent>
          <Divider />

          <CardActions>
            {!isChoiced &&
              <>

                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={() => onChoiceEnd()}
                >
                  Seçimi Tamamla
                </Button>
              </>}
          </CardActions>
        </Card>


      </Grid>

    </Grid>
  )
}

export default ProfilePhotoChoice