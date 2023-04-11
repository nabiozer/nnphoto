import { Box, Card, CardContent, CardHeader, Divider, Grid } from "@mui/material";
import PlayerYoutube from "../../../../Display/PlayerYoutube";

const PhotoDetails = ({ details }: any) => {


    return (

        <Card sx={{ width: '100%', height: '100%' }} >
            <CardHeader
                title="Detaylar"
            />
            <CardContent sx={{ padding: 0 }}>
                <Grid
                    container
                    spacing={1}
                >

                    <Grid
                        xs={12}
                        sm={12}
                        lg={details.src ? 6 : 12}
                        md={details.src ? 6 : 12}
                        item
                        sx={{ justify: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}
                    >

                        {details?.imageURL && <Box
                            component="img"
                            sx={{


                                width: '100%',
                                maxHeight: '500px',

                                objectFit: 'cover'
                            }}
                            alt={details?.description}
                            src={details?.imageURL}

                        />}

                    </Grid>
                    {details.src && <Grid
                        xs={12}
                        sm={12}
                        lg={6}
                        md={6}
                        item
                        sx={{ justify: 'center', textAlign: 'center', alignItems: 'center', width: '100%' }}
                    >

                        <Box
                            component="div"
                            sx={{ justify: 'center', textAlign: 'center', alignItems: 'center', width: '100%', maxHeight: '500px !important', display: 'block' }}

                        > <PlayerYoutube selectedVideo={details.src} /></Box>



                    </Grid>}


                </Grid>

            </CardContent>
            <Divider />

        </Card>






    )
}

export default PhotoDetails