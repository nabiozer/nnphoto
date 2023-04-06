import { Box, Card, CardContent, CardHeader, Divider, Grid } from "@mui/material";
import PlayerYoutube from "../../../../Display/PlayerYoutube";

const PhotoDetails = ({ details }: any) => {


    return (

        <Card sx={{ width: '100%' }} >
            <CardHeader
                title="Detaylar"
            />
            <CardContent sx={{ pt: 2 }}>

                <Grid
                    container
                    spacing={1}

                >

                    <Grid
                        xs={12}
                        sm={12}
                        lg={6}
                        md={6}
                        item
                        sx={{ justify: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}
                    >

                        <Box
                            component="img"
                            sx={{


                                width: '100%',
                                maxHeight: '400px',

                                objectFit: 'cover'
                            }}
                            alt={details?.description}
                            src={details?.image}
                        />

                    </Grid>
                    <Grid
                        xs={12}
                        sm={12}
                        lg={6}
                        md={6}
                        item
                        sx={{ justify: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}
                    >

                        <Box
                            component="div"
                            sx={{ justify: 'center', textAlign: 'center', alignItems: 'center', width: '100%', maxHeight: '400px !important', }}

                        > <PlayerYoutube style={{ height: '400px !important' }} selectedVideo={details.src} /></Box>



                    </Grid>


                </Grid>

            </CardContent>
            <Divider />

        </Card>






    )
}

export default PhotoDetails