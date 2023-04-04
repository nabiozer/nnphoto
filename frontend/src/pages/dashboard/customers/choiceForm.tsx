
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Layout as DashboardLayout } from '../../../lib/components/App/Dashboard/layouts/dashboard/layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { Input, useForm } from '../../../lib';
import { RootState, useAppDispatch } from '../../../store';


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


export default function ChoiceForm() {
  const dispatch = useAppDispatch();
  const registered = useSelector((state: RootState) => state.user.userRegister);
  console.log(registered);
  const router = useRouter();
  const { control, errors, handleSubmit } = useForm({
    defaultValues: {

    },
    validationSchema: {
      password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),


    }
  })

  const onSubmit = async (data: any) => {
    const reservationInfo = {
      date: data.date,
      place: data.place,
      packagePrice: data.packagePrice,
      advancePayment: data.advancePayment,
      packageDetails: data.packageDetails
    }

    const deliveryInfo = {
      address: data.address,
      phoneNumber: data.phoneNumber
    }
    try {
      const config = {
          headers:{
              'Content-Type' :'application/json'
          }
      }
      const result = await axios.post('http://localhost:5000/api/users',{ ...data, reservationInfo, deliveryInfo },config)
      result?.status === 201 && router.push('/dashboard/customers')
       
  } catch (error) {
      console.log(error)
  }
   


  }

  return (
    <DashboardLayout >
      <Container component="main" sx={{
        height: '100vh', width: '100vw', display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', maxWidth: '4000px !important'
      }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '300px',
            width: '100%',
            maxWidth: '100%'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Kayıt Ol
          </Typography>
         
          <Grid  container spacing={1}  component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1,padding:'1rem' }}>
            <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="email" name="email" placeholder="E-Mail" label="Email" control={control} errors={errors} autoComplete="email" /></Grid>
            <Grid  item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="name" name="name" placeholder="Kullanıcı Adı" label="Kullanıcı Adı" control={control} errors={errors} /></Grid>
            <Grid  item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="password" name="password" placeholder="Şifre" label="Şifre" control={control} errors={errors} autoComplete="current-password" type='password' /></Grid>
            <Grid  item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="confirmpassword" name="confirmpassword" placeholder="Şifre Tekrar" label="Şifre Tekrar" control={control} errors={errors} autoComplete="current-password" type='password' /></Grid>
            <Grid  item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="date" name="date" placeholder="Çekim Tarihi" label="Çekim Tarihi" control={control} errors={errors} /></Grid>
            <Grid  item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="place" name="place" placeholder="Çekim Yeri" label="Çekim Yeri" control={control} errors={errors} /></Grid>
            <Grid  item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="packagePrice" name="packagePrice" placeholder="Paket Fiyatı" label="Paket Fiyatı" control={control} errors={errors} /></Grid>
            <Grid  item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="advancePayment" name="advancePayment" placeholder="Kapora" label="Kapora" control={control} errors={errors} /></Grid>
            <Grid  item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="packageDetails" name="packageDetails" placeholder="Paket Detay" label="Paket Detay" control={control} errors={errors} /></Grid>
            <Grid  item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="albumDetails" name="albumDetails" placeholder="Albüm Detay" label="Albüm Detay" control={control} errors={errors} /></Grid>
            <Grid  item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="address" name="address" placeholder="Adres" label="Adres" control={control} errors={errors} /></Grid>
            <Grid  item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="phoneNumber" name="phoneNumber" placeholder="Telefon" label="Telefon" control={control} errors={errors} /></Grid>

            <Grid  item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} >
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
                <Link href="/auth/login">
                  {"Giriş Yap"}
                </Link>
              </Grid>
            </Grid>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </DashboardLayout>
  );
}