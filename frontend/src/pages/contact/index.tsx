import { Grid } from '@mui/material';
import ContactForm from '../../lib/components/App/Contact/ContactForm';
import { useRouter } from 'next/router';


import { createMessage } from '../../store/message/messageActions';
import { useAppDispatch } from '../../store';
type Props = {}

const Contact = (props: Props) => {


    const dispatch = useAppDispatch()
    const router = useRouter();


    const onSubmit = async (data: any) => {

       
            const res = await dispatch(createMessage(data));
            if (res.meta.requestStatus === 'fulfilled') {
                router.push('/dashboard/expenses');
            }
        

    }

    return (
        <Grid container  sx={{padding:'1rem',justifyContent: 'center',alignItems: 'center'}}>
             <Grid
                xs={12}
                md={12}
                lg={12}
                xl={12}
                item
            >
                <ContactForm />
            </Grid>
        </Grid>
    )
}

export default Contact