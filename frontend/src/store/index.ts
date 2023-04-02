import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import photoSlice from './photo/photoSlice'
import userSlice from './user/userSlice'


const store = configureStore({
  reducer: {user:userSlice.reducer,photo:photoSlice.reducer},
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>

export default store;







