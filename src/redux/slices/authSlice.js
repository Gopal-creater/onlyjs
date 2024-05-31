import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {
    loading: false,
    data: null,
    error: null,
  },
  profile: {
    loading: false,
    data: null,
    error: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.auth.loading = true;
    },
    setData: (state, action) => {
      state.auth.loading = false;
      state.auth.data = action.payload;
      state.profile.data = action.payload;
      state.auth.error = null;
    },
    setError: (state, action) => {
      state.auth.loading = false;
      state.auth.data = null;
      state.auth.error = action.payload;
    },
    setProfileLoading: (state) => {
      state.profile.loading = true;
    },
    setProfileData: (state, action) => {
      state.profile.loading = false;
      state.profile.data = action.payload;
      state.profile.error = null;
    },
    setProfileError: (state, action) => {
      state.profile.loading = false;
      state.profile.data = null;
      state.profile.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  setData,
  setError,
  setProfileLoading,
  setProfileData,
  setProfileError,
} = authSlice.actions;

export default authSlice.reducer;
