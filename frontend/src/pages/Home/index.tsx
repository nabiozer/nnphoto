import { Swiper } from "../../lib";




const Home = () => {

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
 
  return (
    <>
      <Swiper imageUrls={images} /> 
    </>
  )
}

export default Home