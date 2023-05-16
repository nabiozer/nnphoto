import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Swiper } from "../lib";
import { RootState, useAppDispatch } from "../store";
import { getPhotosHome } from "../store/photo/photoActions";





const Home = () => {

  const dispatch = useAppDispatch();
  const photoListHome = useSelector((state: RootState) => state.photo.photoListHome.data?.Data)


  useEffect(() => {
    if (!photoListHome) {
      dispatch(getPhotosHome())
    }

  }, [dispatch]);


  return (
    <>

      <section id="home" >
        {photoListHome && <Swiper imageUrls={photoListHome} />}
      </section>
    </>
  )
}

export default Home