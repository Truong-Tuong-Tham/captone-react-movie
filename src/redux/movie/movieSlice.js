import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  infoDetailMovie: {},
  scheduleDetailMovie: [],
  infoStichketRoom: [],
  listChair: [],
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    getInfoDetail: (state, action) => {
      state.infoDetailMovie = action.payload;
    },
    getScheduleDetailMovie: (state, action) => {
      state.scheduleDetailMovie = action.payload;
    },
    getDataStichketRoom: (state, action) => {
      state.infoStichketRoom = action.payload;
    },
    getChairDangDat: (state, { payload }) => {
      console.log("payload", payload);

      let ChairDangDat = state.listChair;
      let index = ChairDangDat.findIndex(
        (item) => item.maGhe === payload.maGhe
      )

      if (index === -1) { 
        ChairDangDat.push(payload);
} else {
        ChairDangDat.splice(index, 1);}
      
      state.listChair = ChairDangDat;
    },
  },
});

export const {
  getInfoDetail,
  getScheduleDetailMovie,
  getDataStichketRoom,
  getChairDangDat,
} = movieSlice.actions;

export default movieSlice.reducer;
