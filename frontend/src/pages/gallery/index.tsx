import { Box } from "../../lib";
import PhotoGallery from "../../lib/components/Display/PhotoGallery";
import SwiperWedding from "../../lib/components/Display/Swiper/SwiperWedding";
import VideoGallery from "../../lib/components/Display/VideoGallery";




const Wedding = () => {

   
    return (
        <Box component='section' id='gallery'>
            <SwiperWedding />
            <Box component='h2' sx={{ textAlign: 'center', margin: '2rem' }}>Çekimlerimiz<hr></hr></Box>

            <div className="title">
                <p>-Fotoğraflar </p>
            </div>
            <Box component='section' id='photos' sx={{ boxShadow: '20px 20px 50px 15px #D3D3D3' }}>
                <PhotoGallery />
            </Box>



            <div className="title">
                <p>-Video Klipler </p>
            </div>

            <Box component='section' id='videos' sx={{ boxShadow: '20px 20px 50px 15px #D3D3D3' }}>
                <VideoGallery />
            </Box>



        </Box>
    )
}

export default Wedding