import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper } from "../lib";
import { RootState, useAppDispatch } from "../store";
import { getPhotos } from "../store/photo/photoActions";




const Home = () => {

  const dispatch = useAppDispatch();
 const photoList = useSelector((state:RootState) => state.photo.photoList.data)
 
 console.log(photoList?.length!!);
  useEffect(() => {
   dispatch(getPhotos());
  }, [dispatch]);

console.log(photoList?.filter((photo:any) => photo.property === 'home'))
  return (
    <>
    <section id="home" >
      {photoList && <Swiper imageUrls={photoList?.filter((photo:any) => photo.property === 'home')} />}
    </section>
    </>
  )
}

export default Home