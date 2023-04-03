import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { authUser, deleteUser, fetchUsers } from './userActions';

interface User {
    name: string;
    email: string;
    deliveryInfo: {
        adress: string;
        phoneNumber: string;
    };
    reservationInfo: {
        date: string;
        hour: string;
        place: string;
        packagePrice: string;
        packageDetails: string;
        advancePayment: number;
    };

    chosen: {
        album: {
            colorCode: string;
            albumName: string;
        };
        photosChosen: string[];
        poster: string;
        cover: string;
        coverText: string;
    };
    photos: string;
    video: string;

    albumDelivered: boolean;
    photoProcessed: boolean;
    isAdmin: boolean;
    album: string;
    isDone: boolean;
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userList: {
            data: null,
            loading: false,
            error: '',
        },
        userDelete: {
            data: null,
            loading: false,
            error: '',
        },
        userLogin:
        {
            data:typeof window !== 'undefined' && localStorage?.getItem('userInfo')
                ? JSON.parse(localStorage?.getItem('userInfo')!)
                : null,
                loading: false,
                error: '',
            },

        userDetails: {},
        userUpdate: {},
       
     
        userRegister: {},
    },
    reducers: {
        userLogin(state, action: PayloadAction<User>) {
            state.userLogin.data = { ...action.payload };
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        userLogout(state) {
            state.userLogin.data = null;
            localStorage.removeItem('userInfo');
        },
        userListReset(state) {
            state.userList.data = null;
            state.userList.loading = false;
            state.userList.error = '';
        },
        userList(state, action: any) {
            state.userList = action.payload;
        },
        userRegister(state, action: PayloadAction<User>) {
            state.userRegister = { ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.userList.loading = true;
                state.userList.error = '';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.userList.data = action.payload;
                state.userList.loading = false;
                state.userList.error = '';
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.userList.loading = false;
                state.userList.error = action.error.message || '';
            })
            .addCase(deleteUser.pending, (state) => {
                state.userDelete.loading = true;
                state.userDelete.error = '';
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.userDelete.data = action.payload;
                state.userDelete.loading = false;
                state.userDelete.error = '';
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.userDelete.loading = false;
                state.userDelete.error = action.error.message || '';
            })
            .addCase(authUser.pending, (state) => {
                state.userLogin.loading = true;
                state.userLogin.error = '';
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.userLogin.data = action.payload;
                state.userLogin.loading = false;
                state.userLogin.error = '';
                localStorage.setItem('userInfo', JSON.stringify(action.payload));

            })
            .addCase(authUser.rejected, (state, action) => {
                state.userLogin.loading = false;
                state.userLogin.error = action.error.message || '';
            })
            ;
    },
});

export const userActions = userSlice.actions;

export default userSlice;
