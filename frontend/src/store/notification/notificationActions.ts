
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

export const getNotificationsPagination = createAsyncThunk('data/getNotificationsPagination', async (params?:any) => {
    const response = await api.get(`/notifications${params ? '?' : ''}${params}`);
    return response.data;
});



export const createNotification = createAsyncThunk('data/createNotification', async (data?:any) => {
  const response = await api.post('/notifications',data);
  return response.data;
});

// Delete photo
export const deleteNotification = createAsyncThunk('data/deleteNotifications', async (id?:any) => {
  const response = await api.delete(`/notifications/${id}`);
  return response.data;
});


//Getphoto -> photo for admin

export const getNotificationById = createAsyncThunk('data/getNotificationById', async (id?:any) => {

  const response = await api.get(`/notifications/${id || ''}`);
  return response.data;

});

//update photo by admin

export const updateNotification = createAsyncThunk('data/updateNotification', async ({id,data}:any) => {
   
  const response = await api.put(`/notifications/${id}`,data);
  return response.data;
});

