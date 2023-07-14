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
            <Box component='section' id='videos' sx={{ boxShadow: '20px 20px 50px 15px #D3D3D3' }}>
                <VideoGallery />
            </Box>
        </Box>
    )
}

export default WeddingVideos