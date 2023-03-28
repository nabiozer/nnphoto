import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userSlice from './userSlice'


const store = configureStore({
  reducer: {user:userSlice.reducer},
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>

export default store;







