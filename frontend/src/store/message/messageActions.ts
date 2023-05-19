
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

export const getMessagesPagination = createAsyncThunk('data/getMessagesPagination', async (params?:any) => {
    const response = await api.get(`/messages${params ? '?' : ''}${params}`);
    return response.data;
});



export const createMessage = createAsyncThunk('data/createMessage', async (data?:any) => {
  const response = await api.post('/messages',data);
  return response.data;
});

// Delete photo
export const deleteMessage = createAsyncThunk('data/deleteMessages', async (id?:any) => {
  const response = await api.delete(`/messages/${id}`);
  return response.data;
});


//Getphoto -> photo for admin

export const getMessageById = createAsyncThunk('data/getMessageById', async (id?:any) => {

  const response = await api.get(`/messages/${id || ''}`);
  return response.data;

});

//update photo by admin

export const updateMessage = createAsyncThunk('data/updateMessage', async ({id,data}:any) => {
   
  const response = await api.put(`/messages/${id}`,data);
  return response.data;
});

