import { createSlice } from '@reduxjs/toolkit';
import { createPhoto, deletePhoto, getPhotoById, getPhotos, updatePhoto } from './photoActions';

interface IPhoto {
    image: string;
    property: string;
    description: string;
    src: string;
    packageName?: string;
    packagePrice?: string;
    imageURL?: string;
    colorCodes:[]
}
interface IState {
  data : IPhoto | IPhoto[] | null,
  loading:boolean,
  error:string,
}
interface IStates {
  data : IPhoto[],
  loading:boolean,
  error:string,
}
interface IPhotoInitial {
  photoList :IStates,
  photoUpdate:IState,
  photoDelete:IState,
  photoCreate:IState,
  photoDetails:IState,
}
const initialState:IPhotoInitial = {
    photoList: {
        data: null || [],
        loading: false,
        error: '',
    },
    photoUpdate: {
        data: null,
        loading: false,
        error: '',
    },
    photoDelete: {
        data: null,
        loading: false,
        error: '',
    },
    photoCreate: {
        data: null,
        loading: false,
        error: '',
    },
    photoDetails: {
        data: null,
        loading: false,
        error: '',
    },
};
const photoSlice = createSlice({
    name: 'photo',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPhotos.pending, (state: any) => {
                state.photoList.loading = true;
                state.photoList.error = '';
            })
            .addCase(getPhotos.fulfilled, (state: any, action: any) => {
                state.photoList.data = action.payload;
                state.photoList.loading = false;
                state.photoList.error = '';
            })
            .addCase(getPhotos.rejected, (state: any, action: any) => {
                state.photoList.loading = false;
                state.photoList.error = action.error.message || '';
            })
            .addCase(getPhotoById.pending, (state: any) => {
                state.photoDetails.loading = true;
                state.photoDetails.error = '';
            })
            .addCase(getPhotoById.fulfilled, (state: any, action: any) => {
                state.photoDetails.data = action.payload;
                state.photoDetails.loading = false;
                state.photoDetails.error = '';
            })
            .addCase(getPhotoById.rejected, (state: any, action: any) => {
                state.photoDetails.loading = false;
                state.photoDetails.error = action.error.message || '';
            })
            .addCase(createPhoto.pending, (state: any) => {
                state.photoCreate.loading = true;
                state.photoCreate.error = '';
            })
            .addCase(createPhoto.fulfilled, (state: any, action: any) => {
                state.photoCreate.data = action.payload;
                state.photoCreate.loading = false;
                state.photoCreate.error = '';
            })
            .addCase(createPhoto.rejected, (state: any, action: any) => {
                state.photoCreate.loading = false;
                state.photoCreate.error = action.error.message || '';
            })
            .addCase(deletePhoto.pending, (state: any) => {
                state.photoDelete.loading = true;
                state.photoDelete.error = '';
            })
            .addCase(deletePhoto.fulfilled, (state: any, action: any) => {
                state.photoDelete.data = action.payload;
                state.photoDelete.loading = false;
                state.photoDelete.error = '';
            })
            .addCase(deletePhoto.rejected, (state: any, action: any) => {
                state.photoDelete.loading = false;
                state.photoDelete.error = action.error.message || '';
            })
            .addCase(updatePhoto.pending, (state: any) => {
                state.photoUpdate.loading = true;
                state.photoUpdate.error = '';
            })
            .addCase(updatePhoto.fulfilled, (state: any, action: any) => {
                state.photoUpdate.data = action.payload;
                state.photoUpdate.loading = false;
                state.photoUpdate.error = '';
            })
            .addCase(updatePhoto.rejected, (state: any, action: any) => {
                state.photoUpdate.loading = false;
                state.photoUpdate.error = action.error.message || '';
            });
    },
    // create photo
});

export const photoActions = photoSlice.actions;

export default photoSlice;
