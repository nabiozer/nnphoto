import { photoActions } from './photoSlice';
import axios from 'axios';

// get photo from backend
export const getPhotos = (data: any) => async (dispatch: any) => {
    try {
        // const {data} = await axios.get('/api/photos')
        dispatch(photoActions.photoList(data));
    } catch (error: any) {
        console.log(error.response && error.response.data.message ? error.response.data.message : error.message);
    }
};

// get photo By id

export const getPhotoById = (data: any) => async (dispatch: any) => {
    try {
        // const {data} = await axios.get(`/api/photos/${id}`)
        dispatch(photoActions.photoDetails(data));
    } catch (error: any) {
        console.log(error);
    }
};

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
