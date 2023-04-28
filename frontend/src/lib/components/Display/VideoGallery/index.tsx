import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import PlayerYoutube from '../PlayerYoutube';
import { getPhotosVideo } from '../../../../store/photo/photoActions';
import { RootState, useAppDispatch } from '../../../../store';
import { useSelector } from 'react-redux';


const VideoGallery = () => {


    const dispatch = useAppDispatch()


    const photoListVideo = useSelector((state: RootState) => state?.photo?.photoListVideo?.data?.Data)

   
    useEffect(() => {
        if(!photoListVideo) {
            dispatch(getPhotosVideo());
        }

        console.log(photoListVideo,'xxx')
    
      }, [dispatch,photoListVideo]);

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

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
        slideNumber === 0 && photoListVideo
            ? setSlideNumber(photoListVideo.length - 1)
            : setSlideNumber(slideNumber - 1)
    }

    // Next Image  
    const nextSlide = () => {
        slideNumber + 1 === photoListVideo?.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1)
    }

    return (
        <div> 
            {openModal && photoListVideo &&
                <div className='sliderWrap'>
                    <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal} />
                    <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
                    <div className='fullScreenImage'>
                        <PlayerYoutube selectedVideo={photoListVideo[slideNumber]?.src}/>
                    </div>
                </div>
            }

            {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {photoListVideo.length}
      <br /><br /> */}

            <div className='img-grid'>
                {
                    photoListVideo && photoListVideo.map((slide: any, index: any) => {
                        if(slide.imageURL) { return (
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

                        )} else {
                            return null
                        }
                       
                    })
                }
            </div>

        </div>
    )
}

export default VideoGallery;