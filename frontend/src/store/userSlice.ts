import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface User {
    name: string;
    email: string;
    deliveryInfo: {
        adress: string;
        phoneNumber:string
    };
    reservationInfo: {
        date: string;
        hour: string;
        place: string;
        packagePrice: string;
        packageDetails: string;
        advancePayment: number
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

    albumDelivered:boolean;
    photoProcessed:boolean;
    isAdmin: boolean;
    album: string;
    isDone: boolean;
}


const userSlice = createSlice({
    name: 'user',
    initialState: {
        userLogin: {
            userInfo: typeof window !== 'undefined' && localStorage?.getItem("userInfo")
            ? JSON.parse(localStorage?.getItem("userInfo")!)
            : null,
            status: 'idle',
            error: null,
            loading:false,    
        },
        userDetails:{
            userDetail:{},
            status: 'idle',
            error: null,
            loading:false,  
        },
        userUpdate:{
            userInfo:{},
            loading: false,
            error: null,
            status:'idle',
          },
          userList:{
            users:[],
            loading:false,
            error:null,
            success:null
          },
        userDelete: {
            loading:false,
            error:null,
            status:'idle'
          },
          userUpdateByAdmin:{
            loading:false,
            status:'idle',
            error:null
      
          },
          userRegister:{
            userInfo:{},
            loading:false,
            status:'idle',
            error:null
          }
       
    },
    reducers: {
        userLogin(state, action:PayloadAction<User>) {
            state.userLogin.userInfo = action.payload;
          },
        userLogout(state) {
            state.userLogin.userInfo = null;
        },
        userListReset(state) {
            state.userList.users = []
          },
    },
});

export const userActions = userSlice.actions;

export default userSlice;

