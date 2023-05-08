
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
import { createExpense, getExpenseById, updateExpense } from '../../../../../../../store/expense/expenseActions';
import useForm from '../../../../../../_hooks/useForm';
import useWatch from '../../../../../../_hooks/useWatch';
import DatePicker from '../../../../../Form/DatePicker';
import Input from '../../../../../Form/Input';
import { Layout as DashboardLayout } from '../../../layouts/dashboard/layout';


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
        fee: '',
        date: null,
        description: '',


    }
    const { control, errors, handleSubmit, setValue } = useForm({
        defaultValues: defaultValues,
        validationSchema: {}
    })

    useEffect(() => {
        if (isEdit) {
            const getExpenseDetails = async () => {
                const res = await dispatch(getExpenseById(id))
                if (res.meta.requestStatus === 'fulfilled') {
                    const { fee, date, description } = res?.payload
                    setValue('fee', fee);
                    setValue('date', date);
                    setValue('description', description);
                }
            }
            getExpenseDetails()

        }
    }, [isEdit])

    const onSubmit = async (data: any) => {

        if (isEdit) {
            const res = await dispatch(updateExpense({ id, data }));
            if (res.meta.requestStatus === 'fulfilled') {
                router.push('/dashboard/expenses');
            }
        } else {
            const res = await dispatch(createExpense(data));
            if (res.meta.requestStatus === 'fulfilled') {
                router.push('/dashboard/expenses');
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
                        {isEdit ? 'Harcama Düzenle' : 'Harcama Ekle'}
                    </Typography>

                    <Grid container spacing={1} component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ padding: 1 }}>
                        <Grid item xs={12} md={4} sm={4} lg={4} sx={{ mt: 2 }} ><Input id="fee" name="fee" placeholder="Harcama Tutarı" label="Harcama Tutarı" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={4} sm={4} lg={4} sx={{ mt: 2 }}> <DatePicker id="date" name="date" label="Harcama Tarihi" disablePast control={control} errors={errors} unixTime fullWidth sx={{ width: '100% ' }} /></Grid>
                        <Grid item xs={12} md={4} sm={4} lg={4} sx={{ mt: 2 }} ><Input id="description" name="description" placeholder="Açıklama" label="Açıklama" control={control} errors={errors} /></Grid>
                        <Grid item xs={12} md={12} sm={12} lg={12} sx={{ mt: 2 }} >
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Harcama Ekle
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </DashboardLayout>
    );
}