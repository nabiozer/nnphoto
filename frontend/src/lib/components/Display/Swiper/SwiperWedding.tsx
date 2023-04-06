import { Box } from '@mui/material';
import { useRef } from 'react';
import SwiperCore, { A11y, Autoplay, EffectCreative, EffectFade, Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

interface IProps {
    images: any;   
    className?: any;
}
//eslint-disable-next-line 
export default (props: IProps) => {
    const { images } = props;

    
    return (
        <div className="swiper-container_wedding">
            <div className="container-box">
                <div className="small-container">
                    <>
                        <Box component="div" >

                            <Swiper
                             speed= {500}
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
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}

                                
                                modules={[Navigation, Mousewheel,EffectCreative]}
                               
                            >
                                {images.map((item:any, i:number) => (
                                    <SwiperSlide style={{ marginRight: '30px' }} key={i}>
                                        <div className='swiper-image-container-wedding'>
                                            <img alt={item.description} src={item.image} className="swiper-image-wedding" ></img>
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
