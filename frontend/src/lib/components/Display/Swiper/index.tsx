import { Box } from '@mui/material';
import { useRef } from 'react';
import SwiperCore, { A11y, Autoplay, EffectCreative, EffectFade, Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

interface IProps {
    imageUrls: any[];   
    className?: any;
}
//eslint-disable-next-line 
export default (props: IProps) => {
    const { imageUrls } = props;

    
    return (
        <div className="swiper-container">
            <div className="container-box">
                <div className="small-container">
                    <>
                        <Box component="div">

                            <Swiper
                             speed= {1000}
                             effect={"creative"}
                             creativeEffect={{
                               prev: {
                                 shadow: true,
                                 translate: [0, 0, -400],
                               },
                               next: {
                                translate: ["100%", 0, 0],
                                 shadow:true
                               },
                             }}
                                slidesPerView={1}
                                spaceBetween={40}
                                navigation={true}
                                grabCursor={true}
                                mousewheel={true}
                          
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}

                                
                                modules={[Navigation, Mousewheel,EffectCreative]}
                               
                            >
                                {imageUrls.map((item, i) => (
                                    <SwiperSlide style={{ marginRight: '30px' }} key={i}>
                                        <div className='swiper-image-container'>
                                            <img alt={item} src={item.image} className="swiper-image" ></img>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    </>
                </div>
            </div>
        </div>
    );
};
