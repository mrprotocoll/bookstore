import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const APIKEY = 'DZhozfmIef5jvfNuBg7r';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APIKEY}/books`;

export const getBooks = createAsyncThunk('book/getBooks', async (_, thunkAPI) => {
  try {
    return fetch(URL).then((res) => res.json());
  } catch (error) {
    return thunkAPI.rejectWithValue('Oops something went wrong');
  }
});
const initialState = {
  books: [],
  error: false,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(payload);
    },
    removeBook: (state, { payload }) => {
      state.books = state.books.filter((book) => book.item_id !== payload);
    },
  },
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      state.books = action.payload.item1;
      console.log(action);
    },
    [getBooks.rejected]: (state) => {
      state.error = true;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
