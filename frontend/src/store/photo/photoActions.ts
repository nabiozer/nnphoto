
import axios from 'axios';
import store from '../index';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
const api = axios.create({
    baseURL: 'http://localhost:5000/api'
  });
  
  api.interceptors.request.use((config) => {
    const token  = store?.getState()?.user?.userLogin?.data?.token;
   
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
  );

  api.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            // Handle success message
            toast.success('Request successful');
            console.log('response',response)
          }
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        // Handle unauthorized error
      } else if (error.response.status === 500) {
        // Handle server error
      } else {
        toast.error(error.message);
      }
      return Promise.reject(error);
    }
  );


  //get photo list

export const getPhotosPagination = createAsyncThunk('data/getPhotosPagination', async (params?:any) => {
    const response = await api.get(`/photos?${params}`);
    return response.data;
});

export const getPhotosHome = createAsyncThunk('data/getPhotosHome', async () => {
  const response = await api.get('/photos/home');
  return response.data;
});
export const getPhotosGallery = createAsyncThunk('data/getPhotosGallery', async () => {
  const response = await api.get('/photos/gallery');
  return response.data;
});
export const getPhotosVideo = createAsyncThunk('data/getPhotosVideo', async () => {
  const response = await api.get('/photos/video');
  return response.data;
});
export const getPhotosAlbum = createAsyncThunk('data/getPhotosAlbum', async () => {
  const response = await api.get('/photos/album');
  return response.data;
});

export const createPhoto = createAsyncThunk('data/createPhoto', async (data?:any) => {
  const response = await api.post('/photos',data);
  return response.data;
});

// Delete photo
export const deletePhoto = createAsyncThunk('data/deletePhotos', async (id?:any) => {
  const response = await api.delete(`/photos/${id}`);
  return response.data;
});


//Getphoto -> photo for admin

export const getPhotoById = createAsyncThunk('data/getPhotoById', async (id?:any) => {

  const response = await api.get(`/photos${id || ''}`);
  return response.data;

});

//update photo by admin

export const updatePhoto = createAsyncThunk('data/updatePhoto', async ({id,data}:any) => {
   
  const response = await api.put(`/photos/${id}`,data);
  return response.data;
});





// get photo from backend
// export const getPhotos = (data: any) => async (dispatch: any) => {
//     try {
//         // const {data} = await axios.get('/api/photos')
//         dispatch(photoActions.photoList(data));
//     } catch (error: any) {
//         console.log(error.response && error.response.data.message ? error.response.data.message : error.message);
//     }
// };

// // get photo By id

// export const getPhotoById = (data: any) => async (dispatch: any) => {
//     try {
//         // const {data} = await axios.get(`/api/photos/${id}`)
//         dispatch(photoActions.photoDetails(data));
//     } catch (error: any) {
//         console.log(error);
//     }
// };

// export const deletePhoto = (id:any) => async (dispatch:any,getState:any) => {

//     try {
//         dispatch(photoActions.photoDeleteRequest())
//         const {userLogin:{userInfo}} = getState().user
//         const config = {
//             headers:{

//                 Authorization: `Bearer ${userInfo.token}`

//             }
//         }
//         await axios.delete(`/api/photos/${id}`,config)
//         dispatch(photoActions.photoDeleteSuccess())

//     } catch (error:any) {
//         dispatch(photoActions.photoDeleteError( error.response && error.response.data.message ? error.response.data.message
//             : error.message))
//     }
// }

// export const createPhoto = (id:any) => async (dispatch:any,getState:any) => {

//     try {
//         dispatch(photoActions.photoCreateRequest())
//         const {userLogin:{userInfo}} = getState().user
//         const config = {
//             headers:{

//                 Authorization: `Bearer ${userInfo.token}`

//             }
//         }
//         const {data} = await axios.post(`/api/photos`,{},config)
//         dispatch(photoActions.photoCreateSuccess(data))

//     } catch (error:any) {
//         dispatch(photoActions.photoCreateError( error.response && error.response.data.message ? error.response.data.message
//             : error.message))
//     }
// }

// export const updatePhoto = (photo:any) => async (dispatch:any,getState:any) => {

//     try {
//         dispatch(photoActions.photoUpdateRequest())
//         const {userLogin:{userInfo}} = getState().user
//         const config = {
//             headers:{
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${userInfo.token}`

//             }
//         }
//         const {data} = await axios.put(`/api/photos/${photo._id}`, photo ,config)
//         dispatch(photoActions.photoUpdateSuccess(data))

//     } catch (error:any) {
//         dispatch(photoActions.updatePhotoError( error.response && error.response.data.message ? error.response.data.message
//             : error.message))
//     }
// }
