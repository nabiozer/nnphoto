
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
import { createPackage, getPackageById, updatePackage } from '../../../../../../../store/package/packageActions';
import useForm from '../../../../../../_hooks/useForm';
import useWatch from '../../../../../../_hooks/useWatch';
import Input from '../../../../../Form/Input';
import { Layout as DashboardLayout } from '../../../layouts/dashboard/layout';
import Checkbox from '../../../../../Form/Checkbox';


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
        packageName: '',
        packagePrice: '',
        albumDetail: '',
        familyDetail: '',
        posterDetail: '',
        canvasDetail: '',
        packageDetails: '',
        videoKlip: '',
        isDrone: false,
        isPlaceInc: false,

    }
    const { control, errors, handleSubmit, setValue } = useForm({
        defaultValues: defaultValues,
        validationSchema: {


        }
    })

    useEffect(() => {
        if (isEdit) {
            const getPackageDetails = async () => {
                const res = await dispatch(getPackageById(id))
                if (res.meta.requestStatus === 'fulfilled') {
                    const { packageDetails, videoKlip, isDrone, isPlaceInc, packageName, packagePrice, albumDetail, familyDetail, posterDetail, canvasDetail, } = res?.payload
                    setValue('packageName', packageName);
                    setValue('packagePrice', packagePrice);
                    setValue('canvasDetail', canvasDetail);
                    setValue('albumDetail', albumDetail);
                    setValue('familyDetail', familyDetail);
                    setValue('posterDetail', posterDetail);
                    setValue('familyDetail', familyDetail);
                    setValue('packageDetails', packageDetails);
                    setValue('videoKlip', videoKlip);
                    setValue('isDrone', isDrone);
                    setValue('isPlaceInc', isPlaceInc);


                }
            }
            getPackageDetails()

        }
    }, [isEdit])

    const IsDroneVal = useWatch({ control, fieldName: 'isDrone' })
    const IsPlaceIncludeVal = useWatch({ control, fieldName: 'isPlaceInc' })


    // useEffect(() => {
    //     if (!isEdit && PackageDetailsVal) {

    //             if(PackageDetailsVal === Packages.one)
    //                 setValue('email', email);
    //                 setValue('name', name);
    //                 setValue('date', date);
    //                 setValue('place', place);
    //                 setValue('address', address);
    //                 setValue('phoneNumber', phoneNumber);
    //                 setValue('advancePayment', advancePayment);
    //                 setValue('packageDetails', packageDetails);
    //                 setValue('packagePrice', packagePrice);
    //                 setValue('albumDetail', albumDetail);
    //                 setValue('familyDetail', familyDetail);
    //                 setValue('posterDetail', posterDetail);
    //                 setValue('canvasDetail', canvasDetail);
    //                 setValue('pvc', pvc);
    //                 setValue('box', box);
    //                 setValue('wood', wood);



    //     }
    // }, [PackageDetailsVal,isEdit])

    const onSubmit = async (data: any) => {

        if (isEdit) {
            const res = await dispatch(updatePackage({ id, data }));
            if (res.meta.requestStatus === 'fulfilled') {
                router.push('/dashboard/packages');
            }
        } else {
            const res = await dispatch(createPackage(data));
            if (res.meta.requestStatus === 'fulfilled') {
                router.push('/dashboard/packages');
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
                      {isEdit ? 'Paketi Düzenle' :  'Paket Oluştur'}
                    </Typography>

                    <Grid container spacing={1} component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ padding: 1 }}>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="packageName" name="packageName" placeholder="Paket Adı" label="Paket Adı" control={control} errors={errors} autoComplete="email" /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="packagePrice" name="packagePrice" placeholder="Paket Fiyatı" label="Paket Fiyatı" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="albumDetail" name="albumDetail" placeholder="Albüm Detay" label="Albüm Detay" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="familyDetail" name="familyDetail" placeholder="Aile Albüm Adet" label="Aile Albüm Adet" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="posterDetail" name="posterDetail" placeholder="Poster Detay" label="Poster Detay" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="canvasDetail" name="canvasDetail" placeholder="Kanvas Detay" label="Kanvas Detay" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="videoKlip" name="videoKlip" placeholder="Video Klip" label="Video Klip" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={3} sm={3} lg={3} sx={{ mt: 2 }} ><Checkbox name="isDrone" label={IsDroneVal === true ? 'Drone Dahil' : 'Drone Dahil Değil'} control={control} errors={errors}/></Grid>
                        <Grid item xs={12} md={3} sm={3} lg={3} sx={{ mt: 2 }} ><Checkbox name="isPlaceInc" label={IsPlaceIncludeVal === true ? 'Mekan Dahil' : 'Mekan Dahil Değil'} control={control} errors={errors}/></Grid>
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