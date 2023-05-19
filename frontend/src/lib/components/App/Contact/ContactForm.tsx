
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../../store';
import useForm from '../../../_hooks/useForm';
import Input from '../../Form/Input';
import { createMessage } from '../../../../store/message/messageActions';


export default function Contact({ type, id }: any) {
    const dispatch = useAppDispatch();
    const isEdit = id ? true : false;
    const router = useRouter();



  
    const defaultValues = {
        email: '',
        message: '',
        name: '',
        phone: '',


    }
    const { control, errors, handleSubmit } = useForm({
        defaultValues: defaultValues,
        validationSchema: {}
    })

  

    const onSubmit = async (data: any) => {
        const res = await dispatch(createMessage(data));
        if (res.meta.requestStatus === 'fulfilled') {
            router.push('/');
        }
}

    return (

        <Container component="main" sx={{
            height: '100vh', width: '100%', display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', maxWidth: '600px !important',
          
        }}>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 1,
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
                    İletişim
                </Typography>

                <Grid container spacing={1} component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ padding: 1 }}>
                    <Grid item xs={12} md={12} sm={12} lg={12} sx={{ mt: 2 }} ><Input id="name" name="name" placeholder="İsim Soyisim" label="İsim Soyisim" control={control} errors={errors} /></Grid>
                    <Grid item xs={12} md={12} sm={12} lg={12} sx={{ mt: 2 }} ><Input id="email" name="email" placeholder="Mail" label="Mail" control={control} errors={errors} /></Grid>
                    <Grid item xs={12} md={12} sm={12} lg={12} sx={{ mt: 2 }} ><Input id="phone" name="phone" placeholder="Telefon" label="Telefon" control={control} errors={errors} /></Grid>
                    <Grid item xs={12} md={12} sm={12} lg={12} sx={{ mt: 2 }} ><Input multiline
                        maxRows={4} id="message" name="message" placeholder="Mesaj" label="Mesaj" control={control} errors={errors} /></Grid>
                    <Grid item xs={12} md={12} sm={12} lg={12} sx={{ mt: 2 }} >
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Bizimle İletişime Geç!
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        
        </Container>

    );
}