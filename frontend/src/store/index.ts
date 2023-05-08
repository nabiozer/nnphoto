import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import photoSlice from './photo/photoSlice'
import userSlice from './user/userSlice'
import packageSlice from './package/packageSlice'
import expenseSlice from './expense/expenseSlice'


const store = configureStore({
  reducer: {user:userSlice.reducer,photo:photoSlice.reducer,package:packageSlice.reducer,expense:expenseSlice.reducer},
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>

export default store;







