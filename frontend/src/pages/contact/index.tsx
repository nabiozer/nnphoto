import { Grid } from '@mui/material';
import ContactForm from '../../lib/components/App/Contact/ContactForm';
type Props = {}

const Contact = (props: Props) => {
    return (
        <Grid container  sx={{padding:'1rem'}}>
             <Grid
                xs={12}
                md={6}
                lg={6}
                xl={6}
                item
            >
                <ContactForm />
            </Grid>
        </Grid>
    )
}

export default Contact