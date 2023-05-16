import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box } from "../../lib";
import VideoGallery from "../../lib/components/Display/VideoGallery";
import { RootState, useAppDispatch } from "../../store";
import { getPhotosHome } from "../../store/photo/photoActions";




const WeddingVideos = () => {

    const dispatch = useAppDispatch()
    const photoListHome = useSelector((state: RootState) => state?.photo?.photoListHome?.data?.Data)

    useEffect(() => {
        if (!photoListHome) {
            dispatch(getPhotosHome());
        }
    }, [dispatch, photoListHome]);

    return (
        <Box component='section' id='gallery'>
            {photoListHome && <Box component='div' sx={{ height: '30vh !important' }}>
                <img src={photoListHome[1]?.imageURL!!} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
            </Box>}
            <Box component='h2' sx={{ textAlign: 'center', margin: '2rem', fontFamily: 'Courier New' }}>Video Klipler<hr></hr></Box>
            <Box component='section' id='videos' sx={{ boxShadow: '20px 20px 50px 15px #D3D3D3' }}>
                <VideoGallery />
            </Box>
        </Box>
    )
}

export default WeddingVideos