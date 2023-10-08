import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieService from "./movieService";

export const getMovies = createAsyncThunk(
  "movie/get-movies",
  async (thunkAPI) => {
    try {
      return await movieService.getAllMovies();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getMovie = createAsyncThunk(
  "movie/getamovie",
  async (id, thunkAPI) => {
    try {
      return await movieService.getAMovie(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  movies: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleMovie = action.payload;
      })
      .addCase(getMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default movieSlice.reducer;
