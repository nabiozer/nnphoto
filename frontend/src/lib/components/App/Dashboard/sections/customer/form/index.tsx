
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
import { useAppDispatch } from '../../../../../../../store';
import { getUserById, registerUser, updateUserByAdmin } from '../../../../../../../store/user/userActions';
import useForm from '../../../../../../_hooks/useForm';
import DateTimePicker from '../../../../../Form/DateTimePicker';
import Input from '../../../../../Form/Input';
import Select from '../../../../../Form/Select';
import { Layout as DashboardLayout } from '../../../layouts/dashboard/layout';
import { Box as BoxP, Pvc, Wood } from '../type';



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
        email: '',
        name: '',
        date: '',
        place: '',
        packagePrice: '',
        advancePayment: '',
        packageDetails: '',
        albumPack: '',
        address: '',
        phoneNumber: '',
        posterDetail: '',
        albumDetail: '',
        familyDetail: '',
        canvasDetail: '',
        pvc: '',
        box: '',
        wood: '',
    }
    const { control, errors, handleSubmit, setValue } = useForm({
        defaultValues: defaultValues,
        validationSchema: {


        }
    })

    useEffect(() => {

        if (isEdit) {
            const getUser = async () => {
                const res = await dispatch(getUserById(id))
                if (res.meta.requestStatus === 'fulfilled') {
                    const { email, name, address, phoneNumber, reservationInfo: { date, advancePayment, album: { albumDetail,familyDetail, posterDetail, canvasDetail, pvc, box, wood }, packageDetails, packagePrice, place } } = res?.payload
                    setValue('email', email);
                    setValue('name', name);
                    setValue('date', date);
                    setValue('place', place);
                    setValue('address', address);
                    setValue('phoneNumber', phoneNumber);
                    setValue('advancePayment', advancePayment);
                    setValue('packageDetails', packageDetails);
                    setValue('packagePrice', packagePrice);
                    setValue('albumDetail', albumDetail);
                    setValue('familyDetail', familyDetail);
                    setValue('posterDetail', posterDetail);
                    setValue('canvasDetail', canvasDetail);
                    setValue('pvc', pvc);
                    setValue('box', box);
                    setValue('wood', wood);
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
                height: '100vh', width: '100%', display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', maxWidth: '4000px !important'
            }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 3,
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
                        Kullanıcı Oluştur
                    </Typography>

                    <Grid container spacing={1} component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ padding: 1 }}>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="email" name="email" placeholder="E-Mail" label="Email" control={control} errors={errors} autoComplete="email" /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="name" name="name" placeholder="Kullanıcı Adı" label="Kullanıcı Adı" control={control} errors={errors} /></Grid>
                        {!isEdit && <><Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="password" name="password" placeholder="Şifre" label="Şifre" control={control} errors={errors} autoComplete="current-password" type='password' /></Grid>
                            <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="confirmpassword" name="confirmpassword" placeholder="Şifre Tekrar" label="Şifre Tekrar" control={control} errors={errors} autoComplete="current-password" type='password' /></Grid></>}
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><DateTimePicker id="date" name="date" label="Çekim Tarihi" disablePast control={control} errors={errors} unixTime fullWidth sx={{width:'100% '}}/></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="place" name="place" placeholder="Çekim Yeri" label="Çekim Yeri" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="packagePrice" name="packagePrice" placeholder="Paket Fiyatı" label="Paket Fiyatı" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="advancePayment" name="advancePayment" placeholder="Kapora" label="Kapora" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="packageDetails" name="packageDetails" placeholder="Paket Detay" label="Paket Detay" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="address" name="address" placeholder="Adres" label="Adres" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="phoneNumber" name="phoneNumber" placeholder="Telefon" label="Telefon" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="albumDetail" name="albumDetail" placeholder="Albüm Detay" label="Albüm" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="familyDetail" name="familyDetail" placeholder="Aile Albüm Detay" label="Aile Albüm Detay" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="posterDetail" name="posterDetail" placeholder="Poster" label="Poster" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="canvasDetail" name="canvasDetail" placeholder="Kanvas" label="Kanvas" control={control} errors={errors} /></Grid>

                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} > <Select displayEmpty options={{ data: [{ value: Pvc.Black }, { value: Pvc.White }], displayField: 'value', displayValue: 'value' }} id="pvc" name="pvc" label="Pvc" control={control} errors={errors} setValue={setValue} defaultValue={defaultValues.pvc} fullWidth /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} > <Select displayEmpty options={{ data: [{ value: BoxP.Modal }, { value: BoxP.Wood }], displayField: 'value', displayValue: 'value' }} id="box" name="box" label="Kutu" control={control} errors={errors} setValue={setValue} defaultValue={defaultValues.box} fullWidth /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} > <Select displayEmpty options={{ data: [{ value: Wood.Walnut }, { value: Wood.Black }], displayField: 'value', displayValue: 'value' }} id="wood" name="wood" label="Ahşap" control={control} errors={errors} setValue={setValue} defaultValue={defaultValues.wood} fullWidth /></Grid>
                        <Grid item xs={12} md={12} sm={12} lg={12} sx={{ mt: 2 }} >
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Kaydı Oluştur
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </DashboardLayout>
    );
}