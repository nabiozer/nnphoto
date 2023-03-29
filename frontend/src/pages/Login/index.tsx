


import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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
import { login } from '../../store/userActions';


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
  const userLoginInfo = useSelector((state: RootState) => state?.user?.userLogin?.userInfo)
  const router = useRouter();

  const { search } = router.query

  const { control, errors, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validationSchema: {}
  })

  const onSubmit = (data: SignInFormData) => {
    dispatch(login({ ...data }))

  }

  const redirect = search ? location.search.split('=')[1] : '/Home';
  useEffect(() => {
    if (userLoginInfo) {
      router.push(redirect)
    }

  }, [router, userLoginInfo, redirect]);




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
          minWidth: '300px',
          width: '100vw'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Giriş Yap
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1, maxWidth: '400px' }}>
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
              <Link href="/Register">
                {"Kayıt ol"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>

  );
}


