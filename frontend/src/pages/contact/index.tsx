import { Box, Grid } from '@mui/material'
import React from 'react'
import ContactForm from '../../lib/components/App/Contact/ContactForm'

type Props = {}

const Contact = (props: Props) => {
    return (
        <Grid container  sx={{padding:'1rem'}}>
            <Grid
                xs={12}
                md={6}
                lg={6}
                xl={12}
                item
            >
                <Box component='div' sx={{borderRadius:'1rem',overflow:'hidden'}}>
                    <img src="/images/nnphotofilm/1.jpg" alt="/images/nnphotofilm/1.jpg" className="src" style={{width: '100%', height: '60%'}}/>
                </Box>
            </Grid>
            <Grid
                xs={12}
                md={6}
                lg={6}
                xl={12}
                item
            >
                <ContactForm />
            </Grid>

        </Grid>
    )
}

export default Contact