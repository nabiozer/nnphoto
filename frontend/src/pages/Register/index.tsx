
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Input, useForm } from '../../lib';
import { useAppDispatch } from '../../store';
import { register } from '../../store/userActions';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        NNPHOTOFILM
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignIn() {
  const dispatch = useAppDispatch();
  const { control, errors, handleSubmit } = useForm({
    defaultValues: {

    },
    validationSchema: {}
  })

  const onSubmit = (data: any) => {
    const reservationInfo = {
      date : data.date,
      place:data.place,
      packagePrice: data.packagePrice,
      advancePayment: data.advancePayment,
      packageDetails: data.packageDetails
    }

    const deliveryInfo = {
      address: data.address,
      phoneNumber: data.phoneNumber
    }
    dispatch(register({...data,reservationInfo,deliveryInfo}  ))

  }

  return (

    <Container component="main" sx={{
      height: '100vh', width: '100vw', display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', background: 'url("/images/form.jpeg")', backgroundSize: 'cover', maxWidth: '4000px !important'
    }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 13,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: '300px'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Kayıt Ol
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <Box component="div" sx={{ mt: 1 }} ><Input id="email" name="email" placeholder="E-Mail" label="Email" control={control} errors={errors} autoComplete="email" /></Box>
          <Box component="div" sx={{ mt: 1 }} ><Input id="name" name="name" placeholder="Kullanıcı Adı" label="Kullanıcı Adı" control={control} errors={errors} /></Box>
          <Box component="div" sx={{ mt: 1 }} ><Input id="password" name="password" placeholder="Şifre" label="Şifre" control={control} errors={errors} autoComplete="current-password" type='password' /></Box>
          <Box component="div" sx={{ mt: 1 }} ><Input id="confirmpassword" name="confirmpassword" placeholder="Şifre Tekrar" label="Şifre Tekrar" control={control} errors={errors} autoComplete="current-password" type='password' /></Box>
          <Box component="div" sx={{ mt: 1 }} ><Input id="date" name="date" placeholder="Çekim Tarihi" label="Çekim Tarihi" control={control} errors={errors} /></Box>
          <Box component="div" sx={{ mt: 1 }} ><Input id="place" name="place" placeholder="Çekim Yeri" label="Çekim Yeri" control={control} errors={errors} /></Box>
          <Box component="div" sx={{ mt: 1 }} ><Input id="packagePrice" name="packagePrice" placeholder="Paket Fiyatı" label="Paket Fiyatı" control={control} errors={errors} /></Box>
          <Box component="div" sx={{ mt: 1 }} ><Input id="advancePayment" name="advancePayment" placeholder="Kapora" label="Kapora" control={control} errors={errors} /></Box>
          <Box component="div" sx={{ mt: 1 }} ><Input id="packageDetails" name="packageDetails" placeholder="Paket Detay" label="Paket Detay" control={control} errors={errors} /></Box>
          <Box component="div" sx={{ mt: 1 }} ><Input id="albumDetails" name="albumDetails" placeholder="Albüm Detay" label="Albüm Detay" control={control} errors={errors} /></Box>
          <Box component="div" sx={{ mt: 1 }} ><Input id="address" name="address" placeholder="Adres" label="Adres" control={control} errors={errors} /></Box>
          <Box component="div" sx={{ mt: 1 }} ><Input id="phoneNumber" name="phoneNumber" placeholder="Telefon" label="Telefon" control={control} errors={errors} /></Box>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/Login">
                {"Giriş Yap"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>

  );
}