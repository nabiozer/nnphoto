import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
        userLogin:
            typeof window !== 'undefined' && localStorage?.getItem('userInfo')
                ? JSON.parse(localStorage?.getItem('userInfo')!)
                : null,

        userDetails: {
            userDetail: {},
        },
        userUpdate: {
            userInfo: {},
        },
        userList: {
            users: [],
        },
        userDelete: {
            loading: false,
            error: null,
            status: 'idle',
        },
        userRegister: {
            userInfo: {},
        },
    },
    reducers: {
        userLogin(state, action: PayloadAction<User>) {
            state.userLogin = { ...action.payload };
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        userLogout(state) {
            state.userLogin.userInfo = null;
        },
        userListReset(state) {
            state.userList.users = [];
        },
        userRegister(state, action) {
            state.userRegister.userInfo = action.payload;
        },
    },
});

export const userActions = userSlice.actions;

export default userSlice;
