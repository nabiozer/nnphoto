import { useEffect } from "react";
import { Box } from "../../lib";
import PhotoGallery from "../../lib/components/Display/PhotoGallery";
import { RootState, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { getPhotosHome } from "../../store/photo/photoActions";




const Wedding = () => {
    const dispatch = useAppDispatch()
    const photoListHome = useSelector((state: RootState) => state?.photo?.photoListHome?.data?.Data)

    useEffect(() => {
        if (!photoListHome) {
            dispatch(getPhotosHome());
        }
    }, [dispatch, photoListHome?.length]);

    return (
        <Box component='section' id='gallery' sx={{ fontFamily: 'Courier New', }}>
            <Box component='section' id='photos' sx={{ boxShadow: '20px 20px 50px 15px #D3D3D3' }}>
                <PhotoGallery />
            </Box>
        </Box>
    )
}

export default Wedding