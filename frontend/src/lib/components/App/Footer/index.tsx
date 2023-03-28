import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import { WhatsApp } from '@mui/icons-material';

type Props = {};

export default (props: Props) => {
    return (
        <Box component="div" sx={{ p: 3 }}>
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
                            href="https://api.whatsapp.com/send/?phone=905421132503&text&app_absent=0"
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
                    <div className="footer-list">
                        <p>Docs</p>
                        <p>Privacy</p>
                        <p>Popcy</p>
                        <p>Terms of services</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={12} md={4}></Grid>
            </Grid>
            <hr></hr>
            <Box component="div">
                <p>© STW 2022. Powered by Avalanche.</p>
            </Box>
        </Box>
    );
};
