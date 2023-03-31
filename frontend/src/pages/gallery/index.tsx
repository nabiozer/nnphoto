import { useState } from "react";
import { Box, Tabs } from "../../lib";
import PhotoGallery from "../../lib/components/Display/PhotoGallery";
import SwiperWedding from "../../lib/components/Display/Swiper/SwiperWedding";
import VideoGallery from "../../lib/components/Display/VideoGallery";




const Wedding = () => {

    const [tabIndex, setTabIndex] = useState<number>(0);

    const images = [
        '/images/nnphotofilm/1.jpg',
        '/images/nnphotofilm/2.jpg',
        '/images/nnphotofilm/3.jpg',
        '/images/nnphotofilm/4.jpg',
        '/images/nnphotofilm/NN_01880.jpg',
        '/images/nnphotofilm/NN_01883.jpg',
        '/images/nnphotofilm/NN_01880.jpg',
        '/images/nnphotofilm/NN_01883.jpg',
    ];

    const images2 = [
        { img: '/images/nnphotofilm/1.jpg' },
        { img: '/images/nnphotofilm/2.jpg' }, { img: '/images/nnphotofilm/3.jpg' }, { img: '/images/nnphotofilm/4.jpg' },
        { img: '/images/nnphotofilm/5.jpg' },
        { img: '/images/nnphotofilm/6.jpg' },
    ];

    const videos = [
        { src: 'https://www.youtube.com/watch?v=J1dg4WXr3cg', img: '/images/nnphotofilm/1.jpg' },
        { src: 'https://www.youtube.com/watch?v=E2CWxv5hOso', img: '/images/nnphotofilm/2.jpg' },
        { src: 'https://www.youtube.com/watch?v=J1dg4WXr3cg', img: '/images/nnphotofilm/3.jpg' },
        { src: 'https://www.youtube.com/watch?v=J1dg4WXr3cg', img: '/images/nnphotofilm/3.jpg' },
        { src: 'https://www.youtube.com/watch?v=J1dg4WXr3cg', img: '/images/nnphotofilm/3.jpg' },
        { src: 'https://www.youtube.com/watch?v=J1dg4WXr3cg', img: '/images/nnphotofilm/3.jpg' },
    ];

    return (
        <Box component='section' id='gallery'>
            <SwiperWedding imageUrls={images} />
            <Box component='h2' sx={{ textAlign: 'center', margin: '2rem' }}>Çekimlerimiz<hr></hr></Box>
            <div className="title">
                <p>-Fotoğraflar </p>
            </div>
            <Box component='section' id='photos' sx={{ boxShadow: '20px 20px 50px 15px #D3D3D3' }}>
                <PhotoGallery
                    galleryImages={images2} /></Box>
            <div className="title">
                <p>-Video Klipler </p>
            </div>
            <Box component='section' id='videos' sx={{ boxShadow: '20px 20px 50px 15px #D3D3D3' }}>
                <VideoGallery galleryImages={videos} />
            </Box>


        </Box>
    )
}

export default Wedding