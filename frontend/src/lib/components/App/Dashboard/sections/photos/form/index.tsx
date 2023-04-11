
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Input as MuiInput } from '@mui/material';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../../../../store';
import { createPhoto, getPhotoById, updatePhoto } from '../../../../../../../store/photo/photoActions';
import { PhotoProperty } from '../../../../../../../types/photo';
import useForm from '../../../../../../_hooks/useForm';
import Input from '../../../../../Form/Input';
import Select from '../../../../../Form/Select';
import { Layout as DashboardLayout } from '../../../layouts/dashboard/layout';
import PhotoDetails from '../photos-detail';


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


export default function PhotoForm({ type, id }: any) {


    const dispatch = useAppDispatch();
    const photoDetails = useSelector((state: RootState) => state.photo.photoDetails.data)
    const isEdit = id ? true : false;
    const router = useRouter();
    
    const defaulValues = {
        property: '',
        image: '',
        description: '',
        src: '',
    }

    const { control, errors, handleSubmit, setValue } = useForm({
        defaultValues: defaulValues,
        validationSchema: {


        }
    })


    const fileUpload = async (event:any) => {
        const file = event.target.files[0]
        const formData = new FormData();

        formData.append("file", file);
      

    const result = await axios.put("http://localhost:5000/api/photoupdate/photos/" + id, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        if(result.status === 200) {
           console.log(result)
            setValue('image', String(result.data))
          
        }
    }

    useEffect(() => {
        if (isEdit) {
            const getPhoto = async () => {
                const res = await dispatch(getPhotoById(id))
                if (res.meta.requestStatus === 'fulfilled') {
                    const { property, image, description, src, colorCodes } = res?.payload
                    setValue('property', property);                   
                    setValue('image', image)
                    setValue('description', description);
                    setValue('src', src);
                }
            }
            getPhoto()
        }

    }, [isEdit])

    const onSubmit = async (data: any) => {
       
        if (isEdit) {
            const res = await dispatch(updatePhoto({ id, data }));
            if (res.meta.requestStatus === 'fulfilled') {
                router.push('/dashboard/photos');
            }
        } else {
            const res = await dispatch(createPhoto(data));
            if (res.meta.requestStatus === 'fulfilled') {
                router.push('/dashboard/photos');
            }
        }
    }

    return (
        <DashboardLayout >
            <Container component="main" sx={{
                height: '100%', width: '100%', display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', maxWidth: '4000px !important',
                padding: '0.5rem'
            }}>
                <CssBaseline />
                {photoDetails && isEdit && <Box sx={{
                    width: '100%',

                }}><PhotoDetails details={photoDetails} /></Box>}
                <Box
                    sx={{
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minWidth: '300px',
                        width: '100%',
                        maxWidth: '100%',
                        height: '100%',
                    }}
                >
                    <Grid container spacing={1} component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1, padding: '2rem' }}>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Select options={{ data: [{ Value: 'Ana Sayfa', Id: PhotoProperty.Home }, { Value: 'Galeri', Id: PhotoProperty.Gallery }, { Value: 'Video', Id: PhotoProperty.Video }], displayField: 'Value', displayValue: 'Id' }} id="property" name="property" label="Tip" control={control} errors={errors} setValue={setValue} defaultValue={defaulValues.property} fullWidth /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="description" name="description" placeholder="Açıklama" label="Açıklama" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Input id="src" name="src" placeholder="Video Link" label="Video Link" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} > <Box sx={{display:'flex',flexDirection:'row'}}><MuiInput type="file" id="image-file" onChange={fileUpload} /><Input id="image" name="image" placeholder="Açıklama" label="Image" control={control} errors={errors} /></Box></Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} >
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Kaydet
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </DashboardLayout>
    );
}