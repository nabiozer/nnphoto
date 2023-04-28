import { createSlice } from '@reduxjs/toolkit';
import { createPhoto, deletePhoto, getPhotoById, getPhotosAlbum, getPhotosGallery, getPhotosHome, getPhotosPagination, getPhotosVideo, updatePhoto } from './photoActions';

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

interface ICommon {
    PageNumber: number;
    PageSize: number;
    TotalCount:number,
    TotalPages: number
}

interface  IData extends ICommon {
    Data:IPhoto[];

}
interface IState {
  data : IPhoto  | null,
  loading:boolean,
  error:string,
}
interface IStates {
  data : IData | null,
  loading:boolean,
  error:string,
}
interface IPhotoInitial {
  photoList :IStates,
  photoListHome:IStates,
  photoListAlbum:IStates,
  photoListGallery:IStates,
  photoListVideo:IStates,
  photoListPagination :IStates,
  photoUpdate:IState,
  photoDelete:IState,
  photoCreate:IState,
  photoDetails:IState,
}
const initialState:IPhotoInitial = {
    photoList: {
        data: null ,
        loading: false,
        error: '',
    },
    photoListHome: {
        data: null ,
        loading: false,
        error: '',
    },
    photoListAlbum: {
        data: null ,
        loading: false,
        error: '',
    },
    photoListGallery: {
        data: null ,
        loading: false,
        error: '',
    },
    photoListVideo: {
        data: null ,
        loading: false,
        error: '',
    },
    photoListPagination: {
        data: null ,
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
            .addCase(getPhotosHome.pending, (state: any) => {
                state.photoListHome.loading = true;
                state.photoListHome.error = '';
            })
            .addCase(getPhotosHome.fulfilled, (state: any, action: any) => {
                state.photoListHome.data = action.payload;
                state.photoListHome.loading = false;
                state.photoListHome.error = '';
            })
            .addCase(getPhotosHome.rejected, (state: any, action: any) => {
                state.photoListHome.loading = false;
                state.photoListHome.error = action.error.message || '';
            })
            .addCase(getPhotosAlbum.pending, (state: any) => {
                state.photoListAlbum.loading = true;
                state.photoListAlbum.error = '';
            })
            .addCase(getPhotosAlbum.fulfilled, (state: any, action: any) => {
                state.photoListAlbum.data = action.payload;
                state.photoListAlbum.loading = false;
                state.photoListAlbum.error = '';
            })
            .addCase(getPhotosAlbum.rejected, (state: any, action: any) => {
                state.photoListAlbum.loading = false;
                state.photoListAlbum.error = action.error.message || '';
            })
            .addCase(getPhotosGallery.rejected, (state: any, action: any) => {
                state.photoListGallery.loading = false;
                state.photoListGallery.error = action.error.message || '';
            })
            .addCase(getPhotosGallery.pending, (state: any) => {
                state.photoListGallery.loading = true;
                state.photoListGallery.error = '';
            })
            .addCase(getPhotosGallery.fulfilled, (state: any, action: any) => {
                state.photoListGallery.data = action.payload;
                state.photoListGallery.loading = false;
                state.photoListGallery.error = '';
            })
            .addCase(getPhotosVideo.rejected, (state: any, action: any) => {
                state.photoListVideo.loading = false;
                state.photoListVideo.error = action.error.message || '';
            })
            .addCase(getPhotosVideo.pending, (state: any) => {
                state.photoListVideo.loading = true;
                state.photoListVideo.error = '';
            })
            .addCase(getPhotosVideo.fulfilled, (state: any, action: any) => {
                state.photoListVideo.data = action.payload;
                state.photoListVideo.loading = false;
                state.photoListVideo.error = '';
            })

            .addCase(getPhotosPagination.pending, (state: any) => {
                state.photoListPagination.loading = true;
                state.photoListPagination.error = '';
            })
            .addCase(getPhotosPagination.fulfilled, (state: any, action: any) => {
                state.photoListPagination.data = action.payload;
                state.photoListPagination.loading = false;
                state.photoListPagination.error = '';
            })
            .addCase(getPhotosPagination.rejected, (state: any, action: any) => {
                state.photoListPagination.loading = false;
                state.photoListPagination.error = action.error.message || '';
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
            })
           
           
            
            ;
    },
    // create photo
});

export const photoActions = photoSlice.actions;

export default photoSlice;
