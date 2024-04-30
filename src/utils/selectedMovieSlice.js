import { createSlice } from "@reduxjs/toolkit";

const selectedMovieSlice = createSlice({
  name: "selected",
  initialState: {
    videoDetailsCache: {},
    videosCache: {},
    videoId: null,
    isShowDetail: false,
  },
  reducers: {
    addVideoDetailsCache: (state, action) => {
      state.videoDetailsCache = {
        ...state.videoDetailsCache,
        ...action.payload,
      };
    },
    addVideosCache: (state, action) => {
      state.videosCache = { ...state.videosCache, ...action.payload };
    },
    addVideoId: (state, action) => {
      state.videoId = action.payload;
    },
    openDetail: (state) => {
      state.isShowDetail = true;
    },
    closeDetail: (state) => {
      state.isShowDetail = false;
    },
  },
});

export default selectedMovieSlice.reducer;
export const {
  addVideoDetailsCache,
  addVideosCache,
  addVideoId,
  closeDetail,
  openDetail,
} = selectedMovieSlice.actions;
