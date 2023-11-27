import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// The createAsyncThunk() accept 2 argument one is action name and other is async callback function responsible for performing the asynchronous logic, such as making an API call which accept 2 parameter first is payload and other is thunkAPI
const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async (payload, thunkAPI) => {
    try {
      console.log("THUNL FETCH POSTS", payload, thunkAPI);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      // If the asynchronous operation is successful, the function returns the data to be dispatched as the fulfilled action.
      return data;
    } catch (error) {
      // If there is an error, the function returns the error to be dispatched as the rejected action. You can use thunkAPI.rejectWithValue to provide a value that will be passed as the payload of the rejected action.
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "postList",

  initialState: {
    loading: false,
    posts: [],
    error: "",
  },

  extraReducers: (builder) => {
    // When we dispatch the fetchPosts action creator, it will dispatch three different actions , pending , fulfiled or rejected which we can handle in extra reducer to manage state transitions
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = "";
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.posts = [];
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
export { fetchPosts };

// The special think about createAsyncThunk() is it automatically dispatch lifecycle actions based on returned promises , so it will generate either pending , fulfiled or rejected action types which we can listen in extra reducer to manage state transition.
