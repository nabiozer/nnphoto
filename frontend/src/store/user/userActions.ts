import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import store from '../index';
import { userActions } from './userSlice';


const api = axios.create({
    baseURL: 'http://localhost:5000/api'
  });
  
  api.interceptors.request.use((config) => {
    const token  = store?.getState()?.user?.userLogin?.data?.token;;
   
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

//User Login
export const login = (dataLogin: any) => async (dispatch: any) => {
    try {
        dispatch(userActions.userLogin(dataLogin));
    } catch (error: any) {
        console.log(error.message);
    }
};

//User Logout
export const logout = () => (dispatch: any) => {
    dispatch(userActions.userLogout());
    dispatch(userActions.userListReset());
};

//User Register
export const register = (dataRegister: any) => async (dispatch: any) => {
    try {
        dispatch(userActions.userRegister(dataRegister));
    } catch (error) {
        console.log(error);
    }
};




//updateProfile
export const authUser = createAsyncThunk('data/authUser', async (data?:any) => {
    const response = await api.post('/users/login',data);
    return response.data;
});


export const registerUser = createAsyncThunk('data/registerUser', async (data?:any) => {
    const response = await api.post('/users',data);
    return response.data;
});

// Delete user
export const deleteUser = createAsyncThunk('data/deleteUser', async (id?:any) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
});



//GetUserById -> user profile for admin

export const getUserById = createAsyncThunk('data/getUserById', async (id?:any) => {

    const response = await api.get(`/users/${id}`);
    return response.data;

});

//updateUserById ->update for admin

export const updateUserByAdmin = createAsyncThunk('data/updateUserByAdmin', async (id?:any,data?:any) => {
   
    const response = await api.put(`/users/${id}`,data);
    return response.data;
});


//get user list

export const fetchUsers = createAsyncThunk('data/getUsers', async () => {
    const response = await api.get('users');
    return response.data;
});





//user
//GetUserProfile -> get profile for users
export const getProfile = createAsyncThunk('data/getProfile', async () => {

    const response = await api.get('/user/profile');
    return response.data;
});

//updateProfile
export const updateProfile = createAsyncThunk('data/updateProfile', async (id?:any,data?:any) => {
  
    const response = await api.put(`/users/${id}`,data);
    return response.data;
});






//UpdateUser By admin


//---------Admin