import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import { WhatsApp } from '@mui/icons-material';
import Link from 'next/link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

type Props = {};

export default (props: Props) => {


    function Copyright(props: any) {
        return (
            <>
                <Typography variant="body2" color="text.secondary" align="center" {...props}>
                    {'Copyright © '}
                    <Link href="/" className="footer-link">
                        NNPHOTOFILM
                    </Link>{' '}
                    {new Date().getFullYear()}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" {...props}>
                    Tüm hakları saklıdır.
                </Typography>
            </>
        );
    }
    return (
        <Box component="div" sx={{ p: 3 ,display: 'block' }}>
            <hr></hr>
            <Grid container className="custom-grid" sx={{ maxWidth: '1000px' }}>
                <Grid item xs={12} md={6} sm={6}>
                    <Box component="div" sx={{ justifyContent: 'center', alignItems: 'center' }} className="footer-logo">
                        <img
                            src="/images/nnlogo.jpg"
                            style={{
                                width: '35px',
                                height: '35px',
                            }}></img>
                        <p>NNPHOTOFILM</p>
                    </Box>
                    <Box component="div" className="footer-socials">
                        <a
                              href="https://www.instagram.com/nnphotofilm/"
                            target="_blank"
                            rel="noopener">
                            <InstagramIcon />
                        </a>
                        <a
                            href="https://api.whatsapp.com/send/?phone=905421132503&text&app_absent=0"
                            target="_blank"
                            rel="noopener">
                            <WhatsApp />
                        </a>
                        {/* <a
                            href="https://api.whatsapp.com/send/?phone=905421132503&text&app_absent=0"
                            target="_blank"
                            rel="noopener">
                            <i className="fa-brands fa-medium"></i>
                        </a>
                        <a
                            href="https://api.whatsapp.com/send/?phone=905421132503&text&app_absent=0"
                            target="_blank"
                            rel="noopener">
                            <i className="fa-brands fa-youtube"></i>
                        </a> */}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sm={6} sx={{ textAlign: 'center', marginTop: '1rem' }}>
                    <Box component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
                        <a href="tel:+90-542-113-25-03" className='footer-flex'>
                            <LocalPhoneIcon /> 
                            <p>0542 113 2503</p> </a>
                        <a href="mailto:nnphotofilm@gmail.com" className='footer-flex'><EmailIcon /> <p>nnphotofilm@gmail.com</p></a>
                        <p>KVKK Aydınlatma Metni</p>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={12} md={4}></Grid>
            </Grid>
            <hr></hr>
            <Copyright sx={{ mt: 1, mb: 1 }} />
        </Box>
    );
};
