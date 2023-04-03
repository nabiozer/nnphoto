


import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Input, useForm } from '../../lib';
import { RootState, useAppDispatch } from '../../store';
import { authUser, login } from '../../store/user/userActions';
import useAxios from 'axios-hooks'


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

interface SignInFormData {
  email: string;
  password: string;
}

export default function SignIn() {
  



  const dispatch = useAppDispatch();
  const userLoginInfo = useSelector((state: RootState) => state?.user?.userLogin)
  
  const router = useRouter();
  

  const { search } = router.query

  const { control, errors, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validationSchema: {}
  })


  const [{loading,data:loginData},executeLogin] = useAxios(
    {url:'http://localhost:5000/api/users/login',
    method: 'POST'},
    {manual: true}
  )

  console.log(loading)
  const redirect = search ? location.search.split('=')[1] : '/';
  const onSubmit = (data: SignInFormData) => {
      dispatch(authUser(data));
    

  }


  useEffect(() => {
    if (!userLoginInfo?.error && userLoginInfo.data) {
      router.push(redirect);
    }
   
  
  }, [userLoginInfo.data,redirect,userLoginInfo?.error]);



//http://localhost:5000/api/users/


  return (
    <>
    <Box component='div' sx={{height:'4rem',background:'#2c3531'}}/>
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(/images/vintage1.jpeg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
      
        <Box
          sx={{
            my: 12,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        
           
          }}
        >
      
          <Box
            sx={{
              marginTop: 13,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '300px',
              width: '100vw'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#2c3531' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4">
              Giriş Yap
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1, maxWidth: '400px', padding:'3px'}}>
              <Box component="div" sx={{ mt: 1 }} ><Input id="email" name="email" placeholder="E-Mail" label="Email" control={control} errors={errors} autoComplete="email" /></Box>
              <Box component="div" sx={{ mt: 1 }} ><Input id="password" name="password" placeholder="Şifre" label="Password" control={control} errors={errors} autoComplete="current-password" type='password' /></Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item md>
                  <Link href="#" >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item md>
                  {/* <Link href="/auth/register">
                    {"Kayıt ol"}
                  </Link> */}
                </Grid>
              </Grid>
            </Box>
          </Box>

        </Box>
      </Grid>
    </Grid>
    <Box component='div' sx={{height:'4rem',background:'#2c3531'}}/>
    </>

  );
}



