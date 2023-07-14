import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import { RootState, useAppDispatch } from '../../../../store';
import { useSelector } from 'react-redux';
import { getPhotosGallery } from '../../../../store/photo/photoActions';
import { Grid } from '@mui/material';


const PhotoGallery = () => {


    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)


    const dispatch = useAppDispatch()


    const photoListGallery = useSelector((state: RootState) => state?.photo?.photoListGallery?.data?.Data)


    useEffect(() => {
        if (!photoListGallery) {
            dispatch(getPhotosGallery());
        }

    }, [dispatch, photoListGallery]);


    const handleOpenModal = (index: any) => {
        setSlideNumber(index)
        setOpenModal(true)
    }
    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // Previous Image
    const prevSlide = () => {
        photoListGallery &&
            slideNumber === 0
            ? setSlideNumber(photoListGallery?.length - 1)
            : setSlideNumber(slideNumber - 1)
    }

    // Next Image  
    const nextSlide = () => {
        slideNumber + 1 === photoListGallery?.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1)
    }

    return (
        <div>
            {openModal && photoListGallery &&
                <div className='sliderWrap'>
                    <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal} />
                    <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
                    <div className='fullScreenImage'>
                        <img src={photoListGallery[slideNumber].imageURL} alt='' />
                    </div>
                </div>
            }

            {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {photoListGallery.length}
      <br /><br /> */}

            <Grid container spacing={1} component="div" sx={{ p: 2 }}>
                {
                    photoListGallery && photoListGallery.map((slide: any, index: any) => {
                        return (
                            <Grid item xs={12} md={6} sm={6} lg={3}  >
                                <motion.div className="img-wrap" key={index}
                                    layout
                                    whileHover={{ opacity: 1 }}
                                    onClick={() => handleOpenModal(index)}
                                >
                                    <motion.img src={slide.imageURL} alt="uploaded pic"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                    />
                                </motion.div>
                            </Grid>

                        )
                    })
                }
            </Grid>

        </div>
    )
}

export default PhotoGallery;