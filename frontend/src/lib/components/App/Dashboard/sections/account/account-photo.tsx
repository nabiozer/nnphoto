import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

import * as yup from 'yup';
import { useAppDispatch } from "../../../../../../store";
import { getUserById, updateUserByAdmin } from "../../../../../../store/user/userActions";
import useForm from "../../../../../_hooks/useForm";
import Input from "../../../../Form/Input";




const PhotoChoice = ({ userDetails }: any) => {

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

  return (

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
            

          </Grid>
        </Grid>
      </Box>
    </CardContent>
    <Divider />
  </Card>
  )
}

export default PhotoChoice