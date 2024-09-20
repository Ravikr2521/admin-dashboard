import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../data/localstorage";

const initialState = {
  breadcrumbs: null,
  activeTab:0
};

const prevState = loadState();

const appSlice = createSlice({
  name: "app",
  initialState: { ...initialState, ...prevState?.app },
  reducers: {
    setBreadcrumbs: (state, action) => {
      state.breadcrumbs = action.payload;
    },
    setActiveTab:(state , action) =>{
        state.activeTab = action.payload
    }
    
  },

});

export const { setBreadcrumbs ,setActiveTab } = appSlice.actions;

export default appSlice.reducer;

export const selectBreadcrumbs = (state) => state.app.breadcrumbs;


