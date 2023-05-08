
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

export const getExpensesPagination = createAsyncThunk('data/getExpensesPagination', async (params?:any) => {
    const response = await api.get(`/expenses${params ? '?' : ''}${params}`);
    return response.data;
});



export const createExpense = createAsyncThunk('data/createExpense', async (data?:any) => {
  const response = await api.post('/expenses',data);
  return response.data;
});

// Delete photo
export const deleteExpense = createAsyncThunk('data/deleteExpenses', async (id?:any) => {
  const response = await api.delete(`/expenses/${id}`);
  return response.data;
});


//Getphoto -> photo for admin

export const getExpenseById = createAsyncThunk('data/getExpenseById', async (id?:any) => {

  const response = await api.get(`/expenses/${id || ''}`);
  return response.data;

});

//update photo by admin

export const updateExpense = createAsyncThunk('data/updateExpense', async ({id,data}:any) => {
   
  const response = await api.put(`/expenses/${id}`,data);
  return response.data;
});

