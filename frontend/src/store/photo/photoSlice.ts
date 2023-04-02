import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
  name: "photo",
  initialState: {
    photoList: [],
    photoDetails: {
    },
  },
  reducers: {
    photoList(state, action) {
      state.photoList = {...action.payload}
    },
    photoDetails(state, action) {
      state.photoDetails ={...action.payload}
    },
    // create photo

  },
});

export const photoActions = photoSlice.actions;

export default photoSlice;
