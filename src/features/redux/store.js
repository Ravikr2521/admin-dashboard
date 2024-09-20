import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../../features/counter/counterSlice'
import appReducer from '../slices/appslice'

export const store = configureStore({
  reducer:{
    counter :counterReducer,
    app : appReducer,

  }
})