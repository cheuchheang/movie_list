import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "features/store";

interface MovieState {
  movies:any;
}

const initialState: MovieState = { movies:{} };

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }: PayloadAction<any>) => {
      state.movies = payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: RootState) => state.movies.movies;
export default movieSlice.reducer;
