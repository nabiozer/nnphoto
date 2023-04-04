
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import axios from 'axios';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { Layout as DashboardLayout } from '../../../layouts/dashboard/layout';
import { useEffect } from 'react';
import { getUserById, registerUser, updateUserByAdmin } from '../../../../../../../store/user/userActions';
import Input from '../../../../../Form/Input';
import { useAppDispatch } from '../../../../../../../store';
import useForm from '../../../../../../_hooks/useForm';


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


export default function Form({ type, id }: any) {
    const dispatch = useAppDispatch();
    const isEdit = id ? true : false;


    const router = useRouter();

    const defaultValues = {

    }
    const { control, errors, handleSubmit, setValue } = useForm({
        defaultValues: {
            email: '',
            name: '',
            date: '',
            place: '',
            packagePrice: '',
            advancePayment: '',
            packageDetails: '',
            album: '',
            address: '',
            phoneNumber: '',
        },
        validationSchema: {


        }
    })

    useEffect(() => {

        if (isEdit) {
            const getUser = async () => {
                const res = await dispatch(getUserById(id))
                if (res.meta.requestStatus === 'fulfilled') {
                    const { email, name, address, phoneNumber, reservationInfo: { date, advancePayment, album, packageDetails, packagePrice, place } } = res?.payload
                    setValue('email', email);
                    setValue('name', name);
                    setValue('date', date);
                    setValue('place', place);
                    setValue('address', address);
                    setValue('phoneNumber', phoneNumber);
                    setValue('album', album);
                    setValue('advancePayment', advancePayment);
                    setValue('packageDetails', packageDetails);
                    setValue('packagePrice', packagePrice);
                }
            }
            getUser()

        }
        console.log(isEdit)
    }, [isEdit])

    const onSubmit = async (data: any) => {
        console.log(data)
        if (isEdit) {
            const res = await dispatch(updateUserByAdmin({ id, data }));
            if (res.meta.requestStatus === 'fulfilled') {
                router.push('/dashboard/customers');
            }
        } else {
            const res = await dispatch(registerUser(data));
            if (res.meta.requestStatus === 'fulfilled') {
                router.push('/dashboard/customers');
            }
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

                    <Grid container spacing={1} component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1, padding: '1rem' }}>
                        <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="email" name="email" placeholder="E-Mail" label="Email" control={control} errors={errors} autoComplete="email" /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="name" name="name" placeholder="Kullanıcı Adı" label="Kullanıcı Adı" control={control} errors={errors} /></Grid>
                        {!isEdit && <><Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="password" name="password" placeholder="Şifre" label="Şifre" control={control} errors={errors} autoComplete="current-password" type='password' /></Grid>
                            <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="confirmpassword" name="confirmpassword" placeholder="Şifre Tekrar" label="Şifre Tekrar" control={control} errors={errors} autoComplete="current-password" type='password' /></Grid></>}
                        <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="date" name="date" placeholder="Çekim Tarihi" label="Çekim Tarihi" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="place" name="place" placeholder="Çekim Yeri" label="Çekim Yeri" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="packagePrice" name="packagePrice" placeholder="Paket Fiyatı" label="Paket Fiyatı" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="advancePayment" name="advancePayment" placeholder="Kapora" label="Kapora" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="packageDetails" name="packageDetails" placeholder="Paket Detay" label="Paket Detay" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="album" name="album" placeholder="Albüm Detay" label="Albüm Detay" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="address" name="address" placeholder="Adres" label="Adres" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} ><Input id="phoneNumber" name="phoneNumber" placeholder="Telefon" label="Telefon" control={control} errors={errors} /></Grid>

                        <Grid item xs={12} md={6} sm={6} lg={3} sx={{ mt: 2 }} >
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