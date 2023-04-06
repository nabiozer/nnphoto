import { useSelector } from "react-redux";
import { Box } from "../../lib";
import PhotoGallery from "../../lib/components/Display/PhotoGallery";
import SwiperWedding from "../../lib/components/Display/Swiper/SwiperWedding";
import VideoGallery from "../../lib/components/Display/VideoGallery";
import { RootState } from "../../store";
import { PhotoProperty } from "../../types/photo";




const Wedding = () => {


    const photoList = useSelector((state: RootState) => state.photo.photoList.data)

    const banners = photoList?.filter((photo) => photo.property === PhotoProperty.Home)
    const videos = photoList?.filter((photo) => photo.property === PhotoProperty.Video)
    const galleries = photoList?.filter((photo) => photo.property === PhotoProperty.Gallery)

    return (
        <Box component='section' id='gallery'>
            {banners && <SwiperWedding images={banners} />}
            <Box component='h2' sx={{ textAlign: 'center', margin: '2rem' }}>Çekimlerimiz<hr></hr></Box>
            {<>
                <div className="title">
                    <p>-Fotoğraflar </p>
                </div>
                <Box component='section' id='photos' sx={{ boxShadow: '20px 20px 50px 15px #D3D3D3' }}>
                    <PhotoGallery galleryImages={galleries} />
                </Box>
            </>}
            {videos &&
                <>
                    <div className="title">
                        <p>-Video Klipler </p>
                    </div>

                    <Box component='section' id='videos' sx={{ boxShadow: '20px 20px 50px 15px #D3D3D3' }}>
                        <VideoGallery galleryImages={videos} />
                    </Box>
                </>}


        </Box>
    )
}

export default Wedding